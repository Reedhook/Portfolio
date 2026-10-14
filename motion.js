function textType(el, options) {
  const {
    text,
    typingSpeed = 50,
    initialDelay = 0,
    pauseDuration = 2000,
    deletingSpeed = 30,
    loop = true,
    showCursor = true,
    hideCursorWhileTyping = false,
    cursorCharacter = "|",
    cursorBlinkDuration = 0.5,
    startOnVisible = false,
    reverseMode = false,
    variableSpeed,
  } = options;

  if (el._textTypeStop) el._textTypeStop();

  const textArray = Array.isArray(text) ? text : [text];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  el.classList.add("text-type");
  el.replaceChildren();
  const content = document.createElement("span");
  content.className = "text-type__content";
  const cursor = document.createElement("span");
  cursor.className = "text-type__cursor";
  cursor.textContent = cursorCharacter;
  cursor.setAttribute("aria-hidden", "true");
  if (!showCursor) cursor.classList.add("text-type__cursor--hidden");
  el.append(content, cursor);

  if (reduce) {
    content.textContent = textArray.join("\n");
    cursor.classList.add("text-type__cursor--hidden");
    el._textTypeStop = null;
    return;
  }

  let displayed = "";
  let charIndex = 0;
  let deleting = false;
  let textIndex = 0;
  let stopped = false;
  let timer = 0;
  let blink = null;
  let observer = null;

  const stop = () => {
    stopped = true;
    clearTimeout(timer);
    if (blink) blink.kill();
    if (observer) observer.disconnect();
  };
  el._textTypeStop = stop;

  if (showCursor && typeof gsap !== "undefined") {
    gsap.set(cursor, { opacity: 1 });
    blink = gsap.to(cursor, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }

  const speed = () => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  };

  const paint = () => {
    content.textContent = displayed;
    const current = textArray[textIndex];
    const hide = hideCursorWhileTyping && (charIndex < current.length || deleting);
    cursor.classList.toggle("text-type__cursor--hidden", hide);
  };

  const tick = () => {
    if (stopped) return;
    const current = textArray[textIndex];
    const processed = reverseMode ? [...current].reverse().join("") : current;

    if (deleting) {
      if (displayed === "") {
        deleting = false;
        if (textIndex === textArray.length - 1 && !loop) return;
        textIndex = (textIndex + 1) % textArray.length;
        charIndex = 0;
        tick();
        return;
      }
      timer = setTimeout(() => {
        displayed = displayed.slice(0, -1);
        paint();
        tick();
      }, deletingSpeed);
      return;
    }

    if (charIndex < processed.length) {
      timer = setTimeout(() => {
        displayed += processed[charIndex];
        charIndex += 1;
        paint();
        tick();
      }, speed());
      return;
    }

    if (!loop && textIndex === textArray.length - 1) return;
    timer = setTimeout(() => {
      deleting = true;
      tick();
    }, pauseDuration);
  };

  const begin = () => {
    timer = setTimeout(tick, initialDelay);
  };

  if (startOnVisible) {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          observer = null;
          begin();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  } else {
    begin();
  }
}

function paintHeading() {
  const h1 = document.getElementById("title");
  const html = h1?.dataset.html;
  if (!h1 || !html || h1.dataset.blur === html) return false;
  h1.dataset.blur = html;
  const holder = document.createElement("div");
  holder.innerHTML = html;
  const walk = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (!part.trim()) {
            frag.append(part);
            return;
          }
          const span = document.createElement("span");
          span.className = "blur-word";
          span.textContent = part;
          frag.append(span);
        });
        child.replaceWith(frag);
      } else {
        walk(child);
      }
    });
  };
  walk(holder);
  h1.replaceChildren(...holder.childNodes);
  return true;
}

function paintCount(el, value) {
  const n = Math.round(value);
  if (el.dataset.money && typeof money === "function") el.textContent = money(n);
  else el.textContent = String(n);
}

function bindSpotlight() {
  if (document.body.dataset.spot) return;
  document.body.dataset.spot = "1";
  const move = (event) => {
    document.querySelectorAll(".spotlight").forEach((card) => {
      const rect = card.getBoundingClientRect();
      const near =
        event.clientX >= rect.left - 80 &&
        event.clientX <= rect.right + 80 &&
        event.clientY >= rect.top - 80 &&
        event.clientY <= rect.bottom + 80;
      card.style.setProperty("--sx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--sy", `${event.clientY - rect.top}px`);
      card.classList.toggle("is-lit", near);
    });
  };
  window.addEventListener("pointermove", move, { passive: true });
}

function playMotion() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const video = document.querySelector(".reel video");
  const first = !document.body.dataset.intro;
  const headingReady = paintHeading();
  bindSpotlight();
  if (reduce && video) {
    video.pause();
    video.removeAttribute("autoplay");
  }
  if (reduce || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    document.body.dataset.intro = "1";
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  if (first) {
    document.body.dataset.intro = "1";
    gsap.from(".top-inner > *", {
      y: -16,
      opacity: 0,
      duration: 0.7,
      stagger: 0.06,
      ease: "power3.out",
    });
    gsap.from(".eyebrow, .lede, .hero-actions, .type-line", {
      y: 18,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      delay: 0.15,
      ease: "power3.out",
    });
    if (headingReady) {
      gsap.from(".blur-word", {
        y: 22,
        opacity: 0,
        filter: "blur(12px)",
        duration: 0.8,
        stagger: 0.045,
        ease: "power3.out",
      });
    }
    gsap.from(".reel", {
      y: 28,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });
    gsap.utils.toArray("[data-count]").forEach((el) => {
      const target = Number(el.dataset.count);
      const obj = { n: 0 };
      const inView = el.getBoundingClientRect().top < window.innerHeight * 0.95;
      gsap.to(obj, {
        n: target,
        duration: 1.25,
        ease: "power2.out",
        scrollTrigger: inView ? undefined : { trigger: el, start: "top 90%" },
        onUpdate: () => paintCount(el, obj.n),
      });
    });
  }

  ScrollTrigger.create({
    start: 24,
    onToggle(self) {
      const bar = document.querySelector(".top");
      if (bar) bar.classList.toggle("is-scrolled", self.isActive);
    },
  });

  gsap.utils.toArray(".case, .extra").forEach((el, index) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    gsap.from(el, {
      y: 28,
      opacity: 0,
      duration: 0.7,
      delay: Math.min(index, 4) * 0.05,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 90%" },
    });
  });

  const prices = document.querySelector(".prices");
  if (prices && prices.getBoundingClientRect().top >= window.innerHeight * 0.92) {
    gsap.from(".price", {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: prices, start: "top 86%" },
    });
  }

  const factors = document.querySelector(".factors");
  if (factors && factors.getBoundingClientRect().top >= window.innerHeight * 0.92) {
    gsap.from(".factors li", {
      y: 12,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: { trigger: factors, start: "top 88%" },
    });
  }

  const contact = document.querySelector(".contact");
  if (contact && contact.getBoundingClientRect().top >= window.innerHeight * 0.92) {
    gsap.from(".contact > *", {
      y: 24,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: contact, start: "top 86%" },
    });
  }
}

const PIXEL_MAX = 120;
const PIXEL_STEPS = 14;
const PIXEL_PATTERNS = {
  random: () => null,
  center: (x, y) => Math.hypot(x - 0.5, y - 0.5) / Math.SQRT1_2,
  edges: (x, y) => Math.min(x, 1 - x, y, 1 - y) * 2,
  "left-to-right": (x) => x,
  "right-to-left": (x) => 1 - x,
  "top-to-bottom": (_x, y) => y,
  "bottom-to-top": (_x, y) => 1 - y,
  diagonal: (x, y) => (x + y) / 2,
  spiral: (x, y) => {
    const angle = (Math.atan2(y - 0.5, x - 0.5) + Math.PI) / (Math.PI * 2);
    const radius = Math.hypot(x - 0.5, y - 0.5) / Math.SQRT1_2;
    return (angle + radius) % 1;
  },
};

function pixelClamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function pixelNoise(seed) {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
}

function pixelEasing(value) {
  const match = /cubic-bezier\(([^)]+)\)/.exec(value);
  const points = match ? match[1].split(",").map(Number) : null;
  const [x1, y1, x2, y2] = points && points.length === 4 ? points : [0.22, 1, 0.36, 1];
  if (x1 === y1 && x2 === y2) return (progress) => progress;
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;
  return (progress) => {
    let t = progress;
    for (let i = 0; i < 5; i += 1) {
      const slope = (3 * ax * t + 2 * bx) * t + cx;
      if (!slope) break;
      t -= (((ax * t + bx) * t + cx) * t - progress) / slope;
    }
    t = pixelClamp(t, 0, 1);
    return ((ay * t + by) * t + cy) * t;
  };
}

function pixelCoverScale(size, gap, radius) {
  const p = pixelClamp(radius, 0, 50) / 100;
  const corner = Math.SQRT1_2 / (Math.SQRT2 * (0.5 - p) + p);
  return ((size + gap) / size) * Math.max(1, corner);
}

function pixelGrid({ width, height, pixelSize, gap, pattern, randomness }) {
  let size = pixelSize;
  let columns = Math.max(1, Math.ceil((width + gap) / (size + gap)));
  let rows = Math.max(1, Math.ceil((height + gap) / (size + gap)));
  if (columns * rows > PIXEL_MAX) {
    size = Math.ceil(size * Math.sqrt((columns * rows) / PIXEL_MAX));
    columns = Math.max(1, Math.ceil((width + gap) / (size + gap)));
    rows = Math.max(1, Math.ceil((height + gap) / (size + gap)));
  }
  const stride = size + gap;
  const originX = (width - (columns * stride - gap)) / 2;
  const originY = (height - (rows * stride - gap)) / 2;
  const order = PIXEL_PATTERNS[pattern] || PIXEL_PATTERNS.random;
  const mix = pixelClamp(randomness, 0, 1);
  const pixels = [];
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const index = row * columns + column;
      const x = columns <= 1 ? 0.5 : column / (columns - 1);
      const y = rows <= 1 ? 0.5 : row / (rows - 1);
      const base = order(x, y);
      const random = pixelNoise(index + 1);
      pixels.push({
        left: originX + column * stride,
        top: originY + row * stride,
        offset: base === null ? random : base * (1 - mix) + random * mix,
      });
    }
  }
  return { pixels, size, gap, width, height };
}

function pixelKeyframes({ ease, startScale, endScale, spin, fade }) {
  const frame = [];
  const content = [];
  for (let step = 0; step <= PIXEL_STEPS; step += 1) {
    const progress = step / PIXEL_STEPS;
    const eased = ease(progress);
    const scale = startScale + (endScale - startScale) * eased;
    const angle = spin * (1 - eased);
    frame.push({
      offset: progress,
      opacity: fade ? Math.min(1, eased * 1.6) : 1,
      transform: `rotate(${angle}deg) scale(${scale})`,
    });
    content.push({
      offset: progress,
      transform: `scale(${1 / scale}) rotate(${-angle}deg)`,
    });
  }
  return { frame, content };
}

function pixelShot() {
  const source = document.createElement("div");
  source.className = "pixel-swap__source";
  const pieces = document.querySelectorAll(
    ".top, .hero, .block-head, .note, .case, .extra, .prices, .factors-title, .factors, .contact"
  );

  pieces.forEach((el) => {
    if (el.closest(".pixel-swap-freeze, .pixel-swap__grid")) return;
    const rect = el.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;
    if (rect.bottom < -4 || rect.top > window.innerHeight + 4) return;

    const clone = el.cloneNode(true);
    clone.querySelectorAll("video").forEach((video) => {
      const img = document.createElement("img");
      img.src = video.getAttribute("poster") || "";
      img.alt = "";
      img.style.cssText = "display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;";
      video.replaceWith(img);
    });
    clone.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
    clone.style.position = "absolute";
    clone.style.top = `${rect.top}px`;
    clone.style.left = `${rect.left}px`;
    clone.style.width = `${rect.width}px`;
    clone.style.height = `${rect.height}px`;
    clone.style.margin = "0";
    clone.style.transform = "none";
    clone.style.maxWidth = "none";
    source.append(clone);
  });

  return source;
}

function pixelRevealInView() {
  if (typeof gsap === "undefined") return;
  gsap.utils.toArray(".case, .extra, .price, .factors li, .contact > *").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.bottom > 64 && rect.top < window.innerHeight) {
      gsap.killTweensOf(el);
      gsap.set(el, { opacity: 1, x: 0, y: 0 });
    }
  });
  if (typeof ScrollTrigger !== "undefined") ScrollTrigger.update();
}

function pixelSwap(mutate) {
  if (typeof mutate !== "function") return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || pixelSwap.busy) {
    mutate();
    return;
  }
  pixelSwap.busy = true;

  const finish = (freeze, gridEl, animations) => {
    animations.forEach((animation) => animation.cancel());
    freeze?.remove();
    gridEl?.remove();
    pixelSwap.busy = false;
  };

  const freeze = document.createElement("div");
  freeze.className = "pixel-swap-freeze";
  freeze.append(pixelShot());
  document.body.append(freeze);

  try {
    mutate();
    pixelRevealInView();
    const line = document.getElementById("type-line");
    const typed = line?.querySelector(".text-type__content");
    const saved = typed ? typed.textContent : null;
    if (typed && line.dataset.typed) typed.textContent = line.dataset.typed.split("\n")[0];
    const incoming = pixelShot();
    if (typed && saved !== null) typed.textContent = saved;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const grid = pixelGrid({
      width,
      height,
      pixelSize: 64,
      gap: 0,
      pattern: "random",
      randomness: 0,
    });
    const endScale = pixelCoverScale(grid.size, grid.gap, 0);
    const keyframes = pixelKeyframes({
      ease: pixelEasing("cubic-bezier(0.22, 1, 0.36, 1)"),
      startScale: 0.35 * endScale,
      endScale,
      spin: 0,
      fade: true,
    });
    const total = 1100;
    const pixelMs = 420;
    const spread = total - pixelMs;
    const gridEl = document.createElement("div");
    gridEl.className = "pixel-swap__grid";
    const animations = [];

    grid.pixels.forEach((pixel) => {
      const pixelElement = document.createElement("div");
      pixelElement.className = "pixel-swap__pixel";
      pixelElement.style.left = `${pixel.left}px`;
      pixelElement.style.top = `${pixel.top}px`;
      pixelElement.style.width = `${grid.size}px`;
      pixelElement.style.height = `${grid.size}px`;

      const content = document.createElement("div");
      content.className = "pixel-swap__pixel-content";
      content.style.left = `${-pixel.left}px`;
      content.style.top = `${-pixel.top}px`;
      content.style.width = `${width}px`;
      content.style.height = `${height}px`;
      content.style.transformOrigin = `${pixel.left + grid.size / 2}px ${pixel.top + grid.size / 2}px`;
      content.append(incoming.cloneNode(true));
      pixelElement.append(content);
      gridEl.append(pixelElement);

      const timing = { duration: pixelMs, delay: pixel.offset * spread, easing: "linear", fill: "both" };
      animations.push(pixelElement.animate(keyframes.frame, timing), content.animate(keyframes.content, timing));
    });

    document.body.append(gridEl);
    window.setTimeout(() => finish(freeze, gridEl, animations), total);
  } catch (error) {
    finish(freeze, null, []);
    throw error;
  }
}
