import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ExperiencesPage() {
  return (
    <main className="bg-ivory">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-charcoal">
        <Image
          src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/revisedimages/Luxury%20Gorilla%20Trekking%20Experience%20in%20Rwanda%20%7C%20The%20Pinnacle%20Kigali"
          alt="Luxury Gorilla Trekking Experience in Rwanda"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 h-px w-16 bg-white/30" />
          <h1 className="font-serif text-5xl font-light tracking-[0.08em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            EXPERIENCES
          </h1>
          <div className="mt-6 h-px w-24 bg-white/20" />
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-ivory py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label mb-6 block">TO THE GORILLAS AND BEYOND</span>
            <p className="body-text text-lg md:text-xl leading-relaxed">
              Like every proud Rwandan, we are keen to guide you on your journey
              of exploration throughout our country of many colours.
            </p>
          </div>
        </div>
      </section>

      {/* Gorilla Trekking */}
      <section className="bg-ivory pb-24 md:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[3/4]">
              <Image
                src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/revisedimages/Luxury%20Gorilla%20Trekking%20Experience%20in%20Rwanda%20%7C%20The%20Pinnacle%20Kigali"
                alt="Luxury Gorilla Trekking Experience in Rwanda"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col items-start">
              <span className="section-label mb-6">GORILLA TREKKING</span>
              <h2 className="editorial-headline text-charcoal mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                An encounter
                <br />
                with the wild.
              </h2>
              <p className="body-text mb-8 max-w-md">
                Access to exclusive luxury safari and gorilla trekking partners.
                Permits, expert guides, and private transfers arranged.
              </p>
              <p className="body-text max-w-md text-muted text-sm">
                This is a curated experience, not operated directly by the
                hotel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Tours */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            {/* Text */}
            <div className="flex flex-col items-start">
              <span className="section-label mb-6">CITY TOURS</span>
              <h2 className="editorial-headline text-charcoal mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                More than
                <br />
                just gorillas.
              </h2>
              <p className="body-text max-w-md">
                Rwanda offers more than just gorillas. Discover Kigali&apos;s
                vibrant community, explore its rich culture and history.
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[3/4]">
              <Image
                src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/revisedimages/Curated%20Cultural%20Experiences%20in%20East%20Africa%20%7C%20The%20Pinnacle%20Kigali"
                alt="Curated Cultural Experiences in East Africa"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label mb-6 block text-white/30">CULTURAL EXPERIENCES</span>
            <h2 className="font-serif text-3xl font-light text-white md:text-4xl lg:text-5xl">
              Curated cultural experiences
              <br />
              throughout East Africa
            </h2>
          </div>
        </div>
      </section>

      {/* After Your Adventures */}
      <section className="bg-ivory py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-8 h-px w-12 bg-gold" />
            <p className="font-serif text-xl font-light italic leading-relaxed text-charcoal md:text-2xl">
              After your unforgettable offsite adventures, unwind at The
              Pinnacle, savoring warm meals, refreshing drinks, and breathtaking
              sunsets over Kigali&apos;s thousand hills.
            </p>
            <div className="mx-auto mt-8 h-px w-12 bg-gold" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[60vh] w-full overflow-hidden">
        <Image
          src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/revisedimages/Luxury%20Hotel%20in%20East%20Africa%20with%20Infinity%20Pool"
          alt="The Pinnacle Kigali Infinity Pool"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
          <h2 className="font-serif text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl">
            PLAN YOUR EXPERIENCE
          </h2>
          <div className="mt-10">
            <a
              href="https://www.thepinnaclekigali.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-white inline-block border border-white bg-white px-10 py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-colors duration-300 hover:bg-transparent hover:text-white"
            >
              PLAN YOUR EXPERIENCE
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
