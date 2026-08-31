import Image from "next/image";
import { Reveal, RevealImage, Parallax, Stagger, StaggerItem } from "@/components/Motion";
import { Cta, Eyebrow } from "@/components/UI";

const feature = {
  name: "Uruhimbi",
  kicker: "Signature fine dining",
  copy: "World-class cuisine paired with one of East Africa's most distinguished cellars — close to a thousand bottles.",
  image:
    "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/FOOD-Standard-1587.jpg",
};

const pair = [
  {
    name: "Ishami Rooftop Terrace",
    copy: "Afro-fusion plates and the city's most coveted sunset.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/FOOD-Standard-0628.jpg",
  },
  {
    name: "Icyirenga Teppanyaki",
    copy: "Japanese precision, African soul, live at the flame.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/DINING-Standard-06237.jpg",
  },
];

const wide = {
  name: "Ubudasa Poolside",
  copy: "Mediterranean flavours and wood-fired pizza beside the infinity pool.",
  image:
    "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/FOOD-Standard-0300.jpg",
};

function VenueLabel({
  name,
  copy,
  large = false,
}: {
  name: string;
  copy: string;
  large?: boolean;
}) {
  return (
    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
      <h3
        className={`font-display text-ivory ${large ? "text-[clamp(2rem,3.6vw,3rem)]" : "text-[1.5rem]"}`}
      >
        {name}
      </h3>
      <p className="mt-2 max-w-sm font-sans text-[0.82rem] leading-relaxed text-ivory/70">
        {copy}
      </p>
    </div>
  );
}

const overlay =
  "pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent";

export default function Dining() {
  return (
    <section className="bg-ivory py-24 md:py-36 lg:py-44">
      <div className="shell">
        <Stagger className="mb-14 flex flex-col gap-10 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <StaggerItem>
              <Eyebrow className="mb-5 block">Dining</Eyebrow>
            </StaggerItem>
            <StaggerItem>
              <h2 className="display text-[clamp(2.1rem,4.8vw,4rem)]">
                The taste of
                <br />
                fine <span className="italic text-bronze">things.</span>
              </h2>
            </StaggerItem>
          </div>
          <StaggerItem className="max-w-md">
            <p className="prose-body mb-5">
              Inspired by our own garden and culinary creations from all over the
              world, our kitchen aims to evoke wonder and satisfaction with each
              plate set before our guests.
            </p>
            <span className="chip text-bronze">
              <span className="h-1 w-1 rounded-full bg-clay" />
              The MICHELIN Guide · Featured
            </span>
          </StaggerItem>
        </Stagger>

        {/* Feature */}
        <RevealImage className="relative aspect-[16/10] w-full overflow-hidden rounded-[clamp(24px,3vw,44px)] md:aspect-[21/9]">
          <Parallax className="absolute inset-0" distance={6}>
            <Image
              src={feature.image}
              alt={`${feature.name} at The Pinnacle Kigali`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </Parallax>
          <div className={overlay} />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
            <p className="eyebrow eyebrow-light mb-3">{feature.kicker}</p>
            <h3 className="font-display text-ivory text-[clamp(2.2rem,4.4vw,3.6rem)]">
              {feature.name}
            </h3>
            <p className="mt-3 max-w-lg font-sans text-[0.9rem] leading-relaxed text-ivory/70">
              {feature.copy}
            </p>
          </div>
        </RevealImage>

        {/* Pair */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {pair.map((v, i) => (
            <RevealImage
              key={v.name}
              delay={i * 0.1}
              className="relative aspect-[4/3] overflow-hidden rounded-[clamp(20px,2.4vw,32px)]"
            >
              <Image
                src={v.image}
                alt={`${v.name} at The Pinnacle Kigali`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={overlay} />
              <VenueLabel name={v.name} copy={v.copy} />
            </RevealImage>
          ))}
        </div>

        {/* Wide */}
        <RevealImage className="mt-5 relative aspect-[16/9] overflow-hidden rounded-[clamp(20px,2.4vw,32px)] md:aspect-[24/9]">
          <Image
            src={wide.image}
            alt={`${wide.name} at The Pinnacle Kigali`}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className={overlay} />
          <VenueLabel name={wide.name} copy={wide.copy} />
        </RevealImage>

        <Reveal className="mt-14 flex flex-col gap-4 sm:flex-row" y={18}>
          <Cta href="/dining" variant="solid">
            Explore dining
          </Cta>
          <Cta href="https://www.thepinnaclekigali.com/" variant="outline">
            Book a table
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}
