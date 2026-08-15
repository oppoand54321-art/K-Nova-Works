import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS Configuration
    const serviceID = 'service_ddh7uvi';
    const templateID = 'template_qr88exn';
    const publicKey = 'M9NGNZCbcHLl1qj9O'; // یہاں اپنی Public Key لکھیں (جو EmailJS کی پروفائل/اکاؤنٹ سے ملے گی)

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .してから(() => {
        setLoading(false);
        alert('Message sent successfully!');
        formRef.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        console.error('FAILED...', error.text);
        alert('Failed to send message, please try again.');
      });
  };

  return (
    <section id="contact" className="py-28 bg-[#080808] text-white border-t border-[#1f1f1f]">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-[#d4d96b] font-semibold uppercase tracking-widest text-sm bg-[#111111] border border-[#222222] px-4 py-2 rounded-full inline-block mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold">Start Your Project With Us</h2>
          <p className="text-gray-400 mt-4">Have an ERP, SaaS, or custom software requirement? Let's discuss today.</p>
        </div>

        <div className="card p-8 md:p-12">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="Kamran" 
                  className="w-full bg-[#080808] border border-[#222222] rounded-xl px-4 py-3 text-white focus:border-[#d4d96b] outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="info@knova.work" 
                  className="w-full bg-[#080808] border border-[#222222] rounded-xl px-4 py-3 text-white focus:border-[#d4d96b] outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Project Details / Requirements</label>
              <textarea 
                name="message" 
                rows="4" 
                required 
                placeholder="Tell us about your ERP, custom software, or DevOps needs..." 
                className="w-full bg-[#080808] border border-[#222222] rounded-xl px-4 py-3 text-white focus:border-[#d4d96b] outline-none transition resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#d4d96b] hover:bg-[#c2c75d] text-black font-semibold py-4 rounded-xl transition shadow-lg shadow-[#d4d96b]/10 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;