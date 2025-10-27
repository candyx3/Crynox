import { Card } from "@/components/ui/card";
import { Lock, Mail, RefreshCw, Database } from "lucide-react";
import { useState } from "react";

const insights = [
  {
    icon: Lock,
    title: "Password Security",
    front: "Best practices for strong passwords",
    back: "Use 12+ characters, mix letters/numbers/symbols, enable 2FA, use password managers",
  },
  {
    icon: Mail,
    title: "Phishing Awareness",
    front: "How to detect phishing attempts",
    back: "Check sender email, verify links before clicking, look for urgency tactics, report suspicious emails",
  },
  {
    icon: RefreshCw,
    title: "Regular Updates",
    front: "Importance of patch management",
    back: "Update software regularly, enable auto-updates, patch vulnerabilities quickly, test updates first",
  },
  {
    icon: Database,
    title: "Data Backups",
    front: "The 3-2-1 backup rule",
    back: "3 copies of data, 2 different media types, 1 offsite backup. Test recovery regularly",
  },
];

const SecurityInsights = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="insights" className="py-24">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Security <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Essential cybersecurity tips to protect your organization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            const isFlipped = flipped === index;

            return (
              <div
                key={index}
                className="perspective-1000 cursor-pointer"
                onClick={() => setFlipped(isFlipped ? null : index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card
                  className={`relative h-64 transition-all duration-500 transform-style-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front */}
                  <div
                    className={`absolute inset-0 p-6 flex flex-col items-center justify-center text-center space-y-4 backface-hidden ${
                      isFlipped ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center glow-primary">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground">{insight.front}</p>
                    <p className="text-xs text-primary font-medium">Click to learn more</p>
                  </div>

                  {/* Back */}
                  <div
                    className={`absolute inset-0 p-6 flex items-center justify-center text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg rotate-y-180 backface-hidden ${
                      isFlipped ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{insight.back}</p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default SecurityInsights;
