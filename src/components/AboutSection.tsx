import { MapPin, GraduationCap, Briefcase, Laptop, BookOpen, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-4">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0">
        <h2 className="section-heading text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="section-subheading text-center mb-16">Get to know who I am</p>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-primary">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="rounded-xl bg-primary/10 p-3 text-primary">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Himachal Pradesh, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="rounded-xl bg-primary/10 p-3 text-primary">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">Education</p>
                    <p className="text-sm text-muted-foreground">Pursuing B.Tech in Computer Science</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="rounded-xl bg-primary/10 p-3 text-primary">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">Experience</p>
                    <p className="text-sm text-muted-foreground">2+ Years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-primary">When I&apos;m Not Coding</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="rounded-xl bg-primary/10 p-3 text-primary">
                    <Laptop className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">Surfing Web</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="rounded-xl bg-primary/10 p-3 text-primary">
                    <BookOpen className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">Reading</p>
                  </div>
                  
                </div>
                <div className="flex items-start gap-3">
                  <span className="rounded-xl bg-primary/10 p-3 text-primary">
                    <Music className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">Listening to Music</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-primary">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Hello! I&apos;m Suryadev Rana, a passionate developer with a deep fascination for transforming complex problems into elegant digital solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                My journey in tech began with curious exploration and has evolved into a focused expertise in full-stack development. I specialize in crafting responsive, user-centered applications using React, Node.js, and modern cloud infrastructure.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                What drives me is the intersection of technology and creativity—finding that perfect balance between functional code and intuitive design. I&apos;m constantly expanding my skills through hands-on projects and keeping up with emerging technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
