import React from 'react';

const Hero = () => {
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
    <>
      {/* Hero Section */}
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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Building Digital Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4d96b] to-[#fff]">
                for Growing Businesses
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
              KNovaWorks delivers top-tier software development, AI automation, custom ERP systems, SaaS platforms, enterprise cloud infrastructure, and mobile applications using React, React Native, Next.js, Node.js, .NET, and Python. Visit us at <span className="text-[#d4d96b] font-medium">schoolerp.ink</span>
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="bg-[#d4d96b] hover:bg-[#c2c75d] text-black font-semibold px-8 py-4 rounded-full transition shadow-lg shadow-[#d4d96b]/10 text-sm"
              >
                View Live Projects
              </a>

              <a
                href="#contact"
                className="border border-[#222222] hover:border-[#d4d96b] text-white px-8 py-4 rounded-full transition text-sm"
              >
                Contact Us
              </a>

              {/* WealthTrack APK Download */}
              <a
                href="/wealthtrack.apk"
                download
                className="border border-[#d4d96b]/50 hover:border-[#d4d96b] hover:bg-[#d4d96b]/10 text-[#d4d96b] font-semibold px-8 py-4 rounded-full transition text-sm"
              >
                📱 Download WealthTrack APK
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

          {/* Right Column: Modern Glassmorphic Dashboard Card */}
          <div className="relative flex items-center justify-center">
            {/* Background Glow Effect */}
            <div className="absolute w-72 h-72 bg-[#d4d96b]/10 rounded-full blur-3xl -z-10"></div>

            <div className="w-full bg-[#111111]/80 backdrop-blur-xl border border-[#222222] p-8 rounded-3xl shadow-2xl shadow-black relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#222]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-gray-500 font-mono">knovaworks-v2.0.exe</span>
              </div>

              {/* Card Features / Modules */}
              <div className="mt-6 space-y-4">

                <div className="p-4 rounded-2xl bg-[#181818] border border-[#262626] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#d4d96b]/10 flex items-center justify-center text-[#d4d96b] font-bold">
                      AI
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Neural Automation</h4>
                      <p className="text-xs text-gray-400">Processing real-time data...</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#d4d96b] font-medium bg-[#d4d96b]/10 px-2.5 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#181818] border border-[#262626] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#d4d96b]/10 flex items-center justify-center text-[#d4d96b] font-bold">
                      ERP
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Multi-Tenant System</h4>
                      <p className="text-xs text-gray-400">Enterprise & Business Core</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#d4d96b] font-medium bg-[#d4d96b]/10 px-2.5 py-1 rounded-full">
                    Secure
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#181818] border border-[#262626] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#d4d96b]/10 flex items-center justify-center text-[#d4d96b] font-bold">
                      SaaS
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Cloud Architecture</h4>
                      <p className="text-xs text-gray-400">Docker & Kubernetes</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#d4d96b] font-medium bg-[#d4d96b]/10 px-2.5 py-1 rounded-full">
                    Live
                  </span>
                </div>

                {/* React Native / Mobile */}
                <div className="p-4 rounded-2xl bg-[#181818] border border-[#262626] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#d4d96b]/10 flex items-center justify-center text-[#d4d96b] font-bold">
                      RN
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Mobile Applications</h4>
                      <p className="text-xs text-gray-400">React Native & Expo</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#d4d96b] font-medium bg-[#d4d96b]/10 px-2.5 py-1 rounded-full">
                    Ready
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Workflow & Risk-Free Demo Section */}
      <section className="py-24 bg-[#080808] relative border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-[#111111] border border-[#222222] px-4 py-2 rounded-full text-[#d4d96b] text-sm font-medium mb-4">
              🛡️ Risk-Free Development Model
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              How We Work:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4d96b] to-[#fff]">
                Demo First, Pay as You Go
              </span>
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
    </>
  );
};

export default Hero;