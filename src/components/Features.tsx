
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Idea Validation",
    description: "Instantly check if your idea is unique or already exists with our competitor analysis system using Google Custom Search and GPT-4.",
    icon: "🔍",
    gradient: "feature-gradient-1"
  },
  {
    title: "Roadmap Generation",
    description: "Get a detailed step-by-step roadmap for turning your idea into a product, complete with tech stack suggestions and timeline estimates.",
    icon: "🗺️",
    gradient: "feature-gradient-2"
  },
  {
    title: "Pitch Script Creation",
    description: "Generate compelling pitch scripts that follow proven frameworks used by successful startups at Y Combinator and Sequoia.",
    icon: "🎤",
    gradient: "feature-gradient-3"
  },
  {
    title: "UI/UX Design Assistant",
    description: "Transform your idea into visual wireframes and mockups using our AI-powered design assistant.",
    icon: "🎨",
    gradient: "feature-gradient-4"
  },
  {
    title: "MVP Development",
    description: "Jumpstart your MVP with integrations to no-code platforms and AI code assistance to build faster than ever.",
    icon: "🚀",
    gradient: "feature-gradient-1"
  },
  {
    title: "Startup Resources",
    description: "Access a curated wiki of startup resources for legal, marketing, and fundraising guidance.",
    icon: "📚",
    gradient: "feature-gradient-2"
  },
];

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything You Need to Launch
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our AI-powered platform guides you through every step from idea to launch, with powerful tools designed for modern founders.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, i) => (
            <Card key={i} className={`border border-white/10 bg-black ${feature.gradient}`}>
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
