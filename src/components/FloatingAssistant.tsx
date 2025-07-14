import { useState } from "react";
import { MessageCircle, Sparkles, Brain, BookOpen, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: "assistant", content: "Hi! I'm your AI study companion. How can I help you learn today?" }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, 
      { type: "user", content: message },
      { type: "assistant", content: "I'm here to help! As an AI assistant, I can help you with studying, organizing notes, explaining concepts, and more. What would you like to explore?" }
    ]);
    setMessage("");
  };

  return (
    <>
      {/* Floating Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="holographic"
          size="lg"
          className="rounded-full w-16 h-16 animate-float"
        >
          <Sparkles className="w-6 h-6" />
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 z-50 bg-card/95 backdrop-blur-sm border-primary/20 shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-holographic animate-glow-pulse" />
                <span className="font-medium text-foreground">AI Study Assistant</span>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="w-6 h-6"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                      msg.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground border border-neural/20"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="bg-muted/50 border-neural/20"
                />
                <Button
                  onClick={handleSendMessage}
                  variant="neural"
                  size="sm"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}