"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient background: a FLOW FIELD. Hundreds of tiny particles drift along an invisible,
 * slowly-shifting vector field, tracing soft curved trails in indigo→mint — "data in
 * constant motion." Low opacity, canvas (GPU-friendly), pauses off-screen / tab-hidden,
 * and renders a faint static frame for prefers-reduced-motion.
 */
export function SignalLines() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let dpr = 1;
    let W = 0;
    let H = 0;
    const resize = () => {
      const p = canvas.parentElement;
      W = p?.clientWidth || window.innerWidth;
      H = p?.clientHeight || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(W * dpr));
      canvas.height = Math.max(1, Math.floor(H * dpr));
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // --- lightweight pseudo-noise flow field (cheap, no deps) ---
    // Angle at (x,y,t) from layered sines — smooth, organic, seamless.
    const field = (x: number, y: number, t: number) => {
      const s = 0.0016;
      const a =
        Math.sin(x * s + t) +
        Math.cos(y * s * 1.3 - t * 0.8) +
        Math.sin((x + y) * s * 0.7 + t * 0.6);
      return a * 1.1; // radians
    };

    type P = { x: number; y: number; life: number; maxLife: number; mint: boolean; speed: number };
    const COUNT = Math.min(220, Math.round((W * H) / 9000));
    const spawn = (): P => ({
      x: Math.random() * W,
      y: Math.random() * H,
      life: 0,
      maxLife: 120 + Math.random() * 180,
      mint: Math.random() > 0.5,
      speed: 0.5 + Math.random() * 0.9,
    });
    let particles: P[] = Array.from({ length: COUNT }, spawn);

    let raf = 0;
    let running = false;
    let onScreen = true;
    let t = 0;

    const step = () => {
      t += 0.0016;
      // fade the previous frame slightly instead of clearing — leaves soft trails
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(7, 14, 25, 0.16)"; // site ink base, low alpha = long trails
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";

      for (const p of particles) {
        const ang = field(p.x, p.y, t);
        p.x += Math.cos(ang) * p.speed;
        p.y += Math.sin(ang) * p.speed;
        p.life += 1;

        const fade =
          Math.min(p.life, 40) / 40 *
          Math.min(p.maxLife - p.life, 40) / 40; // ease in/out over lifetime
        const alpha = 0.16 * Math.max(0, fade);
        ctx.fillStyle = p.mint
          ? `rgba(21, 243, 175, ${alpha})`
          : `rgba(124, 118, 240, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
        ctx.fill();

        if (p.life >= p.maxLife || p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20) {
          Object.assign(p, spawn());
        }
      }
      ctx.globalCompositeOperation = "source-over";
      if (running) raf = requestAnimationFrame(step);
    };

    const clearBase = () => {
      ctx.fillStyle = "rgba(7, 14, 25, 1)";
      ctx.fillRect(0, 0, W, H);
    };

    const start = () => {
      if (running || reduce || !onScreen || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const handleResize = () => {
      resize();
      particles = Array.from({ length: Math.min(220, Math.round((W * H) / 9000)) }, spawn);
      clearBase();
    };
    window.addEventListener("resize", handleResize);

    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (e) => {
              onScreen = e[0]?.isIntersecting ?? true;
              onScreen ? start() : stop();
            },
            { threshold: 0 },
          )
        : null;
    if (io) io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    clearBase();
    if (reduce) {
      running = true;
      for (let i = 0; i < 60; i++) step(); // render a few frames to a soft static field
      running = false;
    } else {
      start();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", onVis);
      io?.disconnect();
      stop();
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
