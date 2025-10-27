import { Card } from "@/components/ui/card";

const tools = [
  { name: "Burp Suite", icon: "🔍" },
  { name: "Metasploit", icon: "🎯" },
  { name: "Nmap", icon: "🗺️" },
  { name: "Wireshark", icon: "🦈" },
  { name: "Kali Linux", icon: "🐉" },
  { name: "OWASP ZAP", icon: "⚡" },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 bg-muted/30">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Security <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry-leading tools and frameworks we use to protect your assets
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-smooth hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="text-4xl group-hover:scale-125 transition-smooth group-hover:rotate-12">
                  {tool.icon}
                </div>
                <p className="text-sm font-heading font-semibold text-center">{tool.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
