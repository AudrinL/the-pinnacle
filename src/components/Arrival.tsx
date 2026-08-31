import Image from "next/image";
import { Reveal, Stagger, StaggerItem, RevealImage, Parallax } from "@/components/Motion";
import { Cta, Eyebrow } from "@/components/UI";

const recognitions = [
  {
    title: "TIME · World's Greatest Places 2026",
    note: "Named one of the most extraordinary destinations in the world.",
  },
  {
    title: "The MICHELIN Guide",
    note: "Featured for refined dining and East African hospitality.",
  },
];

export default function Arrival() {
  return (
    <section className="bg-limestone py-24 md:py-36 lg:py-44">
      <div className="shell grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-24">
        {/* Image */}
        <RevealImage className="relative aspect-[4/5] w-full rounded-[clamp(22px,3vw,40px)] lg:aspect-[3/4]">
          <Parallax className="absolute inset-0" distance={7}>
            <Image
              src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/revisedimages/Luxury%20Suite%20with%20Panoramic%20Views%20in%20Kigali%20Rwanda"
              alt="A suite at The Pinnacle Kigali with panoramic views over the city"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </Parallax>
        </RevealImage>

        {/* Text */}
        <Stagger className="flex flex-col items-start">
          <StaggerItem>
            <Eyebrow className="mb-7 block">The Arrival</Eyebrow>
          </StaggerItem>
          <StaggerItem>
            <h2 className="display mb-8 text-[clamp(2.1rem,4.6vw,3.9rem)]">
              Not written with pen,
              <br />
              but with <span className="italic text-bronze">place.</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="prose-body mb-10 max-w-md">
              The Pinnacle Kigali is our love letter to the city. It comes dressed
              in ultra luxury, pulsing through every detail of the intentionally
              designed rooms and unfolding through curated experiences that
              capture the effortless elegance of Kigali.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mb-10 flex flex-col gap-5 border-t border-ink/10 pt-8">
              {recognitions.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <span className="rule-gold mt-2.5" />
                  <div>
                    <p className="font-display text-[1.05rem] text-ink">{r.title}</p>
                    <p className="prose-body text-[0.9rem]">{r.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem>
            <Cta href="/about" variant="outline">
              Discover our story
            </Cta>
          </StaggerItem>
        </Stagger>
      </div>

      <Reveal className="shell mt-24 md:mt-36" y={20}>
        <p className="quote mx-auto max-w-4xl text-center text-[clamp(1.6rem,3.4vw,2.8rem)] text-ink/85">
          &ldquo;Welcome to Kigali. From our family to yours.&rdquo;
        </p>
      </Reveal>
    </section>
  );
}
