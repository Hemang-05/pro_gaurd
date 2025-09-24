// components/ServicesOverview.tsx
import React from 'react';
import { Home, Building2, Wrench } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Fire Protection",
      description: "Custom homes, condominiums, and multi-unit residential buildings with complete fire sprinkler systems.",
      features: ["New Construction", "Retrofit Installation", "Code Compliance"]
    },
    {
      icon: Building2,
      title: "Commercial Fire Systems",
      description: "Warehouses, offices, retail spaces, and industrial facilities with comprehensive fire protection solutions.",
      features: ["High-Piled Storage", "Specialized Systems", "Industrial Grade"]
    },
    {
      icon: Wrench,
      title: "Emergency & Retrofit Services",
      description: "24/7 emergency repairs, system upgrades, and retrofit installations for existing buildings.",
      features: ["24/7 Emergency", "System Upgrades", "Maintenance"]
    }
  ];

  return (
    <section className="py-12 bg-white/60" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-2 ">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fire protection solutions for residential and commercial properties across Vancouver, BC
          </p>
          {/* <button className="mt-6 bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800">
            Explore Services
          </button> */}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center w-16 h-16 bg-[#e4a716]/10 rounded-xl mb-6">
                  <IconComponent className="text-[#e4a716]" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#e4a716]/30 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 text-[#e4a716] font-lg hover:font-semibold cursor-pointer">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;