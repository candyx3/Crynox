import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Small Businesses",
    price: "Custom",
    features: [
      "Basic vulnerability assessment",
      "Network security scan",
      "Security audit report",
      "Email support",
      "1-50 endpoints",
    ],
  },
  {
    name: "Professional",
    subtitle: "Most Popular",
    price: "Custom",
    featured: true,
    features: [
      "Full penetration testing",
      "Vulnerability assessment",
      "Compliance audit",
      "Priority support",
      "51-200 endpoints",
      "Quarterly reviews",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Large Organizations",
    price: "Custom",
    features: [
      "Comprehensive security program",
      "Continuous monitoring",
      "Red team operations",
      "24/7 support",
      "Unlimited endpoints",
      "Custom SLA",
      "On-site assessments",
    ],
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Flexible <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pricing customized by organization size and security requirements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 bg-card border-border hover:shadow-lg transition-smooth hover:-translate-y-2 relative ${
                plan.featured ? "border-primary shadow-lg shadow-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-white text-sm font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  {plan.subtitle}
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-bold">{plan.name}</h3>
                  {!plan.featured && (
                    <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="text-4xl font-heading font-bold text-gradient">
                    {plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground">Pricing based on scope</p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.featured
                      ? "gradient-primary text-white glow-primary"
                      : ""
                  }`}
                  variant={plan.featured ? "default" : "outline"}
                  size="lg"
                >
                  Get Quote
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
