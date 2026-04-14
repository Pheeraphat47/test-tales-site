const experiences = [
  {
    period: "Jun 2024 — Present",
    title: "QA Intern",
    company: "Tech Solutions Co., Ltd.",
    description: "Gaining hands-on experience in software testing within an agile development team.",
    responsibilities: [
      "Write and maintain test cases for web applications",
      "Execute manual and automated test suites",
      "Report and track bugs using Jira",
      "Collaborate with developers to reproduce and resolve issues",
      "Participate in sprint planning and daily standups",
    ],
    active: true,
  },
  {
    period: "Jan 2024 — May 2024",
    title: "QA Volunteer / Academic Project",
    company: "University Capstone Project",
    description: "Led the QA effort for a team capstone project, ensuring quality before final presentation.",
    responsibilities: [
      "Designed test plans and test cases for the project",
      "Performed functional and usability testing",
      "Automated critical test scenarios with Robot Framework",
      "Documented testing results and presented findings to faculty",
    ],
    active: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Experience</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Professional journey
        </h2>

        <div className="max-w-3xl">
          <div className="border-l-2 border-border pl-8 space-y-12">
            {experiences.map((exp) => (
              <div key={exp.title} className="relative">
                <div
                  className={`absolute -left-[calc(2rem+5px)] top-1 size-2.5 rounded-full border-2 ${
                    exp.active ? "border-primary bg-background" : "border-muted-foreground/30 bg-background"
                  }`}
                />
                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                  exp.active ? "text-primary" : "text-muted-foreground"
                }`}>
                  {exp.period}
                </p>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                <ul className="space-y-1">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-2 size-1 rounded-full bg-primary/40 shrink-0" />
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
