import { useScrollReveal } from "@/hooks/useScrollReveal";

const CallToActionSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 px-4">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0">
        <div className="glass-card p-10">
          <h2 className="section-heading text-center">
            Interested in <span className="text-primary">working together?</span>
          </h2>
          <p className="section-subheading text-center mb-10">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="glow-button rounded-xl bg-primary px-10 py-3 text-sm font-semibold text-background shadow-lg shadow-primary/30 transition hover:bg-primary/90"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;