// components/ProcessTimeline.tsx
import React from 'react';
import { Clipboard, PenTool, FileCheck, Wrench, Shield } from 'lucide-react';

const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      icon: Clipboard,
      title: "Consultation & Assessment",
      description: "We evaluate your property and discuss your specific fire protection needs and requirements."
    },
    {
      icon: PenTool, // ✅ CHANGED FROM 'Drafting' to 'PenTool'
      title: "Custom System Design", 
      description: "Our engineers create detailed plans that meet all NFPA standards and local fire codes."
    },
    {
      icon: FileCheck,
      title: "Permits & Approvals",
      description: "We handle all permit applications and regulatory approvals for your project."
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Our certified technicians install your fire sprinkler system with precision and care."
    },
    {
      icon: Shield,
      title: "Testing & Certification",
      description: "Complete system testing and official certification to ensure proper operation."
    }
  ];

  return (
    <section className="py-12 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Installation Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final certification, we guide you through every step of your fire protection project
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Timeline Line */}
          {/* <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200"></div> */}
          
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative text-center group">
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-[#e4a716] rounded-full mx-auto mb-6">
                    <IconComponent className="text-[#e4a716]" size={24} />
                  </div>
                  
                  {/* Step Number */}
                  {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white text-sm font-bold rounded-full flex items-center justify-center z-20">
                    {index + 1}
                  </div> */}

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#e4a716] text-white px-8 py-4 rounded-full text-lg font-semibold cursor-pointer">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
