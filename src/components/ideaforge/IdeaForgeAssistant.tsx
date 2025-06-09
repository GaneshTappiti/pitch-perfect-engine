import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Brain, X, SendHorizontal, RefreshCw, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface IdeaForgeAssistantProps {
  onClose: () => void;
}

const IdeaForgeAssistant: React.FC<IdeaForgeAssistantProps> = ({ onClose }) => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [response, setResponse] = useState("");
  const { toast } = useToast();
  
  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    try {
      console.log('Calling IdeaForge AI with prompt:', prompt);
      
      const { data, error } = await supabase.functions.invoke('ideaforge-ai', {
        body: { prompt }
      });

      if (error) {
        console.error('Supabase function error:', error);
        toast({
          title: "Error",
          description: "Failed to generate AI response. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (data?.response) {
        setResponse(data.response);
        toast({
          title: "Success",
          description: "AI response generated successfully!",
        });
      } else if (data?.error) {
        console.error('AI function returned error:', data.error);
        let errorMessage = "Something went wrong. Please try again.";
        
        if (data.error.includes('Rate limit')) {
          errorMessage = "Too many requests. Please wait a moment and try again.";
        } else if (data.error.includes('API key')) {
          errorMessage = "API configuration issue. Please contact support.";
        }
        
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
        });
      } else {
        throw new Error('No response received from AI');
      }
    } catch (error: any) {
      console.error('Error calling AI:', error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRegenerate = () => {
    if (prompt.trim()) {
      setResponse("");
      handleGenerate();
    }
  };

  const handleSave = () => {
    if (response) {
      // In a real app, this would save to the user's idea document
      toast({
        title: "Saved!",
        description: "AI response has been saved to your idea.",
      });
    }
  };
  
  return (
    <div className="fixed bottom-8 right-8 w-96 shadow-xl animate-fade-in z-50">
      <Card className="overflow-hidden">
        <div className="bg-primary p-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-primary-foreground">
            <Brain className="h-5 w-5" />
            <h3 className="font-semibold">IdeaForge AI Assistant</h3>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-primary-foreground hover:bg-primary/80"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-4 max-h-96 overflow-y-auto bg-muted/30">
          {response ? (
            <div className="bg-card p-3 rounded-lg mb-4">
              <pre className="whitespace-pre-wrap text-sm font-sans">{response}</pre>
              
              <div className="flex gap-2 mt-4">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="gap-1"
                  onClick={handleRegenerate}
                  disabled={isGenerating}
                >
                  <RefreshCw className={`h-3 w-3 ${isGenerating ? 'animate-spin' : ''}`} />
                  Regenerate
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="gap-1"
                  onClick={handleSave}
                >
                  <Download className="h-3 w-3" />
                  Save
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <Brain className="h-12 w-12 mx-auto mb-2 text-primary/50" />
              <h3 className="font-medium mb-1">How can I help you?</h3>
              <p className="text-sm text-muted-foreground">
                Ask me to brainstorm, analyze your idea, generate sections, or suggest improvements
              </p>
            </div>
          )}
        </div>
        
        <div className="p-3 border-t">
          <div className="flex gap-2">
            <Textarea
              placeholder="Ask me anything about your idea..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[60px] resize-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleGenerate();
                }
              }}
            />
            <Button 
              className="h-auto"
              disabled={!prompt.trim() || isGenerating}
              onClick={handleGenerate}
            >
              {isGenerating ? (
                <RefreshCw className="h-5 w-5 animate-spin" />
              ) : (
                <SendHorizontal className="h-5 w-5" />
              )}
            </Button>
          </div>
          
          <div className="flex gap-2 mt-2">
            <Button 
              variant="link" 
              className="text-xs h-auto p-0 px-1"
              onClick={() => setPrompt("Generate a detailed business model for my idea")}
            >
              Business model
            </Button>
            <Button 
              variant="link" 
              className="text-xs h-auto p-0 px-1"
              onClick={() => setPrompt("Analyze the market potential and competition")}
            >
              Market analysis
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IdeaForgeAssistant;
