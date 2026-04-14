import { User, Eye, Brain, Lightbulb } from "lucide-react";

const strengths = [
  { icon: Eye, label: "Attention to Detail", desc: "Spotting edge cases and inconsistencies others miss" },
  { icon: Brain, label: "Analytical Thinking", desc: "Breaking complex systems into testable components" },
  { icon: Lightbulb, label: "Problem Solving", desc: "Finding root causes and proposing effective solutions" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">About Me</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              A dedicated QA enthusiast building a career in software testing.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a 4th-year IT student graduating soon with a strong passion for quality assurance and software testing. I believe that great software starts with thorough testing — from writing precise test cases to automating repetitive workflows.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My interest lies in both manual and automation testing, and I'm always eager to learn new tools and methodologies that help deliver reliable, bug-free products.
            </p>
          </div>
          <div className="space-y-6">
            {strengths.map((s) => (
              <div key={s.label} className="flex gap-4 p-4 rounded-lg bg-surface hover:bg-primary/5 transition-colors">
                <div className="shrink-0 size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <s.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{s.label}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
