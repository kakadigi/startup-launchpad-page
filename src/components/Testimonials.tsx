
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "CodeCraft Studios transformed our concept into a polished product in record time. Their technical expertise and commitment to our vision exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, HealthTech Startup"
  },
  {
    quote: "Working with this team was refreshingly transparent. They delivered exactly what we needed, when we needed it, and were proactive about suggesting improvements.",
    author: "Michael Chen",
    role: "CTO, FinTech Innovation"
  },
  {
    quote: "Their engineers aren't just technically brilliant, they truly understand business needs. They helped us pivot our product strategy based on valuable insights during development.",
    author: "Jessica Rodriguez",
    role: "Founder, EdTech Platform"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            We're proud to have helped these innovative companies bring their visions to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${200 + index * 100}ms` }}>
              <Card className="h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-6 text-teal">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6">{item.quote}</p>
                  <div>
                    <p className="font-semibold">{item.author}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
