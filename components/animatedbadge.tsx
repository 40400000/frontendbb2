"use client";

import { useEffect, useRef } from "react";

interface AnimatedBadgeProps {
  label?: string;
  className?: string;
}

export function Animatedbadge({ label = "POPULAR", className = "" }: AnimatedBadgeProps) {
  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = labelRef.current;
    if (!element) return;

    function interpolate(value1: number, value2: number, factor: number) {
      return value1 + (value2 - value1) * factor;
    }

    function getRandom(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function easeInOutQuad(t: number) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function animateRandomGradient(
      duration: number,
      previousStop1: number,
      previousStop2: number,
      previousX: number,
      previousY: number,
      el: HTMLElement
    ) {
      const newStop1 = getRandom(20, 40);
      const newStop2 = getRandom(50, 100);
      const newX = getRandom(-30, 10);
      const newY = getRandom(-30, 10);

      const startTime = performance.now();

      function updateGradient(currentTime: number) {
        const elapsedTime = currentTime - startTime;
        const factor = Math.min(elapsedTime / duration, 1);
        const easedFactor = easeInOutQuad(factor);

        const stop1 = interpolate(previousStop1, newStop1, easedFactor);
        const stop2 = interpolate(previousStop2, newStop2, easedFactor);
        const posX = interpolate(previousX, newX, easedFactor);
        const posY = interpolate(previousY, newY, easedFactor);

        el.style.background = `radial-gradient(386.06% 162.79% at ${posX}% ${posY}%, #E8400D 0%, #FFEED8 ${stop1}%, #D0B2FF ${stop2}%)`;

        if (factor < 1) requestAnimationFrame(updateGradient);
        else animateRandomGradient(duration, newStop1, newStop2, newX, newY, el);
      }

      requestAnimationFrame(updateGradient);
    }

    const initialStop1 = 30;
    const initialStop2 = 90;
    const initialX = 4.55;
    const initialY = 14.58;

    animateRandomGradient(
      750,
      initialStop1,
      initialStop2,
      initialX,
      initialY,
      element
    );

    return () => {
      // no cleanup required for requestAnimationFrame chain beyond unmount; GC drops callbacks
    };
  }, []);

  return (
    <div className={`am-new-label-wrapper ${className}`}>
      <div
        ref={labelRef}
        className="am-new-label is-dark is-bigger"
        style={{
          background:
            "radial-gradient(386.06% 162.79% at 6.68432% -11.6225%, #E8400D 0%, #FFEED8 31.3084%, #D0B2FF 72.0538%)",
          color: "#0E0E0E",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px 8px",
          borderRadius: "4px",
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: 0.5,
        }}
      >
        <div>{label}</div>
      </div>
      <div className="am-grain-button" />
      <style>{`
        .am-new-label-wrapper { position: relative; display: inline-flex; gap: 0.25rem; align-items: center; }
        .am-new-label.is-dark { transition: background 1s ease; }
        .am-new-label.is-dark.is-bigger { font-size: 0.625rem; }
        .am-grain-button {
          position: absolute;
          inset: -4px;
          border-radius: 8px;
          z-index: 10;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.08' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          background-size: 20px 20px;
          opacity: 0.25;
        }
      `}</style>
    </div>
  );
}


