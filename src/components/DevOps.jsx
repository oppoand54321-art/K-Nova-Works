import React from 'react';

const DevOps = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white p-6 md:p-12 font-sans">
      {/* Top Header / Branding */}
      <div className="flex justify-between items-center pb-8 border-b border-[#1f1f1f]">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/30">
            D
          </div>
          <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-white via-gray-200 to-indigo-400 bg-clip-text text-transparent">
            DevPos
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#contact" className="text-gray-300 hover:text-white text-sm font-medium">Contact</a>
          <a href="#login" className="text-gray-300 hover:text-white text-sm font-medium">Log In</a>
          <a href="#subscribe" className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">Subscribe</a>
        </div>
      </div>

      {/* Hero Section with Images */}
      <div className="my-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-r from-white via-gray-200 to-indigo-400 bg-clip-text text-transparent">
            Automated Infrastructure & CI/CD Pipeline
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
            This modern platform completely automates software building, testing, and deployment processes with advanced Docker containerization, Kubernetes clusters, and Nginx routing.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#1a1a1a] border border-[#262626] text-indigo-400 text-xs px-3 py-1.5 rounded-md font-medium">✅ Ubuntu 24.04 LTS</span>
            <span className="bg-[#1a1a1a] border border-[#262626] text-indigo-400 text-xs px-3 py-1.5 rounded-md font-medium">✅ Docker & Kubernetes</span>
            <span className="bg-[#1a1a1a] border border-[#262626] text-indigo-400 text-xs px-3 py-1.5 rounded-md font-medium">✅ GitHub Actions CI/CD</span>
            <span className="bg-[#1a1a1a] border border-[#262626] text-indigo-400 text-xs px-3 py-1.5 rounded-md font-medium">✅ Nginx Gateway & SSL</span>
          </div>
        </div>

        {/* Hero Visual Image */}
        <div className="relative rounded-2xl overflow-hidden border border-[#1f1f1f] bg-[#121212] shadow-2xl">
          <img 
            src="/images/1000388935.webp" 
            alt="DevOps Architecture 3D Flow" 
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Second Architecture Showcase Section */}
      <div className="my-16 max-w-6xl mx-auto bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 md:p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">
          📌 Live DevOps Architecture Flow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <img 
              src="/images/1000388932.png" 
              alt="DevPos UI Architecture" 
              className="w-full rounded-xl border border-[#262626]"
            />
          </div>
          <div className="space-y-4 text-gray-300 text-sm">
            <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#262626]">
              <strong className="text-white">🚀 CI/CD Pipeline:</strong> Code push triggers GitHub Actions for automatic build and deployment.
            </div>
            <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#262626]">
              <strong className="text-white">🐳 Docker & Containers:</strong> Isolated environments running React, Node.js, PostgreSQL, and Redis.
            </div>
            <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#262626]">
              <strong className="text-white">☸️ Kubernetes & Nginx:</strong> Automated cluster management, scaling, and secure reverse proxy routing.
            </div>
          </div>
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 max-w-6xl mx-auto">
        {/* Docker */}
        <div className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 hover:border-indigo-500/50 transition-all shadow-xl">
          <div className="text-2xl mb-4">🐳</div>
          <h3 className="text-xl font-bold mb-2 text-white">Docker</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Docker Containerization</li>
            <li>• Docker Compose</li>
            <li>• Multi-Container Applications</li>
          </ul>
        </div>

        {/* Kubernetes */}
        <div className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 hover:border-indigo-500/50 transition-all shadow-xl">
          <div className="text-2xl mb-4">☸️</div>
          <h3 className="text-xl font-bold mb-2 text-white">Kubernetes</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Kubernetes Cluster</li>
            <li>• Auto Scaling & Rolling Updates</li>
            <li>• Self-Healing Pods</li>
          </ul>
        </div>

        {/* Cloud & Server */}
        <div className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 hover:border-indigo-500/50 transition-all shadow-xl">
          <div className="text-2xl mb-4">☁️</div>
          <h3 className="text-xl font-bold mb-2 text-white">Cloud & Server</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Ubuntu Server & Nginx Config</li>
            <li>• SSL (HTTPS) & Domain Setup</li>
            <li>• VPS Deployment</li>
          </ul>
        </div>

        {/* CI/CD */}
        <div className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 hover:border-indigo-500/50 transition-all shadow-xl">
          <div className="text-2xl mb-4">⚙️</div>
          <h3 className="text-xl font-bold mb-2 text-white">CI/CD</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• GitHub Actions Integration</li>
            <li>• Automatic Build & Deployment</li>
            <li>• Vercel / VPS Support</li>
          </ul>
        </div>

        {/* Monitoring */}
        <div className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 hover:border-indigo-500/50 transition-all shadow-xl">
          <div className="text-2xl mb-4">📊</div>
          <h3 className="text-xl font-bold mb-2 text-white">Monitoring</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Server & Container Monitoring</li>
            <li>• Application Logs & Performance</li>
            <li>• Backup Strategy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DevOps;