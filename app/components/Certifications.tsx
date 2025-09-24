// components/Certifications.tsx
import React from 'react';
import { Award, Shield, CheckCircle, FileText } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    { name: "NFPA Certified", icon: Shield },
    { name: "CASA Member", icon: Award },
    { name: "Licensed Contractors", icon: FileText },
    { name: "Insured & Bonded", icon: CheckCircle }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Certifications & Compliance</h2>
          <p className="text-lg text-gray-600">Fully licensed, certified, and code-compliant installations</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#e4a716]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-[#e4a716]" size={32} />
                </div>
                <h3 className="font-semibold text-slate-900">{cert.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
