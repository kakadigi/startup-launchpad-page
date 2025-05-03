
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
        action: <CheckCircle className="h-5 w-5 text-green-500" />
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Bring Your Idea to Life?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Let's discuss how we can help turn your vision into a successful product. 
              Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal/10 rounded-full p-2 mt-1">
                  <ArrowRight className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Free Consultation</h3>
                  <p className="text-gray-600">Get a free 30-minute consultation to discuss your project needs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-teal/10 rounded-full p-2 mt-1">
                  <ArrowRight className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">No Obligation Quote</h3>
                  <p className="text-gray-600">Receive a detailed project proposal with timeline and budget estimate.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-teal/10 rounded-full p-2 mt-1">
                  <ArrowRight className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Flexible Engagement Models</h3>
                  <p className="text-gray-600">Choose from fixed price projects, dedicated teams, or hourly rates.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="w-full"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company / Organization
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry"
                  className="w-full min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-teal hover:bg-teal-dark text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
