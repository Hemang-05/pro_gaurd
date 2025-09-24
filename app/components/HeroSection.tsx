// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { Shield, CheckCircle, Clock } from 'lucide-react';


const HeroSection: React.FC = () => {
  return (
      
    <section className="relative min-h-screen bg-white ">
      {/* Background overlay */}
      
      <div className=" pl-6 pt-6">
      <Image 
              src="/logo.png"
              alt="ProGuard Mechanical Logo"
              width={150}
              height={150}
              className=""
              priority
            />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Left Content */}
          <div className="text-white space-y-4">
            <div className="space-y-4 border-black">
              <h1 className="text-5xl text-black lg:text-6xl font-bold ">
                Building Life 
                <span className="text-[#e4a716] block">Safety Systems</span>
                Made Simple
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Knowledgeable technicians and straightforward services, that's us. We make keeping your occupants and property safe from fire as simple as possible.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#e4a716] hover:bg-[#e4a716]/90 text-white  px-8 py-4 cursor-pointer rounded-full text-lg font-semibold">
                Get A Quote
              </button>
              {/* <button className="border-2 border-white text-gray-400 hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold">
                Learn More →
              </button> */}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-2">
              <div className="flex items-center space-x-3">
                <Shield className="text-[#e4a716]" size={24} />
                <span className="text-sm text-gray-600">NFPA Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#e4a716]" size={24} />
                <span className="text-sm text-gray-600">Code Compliant</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-[#e4a716]" size={24} />
                <span className="text-sm text-gray-600">24/7 Emergency</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Image Area */}
          <div className="relative">
            <div className="bg-white backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            <Image 
              src="/hero.png"
              alt="ProGuard Mechanical Logo"
              width={500}
              height={500}
              className="object-contain rounded-xl"
              priority
            />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-white/40 backdrop-blur-lg border border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="text-sm text-gray-600">Code Compliant</div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;