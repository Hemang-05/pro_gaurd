// app/page.tsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import WhyChooseUs from './components/WhyChooseUs';
import CurrentProject from './components/CurrentProject';
import ServiceSections from './components/ServiceSections';
import ProcessTimeline from './components/ProcessTimeline';
import Certifications from './components/Certifications';
import EmergencyServices from './components/EmergencyServices';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar/>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      {/* <CurrentProject /> */}
      {/* <ServiceSections /> */}
      <ProcessTimeline />
      <Certifications />
      <EmergencyServices />
      {/* <Testimonials /> */}
      <ServiceAreas />
      <QuoteForm />
      <Footer />
    </main>
  );
}
