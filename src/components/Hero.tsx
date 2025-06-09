import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    toast.success("Thanks for joining our waitlist!");
    setEmail("");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 border border-blue-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Transforming ideas into reality</span>
          </div>
          
          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
              The Ultimate{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Platform
              </span>{" "}
              For Startup Founders
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into successful startups with our all-in-one validation, 
              planning, and development platform powered by AI.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="w-full max-w-md space-y-4">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
              <Input
                className="flex-1 h-12 px-4 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-sm text-gray-500">
              No credit card required. 14-day free trial.
            </p>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Link to="/workspace">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
              <Link to="/features">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-8">
            <p className="text-sm text-gray-500 mb-4">Trusted by 10,000+ founders worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">YC</div>
              <div className="text-2xl font-bold text-gray-400">Techstars</div>
              <div className="text-2xl font-bold text-gray-400">500 Startups</div>
              <div className="text-2xl font-bold text-gray-400">Founders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;