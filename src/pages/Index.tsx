import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center">
        <Hero />
        <Features />
        <Testimonials />
        <CTASection />
        <div className="mt-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/auth">
              Get Started
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
