import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Microscope, Heart } from "lucide-react";
import heroImage from "@/assets/hero-health-tech.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Advanced healthcare technology laboratory" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted Healthcare Innovation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Advancing Health
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Through Science
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We develop cutting-edge biotechnology solutions that transform healthcare outcomes, 
            combining scientific excellence with innovative technology to improve lives worldwide.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Microscope className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold mb-1">150+</div>
              <div className="text-blue-200">Research Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold mb-1">50M+</div>
              <div className="text-blue-200">Lives Impacted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold mb-1">25+</div>
              <div className="text-blue-200">FDA Approvals</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="hero" size="lg" className="group">
              Explore Our Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary-light/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;