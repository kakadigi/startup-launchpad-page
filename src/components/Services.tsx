
import { Code, Rocket, Server, Database, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored precisely to your business needs and objectives."
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Rapidly build minimum viable products to validate your idea and attract early investors."
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Scalable, secure, and high-performance backend systems that power your applications."
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Responsive, intuitive web applications with modern UX/UI that delight your users."
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description: "Efficient database architecture and optimization for optimal application performance."
  },
  {
    icon: Rocket,
    title: "DevOps & Cloud Solutions",
    description: "Streamline your development workflow with our DevOps expertise and cloud-native solutions."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Services</h2>
          <p className="text-lg text-gray-600">
            We provide end-to-end software engineering services to transform your ideas into 
            market-ready products that scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${200 + index * 100}ms` }}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
