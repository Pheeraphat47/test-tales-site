import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-[900px]">
          <Badge variant="accent" className="mb-6 animate-fade-in text-lg py-1.5 px-4 font-medium uppercase tracking-wider">
            <span className="size-2 rounded-full bg-background animate-pulse mr-2" />
            OPEN FOR OPPORTUNITIES — QA ENGINEER / SOFTWARE TESTER
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up text-balance">
            Pheeraphat Dhirachaisuphakij<br />
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-[80ch] leading-relaxed mb-8 animate-fade-in-up font-medium" style={{ animationDelay: "0.1s" }}>
            Final-year IT student at SIT KMUTT with <span className="text-foreground border-b-2 border-primary/30 font-semibold"> real-world QA and software testing experience at Siam Commercial Bank (SCB)</span>, skilled in manual and automation testing through real-world tasks and projects. Detail-oriented with strong problem-solving skills and good English proficiency <span className="text-foreground font-bold">(TOEIC 780)</span>.
          </p>

          <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {["Python", "Robot Framework", "Selenium","Postman","SQL","Docker"].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-base py-1.5 px-5 border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-bold">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="text-xl h-14 px-10" asChild>
              <a href="#projects">
                <ArrowDown size={22} className="mr-2" />
                View Featured Work
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
