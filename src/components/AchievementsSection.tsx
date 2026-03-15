import { Award, Trophy, Medal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const achievements = [
  {
    title: "Top 10 – Picture Perception Competition",
    description: "Secured a Top 10 rank among 100+ participants in the Picture Perception Competition, demonstrating strong observation and analytical skills.",
    icon: Trophy,
    date: "2023",
  },
  {
    title: "DSA Learning & Problem Solving",
    description: "Completed a one-month Data Structures and Algorithms course and practiced solving multiple problems across different coding platforms to strengthen algorithmic thinking.",
    icon: Award,
    date: "2025",
  },
  {
    title: "Hackathon Participant",
    description: "Participated in a hackathon and developed an interactive food website, gaining experience in teamwork, rapid development, and creative problem-solving.",
    icon: Medal,
    date: "2024",
  },
];

const AchievementsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="achievements" className="py-24 px-4">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0">
        <h2 className="section-heading text-center">
          My <span className="text-primary">Achievements</span>
        </h2>
        <p className="section-subheading text-center mb-16">Milestones and recognitions</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.title} className="glass-card-hover p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-primary/10 p-3 text-primary">
                    <achievement.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;