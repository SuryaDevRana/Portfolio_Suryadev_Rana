import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Download, View } from "lucide-react";

const ResumeSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="resume" className="py-24 px-4">
      <div ref={ref} className="max-w-2xl mx-auto text-center opacity-0">
        <h2 className="section-heading">
          My <span className="text-primary">Resume</span>
        </h2>
        <div className="glass-card p-12 mt-12">
          <p className="text-muted-foreground text-lg mb-8">
            Strong foundation in Data Structures & Algorithms with hands-on experience in web development and problem-solving.
          </p>
          <a href="https://drive.google.com/file/d/1r0-3FcUoVCZCeCCFshkRsDCPRdzoIEsX/view?usp=sharing" className="glow-button inline-flex items-center gap-2">
            <View size={18} /> View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
