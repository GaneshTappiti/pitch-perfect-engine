import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
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

  const benefits = [
    "14-day free trial",
    "No credit card required",
    "Cancel anytime",
    "24/7 support"
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Ready to Validate Your Next Big Idea?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of entrepreneurs using our platform to build successful startups faster and with less risk.
            </p>
          </div>
          
          <div className="w-full max-w-md space-y-6">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
              <Input
                className="flex-1 h-12 px-4 bg-white border-0 text-gray-900 placeholder:text-gray-500"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="h-12 px-6 bg-white text-blue-600 hover:bg-gray-100 font-medium">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            
            <div className="grid grid-cols-2 gap-3 text-sm text-blue-100">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <p className="text-blue-200 text-sm mb-4">Trusted by 10,000+ founders worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-70">
              <div className="text-2xl font-bold text-white">YC</div>
              <div className="text-2xl font-bold text-white">Techstars</div>
              <div className="text-2xl font-bold text-white">500 Startups</div>
              <div className="text-2xl font-bold text-white">Founders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;