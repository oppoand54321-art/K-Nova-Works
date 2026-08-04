import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-28 bg-[#080808] text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#d4d96b] font-semibold uppercase tracking-widest text-sm bg-[#111111] border border-[#222222] px-4 py-2 rounded-full inline-block mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold">Enterprise Development & DevOps</h2>
          <p className="text-gray-400 mt-4">Full-stack engineering with robust backend architecture and absolute server security.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="card p-8">
            <h3 className="text-xl font-bold text-[#d4d96b] mb-3">Frontend Engineering</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Modern, ultra-fast, and responsive user interfaces built with React.js, Next.js, Angular, and Tailwind CSS.
            </p>
          </div>

          <div className="card p-8">
            <h3 className="text-xl font-bold text-[#d4d96b] mb-3">Backend & APIs</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Scalable and secure backend architecture using Node.js, Express, Python, and .NET Core with robust database handling.
            </p>
          </div>

          <div className="card p-8 border-[#d4d96b]/40">
            <h3 className="text-xl font-bold text-[#d4d96b] mb-3">DevOps & Server Care</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Complete server installation, Nginx, Docker, Kubernetes, firewall configuration, SSL monitoring, and full server security control.
            </p>
            <span className="text-xs bg-[#d4d96b]/10 text-[#d4d96b] border border-[#d4d96b]/30 px-3 py-1.5 rounded-full inline-block">
              Dedicated DevOps Page Ready
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
