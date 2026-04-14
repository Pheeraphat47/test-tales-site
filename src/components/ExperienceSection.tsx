const experiences = [
  {
    period: "Sep 2025 — Mar 2026",
    title: "QA Automation Engineer Intern (SCB Technology Hub)",
    company: "Siam Commercial Bank Public Company Limited",
    description: "Participated in the SCB Technology Hub, a strategic collaboration between SCB and KMUTT, focused on developing next-generation tech talent through real-world banking projects.",
    responsibilities: [
      "Selected to work within the SCB Technology Hub at KMUTT, a dedicated space for hands-on learning and professional practice under the close supervision of SCB's technology experts.",
      "Developed Python-based automation tools to validate API responses (XML/JSON) against system specifications.",
      "Contributed to the development and improvement of test automation scripts using Robot Framework.",
      "Collaborated with senior QA engineers to design and execute comprehensive test scenarios, ensuring system functionality met strict business requirements."
    ],
    active: true,
  },
  {
    period: "Jan 2025 — May 2025",
    title: "Product Owner Cooperative Intern",
    company: "Innovasive Company Limited",
    description: "Facilitated clear communication between stakeholders and development teams.",
    responsibilities: [
      "Assisted in gathering, analyzing, and documenting business requirements from stakeholders.",
      "Translated requirements into structured functional specifications, user stories with acceptance criteria, and process flow diagrams.",
      "Collaborated with developers and QA teams to clarify acceptance criteria and reduce requirement ambiguity."
    ],
    active: false,
  },
  {
    period: "Jun 2024 — Jul 2024",
    title: "UX Researcher Intern",
    company: "Adirek&Co Company Limited",
    description: "Conducted usability testing and analysis to improve product usability.",
    responsibilities: [
      "Conducted usability testing and analyzed user behavior data.",
      "Identified key improvement areas for product usability.",
      "Delivered actionable insights that supported data-driven product decisions and enhanced user experience."
    ],
    active: false,
  },
  {
    period: "Jun 2023 — Jul 2023",
    title: "Frontend Developer Intern",
    company: "Innovasive Company Limited",
    description: "Developed and maintained responsive web applications.",
    responsibilities: [
      "Developed and maintained responsive web applications using Next.js and Tailwind CSS.",
      "Collaborated with backend developers to troubleshoot API responses.",
      "Debugged UI defects and improved overall system integration."
    ],
    active: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Experience</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Professional journey
        </h2>

        <div className="max-w-4xl">
          <div className="border-l-[3px] border-border pl-8 md:pl-10 space-y-16">
            {experiences.map((exp) => (
              <div key={exp.title} className="relative">
                <div
                  className={`absolute -left-[calc(2rem+8.5px)] md:-left-[calc(2.5rem+8.5px)] top-1 size-[18px] rounded-full border-[3px] ${
                    exp.active ? "border-primary bg-background" : "border-muted-foreground/30 bg-background"
                  }`}
                />
                <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${
                  exp.active ? "text-primary" : "text-muted-foreground"
                }`}>
                  {exp.period}
                </p>
                <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                <p className="text-base text-muted-foreground mb-4">{exp.company}</p>
                <p className="text-base text-foreground leading-relaxed mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="text-base text-muted-foreground flex items-start gap-3">
                      <span className="mt-2.5 size-1.5 rounded-full bg-primary/50 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
