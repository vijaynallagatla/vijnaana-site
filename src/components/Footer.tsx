import { Microscope, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Vijnaana</h3>
                <p className="text-xs text-background/70 -mt-1">Health Sciences</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Advancing healthcare through cutting-edge biotechnology research and innovation. 
              Transforming lives with science-driven solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Genomic Medicine</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Neurological Research</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Drug Discovery</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Digital Health</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Biodata Analytics</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Biotech Innovation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Our Team</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Press & Media</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Investor Relations</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Partnerships</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/80">456 Science Park Drive</p>
                  <p className="text-background/80">San Francisco, CA 94105</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-background/80">+1 (415) 555-0123</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-background/80">info@vijnaana.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 Vijnaana Health Sciences. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;