// components/EmergencyServices.tsx
import React from 'react';
import { Phone, Clock, AlertTriangle } from 'lucide-react';

const EmergencyServices: React.FC = () => {
  return (
<section 
  className="py-12 text-white"
  style={{
    background: 'linear-gradient(to bottom, white 10%, rgba(208, 27, 33, 0.8) 22%, #d01b21 25%)'
  }}  
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <AlertTriangle size={48} className="text-yellow-300" />
              <h2 className="text-4xl font-bold">24/7 Emergency Services</h2>
            </div>
            
            <p className="text-xl leading-relaxed">
              Fire protection emergencies don't wait for business hours. Our emergency response team is available around the clock to address system failures, repairs, and urgent installations.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Clock className="text-yellow-300" size={24} />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-yellow-300" size={24} />
                <span>Rapid Response</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
              <div className="text-4xl font-bold text-yellow-300 mb-2">(604) 555-0704</div>
              <p className="text-lg">Don't Wait - Call Now</p>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-red-900 px-8 py-3 rounded-full font-bold mt-6 transition-colors">
                Call Emergency Line
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyServices;
