import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const amenities = [
  {
    title: "Airport Transfer",
    description:
      "Complimentary VIP service with lounge access, luggage handling, and chauffeured transfer to the hotel.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Exterior/EXTERIOR-Standard-0046.jpg",
    size: "large" as const,
  },
  {
    title: "Curated Breakfast",
    description:
      "Curated morning dining with seasonal flavors and international favorites, served with panoramic views.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/FOOD-Standard-0157.jpg",
    size: "small" as const,
  },
  {
    title: "24hr Butler Service",
    description:
      "A dedicated private butler for the entire duration of your stay.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/BUTLER-Standard-01.jpg",
    size: "small" as const,
  },
  {
    title: "Dining Reservations",
    description:
      "Choose from over seven dining venues and enjoy your member's privilege of reserving tables with no minimum spend.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/DINING-Hero-0636.jpg",
    size: "medium" as const,
  },
  {
    title: "Infinity Pool",
    description:
      "Stunning saltwater pool that offers breathtaking panoramic views stretching across the vibrant city of Kigali.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Dining/DINING-Standard-8968%20(1).jpg",
    size: "medium" as const,
  },
  {
    title: "Spa & Fitness",
    description:
      "Unwind with our fully equipped gym, steam room, sauna, and jacuzzi, with personal training available, plus a complimentary 60-minute massage for suite guests.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/GymAndWellness/SPA-Standard-0001.jpg",
    size: "large" as const,
  },
  {
    title: "In-Residence Lounges",
    description:
      "Enjoy access to in-residence lounges with large-screen TVs on both floors.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/entertainments_and_events/TVLOUNGE-Standard-06020.jpg",
    size: "medium" as const,
  },
  {
    title: "Dolby Atmos Theatre",
    description: "Daily movie screenings, with private sessions available.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/entertainments_and_events/_CINEMA-Standard-06555.jpg",
    size: "small" as const,
  },
  {
    title: "Games & Bowling",
    description: "Four-lane bowling alley and arcade access by reservation.",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/entertainments_and_events/ARCADE-Standard-06324%20(1).jpg",
    size: "small" as const,
  },
];

export default function AmenitiesPage() {
  return (
    <main className="bg-ivory">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-charcoal">
        <Image
          src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/revisedimages/Luxury%20Hotel%20in%20East%20Africa%20with%20Infinity%20Pool"
          alt="Luxury Hotel in East Africa with Infinity Pool"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 h-px w-16 bg-white/30" />
          <h1 className="font-serif text-5xl font-light tracking-[0.08em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            AMENITIES
          </h1>
          <div className="mt-6 h-px w-24 bg-white/20" />
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-ivory py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label mb-6 block">YOUR STAY, OUR CARE</span>
            <p className="body-text text-lg md:text-xl leading-relaxed">
              Stay like a member with access to exclusive amenities — from
              private lounges to entertainment spaces — all included at no extra
              cost.
            </p>
          </div>
        </div>
      </section>

      {/* Amenity Grid */}
      <section className="bg-linen pb-24 md:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            {/* Airport Transfer — large, spans left 7 cols */}
            <div className="group relative overflow-hidden md:col-span-7 md:row-span-2">
              <div className="aspect-[4/3] md:aspect-[3/4]">
                <Image
                  src={amenities[0].image}
                  alt={amenities[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <h3 className="font-serif text-2xl font-light text-white md:text-3xl">
                  {amenities[0].title}
                </h3>
                <p className="mt-2 max-w-sm font-sans text-sm text-white/80">
                  {amenities[0].description}
                </p>
              </div>
            </div>

            {/* Curated Breakfast — small, top right 5 cols */}
            <div className="group relative overflow-hidden md:col-span-5">
              <div className="aspect-[4/3]">
                <Image
                  src={amenities[1].image}
                  alt={amenities[1].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="font-serif text-xl font-light text-white md:text-2xl">
                  {amenities[1].title}
                </h3>
                <p className="mt-1 max-w-xs font-sans text-sm text-white/80">
                  {amenities[1].description}
                </p>
              </div>
            </div>

            {/* 24hr Butler Service — small, bottom right top half */}
            <div className="group relative overflow-hidden md:col-span-5">
              <div className="aspect-[4/3]">
                <Image
                  src={amenities[2].image}
                  alt={amenities[2].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="font-serif text-xl font-light text-white md:text-2xl">
                  {amenities[2].title}
                </h3>
                <p className="mt-1 max-w-xs font-sans text-sm text-white/80">
                  {amenities[2].description}
                </p>
              </div>
            </div>

            {/* Dining Reservations — medium, bottom left */}
            <div className="group relative overflow-hidden md:col-span-4">
              <div className="aspect-[4/3]">
                <Image
                  src={amenities[3].image}
                  alt={amenities[3].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="font-serif text-xl font-light text-white md:text-2xl">
                  {amenities[3].title}
                </h3>
                <p className="mt-1 max-w-xs font-sans text-sm text-white/80">
                  {amenities[3].description}
                </p>
              </div>
            </div>

            {/* Infinity Pool — medium, bottom right */}
            <div className="group relative overflow-hidden md:col-span-8">
              <div className="aspect-[16/9]">
                <Image
                  src={amenities[4].image}
                  alt={amenities[4].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="font-serif text-xl font-light text-white md:text-2xl">
                  {amenities[4].title}
                </h3>
                <p className="mt-1 max-w-xs font-sans text-sm text-white/80">
                  {amenities[4].description}
                </p>
              </div>
            </div>

            {/* Spa & Fitness — large, full width */}
            <div className="group relative overflow-hidden md:col-span-7 md:row-span-2">
              <div className="aspect-[4/3] md:aspect-[3/4]">
                <Image
                  src={amenities[5].image}
                  alt={amenities[5].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <h3 className="font-serif text-2xl font-light text-white md:text-3xl">
                  {amenities[5].title}
                </h3>
                <p className="mt-2 max-w-sm font-sans text-sm text-white/80">
                  {amenities[5].description}
                </p>
              </div>
            </div>

            {/* In-Residence Lounges — medium, top right */}
            <div className="group relative overflow-hidden md:col-span-5">
              <div className="aspect-[16/9]">
                <Image
                  src={amenities[6].image}
                  alt={amenities[6].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="font-serif text-xl font-light text-white md:text-2xl">
                  {amenities[6].title}
                </h3>
                <p className="mt-1 max-w-xs font-sans text-sm text-white/80">
                  {amenities[6].description}
                </p>
              </div>
            </div>

            {/* Dolby Atmos Theatre — small, bottom right top half */}
            <div className="group relative overflow-hidden md:col-span-5">
              <div className="aspect-[4/3]">
                <Image
                  src={amenities[7].image}
                  alt={amenities[7].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="font-serif text-xl font-light text-white md:text-2xl">
                  {amenities[7].title}
                </h3>
                <p className="mt-1 max-w-xs font-sans text-sm text-white/80">
                  {amenities[7].description}
                </p>
              </div>
            </div>

            {/* Games & Bowling — medium, bottom left */}
            <div className="group relative overflow-hidden md:col-span-4">
              <div className="aspect-[4/3]">
                <Image
                  src={amenities[8].image}
                  alt={amenities[8].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="font-serif text-xl font-light text-white md:text-2xl">
                  {amenities[8].title}
                </h3>
                <p className="mt-1 max-w-xs font-sans text-sm text-white/80">
                  {amenities[8].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artwork Section */}
      <section className="relative w-full overflow-hidden bg-charcoal py-24 md:py-32">
        <Image
          src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Exterior/Pinnacle_Artwork_Transparent_BLK_cnc6hc_ydjkls.png"
          alt="The Pinnacle Kigali Artwork"
          fill
          className="object-contain object-center opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
          <div className="mx-auto mb-8 h-px w-12 bg-gold/60" />
          <p className="font-serif text-2xl font-light italic text-white/90 md:text-3xl lg:text-4xl">
            A passion project from our family to yours.
          </p>
          <div className="mx-auto mt-8 h-px w-12 bg-gold/60" />
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
