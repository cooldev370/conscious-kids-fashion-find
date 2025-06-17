
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  condition: string;
  location: string;
}

const ProductCard = ({ id, image, title, price, condition, location }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{location}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-[#059669]">{price}</span>
          <span className="text-sm px-2 py-1 bg-gray-100 rounded-full text-gray-600">
            {condition}
          </span>
        </div>
        <Button 
          className="w-full bg-[#059669] hover:bg-[#047857] text-white"
        >
          Connect
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
