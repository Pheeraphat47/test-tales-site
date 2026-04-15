import profilePhoto from "@/assets/profile/Pheeraphat_Dhirachaisuphakij_Photo.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="max-w-[800px] flex-1 order-2 lg:order-1">
            <Badge variant="accent" className="mb-6 animate-fade-in text-base sm:text-lg py-1.5 px-4 font-medium uppercase tracking-wider">
              <span className="size-2 rounded-full bg-background animate-pulse mr-2" />
              OPEN FOR OPPORTUNITIES — QA ENGINEER / SOFTWARE TESTER
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up text-balance">
              Pheeraphat Dhirachaisuphakij<br />
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-[80ch] leading-relaxed mb-8 animate-fade-in-up font-medium" style={{ animationDelay: "0.1s" }}>
              Final-year IT student at SIT KMUTT with <span className="text-foreground border-b-2 border-primary/30 font-semibold">QA Automation Engineer internship experience at Siam Commercial Bank (SCB)</span>, skilled in manual and automation testing. Detail-oriented with strong problem-solving skills and good english proficiency <span className="text-foreground font-bold">(TOEIC 780)</span>.
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

          {/* Profile Image */}
          <div className="shrink-0 animate-fade-in order-1 lg:order-2">
            <div className="relative p-2 rounded-full border-2 border-primary/20 bg-background shadow-xl">
              <div className="size-48 sm:size-64 md:size-72 lg:size-80 rounded-full overflow-hidden border-4 border-background">
                <img 
                  src={profilePhoto} 
                  alt="Pheeraphat Dhirachaisuphakij" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Decorative circle */}
              <div className="absolute -z-10 -top-4 -right-4 size-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -z-10 -bottom-4 -left-4 size-32 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
