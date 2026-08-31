"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const sec = sectionRef.current;
        if (!sec) return;
        const h = sec.offsetHeight;
        const p = Math.min(Math.max(-sec.getBoundingClientRect().top / h, 0), 1);
        if (videoWrapRef.current)
          videoWrapRef.current.style.transform = `scale(${1 + p * 0.12})`;
        if (dimRef.current) dimRef.current.style.opacity = String(0.3 + p * 0.35);
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${p * 80}px)`;
          contentRef.current.style.opacity = String(Math.max(1 - p * 1.7, 0));
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[600px] w-full bg-limestone p-2 md:p-3"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[clamp(28px,3.5vw,52px)] bg-espresso">
        <div ref={videoWrapRef} className="absolute inset-0 will-change-transform">
          <video
            className="h-full w-full object-cover"
            playsInline
            loop
            muted
            autoPlay
            preload="auto"
            poster="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/PearlPevilion/ultra%20luxury%20boutique%20hotel%20room%20in%20Kigali%20Rwanda%20with%20skyline%20view.jpg"
          >
            <source src="/videos/pinnacle-kigali.webm" type="video/webm" />
          </video>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-espresso/45 via-transparent to-espresso/85" />
        <div ref={dimRef} className="pointer-events-none absolute inset-0 bg-espresso opacity-30" />

        <div
          ref={contentRef}
          className="absolute inset-0 flex flex-col justify-end will-change-transform"
        >
          <div className="shell w-full pb-[24vh] sm:pb-40 md:pb-44">
            <div className="max-w-[62rem]">
              <p className="eyebrow eyebrow-light mb-6 flex items-center gap-4 [animation:hero-fade_.9s_.35s_both]">
                <span className="h-px w-10 bg-ivory/40" />
                A love letter to Kigali
              </p>

              <h1 className="display text-ivory text-[clamp(2.4rem,6.6vw,6rem)]">
                {["Not all love letters", "are written with", "pen and paper"].map(
                  (line, i) => (
                    <span key={line} className="block overflow-hidden py-[0.06em]">
                      <span
                        className="block [animation:hero-line_1.1s_both]"
                        style={{ animationDelay: `${0.45 + i * 0.12}s` }}
                      >
                        {i === 2 ? (
                          <>
                            pen and <span className="italic text-gold">paper</span>
                          </>
                        ) : (
                          line
                        )}
                      </span>
                    </span>
                  ),
                )}
              </h1>

              <p
                className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-ivory/70 [animation:hero-fade_.9s_both]"
                style={{ animationDelay: "0.95s" }}
              >
                A boutique hotel of nine rooms above Rwanda&apos;s capital of a
                thousand hills. From our family to yours.
              </p>
            </div>
          </div>
        </div>

        <a
          href="https://time.com/collection/worlds-greatest-places/2026/the-pinnacle-kigali/"
          target="_blank"
          rel="noopener noreferrer"
          className="chip absolute right-4 top-24 text-ivory/80 backdrop-blur-sm transition-colors hover:text-ivory md:right-8 md:top-28 [animation:hero-fade_.9s_1s_both]"
        >
          <span className="h-1 w-1 rounded-full bg-gold" />
          TIME · World&apos;s Greatest Places 2026
        </a>

        <div className="absolute bottom-14 right-4 hidden flex-col items-center gap-3 md:right-8 md:flex">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-ivory/45 [writing-mode:vertical-lr]">
            Scroll
          </span>
          <span className="relative h-12 w-px overflow-hidden bg-ivory/15">
            <span className="absolute left-0 top-0 block h-4 w-px bg-ivory/70 [animation:hero-scroll_2s_ease-in-out_infinite]" />
          </span>
        </div>
      </div>
    </section>
  );
}
