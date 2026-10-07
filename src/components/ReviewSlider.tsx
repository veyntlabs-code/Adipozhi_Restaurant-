"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import type { CSSProperties } from "react"

export interface ReviewSliderProps {
    items: React.ReactNode[]

    slideWidth?: number
    slideHeight?: number | string

    spacing?: number
    direction?: "right" | "left"

    smoothness?: number

    radius?: number
    dim?: number
    background?: string

    sensitivity?: number
    loop?: boolean
    autoPlaySpeed?: number
    pauseOnHover?: boolean
    style?: CSSProperties
}

const PLACEHOLDER_COUNT = 8
const MAX_SCALE = 1.15
const MIN_SCALE = 0.85

function wrap(value: number, span: number): number {
    return ((value % span) + span) % span
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, value))
}

interface Frame {
    count: number
    step: number
    slideWidth: number
    width: number
    ease: number
    maxScale: number
    minScale: number
    dim: number
    loop: boolean
    flip: boolean
}

export default function ReviewSlider({
    items = [],
    slideWidth = 350,
    slideHeight = 'auto',
    spacing = 2,
    direction = "right",
    smoothness = 10,
    radius = 24,
    dim = 2,
    background = "transparent",
    sensitivity = 5,
    loop = true,
    autoPlaySpeed = 1,
    pauseOnHover = true,
    style,
}: ReviewSliderProps) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const nodes = useRef<(HTMLDivElement | null)[]>([])
    const target = useRef(0)
    const current = useRef(0)
    const isInteracting = useRef(false)
    const isHovering = useRef(false)
    const [width, setWidth] = useState(0)

    const source = useMemo(() => {
        return items.length ? items : []
    }, [items])

    const step = slideWidth + clamp(spacing, 0, 10) * 20
    const ease = 0.15 - (clamp(smoothness, 0, 10) / 10) * 0.13
    const dimAmount = (clamp(dim, 0, 10) / 10) * 0.85
    const wheelMultiplier = 0.4 + (clamp(sensitivity, 0, 10) / 10) * 1.2
    const dragMultiplier = 0.6 + (clamp(sensitivity, 0, 10) / 10) * 1.8

    const flip = direction === "left"

    const repeats = useMemo(() => {
        if (!loop || width <= 0 || step <= 0 || source.length === 0) return 1
        return Math.max(1, Math.ceil((width + step * 2) / (source.length * step)))
    }, [loop, width, step, source.length])

    const slides = useMemo(() => {
        const out: React.ReactNode[] = []
        if (source.length === 0) return out
        for (let r = 0; r < repeats; r += 1) out.push(...source)
        return out
    }, [source, repeats])

    const frame = useRef<Frame>({
        count: 0,
        step: 0,
        slideWidth: 0,
        width: 0,
        ease: 0.075,
        maxScale: MAX_SCALE,
        minScale: MIN_SCALE,
        dim: 0,
        loop: true,
        flip: false,
    })
    frame.current = {
        count: slides.length,
        step,
        slideWidth,
        width,
        ease,
        maxScale: MAX_SCALE,
        minScale: MIN_SCALE,
        dim: dimAmount,
        loop,
        flip,
    }

    const input = useRef({ wheelMultiplier, dragMultiplier, flip })
    input.current = { wheelMultiplier, dragMultiplier, flip }

    useEffect(() => {
        const node = containerRef.current
        if (!node) return
        const observer = new ResizeObserver((entries) => {
            setWidth(entries[0].contentRect.width)
        })
        observer.observe(node)
        setWidth(node.getBoundingClientRect().width)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        nodes.current.length = slides.length
    }, [slides.length])

    useEffect(() => {
        let raf = 0
        let last = 0

        const tick = (now: number) => {
            raf = requestAnimationFrame(tick)
            const c = frame.current
            const delta = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60
            last = now
            if (!c.count || c.step <= 0 || c.width <= 0) return

            const span = c.count * c.step

            if (c.loop) {
                if (current.current > span || current.current < -span) {
                    const shift = Math.trunc(current.current / span) * span
                    current.current -= shift
                    target.current -= shift
                }
            } else {
                target.current = clamp(target.current, 0, (c.count - 1) * c.step)
            }

            if (autoPlaySpeed > 0 && !isInteracting.current && (!pauseOnHover || !isHovering.current)) {
                target.current += autoPlaySpeed * (c.flip ? -1 : 1) * (delta * 60);
            }

            const k = 1 - Math.pow(1 - c.ease, delta * 60)
            current.current += (target.current - current.current) * k

            const pad = (c.width - c.slideWidth) / 2
            const half = c.width / 2

            for (let i = 0; i < c.count; i += 1) {
                const node = nodes.current[i]
                if (!node) continue

                const raw = i * c.step - current.current + pad

                const x = c.loop ? wrap(raw + c.step, span) - c.step : raw

                const distance = x + c.slideWidth / 2 - half
                let scale: number
                let push: number
                if (distance > 0) {
                    scale = Math.min(c.maxScale, 1 + distance / c.width)
                    push = (scale - 1) * c.slideWidth * 0.75
                } else {
                    scale = Math.max(c.minScale, 1 + distance / c.width)
                    push = 0
                }

                const left = c.flip ? c.width - c.slideWidth - (x + push) : x + push
                node.style.transform = `translate3d(${left}px, -50%, 0) scale(${scale})`

                if (c.dim > 0 && scale < 1) {
                    const t = (1 - scale) / Math.max(0.001, 1 - c.minScale)
                    node.style.filter = `brightness(${1 - t * c.dim})`
                } else {
                    node.style.filter = "none"
                }
                
                // Adjust z-index based on scale (closest is on top)
                node.style.zIndex = Math.round(scale * 100).toString()
            }
        }

        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [])

    useEffect(() => {
        const node = containerRef.current
        if (!node) return
        const onWheel = (event: WheelEvent) => {
            event.preventDefault()
            const dominant =
                Math.abs(event.deltaX) > Math.abs(event.deltaY)
                    ? event.deltaX
                    : event.deltaY
            target.current += dominant * input.current.wheelMultiplier
        }
        node.addEventListener("wheel", onWheel, { passive: false })
        return () => node.removeEventListener("wheel", onWheel)
    }, [])

    useEffect(() => {
        const node = containerRef.current
        if (!node) return
        let pointer: number | null = null
        let lastX = 0

        const onDown = (event: PointerEvent) => {
            if (pointer !== null) return
            pointer = event.pointerId
            lastX = event.clientX
            isInteracting.current = true
            node.setPointerCapture(event.pointerId)
        }
        const onMove = (event: PointerEvent) => {
            if (pointer !== event.pointerId) return
            const dx = event.clientX - lastX
            lastX = event.clientX
            target.current += (input.current.flip ? dx : -dx) * input.current.dragMultiplier
        }
        const onUp = (event: PointerEvent) => {
            if (pointer !== event.pointerId) return
            pointer = null
            isInteracting.current = false
            if (node.hasPointerCapture(event.pointerId))
                node.releasePointerCapture(event.pointerId)
        }
        const onMouseEnter = () => { isHovering.current = true }
        const onMouseLeave = () => { isHovering.current = false }

        node.addEventListener("pointerdown", onDown)
        node.addEventListener("pointermove", onMove)
        node.addEventListener("pointerup", onUp)
        node.addEventListener("pointercancel", onUp)
        node.addEventListener("mouseenter", onMouseEnter)
        node.addEventListener("mouseleave", onMouseLeave)
        return () => {
            node.removeEventListener("pointerdown", onDown)
            node.removeEventListener("pointermove", onMove)
            node.removeEventListener("pointerup", onUp)
            node.removeEventListener("pointercancel", onUp)
            node.removeEventListener("mouseenter", onMouseEnter)
            node.removeEventListener("mouseleave", onMouseLeave)
        }
    }, [])

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                background,
                cursor: "grab",
                touchAction: "pan-y",
                opacity: width > 0 ? 1 : 0,
                transition: "opacity 0.35s ease",
                ...style,
            }}
        >
            {slides.map((slide, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        nodes.current[i] = el
                    }}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        width: slideWidth,
                        height: slideHeight,
                        borderRadius: radius,
                        willChange: "transform, filter",
                        transform: "translate3d(0, -50%, 0)",
                        pointerEvents: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    {slide}
                </div>
            ))}
        </div>
    )
}
