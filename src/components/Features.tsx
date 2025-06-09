import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      id: "dashboard",
      icon: "🏠",
      title: "Dashboard",
      description: "Launchpad to all tools with quick access, daily brief, and startup health meter",
      gradient: "from-blue-500 to-cyan-500",
      path: "/workspace",
    },
    {
      id: "idea-vault",
      icon: "💡",
      title: "Idea Vault",
      description: "Store + grow ideas with AI enhancer, tags, voting, and privacy controls",
      gradient: "from-purple-500 to-pink-500",
      path: "/workspace/idea-vault",
    },
    {
      id: "ai-roadmap",
      icon: "🧠",
      title: "AI Roadmap",
      description: "Auto-generate business plans with GPT-based phase planning and editable milestones",
      gradient: "from-green-500 to-emerald-500",
      path: "/workspace/blueprint-zone",
    },
    {
      id: "task-planner",
      icon: "📆",
      title: "Task Planner",
      description: "Build execution calendar with daily/weekly/monthly smart planning",
      gradient: "from-orange-500 to-red-500",
      path: "/workspace/task-planner",
    },
    {
      id: "mvp-studio",
      icon: "🧱",
      title: "MVP Studio",
      description: "Build using AI + no-code with builder templates, GPT codex, and MVP checklists",
      gradient: "from-indigo-500 to-purple-500",
      path: "/workspace/mvp-studio",
    },
    {
      id: "docs-decks",
      icon: "🧾",
      title: "Docs & Decks",
      description: "Auto-generate investor decks, one-pagers and more with AI assistance",
      gradient: "from-pink-500 to-rose-500",
      path: "/workspace/docs-decks",
    },
    {
      id: "teamspace",
      icon: "👥",
      title: "TeamSpace",
      description: "Collaborate with founders and team members with roles, chat, and co-founder tasks",
      gradient: "from-teal-500 to-cyan-500",
      path: "/workspace/teamspace",
    },
    {
      id: "investor-radar",
      icon: "🔍",
      title: "Investor Radar",
      description: "Get matched to VCs with filters by region, sector, ticket size, and stage",
      gradient: "from-violet-500 to-purple-500",
      path: "/workspace/investor-radar",
    },
  ];

  const killerFeatures = [
    {
      title: "Founder's GPT",
      icon: "🪄",
      description: "Built-in custom GPT trained on YC blogs, IndieHackers posts, Naval quotes, Alex Hormozi books, and failed startup post-mortems",
      bullets: [
        "Get answers on how to validate a 2-sided marketplace",
        "Generate SaaS landing page copy",
        "Create tagline ideas for your product",
      ]
    },
    {
      title: "Vision-to-MVP Wizard",
      icon: "🧠",
      description: "Write 3 lines of your idea and generate everything you need to start building",
      bullets: [
        "Landing page copy + design suggestions",
        "Tech stack recommendations",
        "Feature roadmap and launch strategy",
        "Monetization models tailored to your idea",
      ]
    },
    {
      title: "Time Auto-Balancer",
      icon: "📅",
      description: "Tell it your availability and it re-arranges your roadmap + tasks to match your lifestyle",
      bullets: [
        "AI-driven schedule optimization",
        "Adapts to life events and time constraints",
        "Suggests optimal work patterns based on your preferences",
      ]
    },
  ];
  
  return (
    <section className="w-full py-20 md:py-32 bg-gray-50" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            StartWise – Your Smart Startup Sidekick
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            From Idea to IPO, One Tab at a Time
          </h2>
          <p className="max-w-3xl text-xl text-gray-600 leading-relaxed">
            The ultimate AI-powered platform designed to take your startup from concept to launch and beyond
          </p>
        </div>
        
        {/* Core Modules Grid */}
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">The StartWise OS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature) => (
            <Card key={feature.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              <CardHeader className="relative">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-gray-600 mb-4">{feature.description}</CardDescription>
                <Button asChild variant="ghost" className="group-hover:text-blue-600 p-0 h-auto font-medium">
                  <Link to={feature.path}>
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Killer Features */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Killer Features That Make Us Unique
          </h3>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Discover the powerful tools that set StartWise apart from the competition
          </p>
          
          <div className="grid gap-16">
            {killerFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 flex items-center justify-center">
                  <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center shadow-lg">
                    <span className="text-8xl">{feature.icon}</span>
                  </div>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h4 className="text-3xl font-bold mb-4 text-gray-900">{feature.title}</h4>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-4">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">Ready to supercharge your startup journey?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of founders who are already building successful startups with StartWise
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
            <Link to="/workspace">
              Enter Workspace
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;