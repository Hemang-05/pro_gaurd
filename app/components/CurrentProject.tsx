// components/CurrentProject.tsx
import React from 'react';
import { MapPin, Calendar, Users, Building } from 'lucide-react';

const CurrentProject: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Currently Installing</h2>
          <p className="text-xl text-gray-300">Large-Scale Vancouver Condominium Project</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Building size={64} className="mx-auto mb-4 text-blue-300" />
                <h3 className="text-2xl font-bold">Vancouver Condominium</h3>
                <p className="text-gray-300">Complex Fire Protection System</p>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              In Progress
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Project Highlights</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team is currently managing the complete fire sprinkler installation for a multi-tower condominium complex in downtown Vancouver.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="text-orange-400" size={24} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-sm text-gray-400">Downtown Vancouver, BC</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="text-orange-400" size={24} />
                <div>
                  <div className="font-semibold">Timeline</div>
                  <div className="text-sm text-gray-400">8 Month Project</div>
                </div>
              </div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProject;
