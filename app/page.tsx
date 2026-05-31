import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import CurrentProjects from "@/components/CurrentProjects";
import Services from "@/components/Services";
import HowIWork from "@/components/HowIWork";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import GptTools from "@/components/GptTools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIs />
        <CurrentProjects />
        <Services />
        <HowIWork />
        <Pricing />
        <About />
        <GptTools />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
