
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, FileText, Handshake, Heart } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      title: 'Search',
      icon: Search,
      description: 'Browse through thousands of quality children\'s clothing items from trusted sellers in your area.'
    },
    {
      title: 'Contract',
      icon: FileText,
      description: 'Connect with sellers and review item details, condition, and pricing before making a decision.'
    },
    {
      title: 'Negotiate',
      icon: Handshake,
      description: 'Discuss terms, arrange pickup or delivery, and ensure both parties are satisfied with the deal.'
    },
    {
      title: 'Enjoy',
      icon: Heart,
      description: 'Your child gets new clothes, you save money, and together we help protect the environment.'
    }
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          How it Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <Button
                variant="outline"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-yellow-400 hover:border-yellow-500 w-20 h-20 rounded-full mb-6 transition-all duration-200 hover:scale-110 transform"
              >
                <step.icon size={32} />
              </Button>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
