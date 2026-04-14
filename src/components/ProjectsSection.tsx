import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "E-Commerce Web App Testing",
    description: "Comprehensive manual and automated testing for an e-commerce platform including user registration, product search, cart management, and checkout flow.",
    role: "QA Tester",
    tested: ["UI Testing", "E2E Testing", "Cross-browser"],
    tools: ["Robot Framework", "Selenium", "Jira"],
    contributions: [
      "Designed 50+ test cases for critical user journeys",
      "Automated login and checkout flows",
      "Identified and reported 30+ bugs with detailed documentation",
    ],
    github: "#",
  },
  {
    name: "RESTful API Testing Suite",
    description: "End-to-end API testing project validating CRUD operations, authentication endpoints, and error handling for a backend service.",
    role: "API Tester",
    tested: ["API Testing", "Integration Testing"],
    tools: ["Postman", "RequestsLibrary", "Python"],
    contributions: [
      "Created automated API test collection with 40+ requests",
      "Validated response status codes, headers, and payloads",
      "Built environment-based test configurations",
    ],
    github: "#",
  },
  {
    name: "Login Automation Framework",
    description: "Automated test framework for login functionality covering valid/invalid credentials, password reset, and session management.",
    role: "Automation Tester",
    tested: ["UI Automation", "Functional Testing"],
    tools: ["Robot Framework", "SeleniumLibrary", "Chrome WebDriver"],
    contributions: [
      "Developed keyword-driven test scripts",
      "Implemented data-driven testing with multiple credentials",
      "Integrated with CI pipeline for nightly test runs",
    ],
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Projects</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Selected work
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group border border-border rounded-lg p-6 md:p-8 hover:border-primary/30 hover:shadow-sm transition-all bg-background"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">Role: {project.role}</p>
                </div>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline shrink-0"
                >
                  GitHub <ExternalLink size={14} />
                </a>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tested.map((t) => (
                  <Badge key={t} variant="accent" className="text-xs">{t}</Badge>
                ))}
                {project.tools.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Key Contributions</p>
                <ul className="space-y-1">
                  {project.contributions.map((c) => (
                    <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-2 size-1 rounded-full bg-primary/40 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
