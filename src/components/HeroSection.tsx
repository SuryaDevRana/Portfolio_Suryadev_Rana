import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 0.5,
        o: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Glowing arc
      const cx = canvas.width / 2;
      const cy = canvas.height * 0.55;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, canvas.width * 0.45);
      gradient.addColorStop(0, "rgba(34, 211, 238, 0.08)");
      gradient.addColorStop(0.5, "rgba(34, 211, 238, 0.03)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Arc line
      ctx.beginPath();
      ctx.arc(cx, cy + 200, canvas.width * 0.4, Math.PI * 1.1, Math.PI * 1.9);
      ctx.strokeStyle = "rgba(34, 211, 238, 0.15)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Second arc
      ctx.beginPath();
      ctx.arc(cx, cy + 200, canvas.width * 0.35, Math.PI * 1.15, Math.PI * 1.85);
      ctx.strokeStyle = "rgba(139, 92, 246, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${p.o})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

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
          <a href="#resume" className="border border-border text-foreground font-heading font-semibold px-6 py-3 rounded-xl hover:border-primary/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300">
             Resume
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
