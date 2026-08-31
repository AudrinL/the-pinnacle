import Image from "next/image";
import { Parallax, Stagger, StaggerItem } from "@/components/Motion";
import { Cta, Eyebrow } from "@/components/UI";

export default function Kigali() {
  return (
    <section className="bg-limestone py-3">
      <div className="slab min-h-[86svh] bg-espresso">
        <Parallax className="absolute inset-0" distance={10}>
          <Image
            src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/revisedimages/Luxury%20Gorilla%20Trekking%20Experience%20in%20Rwanda%20%7C%20The%20Pinnacle%20Kigali"
            alt="Mountain gorillas in the Rwandan rainforest"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </Parallax>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/35 to-espresso/45" />

        <div className="relative flex min-h-[86svh] items-end">
          <div className="shell w-full py-16 md:py-24">
            <Stagger className="max-w-2xl">
              <StaggerItem>
                <Eyebrow light className="mb-6 block">
                  Experiences
                </Eyebrow>
              </StaggerItem>
              <StaggerItem>
                <h2 className="display text-ivory text-[clamp(2.4rem,6vw,5rem)]">
                  To the gorillas
                  <br />
                  and <span className="italic text-gold">beyond.</span>
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-7 max-w-xl font-sans text-[0.98rem] leading-relaxed text-ivory/75">
                  Like every proud Rwandan, we are keen to guide you on your
                  journey of exploration through our country of many colours — a
                  trek to witness the epic nature of mountain gorillas among a
                  long list of others.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-10">
                  <Cta href="/experiences" variant="light">
                    Discover experiences
                  </Cta>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
