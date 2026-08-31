import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const firstFloorRooms = [
  {
    name: "Angel's Nest",
    type: "The Pinnacle Suite",
    number: "201",
    theme: "Forest",
    size: "187 sqm",
    view: "Panoramic City View",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/SUITE-Standard-711.jpg",
    description:
      "Tucked away in the quietest corner of the property, our crown jewel is bathed in the tranquility of the natural world. At 187 square meters, our premium suite boasts of breathtaking panoramic views overlooking the infinity pool and far beyond Kigali city.",
    amenities: [
      "Three Distinct Outdoor Seating Areas",
      "Generous Closet Space",
      "Bathroom",
      "Office Space",
      "Living Room",
      "Expansive Balcony",
    ],
  },
  {
    name: "Sunset Serenity",
    type: "Panoramic View Deluxe",
    number: "202",
    theme: "Sun",
    size: "53 sqm",
    view: "Panoramic View",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/SunsetSerenity/SUN-Standard-714.jpg",
    description:
      "Lose yourself in the warm, captivating gaze of the evening sun. With its restful King-sized bed, a luxurious bathtub for quiet relaxation, this room is your personal sanctuary above the city.",
    amenities: ["Bathtub", "Balcony", "King-sized bed"],
  },
  {
    name: "Luna Lapis",
    type: "Panoramic View Deluxe",
    number: "203",
    theme: "Moon",
    size: "53 sqm",
    view: "Panoramic View",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/LunaLapis/LUNA-Standard-715.jpg",
    description:
      "Bask in the moon's exquisite beauty from a private balcony overlooking the city, a luxurious bathtub for unwinding, and a dedicated private butler for the duration of your stay.",
    amenities: ["Bathtub", "Balcony", "King-sized bed", "Private Butler"],
  },
  {
    name: "Starlit Utopia",
    type: "Panoramic View Deluxe",
    number: "204",
    theme: "Star",
    size: "53 sqm",
    view: "Panoramic View",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/StarlitUtopia/STAR-Standard-705-final.jpg",
    description:
      "Imagine falling asleep to the awe-inspiring twinkle of the night sky. From your private Juliet balcony, savour the world-famous Kigali sunrise as it paints the hills in gold.",
    amenities: ["Bathtub", "Juliet Balcony", "King-sized bed"],
  },
];

const upperGroundRooms = [
  {
    name: "Royal Respite",
    type: "Garden View Deluxe",
    number: "101",
    theme: "Rwanda",
    size: "53 sqm",
    view: "Garden View",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/RoyalRespite/ROYAL-Standard-721.jpg",
    description:
      "East or West, Rwanda is best. Striking contrasts of black and white, a refined nod to local heritage, create a space of quiet sophistication.",
    amenities: ["Bathtub", "Terrace & Garden Balcony", "King-sized bed"],
  },
  {
    name: "Golden Guild",
    type: "Garden View Deluxe",
    number: "102",
    theme: "Uganda",
    size: "53 sqm",
    view: "Garden View",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/GoldenGuild/GOLDEN-Standard-715.jpg",
    description:
      "Bathed in earthy tones reminiscent of the fertile and bountiful soil in neighboring Uganda, with a striking banana fibre headboard anchoring the room's warm character.",
    amenities: ["Bathtub", "Terrace & Garden Balcony", "King-sized bed"],
  },
  {
    name: "Jasper Jewel",
    type: "Garden View Deluxe",
    number: "103",
    theme: "Kenya",
    size: "53 sqm",
    view: "Garden View",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/JasperJewel/JASPER-Standard-9517.jpg",
    description:
      "Bursting with vibrant colors and spilling determined energy, this room is a tribute to the birthplace of the idea that bore The Pinnacle.",
    amenities: ["Bathtub", "Terrace & Garden Balcony", "King-sized bed"],
  },
  {
    name: "Pearl Pavilion",
    type: "Garden View Deluxe",
    number: "104",
    theme: "Washington DC",
    size: "53 sqm",
    view: "Garden View",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/PearlPevilion/PEARL-Standard-519.jpg",
    description:
      "Pristine whites, quiet dignity, a sliver of silver. The swanky monochrome scheme inspires clarity and calm.",
    amenities: ["Bathtub", "Terrace & Garden Balcony", "King-sized bed"],
  },
  {
    name: "Lavish Lair",
    type: "Garden View Deluxe",
    number: "105",
    theme: "New York",
    size: "53 sqm",
    view: "Garden View",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/LavishLair/LAVISH-Standard-722.jpg",
    description:
      "Black and gold. Majesty and might. Inspired by New York City, awakening the senses to the beauty and power in being bold.",
    amenities: ["Bathtub", "Terrace & Garden Balcony", "King-sized bed"],
  },
];

function RoomCard({
  room,
  reversed,
  index,
}: {
  room: (typeof firstFloorRooms)[number];
  reversed: boolean;
  index: number;
}) {
  return (
    <div
      className={`flex flex-col gap-0 ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Image */}
      <div className="relative w-full lg:w-1/2 aspect-[4/5] lg:aspect-auto lg:min-h-[600px] overflow-hidden bg-cream">
        <Image
          src={room.image}
          alt={`${room.name} - ${room.type} at The Pinnacle Kigali`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Text */}
      <div
        className={`flex w-full lg:w-1/2 items-center ${
          reversed ? "lg:justify-end" : "lg:justify-start"
        }`}
      >
        <div
          className={`px-6 py-12 md:px-12 lg:px-20 lg:py-24 max-w-xl ${
            index % 2 === 1 ? "lg:ml-auto" : ""
          }`}
        >
          <span className="section-label mb-4 block">
            {room.theme} · {room.number}
          </span>
          <h3 className="editorial-headline text-charcoal text-3xl sm:text-4xl md:text-5xl mb-3">
            {room.name}
          </h3>
          <p className="font-sans text-[11px] tracking-[0.15em] text-muted uppercase mb-6">
            {room.type} · {room.size} · {room.view}
          </p>
          <p className="body-text text-stone mb-8">{room.description}</p>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2">
            {room.amenities.map((amenity) => (
              <span
                key={amenity}
                className="font-sans text-[10px] tracking-[0.1em] uppercase text-muted border border-warmstone/50 px-3 py-1.5"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RoomsPage() {
  return (
    <main className="bg-ivory">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/PearlPevilion/ultra%20luxury%20boutique%20hotel%20room%20in%20Kigali%20Rwanda%20with%20skyline%20view.jpg"
          alt="Ultra luxury boutique hotel room in Kigali Rwanda with skyline view"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="section-label text-white/70 mb-4">
            THE STAY
          </span>
          <h1 className="editorial-headline text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4">
            ROOMS &amp; SUITES
          </h1>
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-white/80 font-light italic tracking-wide">
            Every Room with a View
          </p>
        </div>
      </section>

      {/* First Floor Introduction */}
      <section className="bg-linen py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-6 block">First Floor</span>
            <h2 className="editorial-headline text-charcoal text-3xl sm:text-4xl md:text-5xl mb-8">
              Celestial Suites Above the City
            </h2>
            <p className="body-text text-stone text-base md:text-lg leading-relaxed">
              We transpose you into nature with the forest-inspired Pinnacle
              Suite, the warmth of a setting sun, the mystery of the moon, and
              the infinite wonder of a starlit sky. Each of our four
              first-floor rooms draws its identity from the heavens above
              Kigali.
            </p>
          </div>
        </div>
      </section>

      {/* First Floor Rooms */}
      {firstFloorRooms.map((room, i) => (
        <div
          key={room.number}
          className={i % 2 === 0 ? "bg-ivory" : "bg-linen"}
        >
          <div className="mx-auto max-w-[1440px]">
            <RoomCard room={room} reversed={i % 2 === 1} index={i} />
          </div>
        </div>
      ))}

      {/* Divider */}
      <div className="bg-ivory py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="h-px w-16 bg-warmstone mx-auto mb-10" />
            <span className="section-label mb-6 block">Upper Ground Floor</span>
            <h2 className="editorial-headline text-charcoal text-3xl sm:text-4xl md:text-5xl mb-8">
              A World in Every Room
            </h2>
            <p className="body-text text-stone text-base md:text-lg leading-relaxed">
              Our five Garden Deluxe Rooms are inspired by the proprietors&apos;
              global adventures. From the vibrant heritage of Rwanda to the
              sophistication of New York City, each room tells a story of the
              places that shaped the vision behind The Pinnacle.
            </p>
          </div>
        </div>
      </div>

      {/* Upper Ground Floor Rooms */}
      {upperGroundRooms.map((room, i) => (
        <div
          key={room.number}
          className={i % 2 === 0 ? "bg-linen" : "bg-ivory"}
        >
          <div className="mx-auto max-w-[1440px]">
            <RoomCard room={room} reversed={i % 2 === 1} index={i} />
          </div>
        </div>
      ))}

      {/* Booking CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 text-center">
          <span className="section-label text-white/30 mb-6 block">
            RESERVE
          </span>
          <h2 className="editorial-headline text-white text-3xl sm:text-4xl md:text-5xl mb-8">
            Book Your Stay
          </h2>
          <p className="body-text text-white/50 max-w-md mx-auto mb-10">
            Experience the extraordinary. Your room at The Pinnacle awaits.
          </p>
          <Link
            href="https://www.thepinnaclekigali.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-button-white"
          >
            BOOK YOUR STAY
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
