import React from 'react';

const ReactNative = () => {
  const mobileFeatures = [
    'Android & iOS Mobile Applications',
    'React Native + TypeScript',
    'Expo Development & Production Builds',
    'Modern Responsive Mobile UI/UX',
    'Authentication & User Management',
    'Secure API & Backend Integration',
    'Cloud Database Integration',
    'Push Notifications',
    'Payment Gateway Integration',
    'Maps & Location Services',
    'Camera & Media Integration',
    'Offline Data & Local Storage',
    'Real-Time Application Features',
    'State Management',
    'Forms & Data Validation',
    'Performance Optimization',
    'Android APK & AAB Builds',
    'iOS Production Builds',
    'Testing & Device Debugging',
    'Production Deployment & Maintenance',
  ];

  const securityFeatures = [
    {
      title: 'Secure Authentication',
      description:
        'User registration, login, password verification, persistent sessions and secure logout can be implemented as part of the application authentication flow.',
    },
    {
      title: 'Password Protection',
      description:
        'Password handling follows secure hashing principles and sensitive credentials are never stored as plain text.',
    },
    {
      title: 'Row Level Security',
      description:
        'Database-level security policies can enforce user-level access control and protect application data.',
    },
    {
      title: 'User Data Isolation',
      description:
        'Application records can be associated with authenticated users and protected through backend authorization and database policies.',
    },
    {
      title: 'Protected App Flow',
      description:
        'Authentication state can control access to protected screens and application features.',
    },
    {
      title: 'Centralized Data Layer',
      description:
        'API, database and security operations can be organized through dedicated service layers for maintainability and controlled data access.',
    },
  ];

  const appCapabilities = [
    {
      title: 'Business Applications',
      description:
        'Custom mobile applications for businesses, organizations, services and digital products.',
    },
    {
      title: 'FinTech Applications',
      description:
        'Financial dashboards, wallet systems, transaction management and secure financial workflows.',
    },
    {
      title: 'Fitness & Health Platforms',
      description:
        'Workout tracking, progress monitoring, nutrition systems, goals and personalized mobile experiences.',
    },
    {
      title: 'E-Commerce Applications',
      description:
        'Product catalogs, shopping flows, orders, payments, customer accounts and notifications.',
    },
    {
      title: 'Booking & Service Apps',
      description:
        'Appointments, scheduling, service discovery, booking management and customer communication.',
    },
    {
      title: 'SaaS Mobile Applications',
      description:
        'Mobile interfaces for cloud-based business platforms, subscription products and enterprise systems.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#080808] text-white pt-28">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#d4d96b]/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <span className="inline-block bg-[#111111] border border-[#222222] px-5 py-2.5 rounded-full text-[#d4d96b] text-sm font-medium mb-7">
              📱 Mobile Apps • React Native • TypeScript • iOS • Android
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Complete{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4d96b] to-white">
                Mobile Application Development
              </span>
            </h1>

            <p className="mt-7 text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              KNova.Work designs and develops modern cross-platform mobile
              applications for Android and iOS using React Native, Expo and
              TypeScript, connected to secure APIs, cloud infrastructure and
              scalable databases.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-9">

              <a
                href="/#contact"
                className="bg-[#d4d96b] hover:bg-[#c2c75d] text-black font-semibold px-8 py-4 rounded-full transition shadow-lg shadow-[#d4d96b]/10"
              >
                Start a Mobile App Project
              </a>

              <a
                href="/wealthtrack.apk"
                download
                className="border border-[#d4d96b]/60 hover:border-[#d4d96b] hover:bg-[#d4d96b]/10 text-[#d4d96b] font-semibold px-8 py-4 rounded-full transition"
              >
                📱 Download WealthTrack APK
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* Mobile App Capabilities */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-[#d4d96b] text-sm font-semibold uppercase tracking-wider">
              Mobile Application Capabilities
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold mt-4">
              Mobile Apps For Different Industries
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              From financial platforms and fitness applications to business
              systems and SaaS products, we build mobile experiences around
              real business requirements.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

            {appCapabilities.map((item, index) => (
              <div
                key={index}
                className="bg-[#111111]/80 border border-[#222222] rounded-3xl p-7 hover:border-[#d4d96b]/40 transition"
              >

                <div className="w-11 h-11 rounded-xl bg-[#d4d96b]/10 flex items-center justify-center text-[#d4d96b] font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="text-xl font-bold mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mt-3">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Mobile Features */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-[#d4d96b] text-sm font-semibold uppercase tracking-wider">
              Complete Mobile Development
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold mt-4">
              What We Can Build
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">

            {mobileFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#111111]/80 border border-[#222222] rounded-2xl p-6 hover:border-[#d4d96b]/40 transition"
              >

                <div className="flex items-center gap-4">

                  <div className="w-9 h-9 rounded-full bg-[#d4d96b]/10 text-[#d4d96b] flex items-center justify-center font-bold">
                    ✓
                  </div>

                  <span className="text-gray-200 font-medium">
                    {feature}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WealthTrack Featured Project */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="text-[#d4d96b] text-sm font-semibold uppercase tracking-wider">
                Featured Mobile Application
              </span>

              <h2 className="text-4xl sm:text-5xl font-extrabold mt-4">
                WealthTrack
              </h2>

              <p className="text-xl text-gray-300 mt-5">
                Secure Personal Financial Management System
              </p>

              <p className="text-gray-400 leading-relaxed mt-6">
                WealthTrack is a cloud-connected personal financial management
                application developed by KNova.Work using React Native, Expo
                and TypeScript. The application connects to Supabase and
                PostgreSQL to provide secure cloud-based financial management.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-7">

                <div className="bg-[#111111] border border-[#222222] rounded-xl p-4">
                  <p className="text-[#d4d96b] text-sm font-semibold">
                    Frontend
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    React Native + Expo
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#222222] rounded-xl p-4">
                  <p className="text-[#d4d96b] text-sm font-semibold">
                    Language
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    TypeScript
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#222222] rounded-xl p-4">
                  <p className="text-[#d4d96b] text-sm font-semibold">
                    Backend
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    Supabase
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#222222] rounded-xl p-4">
                  <p className="text-[#d4d96b] text-sm font-semibold">
                    Database
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    PostgreSQL
                  </p>
                </div>

              </div>

              <a
                href="/wealthtrack.apk"
                download
                className="inline-block mt-8 bg-[#d4d96b] hover:bg-[#c2c75d] text-black font-bold px-8 py-4 rounded-full transition"
              >
                📥 Download WealthTrack APK
              </a>

            </div>

            {/* Architecture Card */}
            <div className="relative">

              <div className="absolute inset-0 bg-[#d4d96b]/10 blur-3xl rounded-full"></div>

              <div className="relative bg-[#111111]/90 border border-[#262626] rounded-3xl p-8 shadow-2xl">

                <div className="flex items-center justify-between pb-5 border-b border-[#252525]">

                  <div>
                    <p className="text-[#d4d96b] text-sm font-semibold">
                      WEALTHTRACK
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
                      Mobile-to-Cloud Architecture
                    </p>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-[#d4d96b]/10 flex items-center justify-center text-[#d4d96b] text-xl">
                    ⚛
                  </div>

                </div>

                <div className="mt-6 space-y-3">

                  <div className="p-4 rounded-2xl bg-[#181818] border border-[#262626] text-center">
                    <p className="text-white font-semibold">
                      React Native / Expo App
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
                      TypeScript Mobile Application
                    </p>
                  </div>

                  <div className="text-center text-[#d4d96b] text-xl">
                    ↓
                  </div>

                  <div className="p-4 rounded-2xl bg-[#181818] border border-[#262626] text-center">
                    <p className="text-white font-semibold">
                      Supabase Client
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
                      Cloud Application Connectivity
                    </p>
                  </div>

                  <div className="text-center text-[#d4d96b] text-xl">
                    ↓
                  </div>

                  <div className="p-4 rounded-2xl bg-[#181818] border border-[#262626] text-center">
                    <p className="text-white font-semibold">
                      PostgreSQL Cloud Database
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
                      Relational Cloud Data Layer
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">

                    <div className="p-4 rounded-xl bg-[#d4d96b]/5 border border-[#d4d96b]/20">
                      <p className="text-[#d4d96b] text-sm font-semibold">
                        RLS
                      </p>

                      <p className="text-gray-500 text-xs mt-1">
                        Data Isolation
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#d4d96b]/5 border border-[#d4d96b]/20">
                      <p className="text-[#d4d96b] text-sm font-semibold">
                        Security
                      </p>

                      <p className="text-gray-500 text-xs mt-1">
                        Data Protection
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-block bg-[#111111] border border-[#222222] px-4 py-2 rounded-full text-[#d4d96b] text-sm font-medium">
              🔐 Security Architecture
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold mt-5">
              Security Built Into the Application
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Mobile applications can be designed with secure authentication,
              user-level data isolation, protected APIs and database-level
              security as core architectural requirements.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

            {securityFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-[#111111]/80 border border-[#222222] rounded-3xl p-7 hover:border-[#d4d96b]/40 transition"
              >

                <div className="w-11 h-11 rounded-xl bg-[#d4d96b]/10 flex items-center justify-center text-[#d4d96b] font-bold">
                  🔒
                </div>

                <h3 className="text-xl font-bold mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mt-3">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Architecture */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>

              <span className="text-[#d4d96b] text-sm font-semibold uppercase tracking-wider">
                Mobile Architecture
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold mt-4">
                Modular & Maintainable
              </h2>

              <p className="text-gray-400 leading-relaxed mt-6">
                Mobile applications are structured using reusable components,
                modular services and separated data layers. This makes the
                application easier to maintain, extend and connect with
                different backend systems.
              </p>

              <div className="mt-7 bg-[#111111] border border-[#222222] rounded-2xl p-6">

                <p className="text-[#d4d96b] font-mono text-sm">
                  src/services/
                </p>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  Centralized API operations, authentication, database
                  communication, application services and business logic.
                </p>

              </div>

            </div>

            <div className="space-y-4">

              <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6">

                <p className="text-[#d4d96b] text-sm font-semibold">
                  MOBILE APPLICATION
                </p>

                <p className="text-gray-400 text-sm mt-2">
                  React Native + TypeScript + reusable UI components.
                </p>

              </div>

              <div className="text-center text-[#d4d96b]">
                ↓
              </div>

              <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6">

                <p className="text-[#d4d96b] text-sm font-semibold">
                  API / BACKEND
                </p>

                <p className="text-gray-400 text-sm mt-2">
                  Secure API communication, authentication and business logic.
                </p>

              </div>

              <div className="text-center text-[#d4d96b]">
                ↓
              </div>

              <div className="bg-[#d4d96b]/5 border border-[#d4d96b]/20 rounded-2xl p-6">

                <p className="text-[#d4d96b] text-sm font-semibold">
                  CLOUD DATABASE
                </p>

                <p className="text-gray-400 text-sm mt-2">
                  PostgreSQL, Supabase or other scalable cloud database
                  infrastructure.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Development & Deployment */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-[#d4d96b] text-sm font-semibold uppercase tracking-wider">
              Development & Production
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold mt-4">
              From Development to Deployment
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            <div className="bg-[#111111] border border-[#222222] rounded-3xl p-7">

              <span className="text-[#d4d96b] text-3xl font-bold">
                01
              </span>

              <h3 className="text-xl font-bold mt-5">
                Development
              </h3>

              <p className="text-gray-400 text-sm mt-3">
                React Native, TypeScript, reusable components, navigation,
                forms, APIs and application architecture.
              </p>

            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-3xl p-7">

              <span className="text-[#d4d96b] text-3xl font-bold">
                02
              </span>

              <h3 className="text-xl font-bold mt-5">
                Integration
              </h3>

              <p className="text-gray-400 text-sm mt-3">
                Backend APIs, authentication, databases, cloud services,
                notifications and third-party integrations.
              </p>

            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-3xl p-7">

              <span className="text-[#d4d96b] text-3xl font-bold">
                03
              </span>

              <h3 className="text-xl font-bold mt-5">
                Testing
              </h3>

              <p className="text-gray-400 text-sm mt-3">
                Device testing, debugging, performance optimization and
                production readiness checks.
              </p>

            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-3xl p-7">

              <span className="text-[#d4d96b] text-3xl font-bold">
                04
              </span>

              <h3 className="text-xl font-bold mt-5">
                Deployment
              </h3>

              <p className="text-gray-400 text-sm mt-3">
                Android APK/AAB builds, iOS production builds, environment
                configuration and deployment preparation.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="text-[#d4d96b] text-sm font-semibold uppercase tracking-wider">
            Build With KNova.Work
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4">
            Need a Mobile Application?
          </h2>

          <p className="text-gray-400 text-base sm:text-lg mt-5 leading-relaxed">
            From secure financial applications to custom business platforms,
            fitness systems and SaaS products, KNova.Work can design, develop,
            integrate and prepare your mobile application for production.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-9">

            <a
              href="/#contact"
              className="bg-[#d4d96b] hover:bg-[#c2c75d] text-black font-semibold px-8 py-4 rounded-full transition"
            >
              Contact KNova.Work
            </a>

            <a
              href="/wealthtrack.apk"
              download
              className="border border-[#d4d96b]/60 hover:border-[#d4d96b] hover:bg-[#d4d96b]/10 text-[#d4d96b] font-semibold px-8 py-4 rounded-full transition"
            >
              📥 Download WealthTrack APK
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default ReactNative;