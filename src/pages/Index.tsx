import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import SecurityAssessment from "@/components/SecurityAssessment";
import Pricing from "@/components/Pricing";
import SecurityInsights from "@/components/SecurityInsights";
import CaseStudy from "@/components/CaseStudy";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <About />
      <Process />
      <TechStack />
      <SecurityAssessment />
      <Pricing />
      <SecurityInsights />
      <CaseStudy />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
