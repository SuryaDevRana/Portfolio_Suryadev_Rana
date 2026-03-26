import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial glow behind heading */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary font-heading font-medium text-sm md:text-base mb-4 tracking-widest uppercase opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Welcome to my portfolio
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Hi, I'm <span className="text-primary">Suryadev Rana</span>
        </h1>

        {/* Typing effect subtitle */}
        <div className="mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted-foreground text-base md:text-lg font-body inline-block overflow-hidden whitespace-nowrap border-r-2 border-primary animate-typing pr-1 max-w-full">
           Full Stack Developer | Building Scalable Web Applications | Problem Solver
          </p>
        </div>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          I build efficient algorithms and clean, scalable web applications with a strong focus on problem-solving and performance.
        </p>

        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "1s" }}>
          <a href="#projects" className="glow-button">View Projects</a>
          <a href="/resume.pdf" 
          download="resume.pdf"className="border border-border text-foreground font-heading font-semibold px-6 py-3 rounded-xl hover:border-primary/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300">
          Download Resume
          </a>
          <a href="#contact" className="border border-border text-foreground font-heading font-semibold px-6 py-3 rounded-xl hover:border-primary/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300">
            Contact Me
          </a>
        </div>

        <a href="#about" className="inline-block mt-16 text-muted-foreground hover:text-primary transition-colors animate-float">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
