// components/Testimonials.tsx
'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "James Wilson",
      role: "Property Manager", 
      company: "Vancouver Residential Corp",
      content: "I really trust ProGuard Fire Protection with my properties. They've been my go-to for years now, and I highly recommend them.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Facilities Director",
      company: "Metro Office Complex", 
      content: "Very professional. Always quick and know what they are doing. I recommend using them for all your needs. I've been a customer for 6 years and no doubt in the future!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Construction Manager",
      company: "Vancouver Developments",
      content: "ProGuard's team handled our large condominium project flawlessly. Their attention to detail and code compliance is exceptional.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by property managers and developers across Vancouver</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <Quote className="text-blue-600 mb-6" size={48} />
            
            <blockquote className="text-xl text-slate-900 leading-relaxed mb-8">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                <div className="text-sm text-gray-500">{testimonials[currentTestimonial].company}</div>
              </div>
              
              <div className="flex space-x-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
