
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Globe from "./Globe";

const Hero = () => {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/80 -z-10"></div>
      <Globe />
      
      <div className="section-container flex flex-col items-center text-white pt-12 md:pt-16">
        <div className="w-full max-w-3xl text-center opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We Turn Startup Ideas Into 
            <span className="text-teal"> Reality</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Our team of expert software engineers transform your vision into 
            market-ready products with precision, quality, and speed.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-teal hover:bg-teal-dark text-white text-lg px-8">
              <a href="#contact">Start Your Project</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="text-white hover:bg-teal-light hover:text-navy text-lg px-8 border-white/20 bg-white/20 backdrop-blur-sm">
              <a href="#services" className="flex items-center gap-2">
                Our Services
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 w-full max-w-3xl opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {["Trusted by", "Startup Leaders", "Tech Founders", "Enterprises"].map((text, index) => (
                <div key={index} className="text-center">
                  <p className="text-sm text-gray-300">{index === 0 ? text : ""}</p>
                  <p className={`font-medium ${index === 0 ? "text-sm opacity-70" : "text-base md:text-lg"}`}>{index !== 0 ? text : ""}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-16 bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0"></div>
    </section>
  );
};

export default Hero;
