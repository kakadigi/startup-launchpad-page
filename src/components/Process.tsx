
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We deeply understand your vision, goals, and requirements through collaborative sessions."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Our experts craft a comprehensive project roadmap with technical architecture and timeline."
  },
  {
    number: "03",
    title: "Design & Development",
    description: "We build your solution with agile methodology, ensuring quality and regular updates."
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures your product performs flawlessly across all scenarios."
  },
  {
    number: "05",
    title: "Deployment",
    description: "We launch your product securely and efficiently with minimal disruption."
  },
  {
    number: "06",
    title: "Ongoing Support",
    description: "Our team provides continuous maintenance, updates, and improvements to your solution."
  }
];

const Process = () => {
  return (
    <section id="process" className="bg-section-pattern py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
          <p className="text-lg text-gray-600">
            We follow a systematic approach to deliver successful projects on time and within budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in relative"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 p-2 bg-gradient-to-br from-teal to-teal-dark text-white text-lg font-bold rounded">
                {step.number}
              </div>
              <div className="border border-gray-200 rounded-lg p-6 pt-12 hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
