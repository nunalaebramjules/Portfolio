import "../styles/portfolio.css";

import SiteNav from "@/components/portfolio/SiteNav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Journey from "@/components/portfolio/Journey";
import Contact from "@/components/portfolio/Contact";

export default function Home() {
  return (
    <div className="pf min-h-screen">
      <SiteNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
    </div>
  );
}
