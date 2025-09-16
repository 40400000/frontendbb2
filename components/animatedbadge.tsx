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
        .am-new-label-wrapper { display: inline-flex; gap: 0.25rem; align-items: center; }
        .am-new-label.is-dark { transition: background 1s ease; }
        .am-new-label.is-dark.is-bigger { font-size: 0.625rem; }
        .am-grain-button {
          -webkit-mask-image:
            linear-gradient(to top, rgba(0,0,0,0) 3%, rgba(0,0,0,1) 13%, rgba(0,0,0,1) 87%, rgba(0,0,0,0) 97%),
            linear-gradient(to left, rgba(0,0,0,0) 1%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 99%),
            radial-gradient(ellipse at center, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 87%);
          -webkit-mask-size: 100% 100%;
          -webkit-mask-composite: intersect;
          mask-image:
            linear-gradient(to top, rgba(0,0,0,0) 3%, rgba(0,0,0,1) 13%, rgba(0,0,0,1) 87%, rgba(0,0,0,0) 97%),
            linear-gradient(to left, rgba(0,0,0,0) 1%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 99%),
            radial-gradient(ellipse at center, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 87%);
          mask-size: 100% 100%;
          mask-composite: intersect;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}


