import { Card } from "@/components/ui/card";
import { Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
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

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count}</span>;
};

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            About <span className="text-gradient">Crynox</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We've successfully helped 5+ organizations fortify their digital infrastructure through comprehensive penetration testing, vulnerability assessments, and security audits. Our mission is to shine a light where shadows hide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border hover:border-primary transition-smooth hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 group">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 glow-primary group-hover:scale-110 transition-smooth">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-heading font-bold text-gradient">
                <AnimatedCounter end={5} />+
              </div>
              <h3 className="text-xl font-heading font-semibold">Companies Secured</h3>
              <p className="text-muted-foreground">
                Organizations protected from cyber threats
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-secondary transition-smooth hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1 group">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 glow-secondary group-hover:scale-110 transition-smooth">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-heading font-bold text-gradient">
                <AnimatedCounter end={2} />+
              </div>
              <h3 className="text-xl font-heading font-semibold">Years Experience</h3>
              <p className="text-muted-foreground">
                Expertise in modern cybersecurity practices
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
