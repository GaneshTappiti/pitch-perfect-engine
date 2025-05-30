
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageSquare, Send, Brain } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const FounderGPT = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState<Message[]>([
    { 
      role: "assistant", 
      content: "👋 Hi! I'm your Founder's GPT - your startup mentor, therapist, co-founder, and investor rolled into one. Describe your startup idea and I'll give you a comprehensive analysis covering competitors, market potential, monetization, tech feasibility, and my verdict on whether it's worth pursuing!" 
    }
  ]);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;
    
    const userMessage = message.trim();
    setMessage("");
    
    // Add user message to conversation
    const newConversation = [...conversation, { role: "user" as const, content: userMessage }];
    setConversation(newConversation);
    setIsLoading(true);
    
    try {
      console.log('Calling Founder GPT with message:', userMessage);
      
      const { data, error } = await supabase.functions.invoke('founder-gpt', {
        body: { message: userMessage }
      });

      if (error) {
        console.error('Supabase function error:', error);
        toast({
          title: "Error",
          description: "Failed to get AI response. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (data?.response) {
        setConversation(prev => [
          ...prev,
          { role: "assistant", content: data.response }
        ]);
      } else {
        throw new Error('No response received from AI');
      }
    } catch (error) {
      console.error('Error calling AI:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      
      // Add error message to conversation
      setConversation(prev => [
        ...prev,
        { role: "assistant", content: "I'm sorry, I encountered an error. Please try asking again." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="glass-effect p-6 col-span-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 text-4xl">🪄</div>
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2">Founder's GPT</h3>
          <p className="text-muted-foreground">Your startup mentor, therapist, co-founder, and investor rolled into one</p>
        </div>
      </div>

      {/* Conversation Display */}
      {conversation.length > 1 && (
        <div className="mb-4 max-h-80 overflow-y-auto space-y-3 p-4 bg-white/5 rounded-lg">
          {conversation.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-lg p-3 ${
                msg.role === "user" 
                  ? "bg-primary text-primary-foreground ml-auto" 
                  : "bg-muted"
              }`}>
                <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                  <span className="text-sm text-muted-foreground">Analyzing your idea...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <Input 
          placeholder="Describe your startup idea or ask anything about startups..." 
          className="bg-white/5 border-white/10 flex-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
        />
        <Button type="submit" size="icon" disabled={!message.trim() || isLoading}>
          {isLoading ? (
            <Brain className="h-5 w-5 animate-pulse" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </Button>
      </form>
      
      {conversation.length === 1 && (
        <div className="text-sm text-muted-foreground mt-3">
          Try asking: "I want to build an AI-powered personal finance app that tracks expenses using photos"
        </div>
      )}
    </Card>
  );
};

export default FounderGPT;
