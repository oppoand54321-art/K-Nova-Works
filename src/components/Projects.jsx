import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-[#080808] text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#d4d96b] font-semibold uppercase tracking-widest text-sm bg-[#111111] border border-[#222222] px-4 py-2 rounded-full inline-block mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold">Live Solutions We're Proud Of</h2>
          <p className="text-gray-400 mt-4">We create scalable software, cloud infrastructure, and enterprise solutions that help businesses grow.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Project 1: School ERP */}
          <div className="card p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#d4d96b] uppercase tracking-wider">ERP • SaaS</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">School ERP System</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Complete School Management System with Student, Teacher, Attendance, Fees, Exams, Reports, and Admin Dashboard.
              </p>
            </div>
            <div className="pt-6 border-t border-[#222222] flex items-center justify-between">
              <span className="text-xs text-gray-400">Production Live</span>
              <a 
                href="https://schoolerp.ink" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#d4d96b] text-black font-semibold px-5 py-2 rounded-full text-sm hover:bg-[#c2c75d] transition"
              >
                Visit schoolerp.ink
              </a>
            </div>
          </div>

          {/* Project 2: U4 Uniform */}
          <div className="card p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#d4d96b] uppercase tracking-wider">E-Commerce • ERP</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">U4 Uniform Management</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Custom school uniform manufacturing, online orders, inventory tracking, school-wise catalog, and automated billing system.
              </p>
            </div>
            <div className="pt-6 border-t border-[#222222] flex items-center justify-between">
              <span className="text-xs text-gray-400">Production Live</span>
              <a 
                href="https://u4uniform.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#d4d96b] text-black font-semibold px-5 py-2 rounded-full text-sm hover:bg-[#c2c75d] transition"
              >
                Visit u4uniform.com
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;