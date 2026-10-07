"use client";

import { useRef, useState, type CSSProperties } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type Transition as MotionTransition,
} from "framer-motion";

interface Item {
  text?: string;
  image?: { src?: string; srcSet?: string; alt?: string };
  link?: string;
  id?: string;
}

export interface ItemsValue {
  itemCount?: number;
  [key: string]: unknown;
}

const MAX_ITEMS = 6;

interface FontValue {
  fontFamily?: string;
  fontSize?: number | string;
  letterSpacing?: number | string;
  lineHeight?: number | string;
  [key: string]: unknown;
}

export interface HoverImageRevealProps {
  items?: ItemsValue;
  font?: FontValue;
  textColor?: string;
  dimColor?: string;
  align?: "left" | "center" | "right";
  rowGap?: number;
  imageWidth?: number;
  imageHeight?: number;
  rounded?: number;
  offsetX?: number;
  offsetY?: number;
  followStrength?: number;
  transition?: MotionTransition;
  backgroundColor?: string;
  style?: CSSProperties;
  onItemClick?: (item: Item, index: number) => void;
}

const DEFAULT_ITEMS_DATA: { text: string; src: string }[] = [
  { text: "Item 1", src: "" },
];

const DEFAULT_ITEMS: ItemsValue = {
  itemCount: 1,
  item1: { text: "Item 1", image: { src: "" } },
};

const DEFAULT_FONT: FontValue = {
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: 48,
  lineHeight: "1.2em",
  letterSpacing: "-0.02em",
  textAlign: "left",
};

const DEFAULT_TRANSITION: MotionTransition = {
  type: "spring",
  stiffness: 400,
  damping: 40,
  mass: 1,
};

const alignToFlex: Record<string, CSSProperties["alignItems"]> = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};
const alignToText: Record<string, CSSProperties["textAlign"]> = {
  left: "left",
  center: "center",
  right: "right",
};

export default function HoverImageReveal({
  items = DEFAULT_ITEMS,
  font = DEFAULT_FONT,
  textColor = "#FFFFFF",
  dimColor = "#51565A",
  align = "center",
  rowGap = 30,
  imageWidth = 300,
  imageHeight = 400,
  rounded = 16,
  offsetX = 200,
  offsetY = 0,
  followStrength = 0,
  transition = DEFAULT_TRANSITION,
  backgroundColor = "transparent",
  style,
  onItemClick,
}: HoverImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number>(0);

  const rawX = useMotionValue((imageWidth || 300) / 2 + (offsetX || 0));
  const rawY = useMotionValue((imageHeight || 400) / 2 + (offsetY || 0));
  const stiffness = 60 + followStrength * 5;
  const springCfg = { stiffness, damping: 28, mass: 0.5 };
  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  const data = items || DEFAULT_ITEMS;
  const count = Math.max(
    1,
    Math.min(MAX_ITEMS, (data.itemCount as number) || 6)
  );
  const list: Item[] = [];
  for (let i = 1; i <= count; i++) {
    const it = data[`item${i}`] as Item | undefined;
    const fallback = DEFAULT_ITEMS_DATA[i - 1];
    list.push({
      text: it?.text ?? fallback?.text ?? `Item ${i}`,
      image: it?.image ?? (fallback ? { src: fallback.src } : undefined),
      link: it?.link,
      id: it?.id,
    });
  }
  const anyActive = true;

  const onMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left + offsetX);
    rawY.set(e.clientY - rect.top + offsetY);
  };

  return (
    <div
      ref={containerRef}
      onMouseLeave={() => setHovered(0)}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "400px",
        overflow: "hidden",
        backgroundColor,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: alignToFlex[align],
        gap: `${rowGap}px`,
        padding: "24px 0",
        boxSizing: "border-box",
        cursor: "default",
        ...(font as CSSProperties),
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: alignToFlex[align],
          gap: `${rowGap}px`,
          width: "50%",
        }}
      >
        {list.map((item, i) => {
          const isHovered = hovered === i;
          const color = anyActive ? (isHovered ? textColor : dimColor) : textColor;
          const copyStyle: CSSProperties = {
            display: "block",
            color,
            transition: "color 0.3s ease",
            whiteSpace: "pre-wrap",
            textAlign: alignToText[align],
            fontFamily: font.fontFamily,
          };
          const inner = (
            <motion.div
              style={{ position: "relative" }}
              animate={{ y: isHovered ? "-5%" : "0%" }}
              transition={transition}
            >
              <span style={copyStyle}>{item.text}</span>
            </motion.div>
          );
          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onClick={(e) => { 
                if (onItemClick) {
                  e.stopPropagation();
                  onItemClick(item, i);
                } else if (item.link) {
                  window.location.href = item.link; 
                }
              }}
              style={{
                cursor: "pointer",
                padding: "8px 0",
                borderBottom: i !== count - 1 ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
                width: "100%",
              }}
            >
              {inner}
            </div>
          );
        })}
      </div>

      <motion.div
        style={{
          position: "relative",
          width: imageWidth,
          height: imageHeight,
          borderRadius: rounded,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 10,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          flexShrink: 0,
          marginLeft: "auto",
        }}
        animate={{ opacity: anyActive ? 1 : 0, scale: anyActive ? 1 : 0.95 }}
        transition={transition}
      >
        {list.map((item, i) => {
          const src = item.image?.src;
          const yPos =
            hovered == null
              ? "100%"
              : i < hovered
                ? "-100%"
                : i > hovered
                  ? "100%"
                  : "0%";
          return (
            <motion.div
              key={i}
              initial={false}
              animate={{ y: yPos }}
              transition={transition}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              {src ? (
                <img
                  src={src}
                  alt={item.image?.alt || item.text || ""}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg,#333,#111)",
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
