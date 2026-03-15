import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "QR-Inventory",
    subtitle: "A QR-based inventory management system for efficient tracking and management of inventory items.",
    tags: ["HTML", "JavaScript", "PHP", "MySQL", "QR Code"],
    description:
      "The system allows users to scan QR codes to quickly access, update, and manage inventory records through a centralized dashboard.",
    image: "/tracker.png",
    github: "https://github.com/SuryaDevRana/QR-Code-Based-Inventory-Management-System",
    live: "#",
    featured: true,
  },
  {
    title: "Real Time Vehicle Tracker",
    subtitle: "A vehicle tracking web application that allows users to monitor vehicle locations in real time. ",
    tags: ["React", "Node.js", "Tailwind CSS", "Socket.io", "Mapbox"],
    description:
      "The system provides location updates, route tracking, and an interactive map interface to manage and track vehicles efficiently.",
    image: "/vechile.png",
    github: "https://github.com/SuryaDevRana/Real-Time-Vehicle-Tracking",
    live: "https://real-time-vehicle-tracking-frontend.onrender.com",
  },
  {
    title: "Ace Bank",
    subtitle: "A modern banking application with real-time transaction tracking and financial insights.",
    tags: ["Java", "Jsp", "MySQL", "Tomcat"],
    description:
      "A full-stack banking application that enables users to securely manage accounts, perform fund transfers, and monitor transaction history.",
    image: "acebank.png",
    github: "https://github.com/SuryaDevRana/Ace_Bank",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-4">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0">
        <h2 className="section-heading text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="section-subheading text-center mb-16">Interactive project showcase</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden shadow-xl">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured ? (
                  <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-background shadow">
                    Featured
                  </span>
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.subtitle}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <div className="flex flex-wrap gap-3 px-6 pb-6">
                <Button asChild size="sm" variant="secondary">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Source
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ProjectsSection;
