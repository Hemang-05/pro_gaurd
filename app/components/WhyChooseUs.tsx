// components/WhyChooseUs.tsx
import React from 'react';
import { CheckCircle, Users, Shield, Wrench } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const stats = [
    { number: "1000+", label: "Inspections Performed Per Year", icon: CheckCircle },
    { number: "400+", label: "Satisfied Customers", icon: Users },
    { number: "200+", label: "Systems Installed", icon: Shield }
  ];

  const values = [
    {
      title: "Knowledgeable",
      description: "Our team brings years of experience and stays current with the latest fire protection technologies and codes."
    },
    {
      title: "Dependable", 
      description: "We complete projects on time and stand behind our work with comprehensive warranties and ongoing support."
    },
    {
      title: "Professional",
      description: "From initial consultation to final inspection, we maintain the highest standards of workmanship and customer service."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Vancouver's Dependable Fire Protection Equipment Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                No matter what your building type, you'll get the same great service from our team. We specialize in both residential and commercial fire sprinkler installations.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-[#e4a716]/10  rounded-lg">
                <div className="bg-[#e4a716] text-white p-2 rounded-lg">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Inspection</h4>
                  <p className="text-sm text-gray-600">Comprehensive system inspections</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#e4a716]/10 rounded-lg">
                <div className="bg-[#e4a716] text-white p-2 rounded-lg">
                  <Wrench size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Installation</h4>
                  <p className="text-sm text-gray-600">Professional system installation</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#e4a716]/10 rounded-lg">
                <div className="bg-[#e4a716] text-white p-2 rounded-lg">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Service</h4>
                  <p className="text-sm text-gray-600">Ongoing maintenance and support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Stats and Values */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <IconComponent className="text-[#e4a716]" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Values Section */}
            <div className="bg-white border border-[#e4a716]/70 text-white rounded-2xl p-4">
              <h3 className="text-2xl text-gray-900 font-bold mb-6">Our Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-gray-700 font-semibold">{value.title}</h4>
                      <div className="w-8 h-4 bg-white rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-500">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;