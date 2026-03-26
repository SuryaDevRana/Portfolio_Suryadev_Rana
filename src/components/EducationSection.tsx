import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EducationSection = () => {
  const ref = useScrollReveal();

  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      location: "Phagwara, Punjab",
      duration: "Aug' 23 – Present",
      grade: "CGPA: 7.03",
    },
    {
      institution: "Vishudha International School",
      degree: "Intermediate",
      location: "Palampur, Himachal Pradesh",
      duration: "Apr' 20 – Mar' 22",
      grade: "Percentage: 86%",
    },
    {
      institution: "Vishudha International",
      degree: "Matriculation",
      location: "Palampur, Himachal Pradesh",
      duration: "Apr' 19 – Mar' 20",
      grade: "Percentage: 79%",
    },
  ];

  return (
    <section id="education" className="py-24 px-4">
      <div ref={ref} className="max-w-4xl mx-auto opacity-0">
        <h2 className="section-heading text-center">
          My <span className="text-primary">Education</span>
        </h2>
        <div className="mt-12 space-y-6">
          {education.map((item, index) => (
            <div 
              key={index} 
              className="glass-card p-8 group hover:border-primary/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.institution}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-1">{item.degree}</p>
                    <p className="text-primary/80 font-semibold">{item.grade}</p>
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-sm text-muted-foreground gap-2">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary/60" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary/60" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;