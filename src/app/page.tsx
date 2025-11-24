import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectsScene from "@/components/projects/ProjectsScene";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 bg-bg-midnight">
      <Hero />
      <About />
      <Skills />
      <ProjectsScene />
      <Experience />
      <Contact />
    </div>
  );
}
