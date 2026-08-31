"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* ------------------------------------------------------------------ */
/*  Shared IntersectionObserver — reveal once when scrolled into view  */
/* ------------------------------------------------------------------ */
function useInViewOnce<T extends HTMLElement>(rootMargin = "0px 0px -12% 0px") {
  const ref = useRef<T>(null);
  // Always start hidden so SSR and first client render agree.
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    if (typeof IntersectionObserver === "undefined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- rare no-IO fallback
      setShown(true);
      return;
    }

    // Already on screen at mount (above the fold) — reveal immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- above-the-fold reveal
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown, rootMargin]);

  return { ref, shown };
}

type Tag = "div" | "span" | "section" | "li";

/* ------------------------------------------------------------------ */
/*  Reveal — fade + gentle rise                                        */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: Tag;
}) {
  const { ref, shown } = useInViewOnce<HTMLDivElement>();
  const Tag = as as "div";
  const style = {
    "--rv-y": `${y}px`,
    "--rv-delay": `${delay}s`,
  } as CSSProperties;

  return (
    <Tag ref={ref} className={`rv ${shown ? "in" : ""} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Stagger — children rise in sequence                                */
/* ------------------------------------------------------------------ */
export function Stagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, shown } = useInViewOnce<HTMLDivElement>();
  return (
    <div ref={ref} className={`stagger ${shown ? "in" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

/* ------------------------------------------------------------------ */
/*  RevealImage — mask container + inner scale/opacity settle          */
/* ------------------------------------------------------------------ */
export function RevealImage({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useInViewOnce<HTMLDivElement>("0px 0px -8% 0px");
  return (
    <div
      ref={ref}
      className={`rv-img ${shown ? "in" : ""} ${className}`.trim()}
      style={{ "--rv-delay": `${delay}s` } as CSSProperties}
    >
      <div className="rv-img-inner">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Parallax — inner layer drifts against scroll (rAF, shared)         */
/*  Wrap around a position:absolute inset-0 <Image fill /> layer.      */
/* ------------------------------------------------------------------ */
const parallaxRegistry = new Set<() => void>();
let parallaxRAF = 0;
let parallaxBound = false;

function scheduleParallax() {
  if (parallaxRAF) return;
  parallaxRAF = requestAnimationFrame(() => {
    parallaxRAF = 0;
    parallaxRegistry.forEach((fn) => fn());
  });
}

export function Parallax({
  children,
  className = "",
  distance = 8,
}: {
  children: ReactNode;
  className?: string;
  /** peak travel as a % of frame height, each direction */
  distance?: number;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const pad = distance * 1.8;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const update = () => {
      const el = outer.current;
      const layer = inner.current;
      if (!el || !layer) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -vh || rect.top > vh * 2) return;
      // progress: 0 when frame enters bottom, 1 when it leaves top
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const shift = -progress * distance;
      layer.style.transform = `translate3d(0, ${shift}%, 0)`;
    };

    parallaxRegistry.add(update);
    if (!parallaxBound) {
      window.addEventListener("scroll", scheduleParallax, { passive: true });
      window.addEventListener("resize", scheduleParallax, { passive: true });
      parallaxBound = true;
    }
    update();

    return () => {
      parallaxRegistry.delete(update);
    };
  }, [distance]);

  return (
    <div ref={outer} className={`overflow-hidden ${className}`.trim()}>
      <div
        ref={inner}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: `${-pad}%`,
          bottom: `${-pad}%`,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
