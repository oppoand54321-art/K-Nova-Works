import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-[#080808] text-white border-t border-[#1f1f1f]"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Column */}
        <div>
          <span className="text-[#d4d96b] font-semibold uppercase tracking-widest text-sm bg-[#111111] border border-[#222222] px-4 py-2 rounded-full inline-block mb-6">
            About KNovaWorks
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            We Build Smart Software, <br />
            <span className="gradient-text">
              AI Solutions & DevOps Infrastructure
            </span>
          </h2>

          <p className="mt-7 text-lg text-gray-300 leading-8">
            KNovaWorks is a modern software development agency specializing
            in AI solutions, ERP systems, SaaS platforms, enterprise software,
            cloud infrastructure, and DevOps services.
          </p>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            From idea to deployment, we build secure, scalable, and
            high-performance applications using React, Next.js, Node.js,
            .NET, Python, and Angular.
          </p>

          {/* Solution Cards */}
          <div className="grid grid-cols-2 gap-5 mt-10">

            {/* AI */}
            <Link
              to="/solutions#ai"
              className="card p-6 block transition hover:border-[#d4d96b] hover:-translate-y-1 cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-[#d4d96b]">
                AI
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                AI Automation & Intelligent Systems
              </p>
            </Link>

            {/* ERP */}
            <Link
              to="/solutions#erp"
              className="card p-6 block transition hover:border-[#d4d96b] hover:-translate-y-1 cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-[#d4d96b]">
                ERP
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                All kinds of Business ERP Solutions
              </p>
            </Link>

            {/* SaaS */}
            <Link
              to="/solutions#saas"
              className="card p-6 block transition hover:border-[#d4d96b] hover:-translate-y-1 cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-[#d4d96b]">
                SaaS
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                Cloud Based Business Applications
              </p>
            </Link>

            {/* DevOps */}
            <Link
              to="/devops"
              className="card p-6 block transition hover:border-[#d4d96b] hover:-translate-y-1 cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-[#d4d96b]">
                DevOps
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                Docker, Kubernetes & Cloud Deployment
              </p>
            </Link>

          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 gap-6">

          <div className="card p-8">
            <h3 className="text-5xl font-bold text-[#d4d96b]">
              20+
            </h3>
            <p className="mt-3 text-gray-300">
              Completed Projects
            </p>
          </div>

          <div className="card p-8">
            <h3 className="text-5xl font-bold text-[#d4d96b]">
              100%
            </h3>
            <p className="mt-3 text-gray-300">
              Secure Architecture
            </p>
          </div>

          <div className="card p-8">
            <h3 className="text-5xl font-bold text-[#d4d96b]">
              24/7
            </h3>
            <p className="mt-3 text-gray-300">
              Technical Support
            </p>
          </div>

          <div className="card p-8">
            <h3 className="text-3xl font-bold text-[#d4d96b]">
              Cloud
            </h3>
            <p className="mt-3 text-gray-300 text-sm">
              VPS • Docker • Kubernetes
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;