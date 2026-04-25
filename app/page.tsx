import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CurrentProjects from "@/components/CurrentProjects";
import GptTools from "@/components/GptTools";
import Services from "@/components/Services";
import HowIWork from "@/components/HowIWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CurrentProjects />
        <GptTools />
        <Services />
        <HowIWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
