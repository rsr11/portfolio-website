import Hero from "@/components/Hero.tsx";
import ExperiencePage from "@/components/ExperienceSection.tsx";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <AboutSection/> */}
      <ExperiencePage/>
      <ProjectsSection/>
      <BlogSection/>
    </main>
  );
}