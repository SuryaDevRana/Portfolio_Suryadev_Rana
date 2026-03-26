import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";
import CallToActionSection from "@/components/CallToActionSection";
import AchievementsSection from "@/components/AchievementsSection";
import ResumeSection from "@/components/ResumeSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParticlesBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CallToActionSection />
      <AwardsSection />
      <AchievementsSection />
      <ResumeSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
