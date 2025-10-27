import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle, ArrowRight } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "What is your organization size?",
    options: [
      { value: "1-50", label: "1-50 employees", score: 1 },
      { value: "51-200", label: "51-200 employees", score: 2 },
      { value: "201-500", label: "201-500 employees", score: 3 },
      { value: "500+", label: "500+ employees", score: 4 },
    ],
  },
  {
    id: 2,
    question: "Do you have a dedicated cybersecurity team?",
    options: [
      { value: "no", label: "No team", score: 4 },
      { value: "part-time", label: "Part-time/Outsourced", score: 3 },
      { value: "small", label: "Small team (1-3)", score: 2 },
      { value: "full", label: "Full team (4+)", score: 1 },
    ],
  },
  {
    id: 3,
    question: "When was your last security audit?",
    options: [
      { value: "never", label: "Never", score: 4 },
      { value: "2years", label: "Over 2 years ago", score: 3 },
      { value: "1year", label: "Within last year", score: 2 },
      { value: "6months", label: "Within 6 months", score: 1 },
    ],
  },
  {
    id: 4,
    question: "How do you handle sensitive data?",
    options: [
      { value: "basic", label: "Basic security measures", score: 4 },
      { value: "some-encryption", label: "Some encryption", score: 3 },
      { value: "encrypted", label: "Fully encrypted", score: 2 },
      { value: "compliance", label: "Compliance certified", score: 1 },
    ],
  },
];

const SecurityAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((q, index) => {
      const answer = answers[index];
      const option = q.options.find((opt) => opt.value === answer);
      if (option) totalScore += option.score;
    });
    setScore(totalScore);
    setShowResults(true);
  };

  const getResults = () => {
    if (score <= 6) {
      return {
        level: "Strong",
        color: "text-success",
        icon: CheckCircle,
        message: "Your security posture is solid. Continue with regular audits.",
      };
    } else if (score <= 12) {
      return {
        level: "Moderate",
        color: "text-primary",
        icon: AlertCircle,
        message: "You have basic security but need improvements. Consider a security audit.",
      };
    } else {
      return {
        level: "Critical",
        color: "text-destructive",
        icon: AlertCircle,
        message: "Immediate action required. Your organization is at high risk.",
      };
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="assessment" className="py-24">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Security <span className="text-gradient">Assessment</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Answer a few questions to evaluate your security posture
            </p>
          </div>

          <Card className="p-8 bg-card border-border">
            {!showResults ? (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <div className="flex gap-2">
                    {questions.map((_, index) => (
                      <div
                        key={index}
                        className={`w-8 h-1 rounded-full transition-smooth ${
                          index <= currentQuestion ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-heading font-semibold">
                    {questions[currentQuestion].question}
                  </h3>

                  <RadioGroup
                    value={answers[currentQuestion] || ""}
                    onValueChange={handleAnswer}
                    className="space-y-3"
                  >
                    {questions[currentQuestion].options.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-smooth cursor-pointer"
                      >
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!answers[currentQuestion]}
                  className="w-full gradient-primary text-white"
                  size="lg"
                >
                  {currentQuestion < questions.length - 1 ? (
                    <>
                      Next Question
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    "View Results"
                  )}
                </Button>
              </div>
            ) : (
              <div className="text-center space-y-6 animate-fade-in">
                {(() => {
                  const results = getResults();
                  const Icon = results.icon;
                  return (
                    <>
                      <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                          <Icon className={`w-10 h-10 ${results.color}`} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-heading font-bold">
                          Security Level: <span className={results.color}>{results.level}</span>
                        </h3>
                        <p className="text-muted-foreground">{results.message}</p>
                        <p className="text-sm text-muted-foreground">
                          Assessment Score: {score}/16
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button
                          onClick={scrollToContact}
                          className="gradient-primary text-white"
                          size="lg"
                        >
                          Get Free Consultation
                        </Button>
                        <Button onClick={resetAssessment} variant="outline" size="lg">
                          Retake Assessment
                        </Button>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SecurityAssessment;
