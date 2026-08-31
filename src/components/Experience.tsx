import Image from "next/image";
import { Reveal, RevealImage, Stagger, StaggerItem } from "@/components/Motion";
import { Cta, Eyebrow } from "@/components/UI";

const tiles = [
  {
    title: "Saltwater Infinity Pool",
    copy: "Panoramic water stretched across the city skyline.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/revisedimages/Luxury%20Hotel%20in%20East%20Africa%20with%20Infinity%20Pool",
    span: "md:col-span-7 md:row-span-2",
    ratio: "aspect-[4/3] md:aspect-auto md:h-full",
  },
  {
    title: "Spa & Wellness",
    copy: "Gym, steam room, sauna and jacuzzi.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/GymAndWellness/SPA-Standard-0001.jpg",
    span: "md:col-span-5",
    ratio: "aspect-[5/4]",
  },
  {
    title: "Dolby Atmos Theatre",
    copy: "Daily screenings; private sessions on request.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/entertainments_and_events/_CINEMA-Standard-06555.jpg",
    span: "md:col-span-5",
    ratio: "aspect-[5/4]",
  },
  {
    title: "Games & Bowling",
    copy: "A four-lane alley and arcade.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/entertainments_and_events/ARCADE-Standard-06324%20(1).jpg",
    span: "md:col-span-4",
    ratio: "aspect-[4/3]",
  },
  {
    title: "In-Residence Lounges",
    copy: "Large-screen lounges on both floors.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/entertainments_and_events/TVLOUNGE-Standard-06020.jpg",
    span: "md:col-span-8",
    ratio: "aspect-[16/10] md:aspect-[16/9]",
  },
];

export default function Experience() {
  return (
    <section className="bg-ivory py-24 md:py-36 lg:py-44">
      <div className="shell">
        <Stagger className="mb-14 max-w-2xl md:mb-20">
          <StaggerItem>
            <Eyebrow className="mb-5 block">Amenities</Eyebrow>
          </StaggerItem>
          <StaggerItem>
            <h2 className="display text-[clamp(2.1rem,4.8vw,4rem)]">
              A quiet pause
              <br />
              above the <span className="italic text-bronze">city.</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="prose-body mt-6">
              Stay like a member, with the run of the house — from private
              lounges to entertainment spaces, all included.
            </p>
          </StaggerItem>
        </Stagger>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {tiles.map((t, i) => (
            <RevealImage
              key={t.title}
              delay={(i % 3) * 0.08}
              className={`group relative rounded-[clamp(18px,2vw,28px)] bg-sand ${t.span}`}
            >
              <div className={`relative ${t.ratio}`}>
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <h3 className="font-display text-[1.3rem] text-ivory md:text-[1.5rem]">
                    {t.title}
                  </h3>
                  <p className="mt-1 max-w-xs font-sans text-[0.82rem] leading-relaxed text-ivory/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:translate-y-1.5 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    {t.copy}
                  </p>
                </div>
              </div>
            </RevealImage>
          ))}
        </div>

        <Reveal className="mt-14" y={18}>
          <Cta href="/amenities" variant="solid">
            Discover amenities
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}
