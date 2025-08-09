import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dna, 
  Brain, 
  Pill, 
  Stethoscope, 
  Database, 
  Zap,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Dna,
    title: "Genomic Medicine",
    description: "Advanced genetic sequencing and personalized treatment solutions based on individual DNA profiles.",
    features: ["Whole Genome Sequencing", "Pharmacogenomics", "Genetic Risk Assessment"]
  },
  {
    icon: Brain,
    title: "Neurological Research",
    description: "Cutting-edge neuroscience research for treating neurological disorders and cognitive enhancement.",
    features: ["Brain Mapping", "Neurodegenerative Studies", "Cognitive Therapies"]
  },
  {
    icon: Pill,
    title: "Drug Discovery",
    description: "AI-powered pharmaceutical research accelerating the development of life-saving medications.",
    features: ["Molecular Modeling", "Clinical Trials", "Biomarker Discovery"]
  },
  {
    icon: Stethoscope,
    title: "Digital Health",
    description: "Innovative digital solutions for remote patient monitoring and telemedicine platforms.",
    features: ["Remote Monitoring", "AI Diagnostics", "Telehealth Systems"]
  },
  {
    icon: Database,
    title: "Biodata Analytics",
    description: "Advanced analytics and machine learning for processing complex biological datasets.",
    features: ["Predictive Modeling", "Real-time Analysis", "Data Integration"]
  },
  {
    icon: Zap,
    title: "Biotech Innovation",
    description: "Revolutionary biotechnology solutions for next-generation medical treatments and therapies.",
    features: ["Gene Therapy", "Synthetic Biology", "Regenerative Medicine"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our Research & Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering breakthrough technologies across multiple domains of health science, 
            from genomics to digital health solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group/btn w-full justify-between">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="medical" size="lg" className="group">
            View All Solutions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;