import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const ContactSection = () => {
 const ref = useScrollReveal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xdawljnk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }

    } catch (error) {
      alert("Error sending message.");
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0">
        <h2 className="section-heading text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="section-subheading text-center mb-16">
          Have a question or want to work together? Fill out the form below or reach out directly through my contact information.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button type="submit" className="glow-button w-full flex items-center justify-center gap-2">
              <Send size={16} /> Send Message
            </button>
          </form>

          {/* Contact info */}
          <div className="glass-card p-8 space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Mail size={24} />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">suryadev1218@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Send size={24} />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+91-9805301107</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Linkedin size={24} />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
 <a
      href="https://www.linkedin.com/in/suryadev-rana-878a19272/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground font-medium hover:text-primary transition"
    >
      Linkedin Profile
    </a>                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Github size={24} />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a
  href="https://github.com/SuryaDevRana"
  target="_blank"
  rel="noopener noreferrer"
  className="text-foreground font-medium hover:text-primary transition"
>
  Github Profile
</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
