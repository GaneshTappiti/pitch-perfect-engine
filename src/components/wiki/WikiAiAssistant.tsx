
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface WikiAiAssistantProps {
  onClose: () => void;
}

const WikiAiAssistant: React.FC<WikiAiAssistantProps> = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { 
      role: "assistant", 
      content: "Hello! I'm your wiki assistant. How can I help you organize your startup knowledge today?" 
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
      console.log('Calling Wiki AI with message:', userMessage);
      
      // Prepare conversation history for context
      const conversationHistory = newConversation
        .slice(-8) // Keep last 8 messages for context
        .map(msg => ({ role: msg.role, content: msg.content }));
      
      const { data, error } = await supabase.functions.invoke('wiki-ai', {
        body: { 
          message: userMessage,
          conversationHistory: conversationHistory.slice(0, -1) // Exclude the current message
        }
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
    <div className="fixed bottom-24 right-8 w-80 sm:w-96 bg-card border rounded-lg shadow-lg overflow-hidden z-50 animate-scale-in">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <h3 className="font-medium">Wiki Assistant</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="h-80 overflow-y-auto p-4 space-y-4" id="chat-messages">
        {conversation.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.role === "user" 
                  ? "bg-primary text-primary-foreground ml-auto" 
                  : "bg-muted"
              }`}
            >
              <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-3 max-w-[80%]">
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                <span className="text-sm text-muted-foreground">Thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2">
        <Input
          placeholder="Ask about your wiki..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1"
          disabled={isLoading}
        />
        <Button type="submit" size="icon" disabled={!message.trim() || isLoading}>
          <Send className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </div>
  );
};

export default WikiAiAssistant;
