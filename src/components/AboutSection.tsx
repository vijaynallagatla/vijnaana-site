import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-6 bg-medical-blue-light text-medical-blue border-medical-blue/20">
              About MedTech Innovations
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Transforming Healthcare Through
              <span className="block text-primary"> Scientific Excellence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded in 2018, we are a leading biotechnology company dedicated to developing 
              innovative solutions that address the world's most pressing healthcare challenges. 
              Our multidisciplinary team of scientists, researchers, and engineers work tirelessly 
              to translate cutting-edge research into practical medical applications.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Expert Scientists</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Industry Awards</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">40+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">$2.5B</div>
                <div className="text-sm text-muted-foreground">Research Investment</div>
              </div>
            </div>

            <Button variant="health" size="lg">
              Learn About Our Mission
            </Button>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-slide-up">
            <div className="bg-gradient-primary rounded-2xl p-8 shadow-strong">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 mb-6">
                  To accelerate the development of breakthrough medical technologies 
                  that improve patient outcomes and make advanced healthcare accessible to all.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Innovation First</h4>
                      <p className="text-sm text-white/80">Pushing the boundaries of medical science</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Patient-Centered</h4>
                      <p className="text-sm text-white/80">Every solution designed with patients in mind</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Global Impact</h4>
                      <p className="text-sm text-white/80">Making healthcare accessible worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-health-green/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-light/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;