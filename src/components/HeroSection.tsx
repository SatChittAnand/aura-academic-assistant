import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Brain, BookOpen, Users, Zap } from "lucide-react";
import heroImage from "@/assets/ai-study-assistant-hero.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-holographic/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-neural/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-wisdom/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-holographic">
                <Sparkles className="w-5 h-5 animate-glow-pulse" />
                <span className="text-sm font-medium">Powered by Advanced AI</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Your
                <span className="bg-gradient-to-r from-primary via-holographic to-neural bg-clip-text text-transparent animate-holographic-shift"> AI Study </span>
                Companion
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience the future of learning with our intelligent AI assistant. 
                Organize knowledge, explore concepts, and accelerate your educational journey 
                in a magical, interactive environment.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="assistant" size="lg" className="text-lg px-8">
                <Brain className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary/20 hover:bg-primary/5">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Features
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-neural/20">
                <div className="text-2xl font-bold text-neural">10K+</div>
                <div className="text-sm text-muted-foreground">Students Helped</div>
              </Card>
              <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-wisdom/20">
                <div className="text-2xl font-bold text-wisdom">500+</div>
                <div className="text-sm text-muted-foreground">Topics Covered</div>
              </Card>
              <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-holographic/20">
                <div className="text-2xl font-bold text-holographic">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </Card>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_hsl(var(--primary)/0.3)] animate-glow-pulse">
              <img
                src={heroImage}
                alt="AI Study Assistant helping a student in a futuristic learning environment"
                className="w-full h-auto"
              />
              {/* Overlay for extra glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-holographic/10 pointer-events-none"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 p-3 bg-neural/90 backdrop-blur-sm rounded-full shadow-[0_0_20px_hsl(var(--neural)/0.4)] animate-float">
              <Zap className="w-6 h-6 text-background" />
            </div>
            <div className="absolute -bottom-4 -left-4 p-3 bg-wisdom/90 backdrop-blur-sm rounded-full shadow-[0_0_20px_hsl(var(--wisdom)/0.4)] animate-float" style={{ animationDelay: '1s' }}>
              <Users className="w-6 h-6 text-background" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}