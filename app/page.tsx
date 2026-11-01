import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CurrentProjects from "@/components/CurrentProjects";
import Ecosystem from "@/components/Ecosystem";
import HowIWork from "@/components/HowIWork";
import Cooperation from "@/components/Cooperation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return <><Navbar /><main id="main" tabIndex={-1}><Hero /><CurrentProjects /><Ecosystem /><HowIWork /><Cooperation /><About /><Contact /></main><Footer /></>;
}
