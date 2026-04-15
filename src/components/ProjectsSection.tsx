import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, UserRound, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// -- Project images --
import capstone1 from "@/assets/projects/Capstone/Capstone_1.png";
import capstone2 from "@/assets/projects/Capstone/Capstone_2.png";
import integrated1 from "@/assets/projects/Integrated/Integrated_1.png";
import integrated2 from "@/assets/projects/Integrated/Integrated_2.png";
import integrated3 from "@/assets/projects/Integrated/Integrated_3.png";
import udemy1 from "@/assets/projects/Udemycourse_Project/UdemyProject_1.png";
import udemy2 from "@/assets/projects/Udemycourse_Project/UdemyProject_2.png";
import udemy3 from "@/assets/projects/Udemycourse_Project/UdemyProject_3.png";
import udemycert from "@/assets/projects/Udemycourse_Project/Udemy_RobotFramework_course.jpg";

// -- Test evidence images --
import capstoneManualTestCase from "@/assets/projects/Capstone/Capstone_ManualTestCase.png";
import capstoneAutomateTestCase1 from "@/assets/projects/Capstone/Capstone_AutomateTestCase1.png";
import capstoneAutomateTestCase2 from "@/assets/projects/Capstone/CapstoneAutomateTestCase2.png";
import integratedTestManual from "@/assets/projects/Integrated/TestCase_Manual.png";
import integratedTestCypress from "@/assets/projects/Integrated/TestCase_Cypress.png";
import integratedTestPostman from "@/assets/projects/Integrated/TestCase_Postman.png";
import robotExAPITest from "@/assets/projects/Udemycourse_Project/RobotEx_APITest.png";
import robotExUITest from "@/assets/projects/Udemycourse_Project/RobotEx_UITest.png";

// -- Activity images --
import samosit1 from "@/assets/activities/SamoSIT/SamoSIT_1.png";
import samosit2 from "@/assets/activities/SamoSIT/SamoSIT_2.png";
import samosit3 from "@/assets/activities/SamoSIT/SamoSIT_3.png";
import samosit4 from "@/assets/activities/SamoSIT/SamoSIT_4.png";
import helloworld1 from "@/assets/activities/Helloworld/SITHELLOWORLD_1.png";
import helloworld2 from "@/assets/activities/Helloworld/SITHELLOWORLD_2.png";
import helloworld3 from "@/assets/activities/Helloworld/SITHELLOWORLD_3.png";
import helloworld4 from "@/assets/activities/Helloworld/SITHELLOWORLD_4.png";
import starterpack1 from "@/assets/activities/Starterpack/Starterpack_1.png";
import starterpack2 from "@/assets/activities/Starterpack/Starterpack_2.png";
import starterpack3 from "@/assets/activities/Starterpack/Starterpack_3.png";

interface TestEvidence {
  title: string;
  image: string;
  description: string;
}

interface ProjectItem {
  name: string;
  type: "Project" | "Activity";
  period: string;
  role: string;
  images: string[];
  description: string;
  tested: string[];
  tools: string[];
  techStack?: { category: string; items: string[] }[];
  contributions: string[];
  testEvidence?: TestEvidence[];
}

const projects: ProjectItem[] = [
  {
    name: "Yakteaw AI Travel Planning Platform (Capstone Project)",
    type: "Project",
    period: "Aug 2025 - Apr 2026",
    role: "Frontend Developer, QA Engineer/Software Tester & DevOps",
    images: [capstone1, capstone2],
    description: "An AI-powered travel recommendation platform that allows users to create personalized trips based on their preferences. Users can generate trips using AI by specifying interests and references, then manage their itineraries with features such as editing and deleting. The platform also supports social interactions, enabling users to like, save, and share trips, as well as explore travel plans created by other users",
    tested: ["Manual & Regression Testing", "UI Automation", "API Validation"],
    tools: ["Robot Framework", "Selenium", "Postman", "Python"],
    techStack: [
      { category: "Testing", items: ["Robot Framework", "Selenium", "Python"] },
      { category: "Frontend", items: ["Nuxt", "Tailwind CSS"] },
      { category: "Backend", items: ["Go"] },
      { category: "Database", items: ["MySQL"] },
      { category: "Infra", items: ["Docker", "GitLab CI/CD"] },
    ],
    contributions: [
      "Served as Project Manager, QA Lead, and DevOps contributor, leading sprint planning, testing, and deployment.",
      "Performed manual testing and regression testing to ensure system stability across releases.",
      "Developed automated test scripts using Robot Framework with Selenium for UI validation.",
      "Conducted API testing using Postman, validating JSON responses and ensuring integration accuracy."
    ],
    testEvidence: [
      {
        title: "Manual Test Case",
        image: capstoneManualTestCase,
        description: "Comprehensive manual test cases designed to verify all core functionalities of the platform, covering both positive and negative scenarios.",
      },
      {
        title: "Automated Test Case — Robot Framework & Selenium",
        image: capstoneAutomateTestCase1,
        description: "UI automation test scripts built with Robot Framework and Selenium Library, automating key user flows such as login/register validation, Search Trip , Create Trip , Like/Saved/Shared Trip etc.",
      },
      {
        title: "Automated Test Case — Postman (API Testing)",
        image: capstoneAutomateTestCase2,
        description: "API test collection created in Postman to validate REST endpoints, verifying JSON response structures, status codes, and data integrity.",
      },
    ],
  },
  {
    name: "Kradan Kanban Board Management (Integrated Project)",
    type: "Project",
    period: "Aug - Dec 2024",
    role: "Full-stack Developer",
    images: [integrated1, integrated2, integrated3],
    description: "A Kanban board system designed to organize and manage tasks through visual workflow management. Users can create multiple boards, set visibility (public/private), and collaborate with others by inviting them to join a board. Within each board, tasks are represented as cards and organized into status columns such as To Do, Doing, and Done, allowing users to track progress and update task status easily.",
    tested: ["Manual Testing", "Integration Testing", "UI Automation"],
    tools: ["Vue.js", "Java Spring Boot", "Tailwind CSS", "Postman", "Cypress"],
    techStack: [
      { category: "Testing", items: ["Postman", "Cypress"] },
      { category: "Frontend", items: ["Vue.js", "Tailwind CSS"] },
      { category: "Backend", items: ["Java Spring Boot"] },
      { category: "Database", items: ["MySQL"] },
      { category: "Infra", items: ["Docker"] },
    ],
    contributions: [
      "Developed a full-stack Kanban board application for task management.",
      "Built the frontend using Vue.js and Tailwind CSS for a modern, responsive UI.",
      "Implemented backend services with Java Spring Boot and MySQL database.",
      "Passed all test cases from Lecturer including manual, API validation with Postman, and UI automation with Cypress."
    ],
    testEvidence: [
      {
        title: "Manual Test Case (UAT)",
        image: integratedTestManual,
        description: "Manual test cases prepared by the lecturer for User Acceptance Testing (UAT). Our team developed the web application to pass all specified UAT scenarios.",
      },
      {
        title: "Automated Frontend Test — Cypress",
        image: integratedTestCypress,
        description: "Automated frontend test suite written in Cypress by the lecturer. These E2E tests validated the UI behavior, form interactions, and navigation flows of the Kanban board.",
      },
      {
        title: "Automated Backend Test — Postman",
        image: integratedTestPostman,
        description: "Postman API test collection used to validate all backend endpoints, ensuring correct CRUD operations, authentication, and error handling across the board management API.",
      },
    ],
  },
  {
    name: "Robot Framework with Python - Selenium/API Automation Testing Project",
    type: "Project",
    period: "Apr 2026",
    role: "Learner - QA Automation Engineer",
    images: [udemy2, udemy3, udemy1, udemycert],
    description: "An automation testing project utilizing Robot Framework with Selenium for E2E testing and Requests Library for API testing, This project is my learning in Udemy Course.",
    tested: ["E2E Testing", "API Testing", "Automation Testing"],
    tools: ["Robot Framework", "Selenium", "Requests Library", "Python"],
    techStack: [
      { category: "Testing", items: ["Robot Framework", "Selenium", "Requests Library"] },
      { category: "Programming Language", items: ["Python"] },
    ],
    contributions: [
      "Developed automated E2E test scripts using Robot Framework with Selenium.",
      "Created API test suites using Requests Library for REST API validation.",
      "Implemented test automation best practices and maintainable test architecture.",
    ],
    testEvidence: [
      {
        title: "UI / E2E Testing — Robot Framework & Selenium",
        image: robotExUITest,
        description: "End-to-end UI test scripts developed with Robot Framework and Selenium, covering login flow validation, e-commerce web interactions, form submissions, and page navigation testing.",
      },
      {
        title: "API Testing — Robot Framework & Requests Library",
        image: robotExAPITest,
        description: "API test suites built with Robot Framework's Requests Library, performing REST API validation including GET/POST/PUT/DELETE operations, response status verification, and JSON body assertions.",
      },
    ],
  },
];

const activities: ProjectItem[] = [
  {
    name: "Vice President of SAMOSIT",
    type: "Activity",
    period: "Jun 2023 - Jun 2024",
    role: "Vice President",
    images: [samosit1, samosit2, samosit3, samosit4],
    description: "Student representative and primary liaison with faculty at the Student Association of the School of Information Technology (SAMOSIT).",
    tested: ["Stakeholder Management", "Leadership"],
    tools: ["Communication", "Event Planning"],
    contributions: [
      "Served as a student representative and primary liaison with faculty and university student organizations.",
      "Demonstrated effective communication and stakeholder management skills.",
      "Led planning and execution of numerous faculty-level activities, managing cross-functional teams and timelines."
    ],
  },
  {
    name: "SIT Helloworld Camp (DevOps Speaker)",
    type: "Activity",
    period: "Nov - Dec 2023",
    role: "Speaker",
    images: [helloworld1, helloworld2, helloworld3, helloworld4],
    description: "Delivered sessions on DevOps fundamentals for new SIT students, covering Git, Package Management, and Docker concepts.",
    tested: ["Public Speaking", "Mentoring"],
    tools: ["Git", "Docker", "Package Management"],
    contributions: [
      "Delivered sessions on DevOps fundamentals for new SIT students.",
      "Covered Git, Package Management, and Docker concepts to establish foundational knowledge."
    ],
  },
  {
    name: "IT Starterpack Camp (Database Speaker)",
    type: "Activity",
    period: "Jun 2023",
    role: "Speaker",
    images: [starterpack1, starterpack2, starterpack3],
    description: "Conducted database (SQL) workshops for first-year IT students, providing foundational knowledge and practical exercises.",
    tested: ["Teaching", "Database Management"],
    tools: ["SQL", "Relational Databases"],
    contributions: [
      "Conducted database (SQL) workshops for first-year IT students.",
      "Provided foundational knowledge and practical exercises.",
    ],
  },
];

// ---------- Image Carousel used inside Dialog ----------
const ImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="w-full h-64 sm:h-80 bg-muted relative">
        <img
          src={images[0]}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  const goPrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full h-64 sm:h-80 bg-muted relative group/carousel">
      <img
        src={images[current]}
        alt={`${alt} - ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 backdrop-blur-sm"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 backdrop-blur-sm"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              idx === current
                ? "bg-white w-5"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// ---------- Card-level mini carousel (thumbnail) ----------
const CardImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  const goPrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-full group/thumb">
      <img
        src={images[current]}
        alt={`${alt} - ${current + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        className="absolute left-1.5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft size={14} />
      </button>
      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200"
        aria-label="Next image"
      >
        <ChevronRight size={14} />
      </button>
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block rounded-full transition-all duration-200 ${
              idx === current
                ? "bg-white w-3.5 h-1.5"
                : "bg-white/50 w-1.5 h-1.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// ---------- Tech Stack tag colors ----------
const techCategoryColors: Record<string, string> = {
  Frontend: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Backend: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Database: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Infra: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Testing: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  "Programming Language": "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const renderCard = (item: ProjectItem) => (
    <div
      key={item.name}
      onClick={() => setSelectedProject(item)}
      className="group cursor-pointer flex flex-col border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-md transition-all bg-background relative"
    >
      <div className="absolute top-4 left-4 z-10 transition-transform duration-300 group-hover:scale-105">
        <Badge
          variant={item.type === "Project" ? "default" : "secondary"}
          className="shadow-sm uppercase text-[10px] tracking-wider px-2 py-0.5"
        >
          {item.type}
        </Badge>
      </div>
      <div className="w-full h-48 overflow-hidden bg-muted">
        <CardImageCarousel images={item.images} alt={item.name} />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{item.name}</h3>
        <div className="flex items-center text-sm text-muted-foreground mb-1 gap-2">
          <UserRound size={14} /> <span>{item.role}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mb-3 gap-2">
          <Calendar size={14} /> <span>{item.period}</span>
        </div>

        {/* Tech Stack tags (only for Projects) */}
        {item.techStack && item.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.techStack.map((stack) =>
              stack.items.map((tech) => (
                <span
                  key={`${stack.category}-${tech}`}
                  className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-medium ${
                    techCategoryColors[stack.category] || "bg-muted text-muted-foreground border-border"
                  }`}
                >
                  {tech}
                </span>
              ))
            )}
          </div>
        )}

        <p className="text-muted-foreground text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
          {item.description}
        </p>
        <div className="mt-auto">
          <span className="text-sm font-semibold text-primary group-hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Projects & Activities</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Selected work
        </h2>

        {/* Projects Row */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-primary/50" />
            Projects
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map(renderCard)}
        </div>

        {/* Activities Row */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-primary/50" />
            Activities
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map(renderCard)}
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          {selectedProject && (
            <>
              {/* Image Carousel in Dialog */}
              <ImageCarousel images={selectedProject.images} alt={selectedProject.name} />

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

                  {/* Tech Stack section (only for Projects) */}
                  {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                    <div>
                      <h4 className="text-base font-bold uppercase tracking-wider text-muted-foreground mb-4">Tech Stack</h4>
                      <div className="space-y-3">
                        {selectedProject.techStack.map((stack) => (
                          <div key={stack.category} className="flex items-center gap-3 flex-wrap">
                            <span className="text-sm font-semibold text-muted-foreground min-w-[80px]">{stack.category}:</span>
                            <div className="flex flex-wrap gap-2">
                              {stack.items.map((tech) => (
                                <span
                                  key={tech}
                                  className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium ${
                                    techCategoryColors[stack.category] || "bg-muted text-muted-foreground border-border"
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.type === "Activity" && (
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tested.map((t) => (
                        <Badge key={t} variant="accent" className="text-sm py-1 px-3">{t}</Badge>
                      ))}
                      {selectedProject.tools.map((t) => (
                        <Badge key={t} variant="secondary" className="text-sm py-1 px-3">{t}</Badge>
                      ))}
                    </div>
                  )}

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

                  {/* Test Evidence Section */}
                  {selectedProject.testEvidence && selectedProject.testEvidence.length > 0 && (
                    <div>
                      <h4 className="text-base font-bold uppercase tracking-wider text-muted-foreground mb-6">Test Evidence</h4>
                      <div className="space-y-8">
                        {selectedProject.testEvidence.map((evidence, idx) => (
                          <div key={idx} className="rounded-xl border border-border overflow-hidden bg-muted/30">
                            <div className="relative group/evidence">
                              <img
                                src={evidence.image}
                                alt={evidence.title}
                                className="w-full h-auto object-contain bg-black/5 cursor-pointer transition-transform duration-300"
                                onClick={(e) => {
                                  const img = e.currentTarget;
                                  if (!document.fullscreenElement) {
                                    img.requestFullscreen?.();
                                  } else {
                                    document.exitFullscreen?.();
                                  }
                                }}
                              />
                              <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover/evidence:opacity-100 transition-opacity duration-200 backdrop-blur-sm">
                                Click to fullscreen
                              </div>
                            </div>
                            <div className="p-4 sm:p-5">
                              <h5 className="text-sm sm:text-base font-bold text-foreground mb-1.5">{evidence.title}</h5>
                              <p className="text-sm text-muted-foreground leading-relaxed">{evidence.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
