import { Github, Linkedin, Mail, PenTool, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Pheeraphat47", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/pheeraphat-dhirachaisuphakij/", label: "LinkedIn" },
    { icon: PenTool, href: "https://medium.com/@dpheeraphat2547", label: "Medium" },
    { icon: Mail, href: "mailto:pheeraphat.dhi@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <footer className="bg-background border-t border-border py-12 overflow-hidden relative">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 size-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-10">
          <div className="max-w-md">
            <a href="#" className="text-2xl font-bold tracking-tight uppercase mb-2 block">
              Pheeraphat
            </a>
            <p className="text-muted-foreground text-base leading-relaxed">
              Software Quality Assurance Engineer focused on automation and delivering high-quality software solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 w-full lg:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 font-semibold text-sm"
                aria-label={link.label}
              >
                <link.icon size={18} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-sm">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <p className="font-medium text-foreground/80">
              &copy; {new Date().getFullYear()} QA Portfolio.
            </p>
            <div className="flex items-center gap-2 font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              Active & Open for roles
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-bold hover:text-primary transition-all duration-300 group"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
