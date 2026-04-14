import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, UserRound } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    name: "Capstone Project, Yakteaw (AI Travel Recommendation)",
    type: "Project",
    period: "Aug 2025 - Present",
    role: "Project Manager, QA Lead & DevOps",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800",
    description: "An AI-powered travel recommendation platform built as a capstone project.",
    tested: ["Manual & Regression Testing", "UI Automation", "API Validation"],
    tools: ["Robot Framework", "Selenium", "Postman"],
    contributions: [
      "Served as Project Manager, QA Lead, and DevOps contributor, leading sprint planning, testing, and deployment.",
      "Performed manual testing and regression testing to ensure system stability across releases.",
      "Developed automated test scripts using Robot Framework with Selenium Library for UI validation.",
      "Conducted API testing using Postman, validating JSON responses and ensuring integration accuracy."
    ],
  },
  {
    name: "Organize KMUTT Startup Playground 2024",
    type: "Activity",
    period: "Jan - Mar 2024",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1559136555-9ce11596417e?auto=format&fit=crop&q=80&w=800",
    description: "University-level startup innovation event.",
    tested: ["Event Planning", "Team Management"],
    tools: ["Project Management", "Coordination"],
    contributions: [
      "Led end-to-end planning and execution of a university-level startup innovation event.",
      "Coordinated speakers, judges, sponsors, and cross-functional student teams."
    ],
  },
  {
    name: "Vice President, SAMOSIT (Student Association)",
    type: "Activity",
    period: "Jun 2023 - Jun 2024",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    description: "Student representative and primary liaison with faculty.",
    tested: ["Stakeholder Management", "Leadership"],
    tools: ["Communication", "Event Planning"],
    contributions: [
      "Served as a student representative and primary liaison with faculty and university student organizations.",
      "Demonstrated effective communication and stakeholder management skills.",
      "Led planning and execution of numerous faculty-level activities, managing cross-functional teams and timelines."
    ],
  },
  {
    name: "Speaker in SIT Helloworld (Goose) Camp",
    type: "Activity",
    period: "Nov - Dec 2023",
    role: "Speaker",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800",
    description: "Delivered sessions on DevOps fundamentals for new SIT students.",
    tested: ["Public Speaking", "Mentoring"],
    tools: ["Git", "Docker", "Package Management"],
    contributions: [
      "Delivered sessions on DevOps fundamentals for new SIT students.",
      "Covered Git, Package Management, and Docker concepts to establish foundational knowledge."
    ],
  },
  {
    name: "Speaker in IT#29 Starterpack Camp",
    type: "Activity",
    period: "Jun - Jun 2023",
    role: "Speaker",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    description: "Conducted database (SQL) workshops for first-year IT students.",
    tested: ["Teaching", "Database Management"],
    tools: ["SQL", "Relational Databases"],
    contributions: [
      "Conducted database (SQL) workshops for first-year IT students.",
      "Provided foundational knowledge and practical exercises.",
    ],
  },
];

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Projects & Activities</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Selected work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-md transition-all bg-background relative"
            >
              <div className="absolute top-4 left-4 z-10 transition-transform duration-300 group-hover:scale-105">
                <Badge 
                  variant={project.type === "Project" ? "default" : "secondary"}
                  className="shadow-sm uppercase text-[10px] tracking-wider px-2 py-0.5"
                >
                  {project.type}
                </Badge>
              </div>
              <div className="w-full h-48 overflow-hidden bg-muted">
                <img 
                  src={project.image || DEFAULT_IMAGE} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = DEFAULT_IMAGE;
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{project.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-1 gap-2">
                  <UserRound size={14} /> <span>{project.role}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-4 gap-2">
                  <Calendar size={14} /> <span>{project.period}</span>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <span className="text-sm font-semibold text-primary group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          {selectedProject && (
            <>
              <div className="w-full h-64 sm:h-80 bg-muted relative">
                <img 
                  src={selectedProject.image || DEFAULT_IMAGE} 
                  alt={selectedProject.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-10">
                <DialogHeader className="mb-6">
                  <div className="flex items-center text-sm font-medium text-primary mb-3 gap-2">
                    <Calendar size={16} /> <span>{selectedProject.period}</span>
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl font-bold leading-tight mb-2">
                    {selectedProject.name}
                  </DialogTitle>
                  <DialogDescription className="text-base sm:text-lg">
                    Role: <span className="font-semibold text-foreground">{selectedProject.role}</span>
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-base font-bold uppercase tracking-wider text-muted-foreground mb-4">Overview</h4>
                    <p className="text-base sm:text-lg text-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tested.map((t) => (
                      <Badge key={t} variant="accent" className="text-sm py-1 px-3">{t}</Badge>
                    ))}
                    {selectedProject.tools.map((t) => (
                      <Badge key={t} variant="secondary" className="text-sm py-1 px-3">{t}</Badge>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-base font-bold uppercase tracking-wider text-muted-foreground mb-4">Key Contributions</h4>
                    <ul className="space-y-3">
                      {selectedProject.contributions.map((c, i) => (
                        <li key={i} className="text-base sm:text-lg text-foreground flex items-start gap-4">
                          <span className="mt-2.5 size-2 rounded-full bg-primary shrink-0" />
                          <span className="leading-relaxed">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
