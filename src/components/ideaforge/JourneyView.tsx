
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface JourneyViewProps {
  ideaId: string;
}

const JourneyView: React.FC<JourneyViewProps> = ({ ideaId }) => {
  const journeySteps = [
    { id: 1, name: "Awareness", description: "User discovers the product" },
    { id: 2, name: "Interest", description: "User explores features and benefits" },
    { id: 3, name: "Consideration", description: "User evaluates against alternatives" },
    { id: 4, name: "Purchase", description: "User decides to buy/sign up" },
    { id: 5, name: "Retention", description: "User continues to use the product" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">User Journey Map</h2>
        <Button>Edit Journey</Button>
      </div>
      
      <Card className="p-6">
        <CardContent className="p-0">
          <div className="flex flex-wrap justify-between items-start">
            {journeySteps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex flex-col items-center max-w-[18%] ${
                  index < journeySteps.length - 1 ? "w-[18%]" : "w-[18%]"
                }`}
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">{step.id}</span>
                </div>
                <h3 className="font-medium text-center mb-2">{step.name}</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  {step.description}
                </p>
                
                {index < journeySteps.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">
              Add touchpoints, user emotions, and actions at each stage of the journey.
            </p>
            <Button variant="outline">Customize Journey</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JourneyView;
