
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FilterSection from '@/components/FilterSection';
import MarketplaceSection from '@/components/MarketplaceSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <FilterSection />
      <MarketplaceSection />
      <Footer />
    </div>
  );
};

export default Index;
