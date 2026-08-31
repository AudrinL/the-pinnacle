import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const venues = [
  {
    name: "Uruhimbi Fine Dining",
    tagline: "Signature fine dining with a ~1000 bottle wine collection",
    description:
      "Our flagship restaurant is an intimate journey through flavour and refinement. With approximately one thousand bottles in our cellar, Uruhimbi pairs world-class cuisine with one of East Africa's most distinguished wine collections.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/FOOD-Standard-1587.jpg",
    hours: "Breakfast 7–11am daily · Dinner Thu–Sat 5–10pm",
    capacity: "40 seats",
    layout: "large",
  },
  {
    name: "Ishami Rooftop Terrace",
    tagline: "Afro-fusion with panoramic views",
    description:
      "Perched at the summit of The Pinnacle, Ishami is where Afro-fusion cuisine meets sweeping views of Kigali's rolling hills. The open-air terrace is the city's most coveted sunset destination.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/FOOD-Standard-0628.jpg",
    hours: "Mon–Fri 12pm–1am · Sat–Sun 5pm–1am",
    capacity: "40 seats",
    layout: "medium",
  },
  {
    name: "Icyirenga Teppanyaki",
    tagline: "Live Japanese-African teppanyaki",
    description:
      "A theatrical dining experience where Japanese precision meets African soul. Watch our chefs command the flame in an intimate open-kitchen setting.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/DINING-Standard-06237.jpg",
    hours: "Open Daily",
    capacity: "20 seats",
    layout: "medium",
  },
  {
    name: "Ubudasa Poolside",
    tagline: "Mediterranean flavors & wood-fired pizza",
    description:
      "Relaxed Mediterranean dining beside the infinity pool. Wood-fired pizzas, fresh salads, and chilled rosé with the best view in Kigali.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/FOOD-Standard-0300.jpg",
    hours: "Fri–Sat 12–6pm · Sun 12–4pm",
    capacity: "60 seats",
    layout: "medium",
  },
  {
    name: "Ubuki Whiskey Bar",
    tagline: "Whiskey & tapas",
    description:
      "A connoisseur's retreat dedicated to the world's finest whiskeys. Curated flights and small plates in an atmosphere of quiet luxury.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/DINING-Standard-06234.jpg",
    hours: "Open Daily by reservation",
    capacity: "20 seats",
    layout: "small",
  },
  {
    name: "Uruhimbi Champagne Bar",
    tagline: "Champagne & celebrations",
    description:
      "An intimate alcove for the art of celebration. Veuve Clicquot, Dom Pérignon, and rare vintages served with elegance and ceremony.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/DINING-Standard-0669.jpg",
    hours: "Open Daily by reservation",
    capacity: "10 seats",
    layout: "small",
  },
  {
    name: "Ishami Chef's Table",
    tagline: "Exclusive chef-led experience",
    description:
      "An intimate multi-course journey guided by our Executive Chef. Each evening is a bespoke culinary narrative crafted for your party alone.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/DINING-Standard-06716.jpg",
    hours: "Open Daily · Min 4 guests · 24hr notice",
    capacity: "20 seats",
    layout: "medium",
  },
  {
    name: "Ukwezi Pinnacle Lounge",
    tagline: "Events & celebrations",
    description:
      "The Pinnacle's grand event space, designed for milestone celebrations, private dinners, and gatherings that demand the extraordinary.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/DINING-Standard-06579.jpg",
    hours: "Fri & Sun 6pm–1am",
    capacity: "100+ seats",
    layout: "large",
  },
];

export default function DiningPage() {
  return (
    <main className="bg-ivory">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/revisedimages/FOOD-Hero-2333.jpg"
          alt="Fine dining on top of Kigali Hills at The Pinnacle"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="section-label text-white/70 mb-4">CUISINE</span>
          <h1 className="editorial-headline text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4">
            DINING
          </h1>
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-white/80 font-light italic tracking-wide">
            Fine Dining on top of Kigali Hills
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-linen py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-6 block">THE CUISINE</span>
            <h2 className="editorial-headline text-charcoal text-3xl sm:text-4xl md:text-5xl mb-8">
              Gather. Taste. Stay a Little Longer.
            </h2>
            <p className="body-text text-stone text-base md:text-lg leading-relaxed">
              Savor an elevated culinary experience where world-class flavors
              meet breathtaking panoramas. Perched atop Kigali&apos;s rolling
              hills, our restaurant offers a front-row seat to the city&apos;s
              golden sunsets and glittering night lights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Venue — Full Width */}
      <section className="bg-ivory">
        <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src={venues[0].image}
            alt={venues[0].name}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-20">
            <div className="mx-auto max-w-[1440px]">
              <span className="section-label text-white/50 mb-4 block">
                SIGNATURE
              </span>
              <h3 className="editorial-headline text-white text-4xl sm:text-5xl md:text-6xl mb-4">
                {venues[0].name}
              </h3>
              <p className="font-sans text-[11px] tracking-[0.15em] text-white/50 uppercase mb-6">
                {venues[0].tagline}
              </p>
              <p className="body-text text-white/60 max-w-lg mb-6">
                {venues[0].description}
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-white/40">
                <span className="font-sans text-[11px] tracking-wide">
                  {venues[0].hours}
                </span>
                <span className="font-sans text-[11px] tracking-wide">
                  {venues[0].capacity}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Grid — Editorial Layout */}
      <section className="bg-linen py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="mb-16 text-center">
            <span className="section-label mb-4 block">ALL VENUES</span>
            <h2 className="editorial-headline text-charcoal text-3xl sm:text-4xl md:text-5xl">
              Eight Distinct Experiences
            </h2>
          </div>

          {/* Row 1: Two medium venues */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {[venues[1], venues[2]].map((venue) => (
              <div key={venue.name} className="group">
                <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden bg-cream">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="font-serif text-2xl font-light text-charcoal mb-2">
                  {venue.name}
                </h3>
                <p className="font-sans text-[11px] tracking-[0.15em] text-muted uppercase mb-4">
                  {venue.tagline}
                </p>
                <p className="body-text text-stone mb-4">{venue.description}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <span className="font-sans text-[10px] tracking-wide text-muted">
                    {venue.hours}
                  </span>
                  <span className="font-sans text-[10px] tracking-wide text-muted">
                    {venue.capacity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Poolside — full width */}
          <div className="mb-8 group">
            <div className="relative mb-6 aspect-[16/7] w-full overflow-hidden bg-cream">
              <Image
                src={venues[3].image}
                alt={venues[3].name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
            </div>
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl font-light text-charcoal mb-2">
                {venues[3].name}
              </h3>
              <p className="font-sans text-[11px] tracking-[0.15em] text-muted uppercase mb-4">
                {venues[3].tagline}
              </p>
              <p className="body-text text-stone mb-4">
                {venues[3].description}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                <span className="font-sans text-[10px] tracking-wide text-muted">
                  {venues[3].hours}
                </span>
                <span className="font-sans text-[10px] tracking-wide text-muted">
                  {venues[3].capacity}
                </span>
              </div>
            </div>
          </div>

          {/* Row 3: Three bars/smaller venues */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {[venues[4], venues[5], venues[6]].map((venue) => (
              <div key={venue.name} className="group">
                <div className="relative mb-5 aspect-[3/4] w-full overflow-hidden bg-cream">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-serif text-xl font-light text-charcoal mb-1">
                  {venue.name}
                </h3>
                <p className="font-sans text-[10px] tracking-[0.15em] text-muted uppercase mb-3">
                  {venue.tagline}
                </p>
                <p className="body-text text-stone text-[13px] mb-3">
                  {venue.description}
                </p>
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-[10px] tracking-wide text-muted">
                    {venue.hours}
                  </span>
                  <span className="font-sans text-[10px] tracking-wide text-muted">
                    {venue.capacity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 4: Ukwezi Lounge — full width */}
          <div className="group">
            <div className="relative mb-6 aspect-[16/7] w-full overflow-hidden bg-cream">
              <Image
                src={venues[7].image}
                alt={venues[7].name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
            </div>
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl font-light text-charcoal mb-2">
                {venues[7].name}
              </h3>
              <p className="font-sans text-[11px] tracking-[0.15em] text-muted uppercase mb-4">
                {venues[7].tagline}
              </p>
              <p className="body-text text-stone mb-4">
                {venues[7].description}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                <span className="font-sans text-[10px] tracking-wide text-muted">
                  {venues[7].hours}
                </span>
                <span className="font-sans text-[10px] tracking-wide text-muted">
                  {venues[7].capacity}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garden Section */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full lg:w-1/2 aspect-[4/5] lg:aspect-auto lg:min-h-[600px] overflow-hidden bg-cream">
              <Image
                src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Exterior/GARDEN-Standard-01.jpg"
                alt="The Pinnacle Garden in Kigali"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex w-full lg:w-1/2 items-center">
              <div className="px-6 py-16 md:px-16 lg:px-24 lg:py-24 max-w-xl">
                <span className="section-label mb-6 block">
                  FROM OUR GARDEN
                </span>
                <h2 className="editorial-headline text-charcoal text-3xl sm:text-4xl md:text-5xl mb-8">
                  The Pinnacle
                  <br />
                  Garden
                </h2>
                <p className="body-text text-stone mb-6">
                  Even in the heart of Kigali, you&apos;ll find a corner of
                  cultivated calm. Our kitchen garden connects you to the land
                  — herbs, vegetables, and edible flowers grown steps from
                  where they&apos;re served.
                </p>
                <p className="body-text text-stone">
                  Farm-to-table food practice is a given here. Every ingredient,
                  except those sourced internationally, has been supplied
                  directly from a local farmer in Rwanda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locally Sourced */}
      <section className="bg-linen py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-6 block">FARM TO TABLE</span>
            <h2 className="editorial-headline text-charcoal text-3xl sm:text-4xl md:text-5xl mb-8">
              Rooted in Rwanda
            </h2>
            <p className="body-text text-stone text-base md:text-lg leading-relaxed mb-8">
              Farm-to-table food practice is a given. Every ingredient, except
              those sourced internationally, has been supplied directly from a
              local farmer in Rwanda. Our relationships with producers across
              the country ensure that what arrives at our kitchen is as fresh,
              seasonal, and authentic as the land it comes from.
            </p>

            {/* Michelin Callout */}
            <div className="inline-flex items-center gap-3 border border-warmstone/40 px-6 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40">
                <span className="font-serif text-xs font-semibold text-gold">
                  M
                </span>
              </div>
              <span className="font-sans text-[11px] tracking-[0.12em] text-walnut uppercase">
                Michelin Guide Featured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Dining CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 text-center">
          <span className="section-label text-white/30 mb-6 block">
            JOIN US
          </span>
          <h2 className="editorial-headline text-white text-3xl sm:text-4xl md:text-5xl mb-8">
            Reserve Your Table
          </h2>
          <p className="body-text text-white/50 max-w-md mx-auto mb-10">
            An evening at The Pinnacle is more than a meal. It is a moment
            to remember.
          </p>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
            <Link
              href="https://www.thepinnaclekigali.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-white"
            >
              BOOK A TABLE
            </Link>
            <Link href="/dining" className="cta-button cta-button-white">
              VIEW MENUS
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
