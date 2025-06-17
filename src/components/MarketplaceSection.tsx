
import React from 'react';
import ProductCard from './ProductCard';

const MarketplaceSection = () => {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
      title: "Beautiful Pink Dress for Girls",
      price: "$25",
      condition: "Like New",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400",
      title: "Comfortable Cotton T-Shirt",
      price: "$12",
      condition: "Good",
      location: "Los Angeles, CA"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=400",
      title: "Denim Jeans for Boys",
      price: "$18",
      condition: "New",
      location: "San Diego, CA"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      title: "Winter Jacket - Warm & Cozy",
      price: "$35",
      condition: "Like New",
      location: "Sacramento, CA"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
      title: "Colorful Summer Dress",
      price: "$20",
      condition: "Good",
      location: "Oakland, CA"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=400",
      title: "Sports Shoes - Size 5",
      price: "$22",
      condition: "Fair",
      location: "Fresno, CA"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
      title: "Cute Overalls for Toddlers",
      price: "$28",
      condition: "New",
      location: "Berkeley, CA"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1566479179817-0dbeac64d246?w=400",
      title: "School Backpack - Blue",
      price: "$15",
      condition: "Good",
      location: "San Jose, CA"
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Marketplace</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              condition={product.condition}
              location={product.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
