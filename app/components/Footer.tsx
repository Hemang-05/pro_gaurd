// components/Footer.tsx
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              PROGUARD
              <span className="text-orange-500 font-bold">PRO</span>
                <span className="text-white font-bold">GUARD</span>
                <div className="text-sm font-normal text-gray-400 mt-1">MECHANICAL</div>
                <div className="text-xs text-gray-500">Precision • Protection • Performance</div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional fire sprinkler installation and maintenance services across Greater Vancouver.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2 text-gray-400">
              <div>Residential Fire Sprinklers</div>
              <div>Commercial Fire Systems</div>
              <div>Emergency Repairs</div>
              <div>System Maintenance</div>
              <div>Code Compliance</div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Service Areas</h3>
            <div className="space-y-2 text-gray-400">
              <div>Vancouver</div>
              <div>Burnaby</div>
              <div>Richmond</div>
              <div>Surrey</div>
              <div>+ Greater Vancouver Area</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} />
                <span>(604) 555-0704</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} />
                <span>info@proguardfire.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} />
                <span>Vancouver, BC</span>
              </div>
              <div className="flex items-center space-x-3 text-orange-400">
                <Clock size={16} />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ProGuard Fire Protection. All rights reserved. | Licensed & Insured | NFPA Certified</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
