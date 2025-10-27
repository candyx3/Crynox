import { Card } from "@/components/ui/card";
import { Search, FileCheck, Target, AlertTriangle, Activity } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Simulate attacks to find system vulnerabilities.",
  },
  {
    icon: FileCheck,
    title: "Security Audit",
    description: "Strengthen security policies thoroughly for full compliance.",
  },
  {
    icon: Target,
    title: "Vulnerability Assessment",
    description: "Identify and prioritize critical system weaknesses.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Quickly handle breaches to minimize damage.",
  },
  {
    icon: Activity,
    title: "Threat Monitoring",
    description: "Continuously monitor and detect cyber threats 24/7.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive cybersecurity solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="relative p-8 bg-card/50 backdrop-blur-sm border-border overflow-hidden transition-all duration-700 ease-out hover:border-primary hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-4 hover:scale-105 group cursor-pointer min-h-[320px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg" />
                
                {/* Animated border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 blur-xl" />
                </div>

                <div className="relative space-y-4 h-full flex flex-col">
                  <div className="relative inline-block">
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-2xl opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
                    <div className="relative w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-lg">
                      <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-all duration-700" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold transition-all duration-700 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent group-hover:scale-105">
                    {service.title}
                  </h3>
                  
                  {/* Content reveal on hover */}
                  <div className="relative flex-grow overflow-hidden">
                    {/* Hidden content that reveals on hover */}
                    <div className="absolute inset-0 transition-all duration-700 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                      <p className="text-foreground leading-relaxed font-medium">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Initial hint text that fades out */}
                    <p className="text-muted-foreground/60 text-sm transition-all duration-700 group-hover:opacity-0 group-hover:-translate-y-4">
                      Hover to learn more...
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary group-hover:h-1.5 transition-all duration-700 rounded-full" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
