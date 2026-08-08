import React from 'react';

const WorkflowSection = () => {
  const steps = [
    {
      step: "01",
      title: "Free Demo & Proposal",
      description: "Share your requirements, and we will build a custom prototype or roadmap for your project — completely free of charge!"
    },
    {
      step: "02",
      title: "Zero Advance Start",
      description: "We don't charge any upfront advance to start development. Your trust and satisfaction come first."
    },
    {
      step: "03",
      title: "25% Milestone Progress",
      description: "As each 25% milestone of the project is completed, review the live progress and release payments incrementally."
    },
    {
      step: "04",
      title: "Final Delivery & Support",
      description: "Get full deployment, source code handover, and ongoing technical support after final approval."
    }
  ];

  return (
    <section className="py-24 bg-[#080808] relative border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#111111] border border-[#222222] px-4 py-2 rounded-full text-[#d4d96b] text-sm font-medium mb-4">
            🛡️ Risk-Free Development Model
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How We Work: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4d96b] to-[#fff]">Demo First, Pay as You Go</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            We provide absolute security for our clients. Get a free demo first, start development with zero advance, and pay safely through 25% milestones.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div 
              key={index}
              className="bg-[#111111]/80 backdrop-blur-xl border border-[#222222] p-8 rounded-3xl relative overflow-hidden group hover:border-[#d4d96b]/50 transition duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#d4d96b]/5 rounded-full blur-2xl group-hover:bg-[#d4d96b]/10 transition"></div>

              <div className="text-4xl font-extrabold text-[#d4d96b] font-mono mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-[#d4d96b] hover:bg-[#c2c75d] text-black font-semibold px-8 py-4 rounded-full transition shadow-lg shadow-[#d4d96b]/10 text-sm"
          >
            Request Your Free Demo Now
          </a>
        </div>

      </div>
    </section>
  );
};

export default WorkflowSection;