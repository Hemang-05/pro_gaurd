// components/QuoteForm.tsx
'use client'
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', projectType: '', timeline: '', message: ''
  });

  return (
    <section className="py-20 bg-slate-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Get Your Free Quote</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Ready to protect your property? Contact us today for a comprehensive consultation and customized quote.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-orange-400" size={24} />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-2xl font-bold text-orange-400">(604) 555-0704</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-orange-400" size={24} />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-lg">info@proguardfire.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="text-orange-400" size={24} />
                <div>
                  <div className="font-semibold">Address</div>
                  <div>1234 Industrial Way, Vancouver, BC V6H 3Y7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300"
                />
              </div>
              
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300"
              />

              <select className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white">
                <option value="">Project Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="emergency">Emergency Service</option>
              </select>

              <textarea
                placeholder="Project Details"
                rows={4}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300"
              ></textarea>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <Send size={20} />
                <span>Get Your Quote</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
