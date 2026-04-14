import { ClipboardCheck, Bot, Globe, Wrench, Code } from "lucide-react";

const skillGroups = [
  {
    icon: ClipboardCheck,
    title: "Manual Testing",
    skills: ["Test Case Design", "Test Execution", "Bug Reporting", "Regression Testing"],
  },
  {
    icon: Bot,
    title: "Automation Testing",
    skills: ["Robot Framework", "Selenium", "Test Script Development", "CI/CD Integration"],
  },
  {
    icon: Globe,
    title: "API Testing",
    skills: ["Postman", "RequestsLibrary", "REST API Validation", "Response Verification"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git & GitHub", "Jira", "TestRail", "VS Code"],
  },
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "Java (Basic)", "SQL", "HTML/CSS"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Skills & Tools</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Technical toolkit
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-background rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <group.icon size={20} />
              </div>
              <h3 className="font-semibold mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="size-1 rounded-full bg-primary/40" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
