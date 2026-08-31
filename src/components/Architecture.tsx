import Image from "next/image";
import { Reveal, RevealImage, Parallax, Stagger, StaggerItem } from "@/components/Motion";
import { Cta, Eyebrow } from "@/components/UI";

export default function Architecture() {
  return (
    <section className="bg-limestone py-3">
      <div className="slab bg-espresso px-6 py-24 md:px-12 md:py-32 lg:py-40">
        {/* faint mark */}
        <Image
          src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Exterior/Pinnacle_Artwork_Transparent_BLK_cnc6hc_ydjkls.png"
          alt=""
          aria-hidden="true"
          width={520}
          height={520}
          className="pointer-events-none absolute -right-20 -top-20 h-auto w-[min(46vw,520px)] opacity-[0.06] invert"
        />

        <div className="relative mx-auto max-w-[1320px]">
          <Stagger className="mb-16 max-w-3xl md:mb-24">
            <StaggerItem>
              <Eyebrow light className="mb-6 block">
                Architecture &amp; Spaces
              </Eyebrow>
            </StaggerItem>
            <StaggerItem>
              <h2 className="display text-ivory text-[clamp(2.1rem,4.8vw,4.1rem)]">
                Where exclusivity meets serenity
                <br />
                atop Kigali&apos;s hills.
              </h2>
            </StaggerItem>
          </Stagger>

          {/* Layered composition */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            <RevealImage className="relative col-span-1 aspect-[4/5] rounded-[clamp(22px,2.5vw,36px)] md:col-span-7">
              <Parallax className="absolute inset-0" distance={6}>
                <Image
                  src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Exterior/EXTERIOR-Standard-0046.jpg"
                  alt="The Pinnacle Kigali seen from its terraced gardens"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </Parallax>
            </RevealImage>

            <div className="col-span-1 flex flex-col justify-end gap-8 md:col-span-5 md:pb-16">
              <RevealImage
                className="relative aspect-[4/3] rounded-[clamp(22px,2.5vw,36px)]"
                delay={0.12}
              >
                <Parallax className="absolute inset-0" distance={9}>
                  <Image
                    src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Exterior/GARDEN-Standard-01.jpg"
                    alt="A quiet planted corner of The Pinnacle's gardens"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </Parallax>
              </RevealImage>
              <Reveal y={18}>
                <p className="prose-body text-ivory/55">
                  Let yourself be enchanted by our expression of East African
                  hospitality, where warmth coupled with immaculate attention to
                  detail is the only standard.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal className="mt-20 flex flex-col items-start gap-10 md:mt-28" y={22}>
            <blockquote className="quote max-w-4xl text-ivory/90 text-[clamp(1.8rem,4vw,3.4rem)]">
              &ldquo;In our family, good times are best shared.&rdquo;
            </blockquote>
            <Cta href="/about" variant="light">
              Discover our story
            </Cta>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
