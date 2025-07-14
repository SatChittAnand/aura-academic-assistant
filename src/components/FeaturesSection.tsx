import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  BookOpen, 
  Users, 
  Lightbulb, 
  Target, 
  Zap,
  MessageSquare,
  Calendar,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Tutoring",
    description: "Get personalized explanations and guidance tailored to your learning style and pace.",
    color: "neural",
    delay: "0s"
  },
  {
    icon: BookOpen,
    title: "Smart Organization",
    description: "Automatically categorize and connect your notes, creating a knowledge network.",
    color: "wisdom",
    delay: "0.2s"
  },
  {
    icon: MessageSquare,
    title: "Interactive Discussions",
    description: "Engage in meaningful conversations about any topic to deepen your understanding.",
    color: "holographic",
    delay: "0.4s"
  },
  {
    icon: Lightbulb,
    title: "Concept Visualization",
    description: "See complex ideas come to life with interactive diagrams and visual explanations.",
    color: "primary",
    delay: "0.6s"
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set learning objectives and track your progress with intelligent insights.",
    color: "wisdom",
    delay: "0.8s"
  },
  {
    icon: Zap,
    title: "Quick Answers",
    description: "Get instant clarification on doubts without breaking your study flow.",
    color: "neural",
    delay: "1s"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-holographic mb-4">
            <Zap className="w-5 h-5 animate-glow-pulse" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-neural via-holographic to-wisdom bg-clip-text text-transparent"> Excel </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our AI assistant combines cutting-edge technology with intuitive design 
            to create the ultimate learning experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-float"
                style={{ animationDelay: feature.delay }}
              >
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Study Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-neural mb-2">99%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-wisdom mb-2">3x</div>
            <div className="text-muted-foreground">Faster Learning</div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-holographic mb-2">50+</div>
            <div className="text-muted-foreground">Subject Areas</div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">∞</div>
            <div className="text-muted-foreground">Learning Potential</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="assistant" size="lg" className="text-lg px-8">
            <TrendingUp className="w-5 h-5 mr-2" />
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
}