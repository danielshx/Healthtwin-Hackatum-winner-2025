import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
};

export default function Coach() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your FitTwin Coach. I've analyzed your recent data. What would you like to discuss?",
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, userMessage]);
    setInput("");

    setTimeout(() => {
      const responses = [
        "Based on your readiness score of 75, I recommend moderate intensity today. Your HRV is slightly below baseline, so avoid HIIT and stick to Zone-2 cardio or light strength training.",
        "Your sleep efficiency has been around 85%. Try Do Not Disturb 1hr before bed, and keep room temperature between 65-68°F for optimal sleep.",
        "I notice your stress levels are elevated. I recommend three 5-minute breathing breaks during the day, and a 20-minute walk outside during lunch.",
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
          timestamp: new Date().toISOString(),
        },
      ]);
    }, 1000);
  };

  return (
    <MobileLayout title="AI Coach">
      <div className="flex flex-col h-[calc(100vh-3.5rem-4rem)]">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[85%] ${msg.role === "user" ? "" : "space-y-2"}`}>
                {msg.role === "assistant" && (
                  <Badge variant="outline" className="mb-1">AI Coach</Badge>
                )}
                <Card
                  className={`shadow-soft ${
                    msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-card"
                  }`}
                >
                  <CardContent className="pt-3 pb-3 px-4">
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </CardContent>
                </Card>
                <p className="text-xs text-muted-foreground px-2">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-card/95 backdrop-blur">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask your coach..."
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
