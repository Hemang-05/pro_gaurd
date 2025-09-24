// components/ServiceAreas.tsx
"use client";
import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const ServiceAreas: React.FC = () => {
  const serviceAreas = [
    "Vancouver", "Burnaby", "Richmond", "Surrey", "Coquitlam", 
    "North Vancouver", "West Vancouver", "Delta", "Langley", "White Rock"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Service Areas List */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">We Serve Your Area</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                ProGuard Fire Protection provides comprehensive fire sprinkler services throughout the Greater Vancouver area and surrounding communities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-2 text-slate-900">
                  <MapPin className="text-[#e4a716]" size={16} />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-3 text-[#e4a716]">
              <Clock size={24} />
              <span className="text-lg font-semibold">Service Radius: 50km from Vancouver</span>
            </div>
          </div>

          {/* Right Side - Interactive Google Map */}
          <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629693.2322586264!2d-123.6273904!3d49.2827291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ProGuard Service Area - Greater Vancouver"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
