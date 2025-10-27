import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Clock, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AnimatedMetric = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const increment = end / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl font-heading font-bold text-gradient">
      {count}
      {suffix}
    </div>
  );
};

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-24 bg-muted/30">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Success <span className="text-gradient">Story</span>
            </h2>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border hover:border-primary transition-smooth">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="gradient-primary text-white">Featured Case</Badge>
                <h3 className="text-3xl font-heading font-bold">
                  Financial Services Security Transformation
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conducted a comprehensive security assessment for a mid-sized financial services company, identifying critical vulnerabilities in their infrastructure. Our team implemented a multi-layered security approach, resulting in significant improvements across all metrics.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="text-center space-y-3 p-6 rounded-lg bg-muted/50">
                  <TrendingDown className="w-8 h-8 text-success mx-auto" />
                  <AnimatedMetric end={87} suffix="%" />
                  <p className="text-sm font-medium">Vulnerabilities Reduced</p>
                </div>

                <div className="text-center space-y-3 p-6 rounded-lg bg-muted/50">
                  <Clock className="w-8 h-8 text-primary mx-auto" />
                  <AnimatedMetric end={30} />
                  <p className="text-sm font-medium">Days Project Timeline</p>
                </div>

                <div className="text-center space-y-3 p-6 rounded-lg bg-muted/50">
                  <Shield className="w-8 h-8 text-secondary mx-auto" />
                  <AnimatedMetric end={0} />
                  <p className="text-sm font-medium">Security Incidents Since</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
