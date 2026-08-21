'use client';

import { useEffect, useRef } from 'react';

/**
 * Twinkling starfield → cottage reveal.
 *
 * Stars scatter and twinkle across the full viewport. As the user scrolls,
 * the stars converge toward the center and fade, while the cottage image
 * fades in — giving the impression the stars assembled into the house.
 *
 * The cottage image sits behind the canvas in a fixed-position container.
 * Canvas handles the stars; CSS handles the image opacity driven by a
 * CSS variable that the canvas loop sets on scroll.
 */

// ─── Star config ────────────────────────────────────────────────────────────

function hash(a: number, b: number): number {
  const n = Math.sin(a * 127.1 + b * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

type Star = {
  /** Scattered position (0-1 of viewport) */
  sx: number;
  sy: number;
  /** Converge target: center-biased (0-1 of viewport) */
  tx: number;
  ty: number;
  size: number;
  isAccent: boolean;
  baseBrightness: number;
  twinkleSpeed: number;
  twinklePhase: number;
  twinkleAmp: number;
};

function buildStars(): Star[] {
  const stars: Star[] = [];

  for (let i = 0; i < 280; i++) {
    const a = hash(i, 17);
    const b = hash(i, 53);
    const c = hash(i, 89);
    const d = hash(i, 131);
    const e = hash(i, 197);
    const f = hash(i, 251);
    const g = hash(i, 307);

    // Scattered across full viewport
    const sx = -0.05 + a * 1.1;
    const sy = -0.05 + b * 1.1;

    // Converge target: biased toward center where the image will appear
    // Use gaussian-ish distribution toward center
    const tx = 0.35 + c * 0.3;
    const ty = 0.25 + d * 0.5;

    stars.push({
      sx,
      sy,
      tx,
      ty,
      size: 4 + Math.round(e * 7),
      isAccent: g > 0.65,
      baseBrightness: 0.12 + f * 0.18,
      twinkleSpeed: 0.6 + c * 2.8,
      twinklePhase: d * Math.PI * 2,
      twinkleAmp: 0.25 + e * 0.45,
    });
  }

  return stars;
}

const stars = buildStars();

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

function ramp(v: number, from: number, to: number): number {
  return clamp01((v - from) / (to - from));
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function MosaicHouseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const startTime = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const imageEl = imageRef.current;
    if (!canvas || !imageEl) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Preload the cottage image and strip the checkerboard background
    let cottageCanvas: HTMLCanvasElement | null = null;
    const cottageImg = new Image();
    cottageImg.src = '/brand/Gemini_Generated_Image_dqnfyldqnfyldqnf.jpg';
    cottageImg.onload = () => {
      // Draw to offscreen canvas and remove checkerboard pixels
      const offscreen = document.createElement('canvas');
      offscreen.width = cottageImg.width;
      offscreen.height = cottageImg.height;
      const offCtx = offscreen.getContext('2d')!;
      offCtx.drawImage(cottageImg, 0, 0);
      const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
      const px = imageData.data;

      for (let i = 0; i < px.length; i += 4) {
        const r = px[i], g = px[i + 1], b = px[i + 2];
        // The checkerboard is two colours: ~(191-194, 191-194, 191-194) and ~(255, 255, 255)
        // Both are low-saturation, high-lightness. The house pixels have colour/saturation.
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const sat = max > 0 ? (max - min) / max : 0;
        const lightness = (r + g + b) / 3;

        if (sat < 0.1 && lightness > 175) {
          // Pure checkerboard — fully transparent
          px[i + 3] = 0;
        } else if (sat < 0.15 && lightness > 155) {
          // Edge/transition pixel — partial transparency for smooth edges
          const fade = ((lightness - 155) / 20) * ((0.15 - sat) / 0.05);
          px[i + 3] = Math.round(px[i + 3] * (1 - clamp01(fade)));
        }
      }

      offCtx.putImageData(imageData, 0, 0);
      cottageCanvas = offscreen;
    };

    let w = 0;
    let h = 0;
    let accent = 'rgb(45, 212, 191)';
    let ink = 'rgb(232, 240, 237)';
    let isLight = false;

    startTime.current = performance.now();

    function readTheme() {
      isLight = document.documentElement.getAttribute('data-theme') === 'light';
      accent = isLight ? 'rgb(15, 94, 82)' : 'rgb(45, 212, 191)';
      ink = isLight ? 'rgb(16, 24, 21)' : 'rgb(232, 240, 237)';
    }

    function draw() {
      if (!ctx) return;

      const now = (performance.now() - startTime.current) / 1000;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? clamp01(window.scrollY / scrollable) : 0;

      // Stars converge between 0-40% scroll
      const converge = reduceMotion ? 1 : ramp(progress, 0, 0.4);
      // Stars fade out between 25-45% scroll
      const starFade = 1 - ramp(progress, 0.25, 0.45);
      // Image fades in between 20-42% scroll
      const imageFade = ramp(progress, 0.2, 0.42);
      // Everything retires after 55% scroll for clean contrast below
      const presence = 1 - ramp(progress, 0.5, 0.65);

      // Drive the cottage image opacity — hidden from DOM, drawn on canvas
      imageEl!.style.opacity = '0';

      ctx.clearRect(0, 0, w, h);

      // Draw the processed cottage (checkerboard removed) if ready and visible
      if (cottageCanvas && imageFade * presence > 0.01) {
        const imgAspect = cottageCanvas.width / cottageCanvas.height;
        const drawH = h * 0.7;
        const drawW = drawH * imgAspect;
        const drawX = (w - drawW) / 2;
        const drawY = (h - drawH) / 2;

        ctx.save();
        ctx.globalAlpha = imageFade * presence * 0.4;
        ctx.drawImage(cottageCanvas, drawX, drawY, drawW, drawH);
        ctx.restore();
      }

      // Normal composite for stars
      ctx.globalCompositeOperation = 'source-over';

      const starAlphaGlobal = starFade * presence;
      if (starAlphaGlobal <= 0.002) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const easedConverge = easeOutCubic(converge);

      for (const star of stars) {
        // Position: lerp from scattered to converge target
        const x = (star.sx + (star.tx - star.sx) * easedConverge) * w;
        const y = (star.sy + (star.ty - star.sy) * easedConverge) * h;

        // Size stays mostly consistent, slight compression as they converge
        const size = star.size * (1 - easedConverge * 0.25);

        // Twinkle
        const twinkle = reduceMotion
          ? 0.6
          : 0.5 + star.twinkleAmp * 0.5 * Math.sin(now * star.twinkleSpeed + star.twinklePhase);

        const alpha = star.baseBrightness * twinkle * starAlphaGlobal;
        if (alpha <= 0.003) continue;

        ctx.save();
        ctx.translate(x, y);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = star.isAccent ? accent : ink;
        ctx.beginPath();
        ctx.roundRect(-size / 2, -size / 2, size, size, 1.5);
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    readTheme();
    resize();
    rafRef.current = requestAnimationFrame(draw);

    window.addEventListener('resize', resize, { passive: true });

    const themeWatcher = new MutationObserver(() => {
      readTheme();
    });
    themeWatcher.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
      themeWatcher.disconnect();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {/* Hidden ref for lifecycle only — cottage is drawn on canvas */}
      <div ref={imageRef} className="hidden" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  );
}
