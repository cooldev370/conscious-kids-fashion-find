
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">KidsStyle</h1>
        </div>
        <Button 
          className="bg-[#059669] hover:bg-[#047857] text-white px-6 py-2 rounded-lg transition-colors duration-200"
        >
          Create
        </Button>
      </div>
    </header>
  );
};

export default Header;
