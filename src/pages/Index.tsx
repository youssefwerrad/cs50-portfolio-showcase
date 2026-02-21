import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechBar from "@/components/TechBar";
import SkillsSection from "@/components/SkillsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <TechBar />
        <SkillsSection />
        <TechnologiesSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
