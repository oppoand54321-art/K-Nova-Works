import React from 'react';

const ReactNative = () => {
  const features = [
    'Secure User Registration & Login',
    'Persistent Session Management',
    'Protected Application Flow',
    'Financial Dashboard',
    'Accounts & Wallet Management',
    'Transaction Management',
    'User-Level Data Isolation',
    'Cloud Database Integration',
    'Real-Time Cloud Connectivity',
    'APK Build & Device Testing',
    'Modular Service Architecture',
    'Production-Ready Mobile Architecture',
  ];

  const securityFeatures = [
    {
      title: 'Secure Authentication',
      description:
        'User registration, login, password verification, persistent sessions and secure logout are implemented as part of the application authentication flow.',
    },
    {
      title: 'Password Protection',
      description:
        'Password handling uses bcryptjs hashing principles. Plain-text passwords are not stored in the application database.',
    },
    {
      title: 'Row Level Security',
      description:
        'Supabase Row Level Security policies are used to enforce user-level access control at the database layer.',
    },
    {
      title: 'User Data Isolation',
      description:
        'Financial records are associated with the authenticated user through userId relationships and database security policies.',
    },
    {
      title: 'Protected App Flow',
      description:
        'The application checks authentication state and protects access to the authenticated application experience.',
    },
    {
      title: 'Centralized Data Layer',
      description:
        'Database and security-related operations are centralized through a dedicated service layer for maintainability and controlled data access.',
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
              ⚛️ React Native • Expo • TypeScript
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              React Native{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4d96b] to-white">
                Mobile Application Development
              </span>
            </h1>

            <p className="mt-7 text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              KNovaWorks develops modern mobile applications using React
              Native, Expo and TypeScript, connected to secure cloud backends,
              APIs and PostgreSQL databases.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-9">
              <a
                href="/#contact"
                className="bg-[#d4d96b] hover:bg-[#c2c75d] text-black font-semibold px-8 py-4 rounded-full transition shadow-lg shadow-[#d4d96b]/10"
              >
                Start a React Native Project
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

      {/* WealthTrack Featured Project */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="text-[#d4d96b] text-sm font-semibold uppercase tracking-wider">
                Featured React Native Project
              </span>

              <h2 className="text-4xl sm:text-5xl font-extrabold mt-4">
                WealthTrack
              </h2>

              <p className="text-xl text-gray-300 mt-5">
                Secure Personal Financial Management System
              </p>

              <p className="text-gray-400 leading-relaxed mt-6">
                WealthTrack is a cloud-connected personal financial management
                application developed by KNovaWorks using React Native, Expo
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
                        bcryptjs
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        Password Protection
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
              WealthTrack was designed with user-level data isolation,
              authentication protection and database-level security as core
              architectural requirements.
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

      {/* Features */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-[#d4d96b] text-sm font-semibold uppercase tracking-wider">
              Application Features
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold mt-4">
              What We Built
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">

            {features.map((feature, index) => (
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

      {/* Architecture */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>

              <span className="text-[#d4d96b] text-sm font-semibold uppercase tracking-wider">
                Code Architecture
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold mt-4">
                Modular & Maintainable
              </h2>

              <p className="text-gray-400 leading-relaxed mt-6">
                WealthTrack uses a modular service-based architecture. Core
                database and security-related operations are centralized in a
                dedicated service layer, keeping business and data logic
                separated from individual application screens.
              </p>

              <div className="mt-7 bg-[#111111] border border-[#222222] rounded-2xl p-6">
                <p className="text-[#d4d96b] font-mono text-sm">
                  src/services/dbService.ts
                </p>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  Centralized database operations, user-related operations,
                  transaction handling and data access logic.
                </p>
              </div>

            </div>

            <div className="space-y-4">

              <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6">
                <p className="text-[#d4d96b] text-sm font-semibold">
                  USERS
                </p>

                <p className="text-gray-400 text-sm mt-2">
                  User credentials, account identifiers and profile data.
                </p>
              </div>

              <div className="text-center text-[#d4d96b]">
                ↓
              </div>

              <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6">
                <p className="text-[#d4d96b] text-sm font-semibold">
                  TRANSACTIONS
                </p>

                <p className="text-gray-400 text-sm mt-2">
                  Financial records associated with individual authenticated
                  users through userId relationships.
                </p>
              </div>

              <div className="text-center text-[#d4d96b]">
                ↓
              </div>

              <div className="bg-[#d4d96b]/5 border border-[#d4d96b]/20 rounded-2xl p-6">
                <p className="text-[#d4d96b] text-sm font-semibold">
                  SUPABASE RLS
                </p>

                <p className="text-gray-400 text-sm mt-2">
                  Database-level policies enforce user-scoped access to
                  protected financial records.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-[#d4d96b] text-sm font-semibold uppercase tracking-wider">
              Project Status
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold mt-4">
              WealthTrack Development
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            <div className="bg-[#111111] border border-[#222222] rounded-3xl p-7">
              <span className="text-[#d4d96b] text-3xl font-bold">
                01
              </span>

              <h3 className="text-xl font-bold mt-5">
                Mobile Application
              </h3>

              <p className="text-gray-400 text-sm mt-3">
                React Native, Expo, TypeScript, navigation and core screen UI
                completed.
              </p>

              <span className="inline-block mt-5 text-xs text-[#d4d96b] bg-[#d4d96b]/10 px-3 py-1 rounded-full">
                Completed
              </span>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-3xl p-7">
              <span className="text-[#d4d96b] text-3xl font-bold">
                02
              </span>

              <h3 className="text-xl font-bold mt-5">
                Cloud Database
              </h3>

              <p className="text-gray-400 text-sm mt-3">
                Supabase PostgreSQL integration, schema design and cloud
                synchronization completed.
              </p>

              <span className="inline-block mt-5 text-xs text-[#d4d96b] bg-[#d4d96b]/10 px-3 py-1 rounded-full">
                Completed
              </span>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-3xl p-7">
              <span className="text-[#d4d96b] text-3xl font-bold">
                03
              </span>

              <h3 className="text-xl font-bold mt-5">
                Security
              </h3>

              <p className="text-gray-400 text-sm mt-3">
                Authentication, password handling, sessions and Supabase RLS
                data isolation completed.
              </p>

              <span className="inline-block mt-5 text-xs text-[#d4d96b] bg-[#d4d96b]/10 px-3 py-1 rounded-full">
                Completed
              </span>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-3xl p-7">
              <span className="text-[#d4d96b] text-3xl font-bold">
                04
              </span>

              <h3 className="text-xl font-bold mt-5">
                Build & Deployment
              </h3>

              <p className="text-gray-400 text-sm mt-3">
                GitHub version control, APK generation and physical device
                testing completed.
              </p>

              <span className="inline-block mt-5 text-xs text-[#d4d96b] bg-[#d4d96b]/10 px-3 py-1 rounded-full">
                Completed
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="text-[#d4d96b] text-sm font-semibold uppercase tracking-wider">
            Build With KNovaWorks
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4">
            Need a React Native Application?
          </h2>

          <p className="text-gray-400 text-base sm:text-lg mt-5 leading-relaxed">
            From secure financial applications to custom business mobile
            platforms, we can design, develop and connect your application to
            the backend and cloud infrastructure it needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-9">

            <a
              href="/#contact"
              className="bg-[#d4d96b] hover:bg-[#c2c75d] text-black font-semibold px-8 py-4 rounded-full transition"
            >
              Contact KNovaWorks
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