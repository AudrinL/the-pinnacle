import Image from "next/image";
import { RevealImage, Stagger, StaggerItem } from "@/components/Motion";
import { TextLink, Eyebrow } from "@/components/UI";

const panels = [
  {
    eyebrow: "Retreat. Relax. Renew.",
    title: "Pinnacle Members Club",
    copy: "Unequaled in scope, subtlety and seclusion — a quiet foundation to strike a chord or a deal with the right person at the right time.",
    href: "/about",
    cta: "About the club",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/DINING-Standard-0669.jpg",
  },
  {
    eyebrow: "Begin with us",
    title: "The Family Retreat",
    copy: "Though far from home, you are welcomed with warmth and care — adventures by day, and each evening the comfort of a second home.",
    href: "/amenities",
    cta: "Plan a retreat",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/entertainments_and_events/ARCADE-Standard-0000%20(1).jpg",
  },
];

export default function Events() {
  return (
    <section className="bg-limestone py-24 md:py-32">
      <div className="shell grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-8 lg:gap-14">
        {panels.map((p, i) => (
          <Stagger key={p.title} className="flex flex-col">
            <StaggerItem>
              <RevealImage
                delay={i * 0.1}
                className="relative mb-8 aspect-[4/3] w-full rounded-[clamp(20px,2.4vw,34px)] bg-sand"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </RevealImage>
            </StaggerItem>
            <StaggerItem>
              <Eyebrow className="mb-4 block">{p.eyebrow}</Eyebrow>
            </StaggerItem>
            <StaggerItem>
              <h3 className="display mb-4 text-[clamp(1.7rem,3vw,2.4rem)]">
                {p.title}
              </h3>
            </StaggerItem>
            <StaggerItem>
              <p className="prose-body mb-7 max-w-md text-[0.95rem]">{p.copy}</p>
            </StaggerItem>
            <StaggerItem>
              <TextLink href={p.href}>{p.cta}</TextLink>
            </StaggerItem>
          </Stagger>
        ))}
      </div>
    </section>
  );
}
