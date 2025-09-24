// components/ServiceSections.tsx
import React from 'react';
import { Home, Building2, Factory, ShoppingBag } from 'lucide-react';

const ServiceSections: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Residential</h2>
              <p className="text-gray-600 leading-relaxed">
                Condos and other residential buildings require specific fire protection products. We have the experience and the right equipment.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Home className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Custom Homes</h4>
                  <p className="text-sm text-gray-600">Single-family residences with tailored fire protection</p>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-blue-700">
                <Home size={48} className="mx-auto mb-2" />
                <p className="font-semibold">Residential Projects</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Commercial, Industrial</h2>
              <p className="text-gray-600 leading-relaxed">
                Whatever you need, ProGuard Fire Protection. We work across the building and maintenance lifecycle.
              </p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-orange-700">
                <Factory size={48} className="mx-auto mb-2" />
                <p className="font-semibold">Commercial Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 bg-slate-900 text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">On Call 24 Hours a Day in the Vancouver Area</h3>
          <div className="text-3xl font-bold text-orange-400">(604) 555-0704</div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSections;
