import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-xl mx-auto">
          <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
            <FileText size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Download my resume
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Get a detailed overview of my education, skills, projects, and experience in a downloadable PDF format.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download size={16} />
              Download Resume (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
