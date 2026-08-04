import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#080808]"
    >
      {/* Background Glowing Effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#d4d96b]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Content */}
        <div>
          <span className="inline-block bg-[#111111] border border-[#222222] px-4 py-2 rounded-full text-[#d4d96b] text-sm font-medium mb-6">
            🚀 AI • Full Stack • DevOps • Cloud Solutions
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Building Modern <br />
            <span className="gradient-text">Digital Solutions</span> <br />
            4 Growing Businesses
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-8 max-w-xl">
            KNovaWorks delivers top-tier software development, AI automation, custom ERP systems, SaaS platforms, and enterprise cloud infrastructure using React, Next.js, Node.js, .NET, and Python. Visit us at <span className="text-[#d4d96b] font-medium">schoolerp.ink</span>
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="bg-[#d4d96b] hover:bg-[#c2c75d] text-black font-semibold px-8 py-4 rounded-full transition shadow-lg shadow-[#d4d96b]/10"
            >
              View Live Projects
            </a>
            <a
              href="#contact"
              className="border border-[#222222] hover:border-[#d4d96b] text-white px-8 py-4 rounded-full transition"
            >
              Contact Us
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-[#1f1f1f]">
            <div>
              <h3 className="text-3xl font-bold text-[#d4d96b]">20+</h3>
              <p className="text-gray-400 text-sm mt-1">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#d4d96b]">100%</h3>
              <p className="text-gray-400 text-sm mt-1">Secure Systems</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#d4d96b]">24/7</h3>
              <p className="text-gray-400 text-sm mt-1">Cloud Support</p>
            </div>
          </div>

        </div>

        {/* Right Column: Network Graphic Image Visual */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-xl flex justify-center items-center p-4">
            <img
              src="/images/network-graphic.png"
              alt="KNovaWorks Network Architecture & Ecosystem"
              className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(212,217,107,0.15)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;