import { ClientProviders } from "@/components/ClientProviders";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { EngineeringApproach } from "@/components/sections/EngineeringApproach";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { Security } from "@/components/sections/Security";
import { GitHub } from "@/components/sections/GitHub";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <ClientProviders>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EngineeringApproach />
        <Experience />
        <Services />
        <Security />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </ClientProviders>
  );
}
