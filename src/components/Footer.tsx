import Link from "next/link";
import { ArrowRight } from "@/components/UI";

const explore = [
  { label: "Rooms & Suites", href: "/rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Experiences", href: "/experiences" },
  { label: "Amenities", href: "/amenities" },
  { label: "Our Story", href: "/about" },
];

const contact = [
  { label: "Stay reservations", value: "+250 795 585 329", href: "tel:+250795585329" },
  { label: "Dining reservations", value: "+250 795 581 664", href: "tel:+250795581664" },
  { label: "Hotel reception", value: "+250 795 466 156", href: "tel:+250795466156" },
  { label: "Email", value: "stay@thepinnaclekigali.com", href: "mailto:stay@thepinnaclekigali.com" },
];

const socials = ["Instagram", "Facebook", "YouTube", "LinkedIn", "X"];

export default function Footer() {
  return (
    <footer className="bg-limestone pb-3">
      <div className="slab bg-espresso px-6 pb-10 pt-20 text-ivory/70 md:px-12 md:pt-24">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr_1.2fr]">
            {/* Brand + newsletter */}
            <div>
              <div className="mb-6 flex flex-col leading-none">
                <span className="font-display text-[1.6rem] tracking-[0.24em] uppercase text-ivory">
                  The Pinnacle
                </span>
                <span className="mt-2 font-sans text-[11px] tracking-[0.6em] uppercase text-ivory/45">
                  Kigali
                </span>
              </div>
              <p className="max-w-xs font-sans text-[0.9rem] leading-relaxed text-ivory/45">
                A love letter to Kigali, from our family to yours.
              </p>

              <form className="mt-8 flex max-w-sm items-center gap-2 rounded-full border border-ivory/15 p-1.5 pl-5">
                <input
                  type="email"
                  required
                  placeholder="Email for occasional letters"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent font-sans text-[0.85rem] text-ivory outline-none placeholder:text-ivory/35"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ivory text-ink transition-colors hover:bg-gold"
                >
                  <ArrowRight />
                </button>
              </form>
            </div>

            {/* Explore */}
            <nav aria-label="Footer">
              <h4 className="eyebrow eyebrow-light mb-6">Explore</h4>
              <ul className="flex flex-col gap-3">
                {explore.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-sans text-[0.9rem] text-ivory/55 transition-colors hover:text-ivory"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h4 className="eyebrow eyebrow-light mb-6">Contact</h4>
              <p className="mb-5 font-sans text-[0.9rem] leading-relaxed text-ivory/55">
                KK 30 Rebero,
                <br />
                Kigali, Rwanda
              </p>
              <ul className="flex flex-col gap-3">
                {contact.map((c) => (
                  <li key={c.label} className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-ivory/35">
                      {c.label}
                    </span>
                    <a
                      href={c.href}
                      className="font-sans text-[0.9rem] text-ivory/70 transition-colors hover:text-ivory"
                    >
                      {c.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-ivory/10 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-5">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-sans text-[10px] uppercase tracking-[0.16em] text-ivory/35 transition-colors hover:text-ivory/70"
                >
                  {s}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-5 font-sans text-[11px] text-ivory/30">
              <span>&copy; {new Date().getFullYear()} The Pinnacle Kigali</span>
              <a href="#" className="transition-colors hover:text-ivory/60">
                Website Terms
              </a>
              <a href="#" className="transition-colors hover:text-ivory/60">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
