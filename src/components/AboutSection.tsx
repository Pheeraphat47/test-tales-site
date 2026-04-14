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
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">About Me</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              A dedicated QA engineer building high-quality software.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a 4th-year IT student at King Mongkut's University of Technology Thonburi (KMUTT), expected to graduate in May 2026. I have a strong passion for quality assurance and software testing. I believe that great software starts with thorough testing — from writing precise test cases to automating repetitive workflows.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My professional journey includes hands-on experience in manual and automation testing within the banking sector, specifically at the <span className="text-foreground font-semibold">SCB Technology Hub</span> — a premier collaborative workspace between KMUTT and SCB. I am experienced in developing automation scripts using Python and Robot Framework, and I thrive in mentor-led environments that prioritize high-quality delivery.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comfortable working in Thai–English bilingual environments, with a <span className="text-foreground font-semibold">TOEIC score of 780</span> demonstrating professional English proficiency for effective communication in international tech teams.
            </p>
          </div>
          <div className="space-y-6 md:mt-4">
            {strengths.map((s) => (
              <div key={s.label} className="flex gap-5 p-5 rounded-xl bg-surface hover:bg-primary/5 transition-colors">
                <div className="shrink-0 size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <s.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{s.label}</h3>
                  <p className="text-base text-muted-foreground">{s.desc}</p>
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
