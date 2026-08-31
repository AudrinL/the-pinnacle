import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import Arrival from "@/components/Arrival";
import Rooms from "@/components/Rooms";
import Architecture from "@/components/Architecture";
import Dining from "@/components/Dining";
import Kigali from "@/components/Kigali";
import Experience from "@/components/Experience";
import Events from "@/components/Events";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-limestone">
      <Navigation />
      <Hero />
      <BookingBar />
      <Arrival />
      <Rooms />
      <Architecture />
      <Dining />
      <Kigali />
      <Experience />
      <Events />
      <BookingCTA />
      <Footer />
    </main>
  );
}
