"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Rooms", href: "/rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Experiences", href: "/experiences" },
  { label: "Amenities", href: "/amenities" },
  { label: "Our Story", href: "/about" },
];

const BOOKING_URL = "https://www.thepinnaclekigali.com/";

function Wordmark({ tone }: { tone: "light" | "dark" }) {
  const main = tone === "light" ? "text-ivory" : "text-ink";
  const sub = tone === "light" ? "text-ivory/55" : "text-stone";
  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-display text-[15px] md:text-[16px] tracking-[0.3em] uppercase ${main} transition-colors duration-500`}
      >
        The Pinnacle
      </span>
      <span
        className={`font-sans text-[9px] md:text-[10px] tracking-[0.62em] uppercase ${sub} mt-1 transition-colors duration-500`}
      >
        Kigali
      </span>
    </span>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y < 140) setHidden(false);
      else if (y > 320 && y > lastY.current + 6) setHidden(true);
      else if (y < lastY.current - 6) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const tone: "light" | "dark" = scrolled || menuOpen ? "dark" : "light";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center px-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hidden && !menuOpen ? "-translate-y-[140%]" : "translate-y-0"
        }`}
      >
        <nav
          className={`mt-3 flex w-full max-w-[1480px] items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-ivory/85 shadow-[0_20px_50px_-24px_rgba(34,26,19,0.4)] backdrop-blur-xl px-5 py-3 md:px-6 md:py-3.5"
              : "bg-transparent px-4 py-4 md:px-6 md:py-5"
          }`}
        >
          <Link href="/" aria-label="The Pinnacle Kigali — home" className="relative z-10">
            <Wordmark tone={tone} />
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative font-sans text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                  tone === "light" ? "text-ivory/80 hover:text-ivory" : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden rounded-full px-6 py-3 font-sans text-[11px] uppercase tracking-[0.16em] transition-all duration-[400ms] sm:inline-flex ${
                tone === "light"
                  ? "bg-ivory text-ink hover:bg-gold"
                  : "bg-ink text-ivory hover:bg-bronze"
              }`}
            >
              Book
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full transition-colors lg:hidden ${
                tone === "light" ? "text-ivory" : "text-ink"
              }`}
            >
              <span
                className={`block h-px w-5 bg-current transition-all duration-[400ms] ${
                  menuOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-[400ms] ${
                  menuOpen ? "w-5 -translate-y-[3.5px] -rotate-45" : "w-3.5"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-limestone px-6 pb-10 pt-28 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-1 flex-col justify-center gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-[2.6rem] leading-tight tracking-[-0.02em] text-ink transition-colors hover:text-bronze"
              style={{
                transitionDelay: menuOpen ? `${120 + i * 55}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                transitionProperty: "opacity, transform, color",
                transitionDuration: "600ms",
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="pill pill-solid w-full justify-center"
        >
          Book Your Stay
        </a>
      </div>
    </>
  );
}
