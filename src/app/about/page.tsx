import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-ivory">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-charcoal">
        <Image
          src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Exterior/Pinnacle_Artwork_Transparent_BLK_cnc6hc_ydjkls.png"
          alt="The Pinnacle Kigali"
          fill
          className="object-contain object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 h-px w-16 bg-white/30" />
          <h1 className="font-serif text-5xl font-light tracking-[0.08em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            OUR STORY
          </h1>
          <div className="mt-6 h-px w-24 bg-white/20" />
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-ivory py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label mb-6 block">THE STORY</span>
            <p className="body-text text-lg md:text-xl leading-relaxed">
              The Pinnacle Kigali is our love letter to Kigali. Designed as a
              private family residence, it has evolved into an exclusive retreat
              offering elegant rooms, personalized service, and breathtaking city
              views.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Quote */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-8 h-px w-12 bg-gold" />
            <blockquote className="font-serif text-3xl font-light italic leading-snug text-charcoal md:text-4xl lg:text-5xl">
              &ldquo;In our family, good times are best shared.&rdquo;
            </blockquote>
            <div className="mx-auto mt-8 h-px w-12 bg-gold" />
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            {/* Text */}
            <div className="flex flex-col items-start">
              <span className="section-label mb-6">THE VISION</span>
              <h2 className="editorial-headline text-charcoal mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                East African
                <br />
                hospitality at its
                <br />
                finest.
              </h2>
              <p className="body-text max-w-lg">
                Indulge in a lap of luxury befitting the most discerning
                traveler. Let yourself be enchanted by our expression of East
                African hospitality, where warmth coupled with immaculate
                attention to detail is the only standard.
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/revisedimages/Luxury%20Suite%20with%20Panoramic%20Views%20in%20Kigali%20Rwanda"
                alt="Luxury Suite with Panoramic Views in Kigali"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TIME + Michelin Recognition */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
            {/* TIME */}
            <div className="flex flex-col items-start">
              <span className="section-label mb-6 text-white/30">RECOGNITION</span>
              <div className="mb-6 h-px w-8 bg-gold" />
              <h3 className="font-serif text-2xl font-light text-white md:text-3xl">
                Named one of TIME&apos;s
                <br />
                World&apos;s Greatest Places 2026
              </h3>
              <p className="body-text mt-6 max-w-md text-white/60">
                A distinction that recognizes The Pinnacle Kigali among the most
                extraordinary destinations in the world.
              </p>
              <a
                href="https://time.com/collection/worlds-greatest-places/2026/the-pinnacle-kigali/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-white mt-8 inline-block border border-white bg-white px-10 py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-colors duration-300 hover:bg-transparent hover:text-white"
              >
                READ THE FEATURE
              </a>
            </div>

            {/* Michelin */}
            <div className="flex flex-col items-start">
              <span className="section-label mb-6 text-white/30">GUIDE</span>
              <div className="mb-6 h-px w-8 bg-gold" />
              <h3 className="font-serif text-2xl font-light text-white md:text-3xl">
                Michelin Guide
                <br />
                Featured
              </h3>
              <p className="body-text mt-6 max-w-md text-white/60">
                Recognized by the Michelin Guide for outstanding hospitality,
                refined dining, and an unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Values */}
      <section className="bg-ivory py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label mb-6 block">FAMILY VALUES</span>
            <h2 className="editorial-headline text-charcoal mb-8 text-3xl sm:text-4xl md:text-5xl">
              A timeless pursuit.
            </h2>
            <p className="body-text text-lg">
              Unearth the desire in you to relish being in the midst of harnessed
              beauty, brawn, and bodaciousness. The quest for opulence is a
              timeless pursuit.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-linen py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-8 h-px w-12 bg-gold" />
            <p className="font-serif text-xl font-light italic leading-relaxed text-charcoal md:text-2xl">
              Let us set the stage for good-natured banter over dishes
              you&apos;ll remember for a while, make memories to mull on long
              after you&apos;ve gone. In the fullness of your time here, we hope
              you depart with an encounter that touches your soul.
            </p>
            <div className="mx-auto mt-8 h-px w-12 bg-gold" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[60vh] w-full overflow-hidden">
        <Image
          src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/revisedimages/Private%20Fine%20Dining%20&%20Luxury%20Hospitality%20in%20Kigali%20Rwanda"
          alt="Fine dining at The Pinnacle Kigali"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
          <h2 className="font-serif text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl">
            BOOK YOUR STAY
          </h2>
          <div className="mt-10">
            <a
              href="https://www.thepinnaclekigali.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-white inline-block border border-white bg-white px-10 py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-colors duration-300 hover:bg-transparent hover:text-white"
            >
              BOOK YOUR STAY
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
