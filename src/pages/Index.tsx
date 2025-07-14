import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FloatingAssistant } from "@/components/FloatingAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Main Content */}
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="features">
          <FeaturesSection />
        </section>
        
        {/* Additional sections can be added here */}
      </main>
      
      {/* Floating AI Assistant */}
      <FloatingAssistant />
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-muted/10 border-t border-border/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-primary to-holographic rounded-lg flex items-center justify-center">
              <span className="text-background text-sm font-bold">AI</span>
            </div>
            <span className="text-lg font-semibold bg-gradient-to-r from-primary to-holographic bg-clip-text text-transparent">
              EduNova
            </span>
          </div>
          <p className="text-muted-foreground">
            Empowering students with AI-driven learning experiences
          </p>
          <div className="mt-4 text-sm text-muted-foreground/60">
            © 2024 EduNova. Crafted with intelligence and care.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
