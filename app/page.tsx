import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TeamFit from "@/components/TeamFit";
import CurrentProjects from "@/components/CurrentProjects";
import BusinessOffer from "@/components/BusinessOffer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyTelegramPill from "@/components/StickyTelegramPill";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TeamFit />
        <CurrentProjects />
        <BusinessOffer />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyTelegramPill />
    </>
  );
}
