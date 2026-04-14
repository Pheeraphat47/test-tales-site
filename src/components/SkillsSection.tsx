import { Bot, Rocket, GraduationCap, Github, Trophy, Languages, ExternalLink, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import toeicCertificate from "@/assets/certificates/TOEIC_Score_Pheeraphat.pdf";

const HighlightsSection = () => {
  return (
    <section id="highlights" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: SCB Experience */}
          <div className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all flex flex-col items-start h-full">
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Bot size={28} />
            </div>
            <Badge variant="accent" className="mb-4 uppercase text-[10px] tracking-widest px-2 py-0.5">Professional</Badge>
            <h3 className="text-2xl font-bold mb-4">SCB Technology Hub</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 flex-grow">
              Developing Python-based tools and Robot Framework scripts to validate banking systems within the KMUTT-SCB collaborative innovation space.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["Python", "Robot Framework", "API"].map(t => (
                <span key={t} className="text-xs font-semibold px-2 py-1 rounded-md bg-muted border border-border">{t}</span>
              ))}
            </div>
          </div>

          {/* Card 2: TOEIC / Languages */}
          <div className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all flex flex-col items-start h-full">
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Trophy size={28} />
            </div>
            <Badge variant="secondary" className="mb-4 uppercase text-[10px] tracking-widest px-2 py-0.5">Certification</Badge>
            <h3 className="text-2xl font-bold mb-4">780 TOEIC Score</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Demonstrated proficiency in professional English, enabling effective collaboration in international tech environments.
            </p>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="mb-6 w-full group">
                  <Eye size={16} className="mr-2 group-hover:text-primary transition-colors" />
                  Preview Certificate
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[90vh] p-0 overflow-hidden flex flex-col">
                <DialogHeader className="p-4 border-b">
                  <DialogTitle className="flex items-center justify-between">
                    <span>TOEIC Score Report - Pheeraphat Dhirachaisuphakij</span>
                    <Button variant="ghost" size="sm" asChild className="mr-6">
                      <a href={toeicCertificate} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-2" />
                        Open in New Tab
                      </a>
                    </Button>
                  </DialogTitle>
                </DialogHeader>
                <div className="flex-grow w-full bg-muted">
                  <iframe 
                    src={`${toeicCertificate}#toolbar=0`} 
                    className="w-full h-full border-none"
                    title="TOEIC Certificate Preview"
                  />
                </div>
              </DialogContent>
            </Dialog>

            <div className="flex items-center gap-2 mt-auto text-primary font-bold">
              <Languages size={18} />
              <span>Professional English</span>
            </div>
          </div>

          {/* Card 3: Capstone Project */}
          <div className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all flex flex-col items-start h-full">
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Rocket size={28} />
            </div>
            <Badge variant="default" className="mb-4 uppercase text-[10px] tracking-widest px-2 py-0.5">Academic Project</Badge>
            <h3 className="text-2xl font-bold mb-4">Yakteaw AI Travel</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 flex-grow">
              Leading QA &amp; DevOps for an AI platform, implementing full-suite manual and automated UI testing strategies.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["QA Lead", "PM", "DevOps"].map(t => (
                <span key={t} className="text-xs font-semibold px-2 py-1 rounded-md bg-muted border border-border">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
