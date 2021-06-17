import { Header } from "../web/components/Header";
import { HomeSection } from "../web/components/HomeSection";
import { AboutSection } from "../web/components/AboutSection";
import { ProjectSection } from "../web/components/ProjectSection";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
    </>
  );
}
