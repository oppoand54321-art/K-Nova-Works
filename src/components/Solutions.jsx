import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Solutions.css';

const Solutions = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <section className="solutions-page">

      {/* Header */}
      <div className="solutions-header">
        <span className="solutions-badge">
          KNovaWorks Solutions
        </span>

        <h1>
          Digital Solutions for
          <span> Modern Businesses</span>
        </h1>

        <p>
          Explore our AI, ERP, and SaaS solutions designed to help
          businesses automate operations, improve efficiency, and grow
          with modern technology.
        </p>
      </div>

      {/* Navigation */}
      <div className="solutions-nav">
        <a href="#ai">AI</a>
        <a href="#erp">ERP</a>
        <a href="#saas">SaaS</a>
      </div>

      {/* AI */}
      <section id="ai" className="solution-section">
        <div className="solution-content">
          <span className="solution-label">AI</span>

          <h2>
            AI Automation &
            <span> Intelligent Systems</span>
          </h2>

          <p>
            We build smart AI-powered solutions to automate processes,
            save time, and help businesses make intelligent decisions.
          </p>

          <h3>What We Offer</h3>
          <ul>
            <li>AI Chatbots & Assistants</li>
            <li>Machine Learning Models</li>
            <li>Data Analysis & Prediction</li>
            <li>Process Automation (RPA)</li>
            <li>Computer Vision Solutions</li>
            <li>NLP & Text Analytics</li>
          </ul>

          <h3>Key Features</h3>
          <ul>
            <li>Custom AI Models</li>
            <li>Real-time Analytics</li>
            <li>Automation Workflows</li>
            <li>Scalable & Secure</li>
            <li>Easy Integration</li>
          </ul>

          <h3>Technologies</h3>
          <ul>
            <li>Python, TensorFlow, OpenAI, PyTorch</li>
            <li>Scikit-learn, LangChain, Pandas</li>
          </ul>

          <Link to="/#contact" className="solution-button">
            View Projects →
          </Link>
        </div>
      </section>

      {/* ERP */}
      <section id="erp" className="solution-section">
        <div className="solution-content">
          <span className="solution-label">ERP</span>

          <h2>
            All Kinds of Business and
            <span> ERP Solutions</span>
          </h2>

          <p>
            Complete ERP systems for businesses, organizations and
            institutions to manage operations, resources, finance,
            employees, inventory and business processes from a single
            platform.
          </p>

          <h3>Modules</h3>
          <ul>
            <li>Dashboard & Analytics</li>
            <li>Student & Employee Management</li>
            <li>Attendance Tracking</li>
            <li>Fees & Payroll</li>
            <li>Inventory & Stock</li>
            <li>Accounts & Finance</li>
            <li>Exam & Reports</li>
            <li>HRM & Communication</li>
          </ul>

          <h3>Key Features</h3>
          <ul>
            <li>Multi-tenant SaaS</li>
            <li>Role Based Access</li>
            <li>Reports & Analytics</li>
            <li>Secure & Scalable</li>
            <li>Mobile Friendly</li>
          </ul>

          <h3>For</h3>
          <ul>
            <li>Businesses, Schools, Colleges</li>
            <li>Institutions, Organizations</li>
          </ul>

          <Link to="/#contact" className="solution-button">
            View Projects →
          </Link>
        </div>
      </section>

      {/* SaaS */}
      <section id="saas" className="solution-section">
        <div className="solution-content">
          <span className="solution-label">SaaS</span>

          <h2>
            Cloud Based
            <span> Business Applications</span>
          </h2>

          <p>
            Scalable SaaS applications delivered on the cloud to help
            your business grow faster.
          </p>

          <h3>What We Build</h3>
          <ul>
            <li>CRM & Client Management</li>
            <li>Project Management Tools</li>
            <li>Subscription & Billing Systems</li>
            <li>Helpdesk & Support Systems</li>
            <li>Booking & Appointment Systems</li>
          </ul>

          <h3>Key Features</h3>
          <ul>
            <li>Cloud Native</li>
            <li>Subscription Management</li>
            <li>Multi-tenant Architecture</li>
            <li>High Availability</li>
            <li>Secure & Reliable</li>
          </ul>

          <h3>Technologies</h3>
          <ul>
            <li>Node.js, React, PostgreSQL, Redis</li>
            <li>Stripe, AWS, Nginx</li>
          </ul>

          <Link to="/#contact" className="solution-button">
            View Projects →
          </Link>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="solutions-bottom-nav">
        <a href="#ai">AI</a>
        <a href="#erp">ERP</a>
        <a href="#saas">SaaS</a>
      </div>

    </section>
  );
};

export default Solutions;