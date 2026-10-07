// @ts-nocheck
export function initDichSlider(container: HTMLElement) {
  // Use the container instead of document where possible to scope it.
  const CFG = {
    time: {
      morph: 1300, mask: 1200, card: 1500, capSwap: 700, capFade: 350, capClean: 1500,
      scrollLead: 1300, largeEntry: 150, beast: 700, animWatch: 2800, capEnter: 400,
      capNudge: 50, capSwapAt: 0.7, resizeSettle: 80, textGuard: 1500, introFallback: 2000,
    },
    stagger: { col: 0.02, swapCol: 0.02, swap: 0.03, swapMax: 0.20, card: 0.10, cardMax: 0.35, cover: 0.06, coverMax: 0.45, line: 60, capLine: 45 },
    lock: { min: 700, tail: 60 },
    grid: { gap: 1.3, capAllow: 4, ratioW: 2.35, ratioH: 3, exitPad: 120 },
    scroll: { friction: 0.9, wheel: 0.1, touch: 0.8, minVel: 0.3, smooth: 0.15, bow: 10, bowMax: 120, stretch: 0.0005, handoff: 350, overlap: 150, revealNew: true, newCardMs: 600 },
    cover: { step: 50, gestureGap: 150, stack: 2, cycle: 5 },
    parallax: { enter: 1.15, amount: 0.04, follow: 0.03, ease: 0.05, eps: 0.05, falloff: 0.6, floor: 0.2 },
    shader: { key: 'b', dprCap: 2, samples: 20, hoverRadius: 605, centerFade: 200, pullStrength: 0.2, pullInvert: false, threadScale: 10.0, warpAmount: 0.9, iridescent: 0.1, opacity: 1.3, lumaMin: 0.45, lumaMax: 0.55, dither: 1.0, followLag: 0.0, fadeLag: 1.50 },
    mask: { hidden: 'inset(0 0 100% 0)', shown: 'inset(0 0 0 0)' },
  };

  const GAP_VW = CFG.grid.gap;
  const EXIT_PAD = CFG.grid.exitPad;
  const CAP_ALLOW_VW = CFG.grid.capAllow;
  const SMALL_RATIO_W = CFG.grid.ratioW;
  const SMALL_RATIO_H = CFG.grid.ratioH;
  const FALLBACK_RATIO = SMALL_RATIO_W / SMALL_RATIO_H;

  const DUR_MS = CFG.time.morph;
  const MASK_MS = CFG.time.mask;
  const SC_CARD_MS = CFG.time.card;
  const CAP_SWAP_MS = CFG.time.capSwap;
  const COVER_CAP_MS = CFG.time.capSwap;
  const CAP_FADE_MS = CFG.time.capFade;
  const CAP_CLEAN_MS = CFG.time.capClean;
  const SCROLL_EXIT_LEAD_MS = CFG.time.scrollLead;
  const LARGE_ENTRY_DELAY_MS = CFG.time.largeEntry;
  const ANIM_WATCH_MS = CFG.time.animWatch;

  const COL_STAGGER_S = CFG.stagger.col;
  const SWAP_COL_STAGGER_S = CFG.stagger.swapCol;
  const SWAP_STAGGER_S = CFG.stagger.swap;
  const SWAP_STAGGER_MAX = CFG.stagger.swapMax;
  const SC_STAGGER_S = CFG.stagger.card;
  const SC_STAGGER_CAP = CFG.stagger.cardMax;
  const LINE_STAGGER_MS = CFG.stagger.line;
  const CAP_LINE_STAGGER_MS = CFG.stagger.capLine;
  const CAP_SLACK_MS = CAP_LINE_STAGGER_MS * 2 + 40;

  const MASK_HIDDEN = CFG.mask.hidden;
  const MASK_SHOWN = CFG.mask.shown;
  const INTRO_LOCK_MS = MASK_MS + SWAP_STAGGER_MAX * 1000 + 100;

  const MASK_LOCK_MS = MASK_MS + SWAP_STAGGER_MAX * 1000 + CFG.lock.tail;

  const SCROLL_FRICTION = CFG.scroll.friction;

  const COVER_STEP_PX = CFG.cover.step;
  const COVER_STAGGER_S = CFG.stagger.cover;
  const COVER_STAGGER_CAP = CFG.stagger.coverMax;
  const COVER_MAX = CFG.cover.stack;
  const COVER_GESTURE_GAP = CFG.cover.gestureGap;
  const COVER_CYCLE = CFG.cover.cycle;

  const ENTER_SCALE = `scale(${CFG.parallax.enter})`;
  const REST_SCALE = 'scale(var(--parallax-scale))';

  const scStag = (idx: number) => Math.min(idx * SC_STAGGER_S, SC_STAGGER_CAP);
  const sStag = (n: number) => Math.min(n * SWAP_STAGGER_S, SWAP_STAGGER_MAX);

  function getVwPx() { return window.innerWidth / 100 }
  function getVhPx() { return window.innerHeight / 100 }
  let VW_PX = getVwPx();
  let VH_PX = getVhPx();
  const vw = (x: number) => Math.round(x * VW_PX);

  const ADIPOZHI_DISHES = [
    { client: 'Dum Biryani & Family Buckets', type: 'Bestseller', bg: 'url(/images/food/food11.jpg)' },
    { client: 'Pepper Grill & Arabian BBQ', type: 'Charcoal Smoked', bg: 'url(/images/food/food10.jpg)' },
    { client: 'Bun Parotta & Spicy Kothu', type: 'Madurai Style', bg: 'url(/images/food/food17.jpg)' },
    { client: 'Chettinadu Masalas & Kari Dosa', type: 'House Special', bg: 'url(/images/food/food12.jpg)' },
  ];

  const ITEMS: any[] = [];
  const IDS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K'];
  for (let i = 0; i < 10; i++) {
    const dish = ADIPOZHI_DISHES[i % 4];
    ITEMS.push({ id: IDS[i], client: dish.client, type: dish.type, bg: dish.bg });
  }

  const S2 = ADIPOZHI_DISHES[1].bg;

  const ITEMS_BY_ID: Record<string, any> = {};
  for (const it of ITEMS) ITEMS_BY_ID[it.id] = it;

  const CREDIT = { l: 'Adipozhi Family Restaurant<br>Explore the menu', r: '21 Categories' };
  const META = { l: 'category:<br>tag:', r: 'bestseller<br>authentic' };

  const CAPS: Record<string, any> = {};
  for (const id of IDS) {
    CAPS[id] = { large: CREDIT, scroll: META, wide: CREDIT };
  }

  const CAP_CHAIN: Record<string, string[]> = {
    small:  ['small'],
    large:  ['large', 'small'],
    wide:   ['wide', 'large', 'small'],
    scroll: ['scroll'],
  };

  const BASE_LAYOUTS: Record<string, any> = {
    '1': {
      large: 'A', caps: false, bg: 'center', ratioImgH: 10.5, cols: [
        { w: 30, items: [{ id: 'A', y: 'fullTall', size: 'cover', pos: 'center' }] },
        { w: 'eq', items: [] },
        { w: 'ratio', items: [{ id: 'B', y: 'top' }, { id: 'F', y: 'bottom' }] },
        { w: 'ratio', items: [{ id: 'C', y: 'top' }, { id: 'G', y: 'bottom' }] },
        { w: 'ratio', items: [{ id: 'D', y: 'top' }, { id: 'H', y: 'bottom' }] },
        { w: 'ratio', items: [{ id: 'E', y: 'top' }, { id: 'I', y: 'bottom' }] },
        { w: 'eq', items: [] },
      ],
    },
    '2': {
      large: 'A', caps: false, bg: 'center', fitStack: true, cols: [
        { w: 30, items: [{ id: 'A', y: 'full', size: 'cover', pos: 'center' }] },
        { w: 23.3, items: [] },
        { w: 15, items: [{ id: 'D', y: 'bStackTop' }, { id: 'H', y: 'bStackBottom' }] },
        { w: 15, items: [{ id: 'E', y: 'bStackTop' }, { id: 'I', y: 'bStackBottom' }] },
      ],
    },
    '3': {
      large: 'H', caps: false, bg: 'center', fitStack: true, scroll: true, scrollCols: [2, 3], cols: [
        { w: 30, items: [{ id: 'H', y: 'full', imgH: 'fill', cap: 'bottom', size: 'cover', pos: 'center' }] },
        { w: 14.6, items: [] },
        { w: 14.6, items: [] },
        { w: 15, items: [] },
        { w: 'auto', items: [] },
      ],
    },
    '4': {
      large: 'F', caps: false, bg: 'center', capVariant: 'wide', cols: [
        { w: 30, items: [{ id: 'F', y: 'full', imgH: { pct: 100 }, cap: 'bottom', size: 'cover', pos: 'center' }] },
        { w: 33.3, items: [{ id: 'H', y: 'baseTop', imgH: { pct: 80 }, cap: 'below', size: 'cover', pos: 'center' }] },
        { w: 'auto', items: [{ id: 'E', y: 'baseTop', imgH: { pct: 60 }, cap: 'below', size: 'cover', pos: 'center' }] },
      ],
    },
    '5': {
      large: 'K', caps: false, bg: 'center', scroll: true, scrollCols: [2], scrollGap: true, scrollNoCaps: true, cols: [
        { w: 30, items: [{ id: 'K', y: 'full', cap: 'bottom', size: 'cover', pos: 'center' }] },
        { w: 14.6, items: [] },
        { w: 15, items: [] },
        { w: 'auto', items: [] },
      ],
    },
  };

  function mirrorOf(L: any) {
    const n = L.cols.length;
    const out = { ...L, cols: [...L.cols].reverse() };
    if (L.scrollCols) out.scrollCols = L.scrollCols.map((i: number) => n - 1 - i).reverse();
    return out;
  }

  const LAYOUTS: Record<string, any> = {};
  for (const [id, L] of Object.entries(BASE_LAYOUTS)) {
    LAYOUTS[id] = L;
    LAYOUTS[id + 'm'] = mirrorOf(L);
  }

  const withMirrors = (ids: string[]) => ids.flatMap(i => [i, i + 'm']);
  const HERO_LAYOUTS = withMirrors(['2']);
  const COVER_LAYOUTS = withMirrors(['1', '2', '4']);
  const NO_TEXT_LAYOUTS = new Set(withMirrors(['3']));
  const PAIRS = Object.keys(BASE_LAYOUTS).map(id => ({ main: id, mirror: id + 'm' }));

  const topbarEl = container.querySelector('.topbar') as HTMLElement;
  const titleEl  = container.querySelector('.topbar-title') as HTMLElement;
  const canvas = container.querySelector('#canvas') as HTMLElement;

  if (!topbarEl || !titleEl || !canvas) return () => {};

  function alignTitle(n: string, animate: boolean) {
    const mirrored = String(n).endsWith('m');
    if (mirrored) return; 
    const L = LAYOUTS[n];
    if (!L) return;
    const r = computeRects(n)[L.large];
    if (!r) return;
    const barLeft = topbarEl.getBoundingClientRect().left;
    const canvasLeft = canvas.getBoundingClientRect().left;
    const edgeX = canvasLeft + r.left + r.width;
    const x = edgeX - barLeft - titleEl.offsetWidth;
    if (!animate) titleEl.style.transition = 'none';
    titleEl.style.setProperty('--title-x', Math.round(x) + 'px');
    if (!animate) { titleEl.getBoundingClientRect(); titleEl.style.transition = ''; }
  }

  function capVariant(n: string, isLarge: boolean) {
    return LAYOUTS[n].capVariant || (isLarge ? 'large' : 'small');
  }

  function capData(id: string, variant: string) {
    const src = CAPS[id] || {};
    for (const key of (CAP_CHAIN[variant] || ['small'])) {
      if (src[key]) return src[key];
    }
    const it = ITEMS_BY_ID[id];
    if (variant === 'scroll') {
      return { l: 'category:<br>tag:', r: it ? (it.client + '<br>' + it.type).toLowerCase() : '' };
    }
    return { l: 'CATEGORY:<br>TAG:', r: it ? (it.client + '<br>' + it.type) : '' };
  }

  function capColHTML(html: string, extraCls?: string) {
    const lines = String(html == null ? '' : html).split(/<br\s*\/?>/i);
    return `<span class="t-col${extraCls ? ' ' + extraCls : ''}">`
      + lines.map(l => `<span class="t-mask"><span class="t-text">${l}</span></span>`).join('')
      + `</span>`;
  }

  function capHTML(d: any) {
    return capColHTML(d.l) + capColHTML(d.r, 'r');
  }

  function applyCapText(el: any, variant: string) {
    const srcId = el._capSrcId || el.dataset.id;
    const key = variant + '|' + srcId;
    if (el._capKey === key) return false;
    el._capKey = key;
    el._capVariant = variant;
    el.querySelector('.cap').innerHTML = capHTML(capData(srcId, variant));
    return true;
  }

  function setCapDelay(cap: HTMLElement | null, baseSec: number | string, dirUp = false) {
    if (!cap) return;
    const base = parseFloat(baseSec as string) || 0;
    cap.querySelectorAll('.t-col').forEach(col => {
      const lines = col.querySelectorAll('.t-text') as NodeListOf<HTMLElement>;
      lines.forEach((t, i) => {
        const k = dirUp ? (lines.length - 1 - i) : i;
        t.style.animationDelay = (base + k * CAP_LINE_STAGGER_MS / 1000) + 's';
      });
    });
  }

  function capShow(cap: any, { delay = 0, dur, dirUp = false }: any = {}) {
    if (!cap || cap.classList.contains('show')) return;
    cap.classList.toggle('cover-swap', dur === CAP_SWAP_MS);
    cap.classList.toggle('dir-up', dirUp);
    setCapDelay(cap, delay, dirUp);
    cap.classList.remove('hide');
    cap.classList.add('show');
  }

  function capHide(cap: any, { delay = 0, dur, dirUp = false }: any = {}) {
    if (!cap || !cap.classList.contains('show')) return;
    cap.classList.toggle('cover-swap', dur === CAP_SWAP_MS);
    cap.classList.toggle('dir-up', dirUp);
    setCapDelay(cap, delay, dirUp);
    cap.classList.remove('show');
    cap.classList.add('hide');
  }

  function capReset(cap: any) {
    if (!cap) return;
    cap.classList.remove('show', 'hide', 'cover-swap', 'dir-up');
    setCapDelay(cap, 0, false);
  }

  const els: Record<string, HTMLElement> = {};
  let current: string | number = 1;

  const ARROW_PREV = '<svg width="15" height="11" viewBox="0 0 15 11" fill="none"><path d="M7.97424 11L4.16276 6.55357H15V4.44643H4.16276L7.97424 0H4.81265L0 5.5L4.81265 11H7.97424Z" fill="currentColor"/></svg>';
  const ARROW_NEXT = '<svg width="15" height="11" viewBox="0 0 15 11" fill="none"><path d="M7.02576 11L10.8372 6.55357H0V4.44643H10.8372L7.02576 0H10.1874L15 5.5L10.1874 11H7.02576Z" fill="currentColor"/></svg>';

  const ARROWS_HTML = `<div class="svg-arrows">
    <button type="button" class="svg-arrow-wrapper nav-btn is--prev" aria-label="Previous image">
      <span class="svg-arrow original">${ARROW_PREV}</span>
      <span class="svg-arrow duplicate">${ARROW_PREV}</span>
    </button>
    <button type="button" class="svg-arrow-wrapper nav-btn is--next" aria-label="Next image">
      <span class="svg-arrow original">${ARROW_NEXT}</span>
      <span class="svg-arrow duplicate">${ARROW_NEXT}</span>
    </button>
  </div>`;

  function makeTpl(html: string) {
    const t = document.createElement('template');
    t.innerHTML = html;
    return t;
  }

  const arrowsTpl = makeTpl(ARROWS_HTML);

  function fillArrows() {
    container.querySelectorAll('.text-wrapper--main [data-arrows]').forEach(slot => {
      const mask = document.createElement('div');
      mask.className = 't-mask';
      const text = document.createElement('div');
      text.className = 't-text';
      text.appendChild(arrowsTpl.content.cloneNode(true));
      mask.appendChild(text);
      slot.appendChild(mask);
    });
  }

  function buildMirror() {
    const main = container.querySelector('.text-wrapper--main');
    if (!main) return;
    const mirror = main.cloneNode(true) as HTMLElement;
    mirror.classList.remove('text-wrapper--main');
    mirror.classList.add('text-wrapper--mirror');

    mirror.querySelectorAll('.visibility').forEach(el => {
      for (const cls of Array.from(el.classList)) {
        if (/^is--\d+$/.test(cls)) {
          el.classList.remove(cls);
          el.classList.add(cls + 'm');
        }
      }

      const s = (el as HTMLElement).style;
      s.justifySelf = s.justifySelf === 'end' ? 'start' : 'end';
      s.textAlign = s.justifySelf === 'end' ? 'right' : '';

      const ml = s.marginLeft, mr = s.marginRight;
      s.marginLeft = mr || '';
      s.marginRight = ml || '';

      const l = s.left, r = s.right;
      s.left = r || '';
      s.right = l || '';
    });

    main.after(mirror);
  }

  function initTextSplitting() {
    container.querySelectorAll('.text-wrapper .visibility').forEach(el => {
      const originalMask = el.querySelector('.t-mask');
      const originalText = el.querySelector('.t-text');
      if (!originalMask || !originalText) return;

      const html = originalText.innerHTML;
      if (!/<br\s*\/?>/i.test(html)) return;

      const lines = html.split(/<br\s*\/?>/i);
      const frag = document.createDocumentFragment();

      lines.forEach((lineHtml, i) => {
        const mask = document.createElement('div');
        mask.className = 't-mask';
        const text = document.createElement('div');
        text.className = 't-text';
        text.innerHTML = lineHtml;
        mask.appendChild(text);
        frag.appendChild(mask);
        if (i < lines.length - 1) frag.appendChild(document.createElement('br'));
      });

      originalMask.replaceWith(frag);
    });
  }

  fillArrows();
  buildMirror();
  initTextSplitting();

  for (const it of ITEMS) {
    const el = document.createElement('div') as any;
    el.className = 'item';
    el.dataset.id = it.id;
    el._capSrcId = it.id;
    el._capRectVariant = 'small';
    el._capKey = 'small|' + it.id;

    el.innerHTML = `<div class="img"><div class="p-wrap"><div class="img-inner" style="background-image:${it.bg}"></div></div></div>`;
    el.insertAdjacentHTML('beforeend', `<div class="cap">${capHTML(capData(it.id, 'small'))}</div>`);

    canvas.appendChild(el);
    els[it.id] = el;
  }

  const hero = document.createElement('div');
  hero.className = 'hero2';
  hero.innerHTML = `<div class="img"><div class="p-wrap"><div class="img-inner" style="background-image:${S2}; background-size: 68vw; background-position: 80% 57%"></div></div></div>`;
  canvas.appendChild(hero);

  let scrollY = 0;
  let scrollRAF: any = null;
  let scrollActive = false;
  let currentVelocity = 0;
  let smoothVelocity = 0;

  const scrollCols: any[] = [];
  for (let k = 0; k < 2; k++) {
    const c = document.createElement('div');
    c.className = 'scroll-col';
    canvas.appendChild(c);
    scrollCols.push({ el: c, cards: new Map(), colIndex: null, x: 0, w: 0, cardH: 0, period: 0, offset: 0, fieldH: 0, step: 2, base: 0, noCaps: false });
  }

  function isScrollLayout(x: string | number) { return !!(LAYOUTS[x] && LAYOUTS[x].scroll) }

  function scrollItemObj(sc: any, i: number) {
    const n = ITEMS.length;
    const step = (sc && sc.step != null) ? sc.step : 2;
    const base = (sc && sc.base != null) ? sc.base : 0;
    const idx = (((i * step + base) % n) + n) % n;
    return ITEMS[idx];
  }

  function layoutColMetrics(n: string) {
    const L = LAYOUTS[n];
    const CW = canvas.clientWidth;
    const H = canvas.clientHeight;
    const g = vw(GAP_VW);
    const imgHpx = L.ratioImgH ? vw(L.ratioImgH) : 0;

    const colWpx: any[] = new Array(L.cols.length);
    const ratioColW = Math.round(imgHpx * FALLBACK_RATIO);
    let usedFixed = 0, flexCount = 0;
    L.cols.forEach((c: any, i: number) => {
      if (c.w === 'auto' || c.w === 'eq') { flexCount++; colWpx[i] = null; }
      else if (c.w === 'ratio') { colWpx[i] = ratioColW; usedFixed += ratioColW; }
      else { const w = vw(c.w); colWpx[i] = w; usedFixed += w; }
    });
    const leftover = Math.max(0, CW - usedFixed - g * (L.cols.length - 1));
    const flexW = flexCount ? Math.floor(leftover / flexCount) : 0;
    for (let i = 0; i < colWpx.length; i++) if (colWpx[i] === null) colWpx[i] = flexW;

    const colX: any[] = new Array(L.cols.length);
    let x = 0;
    L.cols.forEach((c: any, i: number) => { colX[i] = x; x += colWpx[i] + g; });
    return { H, colX, colWpx };
  }

  function layoutScrollCols(n: string) {
    const L = LAYOUTS[n];
    if (!L.scroll) return;
    const m = layoutColMetrics(n);
    const cardW = m.colWpx[L.scrollCols[0]];
    const cardH = Math.max(1, Math.round(cardW * SMALL_RATIO_H / SMALL_RATIO_W));
    const gap = vw(GAP_VW);
    const single = (L.scrollGap === true);

    const scNoCaps = !!L.scrollNoCaps;
    const capSpace = scNoCaps ? 0 : vw(CAP_ALLOW_VW);
    const period = single ? (cardH + gap + capSpace) : (cardH * 2);

    const vpTop = canvas.getBoundingClientRect().top;
    const fieldH = window.innerHeight;

    L.scrollCols.forEach((ci: number, k: number) => {
      const sc = scrollCols[k];
      sc.colIndex = ci;
      sc.x = m.colX[ci];
      sc.w = m.colWpx[ci];
      sc.cardH = cardH;
      sc.period = period;
      sc.offset = single ? 0 : (k * cardH);
      sc.step = single ? 1 : 2;
      sc.base = single ? 0 : (k * 5);
      sc.noCaps = scNoCaps;
      sc.fieldH = fieldH;
      sc.el.style.left = sc.x + 'px';
      sc.el.style.width = sc.w + 'px';
      sc.el.style.top = (-vpTop) + 'px';
      sc.el.style.height = fieldH + 'px';
    });

    for (let k = L.scrollCols.length; k < scrollCols.length; k++) {
      const sc = scrollCols[k];
      sc.colIndex = null;
      sc.el.classList.remove('on');
      for (const [i, c] of sc.cards) c.remove();
      sc.cards.clear();
    }
    renderScroll(true);
  }

  function renderScroll(resize: boolean) {
    const v = Math.min(Math.abs(smoothVelocity), CFG.scroll.bowMax);
    const sy = Math.round((1 + v * CFG.scroll.stretch) * 1000) / 1000;
    const pinch = Math.round(v * CFG.scroll.bow) / 100;

    scrollCols.forEach((sc, k) => {
      if (sc.colIndex == null) return;
      const H = sc.fieldH || canvas.clientHeight;
      const { period, offset, cardH } = sc;
      const W = sc.w;

      const colDir = (k === 1) ? -1 : 1;
      const colScrollY = scrollY * colDir;

      const first = Math.floor((colScrollY - offset - cardH) / period) - 1;
      const last = Math.ceil((colScrollY - offset + H) / period) + 1;
      const need = new Set();

      const clipKey = pinch + '|' + W + '|' + H;
      if (sc._clipKey !== clipKey) {
        sc._clipKey = clipKey;
        sc.el.style.clipPath = pinch === 0
          ? 'none'
          : `path('M 0 0 L ${W} 0 C ${W - pinch} ${H * 0.15}, ${W - pinch} ${H * 0.85}, ${W} ${H} L 0 ${H} C ${pinch} ${H * 0.85}, ${pinch} ${H * 0.15}, 0 0 Z')`;
      }

      for (let i = first; i <= last; i++) {
        need.add(i);
        let c = sc.cards.get(i);
        if (!c) {
          const it = scrollItemObj(sc, i);
          c = document.createElement('div');
          c.className = 'scroll-card';
          c.innerHTML =
            `<div class="img"><div class="p-wrap"><div class="sc-inner" style="background-image:${it.bg}"></div></div></div>`
            + `<div class="cap">${capHTML(capData(it.id, 'scroll'))}</div>`;
          c.style.height = cardH + 'px';
          sc.el.appendChild(c);
          sc.cards.set(i, c);
          if (!sc.noCaps) capShow(c.querySelector('.cap'));
        } else if (resize) {
          c.style.height = cardH + 'px';
        }

        c.style.top = (i * period + offset - colScrollY) + 'px';

        const wrap = c._wrap || (c._wrap = c.querySelector('.p-wrap'));
        if (wrap._sy !== sy) {
          wrap._sy = sy;
          wrap.style.transform = sy === 1 ? 'none' : `scaleY(${sy})`;
        }
      }
      for (const [i, c] of sc.cards) { if (!need.has(i)) { c.remove(); sc.cards.delete(i); } }
    });
  }

  function scrollCardOrder(sc: any, k: number) {
    const keys = [...sc.cards.keys()].sort((a, b) => a - b);
    return (k === 1) ? keys.reverse() : keys;
  }

  function scrollShow(n: string, animate: boolean) {
    stopScrollRAF();
    layoutScrollCols(n);
    scrollCols.forEach(sc => { if (sc.colIndex != null) sc.el.classList.add('on'); });
    scrollActive = true;

    scrollCols.forEach(sc => {
      for (const [i, c] of sc.cards) {
        const img = c.querySelector('.img');
        const inner = c.querySelector('.sc-inner');
        const cap = c.querySelector('.cap');
        img.style.transition = 'none';
        img.style.clipPath = MASK_HIDDEN;
        inner.style.transition = 'none';
        inner.style.transform = 'scale(1.1)';
        capReset(cap);
        cap.classList.remove('show', 'hide');
      }
    });
    canvas.getBoundingClientRect();

    scrollCols.forEach((sc, k) => {
      scrollCardOrder(sc, k).forEach((key, idx) => {
        const c = sc.cards.get(key);
        const img = c.querySelector('.img');
        const inner = c.querySelector('.sc-inner');
        const cap = c.querySelector('.cap');
        const baseDelay = animate ? (DUR_MS / 5000) : 0;
        const delay = baseDelay + (animate ? scStag(idx) : 0);

        img.style.transition = 'clip-path ' + SC_CARD_MS + 'ms var(--ease)';
        img.style.transitionDelay = delay + 's';
        img.style.clipPath = MASK_SHOWN;

        inner.style.transition = 'transform ' + SC_CARD_MS + 'ms var(--ease)';
        inner.style.transitionDelay = delay + 's';
        inner.style.transform = 'scale(1)';

        if (sc.noCaps) { capReset(cap); return; }
        setTimeout(() => capShow(cap, { delay: animate ? delay : 0 }), CFG.time.capNudge);
      });
    });
  }

  function scrollHide(animate: boolean) {
    stopScrollRAF();
    let maxDelay = 0;
    let lastImg: HTMLElement | null = null;
    scrollCols.forEach((sc, k) => {
      scrollCardOrder(sc, k).forEach((key, idx) => {
        const c = sc.cards.get(key);
        const img = c.querySelector('.img');
        const inner = c.querySelector('.sc-inner');
        const cap = c.querySelector('.cap');
        const delay = animate ? scStag(idx) : 0;
        if (delay >= maxDelay) { maxDelay = delay; lastImg = img; }

        img.style.transition = 'clip-path ' + SC_CARD_MS + 'ms var(--ease)';
        img.style.transitionDelay = delay + 's';
        img.style.clipPath = MASK_HIDDEN;

        inner.style.transition = 'transform ' + SC_CARD_MS + 'ms var(--ease)';
        inner.style.transitionDelay = delay + 's';
        inner.style.transform = 'scale(1.1)';

        capHide(cap, { delay });
      });
    });

    const finish = () => {
      scrollCols.forEach(sc => {
        sc.el.classList.remove('on');
        for (const [i, c] of sc.cards) c.remove();
        sc.cards.clear();
      });
      scrollActive = false;
    };
    if (!animate || !lastImg) { finish(); return; }
    whenDone(lastImg, {
      prop: 'clip-path',
      fallbackMs: SC_CARD_MS + maxDelay * 1000 + 400,
    }).then(finish);
  }

  function startScrollRAF() {
    if (scrollRAF) return;
    const step = () => {
      currentVelocity *= SCROLL_FRICTION;
      if (Math.abs(currentVelocity) < CFG.scroll.minVel) currentVelocity = 0;
      scrollY += currentVelocity;

      smoothVelocity += (currentVelocity - smoothVelocity) * CFG.scroll.smooth;
      if (Math.abs(smoothVelocity) < 0.05) smoothVelocity = 0;

      renderScroll(false);

      if (currentVelocity === 0 && smoothVelocity === 0) { scrollRAF = null; return; }
      scrollRAF = requestAnimationFrame(step);
    };
    scrollRAF = requestAnimationFrame(step);
  }

  function stopScrollRAF() {
    if (scrollRAF) { cancelAnimationFrame(scrollRAF); scrollRAF = null; }
    if (currentVelocity || smoothVelocity) {
      currentVelocity = 0;
      smoothVelocity = 0;
      renderScroll(false);
    }
  }

  let busy = false, maskBusy = false;
  let coverGestureSpent = false;
  let coverAccum = 0;

  function computeRects(n: string) {
    const L = LAYOUTS[n];
    const CW = canvas.clientWidth;
    const H = canvas.clientHeight;
    const g = vw(GAP_VW);
    const canvasTop = canvas.getBoundingClientRect().top;
    const imgHpx = L.ratioImgH ? vw(L.ratioImgH) : 0;

    const colWpx: any[] = new Array(L.cols.length);
    const isRatio: any[] = new Array(L.cols.length);
    const ratioColW = Math.round(imgHpx * FALLBACK_RATIO);

    let usedFixed = 0, flexCount = 0;
    L.cols.forEach((c: any, i: number) => {
      isRatio[i] = (c.w === 'ratio');
      if (c.w === 'auto' || c.w === 'eq') { flexCount++; colWpx[i] = null; }
      else if (c.w === 'ratio') { colWpx[i] = ratioColW; usedFixed += ratioColW; }
      else { const w = vw(c.w); colWpx[i] = w; usedFixed += w; }
    });
    const leftover = Math.max(0, CW - usedFixed - g * (L.cols.length - 1));
    const flexW = flexCount ? Math.floor(leftover / flexCount) : 0;
    for (let i = 0; i < colWpx.length; i++) if (colWpx[i] === null) colWpx[i] = flexW;

    let largeColW = 0;
    L.cols.forEach((c: any, i: number) => { if (c.items.some((it: any) => it.id === L.large)) largeColW = colWpx[i]; });
    const svgH = 0;
    const baseH = H - svgH;

    const out: any = {};
    let x = 0;
    L.cols.forEach((c: any, i: number) => {
      const colW = colWpx[i];
      const ratioCol = isRatio[i];

      for (const it of c.items) {
        const isLarge = it.id === L.large;

        let computedCap = it.cap || (L.caps ? 'below' : 'none');
        if (isLarge && it.cap !== 'none') computedCap = 'bottom';
        const capBelow = computedCap === 'below';

        const smallImgH = isLarge ? 0
          : (ratioCol ? imgHpx : Math.round(colW * SMALL_RATIO_H / SMALL_RATIO_W));
        const smallBoxH = smallImgH + (capBelow ? vw(CAP_ALLOW_VW) : 0);
        const itemW = colW;
        const fitStackItem = L.fitStack && (it.y === 'bStackTop' || it.y === 'bStackBottom');

        let boxH;
        if (it.y === 'full') boxH = H;
        else if (it.y === 'fullTall') boxH = canvasTop + H;
        else if (it.y === 'baseTop') boxH = baseH;
        else if (fitStackItem) boxH = Math.round((baseH - g) / 2);
        else boxH = smallBoxH;

        let top;
        switch (it.y) {
          case 'full': top = 0; break;
          case 'fullTall': top = -canvasTop; break;
          case 'baseTop': top = svgH; break;
          case 'top': top = 0; break;
          case 'bottom': top = H - boxH; break;
          case 'fillTop': top = 0; break;
          case 'fillBottom': top = boxH + g; break;
          case 'bStackTop': top = H - 2 * boxH - g; break;
          case 'bStackBottom': top = H - boxH; break;
          default: top = 0;
        }

        let calcImgH: any = 'fill';
        if (it.imgH && it.imgH !== 'fill') {
          if (typeof it.imgH === 'object') {
            const targetH = isLarge ? H : baseH;
            calcImgH = Math.round(targetH * it.imgH.pct / 100);
          } else {
            calcImgH = vw(it.imgH);
          }
        }

        const rect: any = {
          left: x, top, width: itemW, height: boxH,
          imgH: calcImgH,
          size: it.size || null,
          pos: it.pos || null,
          cap: computedCap,
          capVariant: capVariant(n, isLarge),
          bg: L.bg || 'center',
          large: isLarge,
          svgOffset: it.y === 'fullTall' ? canvasTop : 0,
        };

        if (!isLarge) {
          rect.imgPxH = (calcImgH !== 'fill') ? calcImgH : (fitStackItem ? boxH : smallImgH);
          rect.imgW = itemW;
        } else if (it.ratio) {
          const availW = colW, availH = boxH;
          let fitW = availW, fitH = availW / it.ratio;
          if (fitH > availH) { fitH = availH; fitW = availH * it.ratio; }
          rect.left = x + (availW - fitW) / 2;
          rect.top = top + (availH - fitH) / 2;
          rect.width = fitW;
          rect.height = fitH;
          rect.autoRatio = true;
        }

        rect.col = i;
        out[it.id] = rect;
      }
      x += colW + g;
    });

    const populated = [...new Set(Object.keys(out).map(id => out[id].col))].sort((a: any, b: any) => a - b);
    const largeColIdx = out[L.large] ? out[L.large].col : populated[0];
    const largeRank = populated.indexOf(largeColIdx);
    for (const id in out) out[id].colRank = Math.abs(populated.indexOf(out[id].col) - largeRank);

    return out;
  }

  function setRect(el: any, r: any) {
    el.style.left = r.left + 'px';
    el.style.top = r.top + 'px';
    el.style.width = r.width + 'px';
    el.style.height = r.height + 'px';
  }

  function applyItemStyle(el: any, r: any, animate: boolean, deferCap?: boolean) {
    const img = el.querySelector('.img');
    const inner = el.querySelector('.img-inner');
    const cap = el.querySelector('.cap');
    el._capRectVariant = r.capVariant;
    el._capMode = r.cap;

    inner.style.backgroundSize = r.size || 'cover';
    if (!inner.dataset.covered) inner.style.backgroundPosition = r.pos || r.bg || 'center';

    img.style.width = '';
    img.style.flex = '0 0 auto';
    cap.style.width = '';
    img.style.height = (r.large ? (r.imgH === 'fill' ? r.height : r.imgH) : r.imgPxH) + 'px';

    if (!deferCap) {
      if (r.cap === 'none') {
        clearTimeout(el._capT);
        if (cap.classList.contains('show')) {
          cap.classList.remove('show');
          if (animate) cap.classList.add('hide');
        } else if (!animate) {
          cap.classList.remove('show', 'hide');
        }
      } else {
        cap.style.display = 'flex';
        if (r.cap === 'bottom') {
          cap.style.position = 'absolute';
          cap.style.left = '0';
          cap.style.right = '0';
          cap.style.bottom = '0';
        } else {
          cap.style.position = 'static';
          cap.style.left = cap.style.right = cap.style.bottom = '';
        }

        if (!cap.classList.contains('show')) {
          cap.classList.remove('show', 'hide');
          applyCapText(el, r.capVariant);
          if (animate) {
            clearTimeout(el._capT);
            el._capT = setTimeout(() => cap.classList.add('show'), CFG.time.capEnter);
          } else {
            cap.classList.add('show');
          }
        }
      }
    }
    el.style.justifyContent = 'flex-start';
    el.classList.toggle('large', !!r.large);
  }

  function nearestEdge(r: any) {
    const center = r.top + r.height / 2;
    return center < canvas.clientHeight / 2 ? 'up' : 'down';
  }

  function offscreenTop(r: any) {
    const canvasTop = canvas.getBoundingClientRect().top;
    return nearestEdge(r) === 'up'
      ? -(canvasTop + r.height + EXIT_PAD)
      : canvas.clientHeight + EXIT_PAD;
  }

  function colDelay(colRank: number, animate: boolean, perCol?: number) {
    if (!animate) return 0;
    const s = (perCol != null) ? perCol : COL_STAGGER_S;
    return (colRank || 0) * s;
  }

  function whenDone(el: any, { prop, type = 'transitionend', fallbackMs = 2000, slack = 0 }: any = {}) {
    return new Promise<void>(resolve => {
      let settled = false;

      const finish = () => {
        if (settled) return;
        settled = true;
        el.removeEventListener(type, onEvent);
        clearTimeout(timer);
        if (slack) setTimeout(resolve, slack);
        else resolve();
      };

      const onEvent = (e: any) => {
        if (e.target !== el) return;
        if (prop && e.propertyName && e.propertyName !== prop) return;
        finish();
      };

      el.addEventListener(type, onEvent);
      const timer = setTimeout(finish, fallbackMs);
    });
  }

  let leadTimer: any = null;
  let morphToken = 0;
  let heroTimers: any[] = [];

  function clearHeroTimers() { heroTimers.forEach(clearTimeout); heroTimers = []; }
  function afterHero(fn: any, ms: number) { const t = setTimeout(fn, ms); heroTimers.push(t); return t; }

  function positionHero(n: string) {
    const rA = computeRects(n)['A'];
    hero.style.left = rA.left + 'px';
    hero.style.top = rA.top + 'px';
    hero.style.width = rA.width + 'px';
    hero.style.height = rA.height + 'px';
  }

  function updateHero(newN: string, animate: boolean, kind: string) {
    clearHeroTimers();
    const hImg = hero.querySelector('.img') as HTMLElement;
    const canvasTop = canvas.getBoundingClientRect().top;
    const H = canvas.clientHeight;
    const downY = H;
    const upY = -(canvasTop + H * 0.2 + 40);

    if (kind === 'slideIn') {
      positionHero(newN);
      hero.style.transition = 'none';
      hImg.style.transition = 'none';
      hero.style.clipPath = 'none';
      hImg.style.clipPath = 'inset(100% 0 0 0)';
      hero.classList.add('on');
      hero.getBoundingClientRect();
      hero.style.transition = '';
      hImg.style.transition = '';
      hImg.style.clipPath = MASK_SHOWN;
      return;
    }

    if (kind === 'slideOut') {
      if (hero.classList.contains('on')) {
        hero.style.transition = '';
        hero.style.clipPath = 'none';
        hImg.style.transition = '';
        hImg.style.clipPath = 'inset(100% 0 0 0)';
      }
      if (animate) {
        afterHero(() => { if (!HERO_LAYOUTS.includes(String(current))) { hero.classList.remove('on'); } }, DUR_MS + 550);
      } else {
        hero.classList.remove('on');
      }
      return;
    }

    if (kind === 'clipIn') {
      positionHero(newN);
      hImg.style.transition = 'none';
      hero.style.transition = 'none';
      hImg.style.clipPath = MASK_SHOWN;
      hero.style.clipPath = MASK_HIDDEN;
      hero.classList.add('on');
      hero.getBoundingClientRect();
      hero.style.transition = 'clip-path var(--dur) var(--ease)';
      hero.style.clipPath = MASK_SHOWN;
      whenDone(hero, { prop: 'clip-path', fallbackMs: DUR_MS + 400 }).then(() => {
        if (!HERO_LAYOUTS.includes(String(current))) return;
        hero.style.transition = '';
        hero.style.clipPath = 'none';
      });
      return;
    }

    if (kind === 'clipOut') {
      if (hero.classList.contains('on')) {
        hImg.style.transition = 'none';
        hero.style.transition = 'none';
        hero.style.clipPath = MASK_SHOWN;
        hero.getBoundingClientRect();
        hero.style.transition = 'clip-path var(--dur) var(--ease)';
        hero.style.clipPath = MASK_HIDDEN;
        whenDone(hero, { prop: 'clip-path', fallbackMs: DUR_MS + 400 }).then(() => {
          if (HERO_LAYOUTS.includes(String(current))) return;
          hero.classList.remove('on');
          hero.style.transition = '';
          hero.style.clipPath = 'none';
          hImg.style.transition = '';
        });
      }
      return;
    }

    if (hero.classList.contains('on')) {
      hero.classList.remove('on');
      hero.style.transition = '';
      hero.style.clipPath = 'none';
      hImg.style.transition = '';
    }
  }

  let animActiveUntil = 0;

  function bumpAnim(ms?: number) {
    const until = performance.now() + (ms == null ? ANIM_WATCH_MS : ms);
    if (until > animActiveUntil) animActiveUntil = until;
  }
  const onAnimRun = () => bumpAnim();
  canvas.addEventListener('transitionrun', onAnimRun);
  canvas.addEventListener('transitionstart', onAnimRun);

  function maskItem(el: any, dur: number, clip: string, scale: string, delay: number) {
    const d = (delay || 0) + 's';
    const img = el.querySelector('.img');
    img.style.transition = 'clip-path ' + dur + 'ms var(--ease)';
    img.style.transitionDelay = d;
    img.style.clipPath = clip;
    if (scale != null) {
      const inner = el.querySelector('.img-inner');
      inner.style.transition = 'transform ' + dur + 'ms var(--ease)';
      inner.style.transitionDelay = d;
      inner.style.transform = scale;
    }
  }

  function ghostScrollCards() {
    let maxDelay = 0;
    let lastImg: any = null;
    const ghosts: any[] = [];

    scrollCols.forEach((sc, k) => {
      if (sc.colIndex == null || !sc.cards.size) return;

      const ghost = sc.el;
      const cards = sc.cards;
      const order = scrollCardOrder(sc, k);

      const fresh = document.createElement('div');
      fresh.className = 'scroll-col';
      canvas.appendChild(fresh);
      sc.el = fresh;
      sc.cards = new Map();
      sc.colIndex = null;
      sc._clipKey = null;
      ghosts.push(ghost);

      order.forEach((key, idx) => {
        const c = cards.get(key);
        const img = c.querySelector('.img');
        const inner = c.querySelector('.sc-inner');
        const delay = scStag(idx);
        if (delay >= maxDelay) { maxDelay = delay; lastImg = img; }

        img.style.transition = 'clip-path ' + SC_CARD_MS + 'ms var(--ease)';
        img.style.transitionDelay = delay + 's';
        img.style.clipPath = MASK_HIDDEN;

        inner.style.transition = 'transform ' + SC_CARD_MS + 'ms var(--ease)';
        inner.style.transitionDelay = delay + 's';
        inner.style.transform = ENTER_SCALE;

        capHide(c.querySelector('.cap'), { delay });
      });
    });

    if (ghosts.length) {
      const drop = () => ghosts.forEach(g => g.remove());
      if (lastImg) {
        whenDone(lastImg, {
          prop: 'clip-path',
          fallbackMs: SC_CARD_MS + maxDelay * 1000 + 400,
          slack: 60,
        }).then(drop);
      } else {
        drop();
      }
    }
    return maxDelay;
  }

  function coverSetCap(img: any, srcId: string, delay: number, step: number) {
    const el = img.closest('.item');
    if (!el) return;

    if (el._capMode === 'none') return;
    if ((el._capSrcId || el.dataset.id) === srcId) return;
    el._capSrcId = srcId;

    const cap = el.querySelector('.cap');
    const variant = el._capRectVariant || 'small';
    const dirUp = step > 0;
    clearTimeout(el._capCoverT);

    if (!cap.classList.contains('show')) {
      const midSwap = cap.classList.contains('hide');
      cap.classList.remove('hide', 'dir-up', 'cover-swap');
      applyCapText(el, variant);
      if (!midSwap) {
        setCapDelay(cap, 0, false);
        return;
      }
      cap.classList.add('cover-swap');
      cap.classList.toggle('dir-up', dirUp);
      setCapDelay(cap, 0, dirUp);
      void cap.offsetWidth;
      cap.classList.add('show');
      el._capCoverT = setTimeout(() => {
        cap.classList.remove('cover-swap', 'dir-up');
        setCapDelay(cap, 0, false);
      }, CAP_CLEAN_MS + CAP_SLACK_MS);
      return;
    }

    clearTimeout(el._capT);
    cap.classList.add('cover-swap');
    cap.classList.toggle('dir-up', dirUp);
    cap.classList.remove('show');
    cap.classList.add('hide');
    setCapDelay(cap, delay, dirUp);

    el._capCoverT = setTimeout(() => {
      applyCapText(el, variant);
      setCapDelay(cap, 0, dirUp);
      cap.classList.remove('hide');
      cap.classList.add('show');
      el._capCoverT = setTimeout(() => {
        cap.classList.remove('cover-swap', 'dir-up');
        setCapDelay(cap, 0, false);
      }, CAP_CLEAN_MS + CAP_SLACK_MS);
    }, delay * 1000 + COVER_CAP_MS + CAP_SLACK_MS);
  }

  function resetItemVisuals(el: any) {
    const img = el.querySelector('.img');
    const inner = el.querySelector('.img-inner');
    img.style.clipPath = MASK_SHOWN;
    inner.style.transform = REST_SCALE;
    el.style.clipPath = '';
  }

  function maskToggle(toN: string, oldN: string | number, animate: boolean, wasScroll: boolean, isScroll: boolean) {
    if (maskBusy) return;
    maskBusy = true;
    bumpAnim(6000);
    stopScrollRAF();
    clearHeroTimers();
    clearTimeout(leadTimer);
    morphToken++;
    coverClear();

    const fromRects = LAYOUTS[oldN] ? computeRects(String(oldN)) : {};
    const toRects = computeRects(toN);
    const heroImg = hero.querySelector('.img') as HTMLElement;
    const heroOnNow = hero.classList.contains('on');
    const hadScroll = scrollActive;
    const samePair = oldN !== 0 && String(toN).replace('m', '') === String(oldN).replace('m', '');

    if (animate && oldN !== 0 && oldN !== toN) {
      if (NO_TEXT_LAYOUTS.has(toN)) hideAllText(animate);
      else syncTextTransitions(String(oldN), toN, 0, 0, animate, true);
    }

    let maxExit = 0;

    if (oldN !== 0) {
      for (const it of ITEMS) {
        const el = els[it.id];
        if (el.classList.contains('on')) {
          const cap = el.querySelector('.cap');
          if (cap.classList.contains('show')) {
            cap.classList.remove('show');
            if (animate) cap.classList.add('hide');
          }

          const fr = fromRects[it.id];
          const delay = sStag(fr ? fr.col : 0);
          if (delay > maxExit) maxExit = delay;

          setCapDelay(cap, delay);
          maskItem(el, MASK_MS, MASK_HIDDEN, ENTER_SCALE, delay);
        }
      }

      if (heroOnNow) {
        heroImg.style.transition = 'clip-path ' + MASK_MS + 'ms var(--ease)';
        heroImg.style.transitionDelay = '0s';
        heroImg.style.clipPath = MASK_HIDDEN;
      }
      if (scrollActive) {
        ghostScrollCards();
        scrollActive = false;
      }
    }

    const handoff = (hadScroll && samePair) ? CFG.scroll.handoff : 0;
    const exitDelayMs = oldN === 0 ? 0
      : Math.max(0, (MASK_MS + maxExit * 1000 + 20) - CFG.scroll.overlap) + handoff;

    clearTimeout((maskToggle as any)._t);
    (maskToggle as any)._t = setTimeout(() => {
      canvas.classList.add('no-anim');
      current = toN;

      const enterDelay = animate ? (oldN === 0 ? 200 : Math.max(0, 800 - exitDelayMs)) : 0;
      if (NO_TEXT_LAYOUTS.has(toN)) hideAllText(animate);
      else syncTextTransitions(String(oldN), toN, 0, enterDelay, animate, false);

      for (const it of ITEMS) {
        const el = els[it.id];
        const r = toRects[it.id];
        if (r) {
          el.classList.add('on');
          applyItemStyle(el, r, true);
          setRect(el, r);
          el.style.zIndex = '2';
          const img = el.querySelector('.img') as HTMLElement;
          const inner = el.querySelector('.img-inner') as HTMLElement;
          img.style.transition = 'none';
          inner.style.transition = 'none';
          img.style.clipPath = MASK_HIDDEN;
          inner.style.transform = ENTER_SCALE;
        } else {
          el.classList.remove('on', 'large');
          el.querySelector('.cap')?.classList.remove('show', 'hide');
          resetItemVisuals(el);
        }
      }

      if (isScroll) {
        layoutScrollCols(toN);
        scrollCols.forEach(sc => {
          if (sc.colIndex != null) sc.el.classList.add('on');
          for (const [i, c] of sc.cards) {
            const img = c.querySelector('.img');
            const cap = c.querySelector('.cap');
            img.style.transition = 'none';
            img.style.clipPath = MASK_HIDDEN;
            if (cap) cap.classList.remove('show', 'hide');
          }
        });
        scrollActive = true;
      } else if (scrollActive) {
        scrollCols.forEach(sc => {
          sc.el.classList.remove('on');
          for (const [i, c] of sc.cards) c.remove();
          sc.cards.clear();
        });
        scrollActive = false;
      }

      if (HERO_LAYOUTS.includes(toN)) {
        positionHero(toN);
        hero.classList.add('on');
        heroImg.style.transition = 'none';
        heroImg.style.clipPath = MASK_HIDDEN;
      } else {
        hero.classList.remove('on');
      }

      canvas.getBoundingClientRect();
      canvas.classList.remove('no-anim');

      let maxEntry = 0;
      let lastEntry: any = null;
      for (const it of ITEMS) {
        const r = toRects[it.id];
        if (!r) continue;
        const delay = sStag(r.col);
        if (delay >= maxEntry) { maxEntry = delay; lastEntry = els[it.id].querySelector('.img'); }
        maskItem(els[it.id], MASK_MS, MASK_SHOWN, REST_SCALE, delay);
        setCapDelay(els[it.id].querySelector('.cap'), delay);
      }

      if (isScroll) {
        scrollCols.forEach((sc, k) => {
          scrollCardOrder(sc, k).forEach((key, idx) => {
            const img = sc.cards.get(key).querySelector('.img');
            const cap = sc.cards.get(key).querySelector('.cap');
            const delay = scStag(idx);
            if (delay > maxEntry) maxEntry = delay;

            img.style.transition = 'clip-path ' + SC_CARD_MS + 'ms var(--ease)';
            img.style.transitionDelay = delay + 's';
            img.style.clipPath = MASK_SHOWN;
            if (delay >= maxEntry) { maxEntry = delay; lastEntry = img; }

            if (cap && !sc.noCaps) {
              setCapDelay(cap, delay);
              setTimeout(() => cap.classList.add('show'), CFG.time.capNudge);
            }
          });
        });
      }

      if (HERO_LAYOUTS.includes(toN)) {
        heroImg.style.transition = 'clip-path ' + MASK_MS + 'ms var(--ease)';
        heroImg.style.transitionDelay = '0s';
        heroImg.style.clipPath = MASK_SHOWN;
      }

      const entryDur = isScroll ? Math.max(MASK_MS, SC_CARD_MS) : MASK_MS;
      const release = () => { maskBusy = false; };
      if (lastEntry) {
        whenDone(lastEntry, {
          prop: 'clip-path',
          fallbackMs: entryDur + maxEntry * 1000 + 400,
          slack: 40,
        }).then(release);
      } else {
        setTimeout(release, entryDur + maxEntry * 1000 + 40);
      }
      bumpAnim(SC_CARD_MS + maxEntry * 1000 + 600);
    }, exitDelayMs);
  }

  const COVER_POOL = ITEMS.map(it => it.bg);
  let coverIndex = 0;
  let coverLastInput = 0;

  function isCoverLayout(x: string | number) { return COVER_LAYOUTS.includes(String(x)) }

  function coverTargets() {
    const list: HTMLElement[] = [];
    for (const it of ITEMS) {
      const el = els[it.id];
      if (el.classList.contains('on')) list.push(el.querySelector('.img') as HTMLElement);
    }
    if (HERO_LAYOUTS.includes(String(current)) && hero.classList.contains('on')) {
      list.push(hero.querySelector('.img') as HTMLElement);
    }
    list.sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);
    return list;
  }

  function coverAdd(img: any, url: string, dir: string, delay: number) {
    const inner = img.querySelector('.img-inner');
    const pw = img.querySelector('.p-wrap');
    const pxo = (pw && pw._px) || 0, pyo = (pw && pw._py) || 0;

    const ov = document.createElement('div');
    ov.className = 'cover-ov';

    const ovInner = document.createElement('div');
    ovInner.className = 'cover-ov-inner';
    ovInner.style.backgroundImage = url;
    ovInner.style.backgroundSize = (inner && inner.style.backgroundSize) || 'cover';
    ovInner.style.backgroundPosition = (inner && inner.style.backgroundPosition) || 'center';
    ovInner.style.backgroundRepeat = 'no-repeat';
    ovInner.style.width = '100%';
    ovInner.style.height = '100%';
    ovInner.style.transition = 'none';
    ovInner.style.transform = 'scale(1.1)';

    const insetVals: Record<string, string> = {
      down: 'inset(100% 100% 0 0)', up: 'inset(0 0 100% 100%)',
      right: 'inset(100% 100% 0 0)', left: 'inset(0 0 100% 100%)',
    };
    ov.style.clipPath = insetVals[dir] || 'inset(0 0 100% 100%)';
    ov.style.transform = `translate(${pxo}px, ${pyo}px) scale(var(--parallax-scale))`;
    ov.style.transition = 'none';

    ov.appendChild(ovInner);
    img.appendChild(ov);
    if (!img._covStack) img._covStack = [];
    img._covStack.push(ov);

    ov.getBoundingClientRect();

    ov.style.transition = 'clip-path var(--dur) var(--ease)';
    ov.style.transitionDelay = delay + 's';
    ov.style.clipPath = MASK_SHOWN;

    ovInner.style.transition = 'transform var(--dur) var(--ease)';
    ovInner.style.transitionDelay = delay + 's';
    ovInner.style.transform = 'scale(1)';

    const done = (e: any) => {
      if (e.propertyName !== 'clip-path') return;
      ov.removeEventListener('transitionend', done);
      const stack = img._covStack || [];
      const i = stack.indexOf(ov);
      if (i === -1) { ov.remove(); return; }

      const doomed = stack.slice(0, i);
      img._covStack = stack.slice(i);
      ov.style.transition = 'none';
      ovInner.style.transition = 'none';
      ov.style.willChange = 'auto';
      if (doomed.length) {
        requestAnimationFrame(() => requestAnimationFrame(() => doomed.forEach((o: any) => o.remove())));
      }
    };
    ov.addEventListener('transitionend', done);
  }

  function updateCoverIndex(step?: number) {
    const newVal = coverIndex + 1;
    container.querySelectorAll('.text-wrapper .idx-mask').forEach(mask => {
      const el = mask.querySelector('.index') as HTMLElement;
      if (el.textContent === String(newVal)) return;

      if (!step) { el.textContent = String(newVal); return; }

      const outY = step > 0 ? '-105%' : '105%';
      const inY = step > 0 ? '105%' : '-105%';

      el.style.transition = 'transform 0.4s var(--ease)';
      el.style.transform = `translateY(${outY})`;

      const onOut = (e: any) => {
        if (e.propertyName !== 'transform') return;
        el.removeEventListener('transitionend', onOut);
        el.style.transition = 'none';
        el.textContent = String(newVal);
        el.style.transform = `translateY(${inY})`;
        el.getBoundingClientRect();
        el.style.transition = 'transform 0.4s var(--ease)';
        el.style.transform = 'translateY(0%)';
      };
      el.addEventListener('transitionend', onOut);
    });
  }

  function coverStep(step: number, dir: string) {
    bumpAnim();
    coverIndex = ((coverIndex + step) % COVER_CYCLE + COVER_CYCLE) % COVER_CYCLE;
    const targets = coverTargets();

    targets.forEach((img: any, idx) => {
      const stack = img._covStack || [];

      if (stack.length >= COVER_MAX) {
        const drop = stack.length - COVER_MAX + 1;
        const doomed = stack.slice(0, drop);
        img._covStack = stack.slice(drop);
        requestAnimationFrame(() => requestAnimationFrame(() => doomed.forEach((o: any) => o.remove())));
      }

      const poolIdx = (coverIndex + idx) % COVER_POOL.length;
      const delay = Math.min(idx * COVER_STAGGER_S, COVER_STAGGER_CAP);
      coverAdd(img, COVER_POOL[poolIdx], dir, delay);
      coverSetCap(img, ITEMS[poolIdx].id, delay, step);
    });

    updateCoverIndex(step);
  }

  function coverManualStep(step: number) {
    if (busy) return;
    if (!isCoverLayout(current)) return;
    coverStep(step, step > 0 ? 'right' : 'left');
  }

  function coverScroll(delta: number, axis: string) {
    if (busy) return;
    const now = performance.now();

    if (now - coverLastInput > COVER_GESTURE_GAP) {
      coverGestureSpent = false;
      coverAccum = 0;
    }
    coverLastInput = now;

    if (coverGestureSpent) return;
    coverAccum += delta;

    if (Math.abs(coverAccum) >= COVER_STEP_PX) {
      const fwd = coverAccum >= 0;
      coverGestureSpent = true;
      coverAccum = 0;
      const dir = (axis === 'x') ? (fwd ? 'right' : 'left') : (fwd ? 'down' : 'up');
      coverStep(fwd ? 1 : -1, dir);
    }
  }

  function coverClear() {
    const commit = (img: any) => {
      if (!img) return;
      const stack = img._covStack || [];
      const inner = img.querySelector('.img-inner');
      if (stack.length) {
        const top = stack[stack.length - 1];
        const topInner = top.querySelector('.cover-ov-inner') || top;
        if (inner && topInner.style.backgroundImage) {
          inner.style.backgroundImage = topInner.style.backgroundImage;
          inner.style.backgroundPosition = topInner.style.backgroundPosition || 'center';
          inner.style.backgroundSize = topInner.style.backgroundSize || 'cover';
          inner.dataset.covered = '1';
        }
      }

      if (inner) {
        inner.style.transition = 'none';
        inner.style.transform = REST_SCALE;
        inner.getBoundingClientRect();
        inner.style.transition = '';
      }

      img._covStack = [];
      if (stack.length) {
        requestAnimationFrame(() => requestAnimationFrame(() => stack.forEach((o: any) => o.remove())));
      }
    };

    for (const it of ITEMS) {
      const el = els[it.id];
      clearTimeout(el._capCoverT);
      el.querySelector('.cap')?.classList.remove('cover-swap');
      commit(el.querySelector('.img'));
    }
    commit(hero.querySelector('.img'));
    coverAccum = 0;
  }

  function textShown(tText: HTMLElement) {
    const cs = getComputedStyle(tText).transform;
    if (cs === 'none') return false;
    let ty;
    try { ty = new DOMMatrixReadOnly(cs).m42; } catch (e) { return false; }
    return ty < (tText.offsetHeight || 1) * 0.5;
  }

  function hideAllText(animate: boolean, delayMs = 0) {
    container.querySelectorAll('.text-wrapper .visibility').forEach(el => {
      el.querySelectorAll('.t-text').forEach((tText: any, i) => {
        clearTimeout(tText._tEnter);
        clearTimeout(tText._tExit);
        clearTimeout(tText._tHidden);

        const isShown = textShown(tText);
        const lineDelay = delayMs + (i * LINE_STAGGER_MS);

        if (!animate || !isShown) {
          tText.style.animation = 'none';
          tText.style.transition = 'none';
          tText.style.transform = 'translateY(120%)';
          tText.classList.remove('is-active');
          tText._textState = 'hidden';
          return;
        }

        tText._tExit = setTimeout(() => {
          tText.style.animation = 'none'; void tText.offsetWidth;
          tText.style.animation = 'textExit var(--dur) var(--ease) both';
          tText.classList.remove('is-active');
          tText._textState = 'exiting';
          tText._tHidden = setTimeout(() => {
            if (tText._textState === 'exiting') tText._textState = 'hidden';
          }, CFG.time.textGuard);
        }, lineDelay);
      });
    });
  }

  function syncTextTransitions(oldN: string, newN: string, exitDelayMs: number, enterDelayMs: number, animate: boolean, doExitPhaseOnly: boolean | null = null) {
    if (NO_TEXT_LAYOUTS.has(newN)) {
      if (doExitPhaseOnly === null || doExitPhaseOnly === true) hideAllText(animate, exitDelayMs);
      return;
    }

    const newClass = 'is--' + newN;

    container.querySelectorAll('.text-wrapper .visibility').forEach(el => {
      const isInNew = el.classList.contains(newClass);

      el.querySelectorAll('.t-text').forEach((tText: any, i) => {
        const staggerExit = exitDelayMs + (i * LINE_STAGGER_MS);
        const staggerEnter = enterDelayMs + (i * LINE_STAGGER_MS);

        if (!animate) {
          clearTimeout(tText._tExit);
          clearTimeout(tText._tEnter);
          tText.style.animation = 'none';
          tText.style.transform = isInNew ? 'translateY(0%)' : 'translateY(120%)';
          tText.classList.toggle('is-active', isInNew);
          tText._textState = isInNew ? 'visible' : 'hidden';
          return;
        }

        if (doExitPhaseOnly === null || doExitPhaseOnly === true) {
          if (!isInNew && textShown(tText)) {
            clearTimeout(tText._tExit);
            tText._tExit = setTimeout(() => {
              tText.style.animation = 'none'; void tText.offsetWidth;
              tText.style.animation = 'textExit var(--dur) var(--ease) both';
              tText.classList.remove('is-active');
              tText._textState = 'hidden';
            }, staggerExit);
          }
        }

        if (doExitPhaseOnly === null || doExitPhaseOnly === false) {
          if (isInNew) {
            if (textShown(tText)) {
              tText.classList.add('is-active');
              tText._textState = 'visible';
            } else {
              clearTimeout(tText._tEnter);
              tText._tEnter = setTimeout(() => {
                tText.style.animation = 'none'; void tText.offsetWidth;
                tText.style.animation = 'textEnter var(--dur) var(--ease) both';
                tText.classList.add('is-active');
                tText._textState = 'visible';
              }, staggerEnter);
            }
          }
        }
      });
    });
  }

  function applyLayout(n: string, animate = true) {
    if (!LAYOUTS[n]) return 0;
    coverClear();
    const oldN = current;

    const wasScroll = isScrollLayout(oldN);
    const isScroll = isScrollLayout(n);

    if (animate && n !== oldN && wasScroll && isScroll && LAYOUTS[n].large !== LAYOUTS[oldN].large) {
      maskToggle(n, oldN, animate, wasScroll, isScroll);
      return MASK_LOCK_MS;
    }

    const rects = computeRects(n);

    const wasHero = HERO_LAYOUTS.includes(String(oldN));
    const isHero = HERO_LAYOUTS.includes(n);
    const pairSet = new Set([oldN, n]);
    const isDirect = (pairSet.has('1') && pairSet.has('2')) || (pairSet.has('1m') && pairSet.has('2m'));

    let kind = 'none';
    if (isHero && !wasHero) kind = isDirect ? 'slideIn' : 'clipIn';
    else if (!isHero && wasHero) kind = isDirect ? 'slideOut' : 'clipOut';

    const isSameLargeScroll = wasScroll && isScroll && LAYOUTS[n].large === LAYOUTS[oldN].large;
    if (wasScroll && (!isScroll || isSameLargeScroll)) scrollHide(animate);

    let needLead = false;
    if (animate) {
      for (const it of ITEMS) {
        const el = els[it.id];
        const cap = el.querySelector('.cap');
        if (el.classList.contains('on') && cap?.classList.contains('show')) {
          const dest = rects[it.id];
          if (!(dest && dest.cap && dest.cap !== 'none')) {
            clearTimeout(el._capT);
            capHide(cap);
            needLead = true;
          }
        }
      }
    }

    const scrollExitLead = (animate && wasScroll && (!isScroll || isSameLargeScroll)) ? SCROLL_EXIT_LEAD_MS : 0;
    const lead = Math.max(needLead ? CAP_FADE_MS : 0, scrollExitLead);

    current = n;
    clearTimeout(leadTimer);
    const token = ++morphToken;

    if (animate) syncTextTransitions(String(oldN), n, 0, 0, animate, true);

    const run = () => {
      if (token !== morphToken) return;

      const enterDelay = animate ? Math.max(0, 600 - lead) : 0;
      syncTextTransitions(String(oldN), n, 0, enterDelay, animate, false);

      runLayoutMorph(n, rects, kind, animate, String(oldN));

      if (isScroll) {
        if (!wasScroll || isSameLargeScroll) {
          scrollShow(n, animate);
        } else {
          layoutScrollCols(n);
          scrollCols.forEach(sc => { if (sc.colIndex != null) sc.el.classList.add('on'); });
          scrollActive = true;
        }
      }
    };

    if (lead) leadTimer = setTimeout(run, lead);
    else run();

    const maxRank = Math.max(0, ...Object.values(rects).map((r: any) => r.colRank || 0));
    const tail = animate ? colDelay(maxRank, animate) * 1000 : 0;
    return animate ? lead + DUR_MS + tail + CFG.lock.tail : 0;
  }

  function runLayoutMorph(n: string, rects: any, kind: string, animate: boolean, fromN: string) {
    const fromRects = LAYOUTS[fromN] ? computeRects(fromN) : {};
    const oldLargeId = LAYOUTS[fromN] ? LAYOUTS[fromN].large : null;
    const newLargeId = LAYOUTS[n].large;

    const largeSwapClears = !!(animate && (n === '1' || n === '1m')
      && oldLargeId && oldLargeId !== newLargeId
      && rects[oldLargeId] && !rects[oldLargeId].large);

    for (const it of ITEMS) {
      const el = els[it.id];
      const r = rects[it.id];
      const was = el.classList.contains('on');
      const wasLarge = fromRects[it.id] && fromRects[it.id].large;

      if (it.id === 'A' && kind === 'clipOut' && was && !r && animate) {
        const img = el.querySelector('.img') as HTMLElement;
        const inner = el.querySelector('.img-inner') as HTMLElement;
        const capEl = el.querySelector('.cap') as HTMLElement;
        const capPad = capEl.offsetHeight + vw(3.5);
        el.style.transitionDelay = '0s';
        el.style.transition = 'none';
        el.style.clipPath = `inset(0px -2px ${-capPad}px -2px)`;
        img.style.transition = 'none';
        inner.style.transition = 'none';
        el.getBoundingClientRect();
        el.style.transition = 'clip-path var(--dur) var(--ease)';
        el.style.clipPath = 'inset(0px -2px 100% -2px)';
        const done = (e: any) => {
          if (e.target !== el || e.propertyName !== 'clip-path') return;
          el.removeEventListener('transitionend', done);
          if (!computeRects(String(current))[it.id]) {
            el.classList.remove('on', 'large');
            el.style.transition = '';
            img.style.transition = '';
            inner.style.transition = '';
            el.querySelector('.cap')?.classList.remove('show', 'hide');
          }
        };
        el.addEventListener('transitionend', done);
        continue;
      }

      if (it.id === 'A' && kind === 'clipIn' && !was && r && animate) {
        const img = el.querySelector('.img') as HTMLElement;
        const inner = el.querySelector('.img-inner') as HTMLElement;
        const cap = el.querySelector('.cap') as HTMLElement;
        el.classList.add('on');
        el.style.transition = 'none';
        img.style.transition = 'none';
        inner.style.transition = 'none';
        resetItemVisuals(el);
        applyItemStyle(el, r, animate);
        clearTimeout(el._capT);
        cap.classList.remove('show', 'hide');
        applyCapText(el, r.capVariant);
        setCapDelay(cap, 0);
        setRect(el, r);
        el.style.zIndex = '1';
        el.style.clipPath = MASK_HIDDEN;
        el.getBoundingClientRect();
        el.style.transition = 'clip-path var(--dur) var(--ease)';
        el.style.transitionDelay = '0s';
        el.style.clipPath = MASK_SHOWN;
        whenDone(el, { prop: 'clip-path', fallbackMs: DUR_MS + 400 }).then(() => {
          if (current !== n) return;
          el.style.clipPath = '';
          el.style.transition = '';
          img.style.transition = '';
          inner.style.transition = '';
          cap.classList.add('show');
        });
        continue;
      }

      if (r && was) {
        const img = el.querySelector('.img') as HTMLElement;
        const inner = el.querySelector('.img-inner') as HTMLElement;
        img.style.transition = '';
        inner.style.transition = '';
        el.style.transition = '';
        el.style.clipPath = '';

        const survRank = fromRects[it.id] ? fromRects[it.id].colRank : r.colRank;
        const dSec = largeSwapClears
          ? (it.id === oldLargeId ? 0 : colDelay(r.colRank, animate, SWAP_COL_STAGGER_S))
          : colDelay(survRank, animate);
        const d = dSec + 's';
        el.style.transitionDelay = d;
        img.style.transitionDelay = d;
        inner.style.transitionDelay = d;

        const cap = el.querySelector('.cap') as HTMLElement;
        const fr = fromRects[it.id];
        const capWasShown = cap.classList.contains('show');
        const fromBottom = fr && fr.cap === 'bottom';
        const toBottom = r.cap === 'bottom';
        const modeChanged = animate && capWasShown && fr && fr.cap !== 'none' && r.cap !== 'none' && (fromBottom !== toBottom);
        const largeRefresh = animate && capWasShown && wasLarge && r.large;
        const variantChanged = animate && capWasShown && fr && fr.capVariant !== r.capVariant;
        const manageCap = modeChanged || largeRefresh || variantChanged;

        setRect(el, r);
        applyItemStyle(el, r, animate, manageCap);

        if (manageCap) {
          cap.classList.remove('show');
          cap.classList.add('hide');
          setCapDelay(cap, dSec);
          clearTimeout(el._capT);
          el._capT = setTimeout(() => {
            if (current !== n) return;
            applyCapText(el, r.capVariant);
            if (toBottom) {
              cap.style.position = 'absolute';
              cap.style.left = '0'; cap.style.right = '0'; cap.style.bottom = '0';
            } else {
              cap.style.position = 'static';
              cap.style.left = cap.style.right = cap.style.bottom = '';
            }
            setCapDelay(cap, 0);
            cap.classList.remove('hide');
            cap.classList.add('show');
          }, DUR_MS * CFG.time.capSwapAt);
        } else if (!cap.classList.contains('show')) {
          setCapDelay(cap, dSec);
        }

        el.style.zIndex = '2';
      }
      else if (r && !was) {
        const img = el.querySelector('.img') as HTMLElement;
        const inner = el.querySelector('.img-inner') as HTMLElement;
        el.classList.add('on');
        el.style.transition = 'none';
        img.style.transition = 'none';
        inner.style.transition = 'none';
        resetItemVisuals(el);
        applyItemStyle(el, r, animate);
        setRect(el, { ...r, top: animate ? offscreenTop(r) : r.top });
        el.style.zIndex = '1';
        el.getBoundingClientRect();
        el.style.transition = '';
        img.style.transition = '';
        inner.style.transition = '';

        const extra = (largeSwapClears && it.id === newLargeId) ? (LARGE_ENTRY_DELAY_MS / 1000) : 0;
        const delaySec = colDelay(r.colRank, animate) + extra;
        const delayStr = delaySec + 's';
        el.style.transitionDelay = delayStr;
        img.style.transitionDelay = delayStr;
        inner.style.transitionDelay = delayStr;
        el.style.top = r.top + 'px';

        setCapDelay(el.querySelector('.cap'), delaySec);
      }
      else if (!r && was) {
        const cur = { top: el.offsetTop, left: el.offsetLeft, height: el.offsetHeight };
        el.style.zIndex = '1';
        el.classList.remove('large');

        const cap = el.querySelector('.cap') as HTMLElement;
        clearTimeout(el._capT);
        if (cap.classList.contains('show')) {
          cap.classList.remove('show');
          cap.classList.add('hide');
        }

        if (!animate) { el.classList.remove('on'); continue; }

        const exitRank = fromRects[it.id] ? fromRects[it.id].colRank : 0;
        const exitSec = colDelay(exitRank, animate);
        el.style.transitionDelay = exitSec + 's';
        setCapDelay(cap, exitSec);
        el.style.top = offscreenTop(cur) + 'px';

        whenDone(el, {
          prop: 'top',
          fallbackMs: DUR_MS + exitSec * 1000 + 400,
        }).then(() => {
          if (computeRects(String(current))[it.id]) return;
          el.classList.remove('on', 'large');
          cap.classList.remove('show', 'hide');
          resetItemVisuals(el);
        });
      }
    }

    updateHero(n, animate, kind);
  }

  let curPair = 0, curSide = 'main';
  let wantPair = 0, wantSide = 'main';
  let busyTimer: any = null;
  let autoAdvanceTimer: any = null;

  function resetAutoAdvance() {
    if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = setTimeout(() => {
      if (busy || maskBusy) {
        resetAutoAdvance();
        return;
      }
      const nextPair = (wantPair + 1) % PAIRS.length;
      requestNav(nextPair, 'main');
    }, 5000);
  }

  function requestNav(pair: number, side: string) {
    if (busy) return;
    wantPair = pair;
    wantSide = side;
    resetAutoAdvance();
    pump();
  }

  function pump() {
    if (wantPair === curPair && wantSide === curSide) return;
    const n = PAIRS[wantPair][wantSide];
    if (n === current) {
      curPair = wantPair; curSide = wantSide;
      canvas.dataset.pair = String(wantPair + 1);
      return;
    }

    const sideFlip = (wantPair === curPair && wantSide !== curSide);

    if (maskBusy) { wantPair = curPair; wantSide = curSide; return; }

    curPair = wantPair; curSide = wantSide;
    canvas.dataset.pair = String(wantPair + 1);
    canvas.dataset.layout = n;

    busy = true;
    bumpAnim();

    let lockMs;
    if (sideFlip) {
      maskToggle(n, current, true, isScrollLayout(current), isScrollLayout(n));
      lockMs = MASK_LOCK_MS;
    } else {
      lockMs = applyLayout(n);
    }
    lockMs = Math.max(CFG.lock.min, lockMs);

    clearTimeout(busyTimer);
    busyTimer = setTimeout(() => { busy = false; }, lockMs);
  }

  const onKeyDown = (e: KeyboardEvent) => {
    const nums = Object.keys(BASE_LAYOUTS);
    const keys = [...nums, 'ArrowRight', 'ArrowLeft'];
    if (!keys.includes(e.key)) return;
    e.preventDefault();

    const numIdx = nums.indexOf(e.key);
    if (numIdx !== -1) { requestNav(numIdx, wantSide); return; }

    const side = (e.key === 'ArrowRight') ? 'mirror' : 'main';
    requestNav(wantPair, side);
  };
  window.addEventListener('keydown', onKeyDown);

  container.querySelector('#nav-left')?.addEventListener('click', () => requestNav(wantPair, 'main'));
  container.querySelector('#nav-right')?.addEventListener('click', () => requestNav(wantPair, 'mirror'));

  container.querySelectorAll('.nav-num-wrapper').forEach(el => {
    el.addEventListener('click', () => requestNav(parseInt((el as HTMLElement).dataset.idx || '0', 10), wantSide));
  });

  container.querySelectorAll('.svg-arrow-wrapper.is--next').forEach(el => {
    el.addEventListener('click', (e) => { e.stopPropagation(); coverManualStep(1); });
  });
  container.querySelectorAll('.svg-arrow-wrapper.is--prev').forEach(el => {
    el.addEventListener('click', (e) => { e.stopPropagation(); coverManualStep(-1); });
  });

  updateCoverIndex();

  let rT: any;
  let lastWinW = window.innerWidth;

  const onResize = () => {
    if (window.innerWidth === lastWinW) return;
    lastWinW = window.innerWidth;

    VW_PX = getVwPx();
    VH_PX = getVhPx();
    winW = window.innerWidth;
    winH = window.innerHeight;
    maxDist = Math.hypot(winW, winH);
    bumpAnim(600);
    canvas.classList.add('no-anim');
    applyLayout(String(current), false);
    clearTimeout(rT);
    rT = setTimeout(() => canvas.classList.remove('no-anim'), CFG.time.resizeSettle);
  };
  window.addEventListener('resize', onResize);

  let wheelBusy = false;
  const onWheel = (e: WheelEvent) => {
    const isAtStart = wantPair === 0;
    const isAtEnd = wantPair === PAIRS.length - 1;
    
    if (isAtStart && e.deltaY < 0) return;
    if (isAtEnd && e.deltaY > 0) return;

    e.preventDefault();
    if (busy || maskBusy || wheelBusy) return;

    if (Math.abs(e.deltaY) > 20) {
      wheelBusy = true;
      if (e.deltaY > 0) {
        requestNav(wantPair + 1, 'main');
      } else {
        requestNav(wantPair - 1, 'main');
      }
      setTimeout(() => { wheelBusy = false; }, 1000);
    }
  };
  container.addEventListener('wheel', onWheel, { passive: false });

  let touchStartY = 0;
  let touchBusy = false;
  const onTouchStart = (e: TouchEvent) => {
    touchStartY = e.touches[0].clientY;
  };
  const onTouchMove = (e: TouchEvent) => {
    const isAtStart = wantPair === 0;
    const isAtEnd = wantPair === PAIRS.length - 1;
    const deltaY = touchStartY - e.touches[0].clientY;
    
    if (isAtStart && deltaY < 0) return;
    if (isAtEnd && deltaY > 0) return;

    e.preventDefault();
    if (busy || maskBusy || touchBusy) return;

    if (Math.abs(deltaY) > 30) {
      touchBusy = true;
      if (deltaY > 0) {
        requestNav(wantPair + 1, 'main');
      } else {
        requestNav(wantPair - 1, 'main');
      }
      setTimeout(() => { touchBusy = false; }, 1000);
    }
  };
  container.addEventListener('touchstart', onTouchStart, { passive: true });
  container.addEventListener('touchmove', onTouchMove, { passive: false });

  function urlToPath(u: string) {
    const m = /url\((['"]?)(.*?)\1\)/.exec(u || '');
    return m ? m[2] : (u || '');
  }

  const _preloadedImages: any[] = [];

  function preloadAllImages() {
    const urls = new Set<string>();
    for (const it of ITEMS) urls.add(it.bg);
    urls.add(S2);

    let pending = urls.size;
    return new Promise<void>(resolve => {
      if (!pending) return resolve();
      urls.forEach(u => {
        const im = new Image();
        im.src = urlToPath(u);
        _preloadedImages.push(im);
        im.decode().catch(() => {}).finally(() => { if (--pending === 0) resolve(); });
      });
    });
  }

  let introStarted = false;

  function startIntro() {
    if (introStarted) return;
    introStarted = true;

    requestAnimationFrame(() => {
      canvas.classList.remove('no-anim');
      canvas.dataset.pair = '1';
      maskToggle('1', 0, true, false, false);
      bumpAnim();

      setTimeout(() => {
        topbarEls.forEach((el, index) => {
          (el as HTMLElement).style.transition = 'transform var(--dur) var(--ease)';
          (el as HTMLElement).style.transitionDelay = (index * 0.08) + 's';
          (el as HTMLElement).style.transform = 'translateY(0%)';
        });
      }, 100);

      setTimeout(() => { busy = false; resetAutoAdvance(); }, INTRO_LOCK_MS);
    });
  }

  let curMouseX = window.innerWidth / 2;
  let curMouseY = window.innerHeight / 2;
  let targetMouseX = curMouseX;
  let targetMouseY = curMouseY;

  const onMouseMove = (e: MouseEvent) => {
    targetMouseX = e.clientX;
    targetMouseY = e.clientY;
  };
  window.addEventListener('mousemove', onMouseMove);

  let winW = window.innerWidth;
  let winH = window.innerHeight;
  let maxDist = Math.hypot(winW, winH);

  const PARALLAX: any[] = [];
  for (const it of ITEMS) {
    const w = els[it.id].querySelector('.p-wrap');
    if (w) PARALLAX.push({ wrap: w, host: els[it.id], img: w.closest('.img'), item: true, tx: 0, ty: 0 });
  }
  {
    const w = hero.querySelector('.p-wrap');
    if (w) PARALLAX.push({ wrap: w, host: hero, img: w.closest('.img'), item: false, tx: 0, ty: 0 });
  }

  const PX_EPS = CFG.parallax.eps;
  let parallaxSettled = false;

  let parallaxRafId: number;

  function rafParallax() {
    const dxm = targetMouseX - curMouseX, dym = targetMouseY - curMouseY;
    const mouseMoving = Math.abs(dxm) > 0.1 || Math.abs(dym) > 0.1;

    if (!mouseMoving && parallaxSettled && performance.now() > animActiveUntil) {
      parallaxRafId = requestAnimationFrame(rafParallax);
      return;
    }

    if (mouseMoving) {
      curMouseX += dxm * CFG.parallax.follow;
      curMouseY += dym * CFG.parallax.follow;
    } else {
      curMouseX = targetMouseX;
      curMouseY = targetMouseY;
    }

    for (const p of PARALLAX) {
      const eligible = p.item
        ? (p.host.classList.contains('on') && p.host.classList.contains('large'))
        : p.host.classList.contains('on');
      if (eligible && !p.wrap._wasEligible) { p.wrap._px = 0; p.wrap._py = 0; p._force = true; }
      p.wrap._wasEligible = eligible;

      let tx = 0, ty = 0;
      if (eligible) {
        const rect = p.wrap.getBoundingClientRect();
        if (rect.width && rect.height) {
          const cX = rect.left + rect.width / 2;
          const cY = rect.top + rect.height / 2;
          const dist = Math.hypot(curMouseX - cX, curMouseY - cY);
          const intensity = Math.max(0, 1 - (dist / (maxDist * CFG.parallax.falloff)));
          const factor = CFG.parallax.floor + intensity * (1 - CFG.parallax.floor);
          tx = ((curMouseX / winW) - 0.5) * 2 * rect.width * CFG.parallax.amount * factor;
          ty = ((curMouseY / winH) - 0.5) * 2 * rect.height * CFG.parallax.amount * factor;
        }
      }
      p.tx = tx; p.ty = ty;
    }

    let allSettled = true;
    for (const p of PARALLAX) {
      const wrap = p.wrap;
      const cx = wrap._px || 0, cy = wrap._py || 0;
      let nx = cx + (p.tx - cx) * CFG.parallax.ease;
      let ny = cy + (p.ty - cy) * CFG.parallax.ease;
      if (Math.abs(p.tx - nx) < PX_EPS && Math.abs(p.ty - ny) < PX_EPS) { nx = p.tx; ny = p.ty; }
      else allSettled = false;
      if (!p._force && nx === cx && ny === cy) continue;
      p._force = false;

      wrap._px = nx; wrap._py = ny;
      const t = `translate(${nx}px, ${ny}px)`;
      wrap.style.transform = t;

      if (p.img && p.img.childElementCount > 1) {
        p.img.querySelectorAll('.cover-ov').forEach((o: any) => {
          o.style.transform = t + ' scale(var(--parallax-scale))';
        });
      }
    }
    parallaxSettled = allSettled && !mouseMoving;

    parallaxRafId = requestAnimationFrame(rafParallax);
  }

  parallaxRafId = requestAnimationFrame(rafParallax);

  canvas.classList.add('no-anim');
  current = 0;

  const topbarEls = container.querySelectorAll('.topbar .t-topbar-text');
  topbarEls.forEach(el => {
    (el as HTMLElement).style.transition = 'none';
    (el as HTMLElement).style.transform = 'translateY(-120%)';
  });

  busy = true;

  preloadAllImages().then(startIntro);
  setTimeout(startIntro, CFG.time.introFallback);

  return () => {
    if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    window.removeEventListener('keydown', onKeyDown);
    container.removeEventListener('wheel', onWheel);
    container.removeEventListener('touchstart', onTouchStart);
    container.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('mousemove', onMouseMove);
    cancelAnimationFrame(parallaxRafId);
    stopScrollRAF();
  };
}
