import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is penetration testing?",
    answer: "Penetration testing is a simulated cyber attack against your system to check for exploitable vulnerabilities. It involves identifying security weaknesses before malicious actors can exploit them, providing detailed reports and remediation strategies.",
  },
  {
    question: "How long does a security audit take?",
    answer: "The duration varies based on your organization's size and complexity. A typical audit takes 2-4 weeks, including initial assessment, testing, analysis, and final reporting. Enterprise-level audits may take longer.",
  },
  {
    question: "What's included in vulnerability assessment?",
    answer: "Our vulnerability assessments include network scanning, application testing, configuration reviews, and risk prioritization. You'll receive a detailed report with identified vulnerabilities, severity ratings, and remediation recommendations.",
  },
  {
    question: "Do you offer ongoing security monitoring?",
    answer: "Yes, we provide continuous security monitoring services for enterprise clients. This includes 24/7 threat detection, incident response, regular vulnerability scans, and quarterly security reviews.",
  },
  {
    question: "How do you ensure confidentiality during testing?",
    answer: "We sign comprehensive NDAs, use secure communication channels, and follow strict data handling protocols. All findings are encrypted and shared only with authorized personnel. Our team is bound by professional ethics and security clearances.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card hover:border-primary transition-smooth"
              >
                <AccordionTrigger className="text-left font-heading font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
