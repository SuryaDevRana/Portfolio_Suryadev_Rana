import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Skill = { name: string; level: number; description?: string };

type SkillCategory = { title: string; skills: Skill[] };

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "C++", level: 75, description: "Building performant algorithms and systems." },
      { name: "Java", level: 70, description: "Enterprise-grade apps and backend services." },
      { name: "Python", level: 85, description: "Type-safe JavaScript for scalable apps." },
      { name: "JavaScript", level: 90, description: "Modern front-end and full-stack development." },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 85, description: "Relational database design and optimization." },
      { name: "MongoDB", level: 80, description: "NoSQL document data modeling and queries." },
      { name: "PHP", level: 70, description: "Server-side scripting for database-backed apps." },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React", level: 88 },
      { name: "Bootstrap", level: 70 },
      { name: "Node.js", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useScrollReveal();
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return skillCategories;

    return skillCategories
      .map((category) => {
        const filteredSkills = category.skills.filter((skill) =>
          skill.name.toLowerCase().includes(normalizedQuery),
        );

        return { ...category, skills: filteredSkills };
      })
      .filter((category) => category.skills.length > 0);
  }, [query]);

  return (
    <section id="skills" className="py-24 px-4">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0">
        <h2 className="section-heading text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="section-subheading text-center mb-16">Technologies and concepts I work with</p>

        <div className="flex flex-col gap-8">
          <div className="relative mx-auto w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills..."
              className="pl-10"
            />
          </div>

          {filteredCategories.length === 0 ? (
            <p className="text-center text-muted-foreground">No skills match your search. Try another term.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredCategories.map((cat) => (
                <Card key={cat.title} className="glass-card-hover p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-foreground">{cat.title}</CardTitle>
                    <p className="text-xs text-muted-foreground">{cat.skills.length} skill{cat.skills.length === 1 ? "" : "s"}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
