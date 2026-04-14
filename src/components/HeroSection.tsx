import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-[800px]">
          <Badge variant="accent" className="mb-6 animate-fade-in">
            <span className="size-2 rounded-full bg-primary animate-pulse mr-2" />
            Open to Work — QA Engineer
          </Badge>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] mb-8 animate-fade-in-up text-balance">
            Crafting software{" "}
            <span className="text-primary italic font-normal">quality</span>{" "}
            with precision.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-[50ch] leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Final-year IT student passionate about software quality, manual & automation testing, and improving user experience through rigorous QA practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                <ArrowDown size={16} />
                View Projects
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#resume">
                <Download size={16} />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
