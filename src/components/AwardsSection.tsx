import { Award } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const awards = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "October 2025",
    description:
      "Comprehensive training on cloud computing fundamentals, services, deployment models, and best practices.",
    image: "/cloud.png",
    badge: "NPTEL",
    link: "https://drive.google.com/file/d/1WtGrCvm6V4bdVrL_N9vOW1IbaegjzA_a/view?usp=sharing",
  },
  {
    title: "ChatGPT-4 Prompt Engineering",
    issuer: "INFOSYS ",
    date: "August 2025",
    description:
      "Advanced course covering prompt engineering concepts, large language models, ChatGPT interaction techniques, and real-world applications of generative AI tools.",
    image: "/chatgpt.png",
    badge: "Infosys",
    link: "https://drive.google.com/file/d/1G15dMhmxmqHxPO1HN_RJiZ_7AMAQnoOb/view?usp=sharing",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "September 2024",
    description:
      "Comprehensive course covering computer networking basics, internet architecture, network protocols, IP addressing, and data communication principles.",
    image: "/google.png",
    badge: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/T5C4QAJU9KZK",
  },
];

const AwardsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="certification" className="py-24 px-4">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0">
        <h2 className="section-heading text-center">
          My <span className="text-primary">Certification</span>
        </h2>
        <p className="section-subheading text-center mb-16">
          Professional certificates that validate my technical expertise and continuous learning journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <Card key={award.title} className="glass-card-hover overflow-hidden">
              <div className="relative group">
                <img
                  src={award.image}
                  alt={award.title}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-background">
                  <Award className="h-4 w-4" />
                  <span>{award.badge}</span>
                </div>
              </div>
               
            
              <CardContent className="pt-6">
                <CardTitle className="text-xl">{award.title}</CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">{award.description}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{award.issuer}</span>
                  <span>{award.date}</span>
                </div>
     <div className="mt-4">
    <a
      href={award.link}
    target="_blank"
    rel="noopener noreferrer"
    className="glow-button w-full py-2 text-sm block text-center"
    >
      View Certificate
     </a>
        </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;