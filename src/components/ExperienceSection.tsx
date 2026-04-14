const experiences = [
  {
    period: "Sep 2025 — Mar 2026",
    title: "QA Automation Engineer Intern (SCB Technology Hub)",
    company: "Siam Commercial Bank Public Company Limited",
    description: "Collaborated in the SCB Technology Hub to develop next-generation banking solutions.",
    responsibilities: [
      "Automated API validation (XML/JSON) using Python to ensure system integrity.",
      "Developed and optimized test scripts with Robot Framework.",
      "Designed test scenarios and collaborated with experts to meet business requirements."
    ],
    active: true,
  },
  {
    period: "Jan 2025 — May 2025",
    title: "Product Owner Cooperative Intern",
    company: "Innovasive Company Limited",
    description: "Bridged the gap between stakeholders and development teams.",
    responsibilities: [
      "Analyzed business requirements and documented functional specifications.",
      "Created structured user stories, acceptance criteria, and process flows.",
      "Aided Dev/QA teams in reducing requirement ambiguity and clarifying goals."
    ],
    active: false,
  },
  {
    period: "Jun 2024 — Jul 2024",
    title: "UX Researcher Intern",
    company: "Adirek&Co Company Limited",
    description: "Improved product usability through data-driven user research.",
    responsibilities: [
      "Conducted usability testing and analyzed user behavior patterns.",
      "Identified and addressed key improvement areas for product usability.",
      "Delivered actionable insights to enhance overall user experience."
    ],
    active: false,
  },
  {
    period: "Jun 2023 — Jul 2023",
    title: "Frontend Developer Intern",
    company: "Innovasive Company Limited",
    description: "Built and maintained responsive web applications.",
    responsibilities: [
      "Developed modern web interfaces using Next.js and Tailwind CSS.",
      "Collaborated on API troubleshooting and UI/UX improvements."
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
