
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  const categories = [
    'Tennis', 'Cart', 'Overall', 'Short', 'Dress', 'Toy', 'Backpack', 'Body'
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Conscious Consumption<br />
          of Children's Fashion
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover sustainable and affordable children's fashion through our marketplace. 
          Buy, sell, and exchange quality clothing while caring for our planet.
        </p>
        
        <div className="mb-12">
          <Input 
            placeholder="Search for children's fashion items..."
            className="w-full max-w-4xl mx-auto h-14 text-lg px-6 rounded-full border-2 border-gray-300 focus:border-[#059669]"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-yellow-400 hover:border-yellow-500 px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-110 transform"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
