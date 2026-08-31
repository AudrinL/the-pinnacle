import Image from "next/image";
import { Reveal, Parallax } from "@/components/Motion";
import { Cta, Eyebrow } from "@/components/UI";

export default function BookingCTA() {
  return (
    <section className="bg-limestone py-3">
      <div className="slab min-h-[78svh] bg-espresso">
        <Parallax className="absolute inset-0" distance={9}>
          <Image
            src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/revisedimages/Private%20Fine%20Dining%20&%20Luxury%20Hospitality%20in%20Kigali%20Rwanda"
            alt="An evening table set at The Pinnacle Kigali"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </Parallax>
        <div className="pointer-events-none absolute inset-0 bg-espresso/55" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-espresso/40" />

        <div className="relative flex min-h-[78svh] flex-col items-center justify-center px-6 py-20 text-center">
          <Reveal y={22}>
            <Eyebrow light className="mb-8 block">
              Your stay starts here
            </Eyebrow>
            <p className="quote mx-auto max-w-4xl text-ivory text-[clamp(1.9rem,4.4vw,3.6rem)]">
              Let us set the stage for an encounter that touches your soul.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Cta href="https://www.thepinnaclekigali.com/" variant="gold">
                Book your stay
              </Cta>
              <Cta href="/about" variant="light">
                Read our story
              </Cta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
