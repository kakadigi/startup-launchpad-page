
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Morgan",
    role: "CEO & Lead Architect",
    bio: "15+ years experience in software architecture and startup leadership",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&auto=format&q=80"
  },
  {
    name: "Jamie Wilson",
    role: "CTO & Backend Specialist",
    bio: "Expert in scalable systems and cloud infrastructure",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&auto=format&q=80"
  },
  {
    name: "Sam Patel",
    role: "Frontend Lead",
    bio: "Passionate about creating beautiful, intuitive user experiences",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&auto=format&q=80"
  },
  {
    name: "Taylor Rodriguez",
    role: "Mobile Development Lead",
    bio: "Specializes in cross-platform app development with 8+ years experience",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&q=80"
  }
];

const Team = () => {
  return (
    <section id="team" className="bg-section-pattern py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-gray-600">
            Our talented engineers bring decades of combined experience in delivering exceptional software solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${200 + index * 100}ms` }}>
              <Card className="h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-square w-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-teal font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-teal transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-teal transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-teal transition-colors">
                      <Globe className="h-5 w-5" />
                    </a>
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

export default Team;
