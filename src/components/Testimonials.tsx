import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    quote: "This platform saved me months of research and development. I validated my SaaS idea in hours, not weeks!",
    author: "Sarah Johnson",
    role: "Founder, TaskFlow",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote: "The roadmap generation feature alone is worth the price. It gave me a clear path from idea to launch that I'm still following.",
    author: "Michael Chen",
    role: "CEO, DataViz Pro",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    quote: "I used the pitch script creator before my Y Combinator interview and it helped me communicate my vision clearly. We got in!",
    author: "Alex Rodriguez",
    role: "CTO, HealthSync",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">From Our Founders</h2>
          <p className="max-w-3xl text-xl text-gray-600 leading-relaxed">
            See how entrepreneurs like you are using our platform to build successful startups.
          </p>
        </div>
        
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="flex-grow pt-8 px-8">
                <div className="mb-6 text-4xl text-blue-600">"</div>
                <p className="text-lg text-gray-700 leading-relaxed">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4 border-t border-gray-100 pt-6 px-8 pb-8">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;