import React from 'react';
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Hero />
      <div className="text-center py-12">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link to="/auth">
            Get Started
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Index;
