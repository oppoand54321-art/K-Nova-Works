import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DevOps from './components/DevOps';
import AI from './components/AI';

import ReactNative from './components/ReactNative';

// Scroll page to top whenever route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Home Page
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-[#080808] min-h-screen text-white">
        <Navbar />

        {/* Scroll to top on every page navigation */}
        <ScrollToTop />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* DevOps Page */}
          <Route path="/devops" element={<DevOps />} />

          {/* AI Platform Page */}
          <Route path="/ai" element={<AI />} />

          {/* React Native Page */}
          <Route path="/react-native" element={<ReactNative />} />
        </Routes>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-[#1f1f1f] text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} KNova.work All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;