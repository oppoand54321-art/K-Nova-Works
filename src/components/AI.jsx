import React from "react";

const coreFeatures = [
  ["AI Engine", "A centralized intelligence layer designed to power applications, assistants, automation and business systems."],
  ["AI Agents", "Intelligent agents capable of planning, reasoning, using approved tools and executing multi-step tasks."],
  ["Knowledge & RAG", "Private knowledge systems connected to documents, databases and application-specific information."],
  ["AI Memory", "Context-aware conversations with session history, preferences and personalized experiences."],
  ["AI Automation", "Intelligent workflows designed to automate repetitive business and operational processes."],
  ["AI API Platform", "Secure APIs that allow websites, mobile applications, SaaS products and enterprise systems to use AI."]
];

const phaseOne = [
  "Independent AI Engine architecture",
  "Python + FastAPI AI processing layer",
  "Node.js API and application integration",
  "Large Language Model integration",
  "Multi-model architecture",
  "Intelligent model routing",
  "Conversational AI",
  "AI assistants",
  "AI agents",
  "Task planning and execution",
  "Tool-using AI agents",
  "Knowledge Base management",
  "PDF and document processing",
  "Semantic and vector search",
  "RAG (Retrieval-Augmented Generation)",
  "PostgreSQL + pgvector",
  "AI memory and conversation history",
  "Personalized AI responses",
  "Redis caching",
  "AI API platform",
  "Authentication and authorization",
  "API key management",
  "Usage monitoring",
  "AI management dashboard",
  "Docker-based deployment",
  "VPS and cloud deployment",
  "Security and monitoring"
];

const phaseTwo = [
  "Advanced reasoning models",
  "Multi-agent collaboration",
  "Autonomous AI workflows",
  "Advanced AI automation",
  "Image generation",
  "Image editing and enhancement",
  "Text-to-image workflows",
  "Image-to-image workflows",
  "Text-to-video generation",
  "Image-to-video generation",
  "Script-to-video workflows",
  "AI characters and avatars",
  "Lip-sync and AI voice-over",
  "Speech-to-text",
  "Text-to-speech",
  "Voice assistants",
  "Advanced multimodal AI",
  "Vision-based AI systems",
  "Audio and video understanding",
  "Self-hosted AI models",
  "Dedicated GPU infrastructure",
  "NVIDIA CUDA acceleration",
  "Multiple GPU server support",
  "Model optimization",
  "Fine-tuning-ready architecture",
  "Domain-specific AI models",
  "AI-as-a-Service platform",
  "Enterprise AI deployments"
];

const applications = [
  "AI Fitness Coaches",
  "AI Business Assistants",
  "AI Customer Support",
  "AI Research Assistants",
  "AI Coding Assistants",
  "AI Education Platforms",
  "AI Analytics Systems",
  "AI Content Platforms",
  "AI Automation Systems",
  "AI SaaS Products",
  "Enterprise AI Solutions",
  "Custom AI Applications"
];

const technologies = [
  "Python",
  "FastAPI",
  "Node.js",
  "React",
  "TypeScript",
  "React Native",
  "PostgreSQL",
  "pgvector",
  "Redis",
  "Docker",
  "Nginx",
  "NVIDIA CUDA",
  "GPU Infrastructure",
  "Open-Source AI Models",
  "External AI APIs"
];

const SectionHeading = ({ label, title, description }) => (
  <div className="max-w-3xl mb-14">
    <span className="text-sm font-semibold tracking-[0.25em] uppercase text-[#d4d96b]">
      {label}
    </span>

    <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
      {title}
    </h2>

    {description && (
      <p className="mt-5 text-gray-400 text-base md:text-lg leading-8">
        {description}
      </p>
    )}
  </div>
);

const FeatureList = ({ items }) => (
  <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
    {items.map((item, index) => (
      <div
        key={index}
        className="flex items-start gap-3 py-3 border-b border-[#222]"
      >
        <span className="text-[#d4d96b] font-bold mt-0.5">✓</span>
        <span className="text-gray-300">{item}</span>
      </div>
    ))}
  </div>
);

export default function AI() {
  return (
    <main className="bg-[#080808] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center px-6 md:px-12 lg:px-20 py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4d96b]/10 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-flex px-4 py-2 rounded-full border border-[#d4d96b]/30 bg-[#d4d96b]/10 text-[#d4d96b] text-xs font-semibold tracking-[0.2em]">
              KNOVA WORKS · AI ENGINE
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05]">
              Build Intelligent
              <span className="block gradient-text">
                AI Systems.
              </span>
            </h1>

            <p className="mt-7 text-gray-400 text-lg md:text-xl leading-8 max-w-2xl">
              KNova Works builds scalable AI platforms, intelligent agents,
              knowledge systems, automation engines and multimodal AI
              solutions designed to power modern applications and businesses.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#ai-platform"
                className="px-7 py-3.5 rounded-xl bg-[#d4d96b] text-black font-semibold hover:opacity-90 transition"
              >
                Explore AI Platform
              </a>

              <a
                href="#objective"
                className="px-7 py-3.5 rounded-xl border border-[#333] hover:border-[#d4d96b] transition"
              >
                Our Objective
              </a>
            </div>
          </div>

          {/* AI VISUAL */}
          <div className="relative flex items-center justify-center min-h-[420px]">
            <div className="absolute w-80 h-80 rounded-full border border-[#d4d96b]/20" />
            <div className="absolute w-64 h-64 rounded-full border border-[#d4d96b]/20" />
            <div className="absolute w-48 h-48 rounded-full border border-[#d4d96b]/20" />

            <div className="relative w-40 h-40 rounded-full bg-[#111] border border-[#d4d96b]/50 shadow-[0_0_80px_rgba(212,217,107,0.15)] flex flex-col items-center justify-center">
              <span className="text-xs tracking-[0.3em] text-gray-400">
                KNOVA
              </span>
              <strong className="text-4xl text-[#d4d96b]">AI</strong>
              <span className="text-[9px] tracking-[0.2em] text-gray-500">
                ENGINE
              </span>
            </div>

            <div className="absolute top-10 right-8 md:right-16 bg-[#111] border border-[#222] rounded-2xl px-5 py-3 shadow-xl">
              <strong className="text-[#d4d96b]">LLM</strong>
              <span className="block text-xs text-gray-500">Intelligence</span>
            </div>

            <div className="absolute bottom-12 left-4 md:left-10 bg-[#111] border border-[#222] rounded-2xl px-5 py-3 shadow-xl">
              <strong className="text-[#d4d96b]">RAG</strong>
              <span className="block text-xs text-gray-500">Knowledge</span>
            </div>

            <div className="absolute top-1/2 -right-2 bg-[#111] border border-[#222] rounded-2xl px-5 py-3 shadow-xl">
              <strong className="text-[#d4d96b]">AGENTS</strong>
              <span className="block text-xs text-gray-500">Automation</span>
            </div>

            <div className="absolute bottom-5 right-12 md:right-24 bg-[#111] border border-[#222] rounded-2xl px-5 py-3 shadow-xl">
              <strong className="text-[#d4d96b]">GPU</strong>
              <span className="block text-xs text-gray-500">Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PLATFORM */}
      <section
        id="ai-platform"
        className="px-6 md:px-12 lg:px-20 py-24 border-t border-[#151515]"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="AI PLATFORM"
            title="One Intelligent Engine. Multiple Possibilities."
            description="A centralized AI architecture designed to power multiple products, applications and business systems through secure and scalable AI services."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map(([title, text], index) => (
              <div
                key={index}
                className="card p-7 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#d4d96b]/10 border border-[#d4d96b]/20 flex items-center justify-center text-[#d4d96b] font-bold mb-6">
                  AI
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#0b0b0b] border-y border-[#151515]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="INTELLIGENCE PIPELINE"
            title="From Request to Intelligent Action."
            description="A structured AI processing pipeline connects the user request with context, memory, tools, models and the final response."
          />

          <div className="grid md:grid-cols-5 gap-4">
            {[
              ["01", "Request", "Text, voice, image, file or application request."],
              ["02", "Router", "Understand the task and select the right workflow."],
              ["03", "Context", "Retrieve memory, knowledge, data and tools."],
              ["04", "Model", "Process the request through the selected AI model."],
              ["05", "Action", "Return an answer, recommendation, content or action."]
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="relative p-6 rounded-2xl bg-[#111] border border-[#222]"
              >
                <span className="text-[#d4d96b] text-sm font-bold">
                  {number}
                </span>

                <h3 className="mt-4 font-bold text-lg">
                  {title}
                </h3>

                <p className="mt-3 text-sm text-gray-500 leading-6">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 1 */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <span className="text-[#d4d96b] text-sm font-bold tracking-[0.25em]">
                PHASE 01
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Core AI Platform
              </h2>

              <p className="mt-5 text-gray-400 max-w-2xl leading-8">
                The foundation of the KNova AI ecosystem — designed for
                intelligent assistants, agents, knowledge systems, APIs and
                automation.
              </p>
            </div>

            <span className="px-5 py-2 rounded-full border border-[#d4d96b]/30 text-[#d4d96b] text-sm">
              CORE ENGINE
            </span>
          </div>

          <FeatureList items={phaseOne} />
        </div>
      </section>

      {/* PHASE 2 */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#0b0b0b] border-y border-[#151515]">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <span className="text-[#d4d96b] text-sm font-bold tracking-[0.25em]">
                PHASE 02
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Advanced Multimodal AI
              </h2>

              <p className="mt-5 text-gray-400 max-w-2xl leading-8">
                Expand the platform into advanced agents, image, video,
                voice, multimodal intelligence and self-hosted GPU-powered AI.
              </p>
            </div>

            <span className="px-5 py-2 rounded-full border border-[#d4d96b]/30 text-[#d4d96b] text-sm">
              ADVANCED AI
            </span>
          </div>

          <FeatureList items={phaseTwo} />
        </div>
      </section>

      {/* AGENTS */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="AI AGENTS"
            title="AI That Can Do More Than Just Chat."
            description="Create intelligent agents that can plan, reason, use approved tools, retrieve information and execute multi-step workflows."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["01", "Research Agents", "Search, analyze and organize information into useful results."],
              ["02", "Coding Agents", "Assist with development, debugging, analysis and technical workflows."],
              ["03", "Business Agents", "Automate operational workflows and repetitive business tasks."],
              ["04", "Custom Agents", "Purpose-built intelligent agents for specific applications."]
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="card p-6"
              >
                <span className="text-[#d4d96b] text-sm font-bold">
                  {number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-gray-400 leading-7 text-sm">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MULTIMODAL */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#0b0b0b] border-y border-[#151515]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="MULTIMODAL AI"
            title="Text. Image. Voice. Video."
            description="Build AI systems capable of understanding and generating multiple forms of digital content."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["T", "Text AI", "Conversation, reasoning, coding, research, analysis and content generation."],
              ["I", "Image AI", "Generation, editing, enhancement, creative assets and visual intelligence."],
              ["V", "Video AI", "Script-to-video, image-to-video, scenes, avatars and automated workflows."],
              ["A", "Voice AI", "Speech recognition, voice assistants, transcription and AI narration."]
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="card p-7"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#d4d96b]/10 text-[#d4d96b] flex items-center justify-center text-xl font-bold">
                  {icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-gray-400 leading-7">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GPU */}
      <section className="px-6 md:px-12 lg:px-20 py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-[#d4d96b] text-sm font-bold tracking-[0.25em]">
              AI INFRASTRUCTURE
            </span>

            <h2 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
              Ready for
              <span className="block gradient-text">
                GPU-Powered AI.
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">
              The architecture can evolve from external AI services to
              self-hosted open-source models running on dedicated GPU
              infrastructure.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "NVIDIA CUDA",
                "Dedicated GPU Servers",
                "Self-Hosted Models",
                "Model Optimization",
                "Multiple Model Serving",
                "Scalable Infrastructure"
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="text-[#d4d96b]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] rounded-3xl border border-[#222] bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
            <div className="absolute w-72 h-72 rounded-full border border-[#d4d96b]/10" />
            <div className="absolute w-52 h-52 rounded-full border border-[#d4d96b]/10" />

            <div className="relative flex flex-col items-center gap-5">
              <div className="px-7 py-4 rounded-2xl border border-[#d4d96b]/30 bg-[#111]">
                <strong className="text-[#d4d96b]">GPU</strong>
                <span className="block text-xs text-gray-500 mt-1">
                  AI COMPUTE
                </span>
              </div>

              <div className="w-px h-10 bg-[#d4d96b]/30" />

              <div className="px-7 py-4 rounded-2xl border border-[#d4d96b]/30 bg-[#111]">
                <strong className="text-[#d4d96b]">MODEL</strong>
                <span className="block text-xs text-gray-500 mt-1">
                  INFERENCE
                </span>
              </div>

              <div className="w-px h-10 bg-[#d4d96b]/30" />

              <div className="px-7 py-4 rounded-2xl border border-[#d4d96b]/30 bg-[#111]">
                <strong className="text-[#d4d96b]">KNOVA AI</strong>
                <span className="block text-xs text-gray-500 mt-1">
                  INTELLIGENCE ENGINE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#0b0b0b] border-y border-[#151515]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="APPLICATIONS"
            title="AI Built for Real Products."
            description="The KNova AI platform can power specialized AI solutions across different industries and applications."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((item) => (
              <div
                key={item}
                className="p-5 rounded-2xl border border-[#222] bg-[#111] hover:border-[#d4d96b]/50 transition"
              >
                <span className="text-[#d4d96b] mr-3">✦</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="TECHNOLOGY STACK"
            title="Built on a Modern AI Infrastructure."
            description="A technology foundation designed for development today and scaling tomorrow."
          />

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="px-5 py-3 rounded-xl border border-[#222] bg-[#111] text-gray-300 hover:border-[#d4d96b]/50 hover:text-[#d4d96b] transition"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIVE */}
      <section
        id="objective"
        className="px-6 md:px-12 lg:px-20 py-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d4d96b]/20 bg-[#101010] p-8 md:p-14">

            <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#d4d96b]/10 blur-[100px] rounded-full" />

            <div className="relative">
              <span className="text-[#d4d96b] text-sm font-bold tracking-[0.25em]">
                COMPLETE OBJECTIVE
              </span>

              <h2 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
                Building AI Systems,
                <span className="block gradient-text">
                  Not Just AI Features.
                </span>
              </h2>

              <p className="mt-7 text-gray-400 text-lg leading-8 max-w-4xl">
                Our objective is to build a scalable and modular AI ecosystem
                capable of powering KNova Works products, business
                applications and external platforms through a centralized
                intelligence engine.
              </p>

              <div className="grid md:grid-cols-4 gap-5 mt-12">
                {[
                  ["BUILD", "AI systems from the ground up."],
                  ["INTEGRATE", "Multiple models and intelligent services."],
                  ["AUTOMATE", "Complex workflows using AI agents."],
                  ["SCALE", "From applications to enterprise infrastructure."]
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="p-5 rounded-2xl border border-[#222] bg-[#0b0b0b]"
                  >
                    <strong className="text-[#d4d96b]">
                      {title}
                    </strong>

                    <p className="mt-3 text-sm text-gray-500 leading-6">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-28 text-center">
        <div className="max-w-4xl mx-auto">

          <span className="text-[#d4d96b] text-sm font-bold tracking-[0.3em]">
            KNOVA WORKS · AI
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            Ready to Build
            <span className="block gradient-text">
              Your AI System?
            </span>
          </h2>

          <p className="mt-7 text-gray-400 text-lg leading-8 max-w-2xl mx-auto">
            From intelligent assistants and AI automation to custom AI
            engines, multimodal systems and GPU-powered infrastructure.
          </p>

          <a
            href="/contact"
            className="inline-block mt-9 px-8 py-4 rounded-xl bg-[#d4d96b] text-black font-bold hover:opacity-90 transition"
          >
            Start Your AI Project
          </a>

        </div>
      </section>

    </main>
  );
}