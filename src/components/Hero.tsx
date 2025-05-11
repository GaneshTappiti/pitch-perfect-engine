
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

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
    <section className="w-full py-24 md:py-32 lg:py-40 hero-gradient relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              <span className="text-gradient">Validate Your Startup Idea</span> <br />
              From Concept to MVP in Minutes
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
              Our AI platform validates your ideas, generates roadmaps, creates pitch scripts, 
              suggests UI designs, and helps you build your MVP — all in one place.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2" onSubmit={handleSubmit}>
              <Input
                className="max-w-lg flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Join Waitlist
              </Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Join 2000+ founders already validating their ideas.
            </p>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-violet-600/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
