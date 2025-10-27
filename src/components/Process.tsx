import { Search, Swords, Microscope, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Reconnaissance",
    description: "Gathering intelligence and mapping your digital landscape",
  },
  {
    icon: Swords,
    title: "Testing",
    description: "Simulating real-world attacks with precision",
  },
  {
    icon: Microscope,
    title: "Analysis",
    description: "Deep dive into vulnerabilities and weaknesses",
  },
  {
    icon: FileText,
    title: "Reporting",
    description: "Detailed documentation with actionable insights",
  },
  {
    icon: CheckCircle,
    title: "Remediation",
    description: "Ongoing support and security enhancement",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto text-center space-y-4 mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach to uncovering and eliminating security threats
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Aesthetic hexagonal grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div
                  key={index}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-full">
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-20 -right-3 w-6 h-[2px] bg-gradient-to-r from-primary/40 to-transparent z-0" />
                    )}

                    {/* Card with glass morphism effect */}
                    <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-700 ease-out hover:border-primary hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 hover:scale-105 h-full flex flex-col cursor-pointer">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl" />
                      
                      {/* Step number */}
                      <div className="relative mb-4">
                        <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/30 group-hover:scale-110 transition-all duration-700">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="relative mb-4 flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 group-hover:scale-125 transition-all duration-700" />
                          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 group-hover:border-primary group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-700">
                            <Icon className="w-8 h-8 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-700" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative space-y-2 flex-grow flex flex-col">
                        <h3 className="text-xl font-heading font-bold transition-all duration-700 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent group-hover:scale-105">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-grow group-hover:text-foreground transition-all duration-700">
                          {step.description}
                        </p>
                      </div>

                      {/* Bottom accent */}
                      <div className="relative mt-4 h-1.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary group-hover:h-2 transition-all duration-700 rounded-full" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Aesthetic floating orbs */}
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-secondary/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
};

export default Process;
