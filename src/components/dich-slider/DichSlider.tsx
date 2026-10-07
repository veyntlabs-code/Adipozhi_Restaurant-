'use client';

import React, { useEffect, useRef } from 'react';
import './DichSlider.css';
import { initDichSlider } from './DichSliderScript';

export function DichSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cleanup = initDichSlider(containerRef.current);
    return cleanup;
  }, []);

  return (
    <div className="dich-wrapper" ref={containerRef}>
      <div className="page">
        <div className="topbar">
          <div className="lftrght">
            <span className="t-mask"><button type="button" id="nav-left" className="t-topbar-text nav-btn">PREV</button></span><br />
            <span className="topbar-gap"></span>
            <span className="t-mask"><button type="button" id="nav-right" className="t-topbar-text nav-btn">NEXT</button></span>
          </div>

          <div className="topbar-title t-mask">
            <span className="t-topbar-text">ADIPOZHI MENU</span>
          </div>

          <div className="topbar-nums t-mask">
            <div className="t-topbar-text">©-”26<br />
              <button type="button" className="nav-num-wrapper nav-btn" data-idx="0" aria-label="Composition 01">
                <div className="nav-num original">01</div>
                <div className="nav-num duplicate">01</div>
              </button>
              <button type="button" className="nav-num-wrapper nav-btn" data-idx="1" aria-label="Composition 02">
                <div className="nav-num original">02</div>
                <div className="nav-num duplicate">02</div>
              </button>
              <button type="button" className="nav-num-wrapper nav-btn" data-idx="2" aria-label="Composition 03">
                <div className="nav-num original">03</div>
                <div className="nav-num duplicate">03</div>
              </button>
              <button type="button" className="nav-num-wrapper nav-btn" data-idx="3" aria-label="Composition 04">
                <div className="nav-num original">04</div>
                <div className="nav-num duplicate">04</div>
              </button>
              <button type="button" className="nav-num-wrapper nav-btn" data-idx="4" aria-label="Composition 05">
                <div className="nav-num original">05</div>
                <div className="nav-num duplicate">05</div>
              </button>
              <span className="topbar-tail"></span>
            </div>
          </div>
        </div>

        <div className="canvas" id="canvas">
          <div className="text-wrapper text-wrapper--main">
            <div className="top-row">
              <div className="visibility is--1"><div className="t-mask"><div className="t-text">Tasty</div></div></div>
              <div className="visibility is--2 is--4"><div className="t-mask"><div className="t-text">Biryani</div></div></div>
              <div className="visibility is--1 svg-slot" data-arrows style={{ justifySelf: 'end' }}></div>
              <div className="visibility is--2 svg-slot" data-arrows style={{ marginLeft: '24.5vw' }}></div>
              <div className="visibility is--2 is--4" style={{ justifySelf: 'end' }}><div className="t-mask"><div className="t-text">Tasty</div></div></div>
              <div className="visibility is--5" style={{ justifySelf: 'end' }}><div className="t-mask"><div className="t-text">Adipozhi</div></div></div>
            </div>

            <div className="middle-row">
              <div className="visibility is--1"><div className="t-mask"><div className="t-text">Biryani</div></div></div>
              <div className="visibility is--1" style={{ justifySelf: 'end' }}><div className="t-mask"><div className="t-text"><span className="idx-mask"><span className="index">1</span></span>—5</div></div></div>
              <div className="visibility is--2" style={{ justifySelf: 'end', textAlign: 'end', marginTop: '-4.3vw' }}><div className="t-mask"><div className="t-text">From our famous slow-cooked<br />Dum Biryanis and Madurai-style<br />Bun Parottas to charcoal-smoked.</div></div></div>
              <div className="visibility is--4" style={{ marginTop: '-4.8vw' }}><div className="t-mask"><div className="t-text">Explore 21 categories crafted<br />with fresh local ingredients<br />and authentic spices.</div></div></div>
              <div className="visibility is--4 svg-slot" data-arrows style={{ marginTop: '-3vw', justifySelf: 'end' }}></div>
              <div className="visibility is--5" style={{ justifySelf: 'end', marginTop: '-0.7vw' }}><div className="t-mask"><div className="t-text">Tasty</div></div></div>
              <div className="visibility is--5" style={{ position: 'absolute', top: '3vw', right: 0, justifySelf: 'end', textAlign: 'end' }}><div className="t-mask"><div className="t-text">From our famous slow-cooked<br />Dum Biryanis and Madurai-style<br />Bun Parottas to charcoal-smoked.</div></div></div>
            </div>

            <div className="bottom-row">
              <div className="visibility is--1"><div className="t-mask"><div className="t-text">ADIPOZHI FAMILY RESTAURANT · 21 MENU CATEGORIES<br />Explore our wide range of authentic<br />South Indian and Arabian dishes.</div></div></div>
              <div className="visibility is--1" style={{ justifySelf: 'end' }}><div className="t-mask"><div className="t-text">EST. 2026</div></div></div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div>MENU<br /><span className="footer-gap"></span>VOL.01</div>
        </div>
      </div>
    </div>
  );
}
