import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, Github, Linkedin, Trophy } from "lucide-react";

const profiles = [
  { name: "LeetCode", icon: Trophy, url: "#" },
  { name: "CodeStudio", icon: Code2, url: "#" },
  { name: "GitHub", icon: Github, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
];

const CodingProfiles = () => {
  const ref = useScrollReveal();

  return (
    <section id="coding-profiles" className="py-24 px-4">
      <div ref={ref} className="max-w-4xl mx-auto opacity-0">
        <h2 className="section-heading text-center">
          Coding <span className="text-primary">Profiles</span>
        </h2>
        <p className="section-subheading text-center mb-16">Where I practice and contribute</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <a
              key={p.name}
              href={p.url}
              className="glass-card-hover p-8 flex flex-col items-center gap-4 group"
            >
              <p.icon size={32} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <span className="font-heading font-medium text-foreground text-sm">{p.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
