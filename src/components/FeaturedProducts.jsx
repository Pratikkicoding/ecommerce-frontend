import React from "react";
import ProductCard from "./ProductCard";
import tshirt from "../assets/tshirt.webp";
import tshirt1 from "../assets/tshirt1.webp";
import tshirt2 from "../assets/tshirt2.webp";
import tshirt3 from "../assets/tshirt3.webp";
import tshirt4 from "../assets/tshirt4.webp";
import tshirt5 from "../assets/tshirt5.webp";
import tshirt6 from "../assets/tshirt6.webp";
import tshirt7 from "../assets/tshirt7.webp";
import tshirt8 from "../assets/tshirt8.webp";
import tshirt9 from "../assets/tshirt9.webp";
const products = [
  {
    id: 1,
    name: "DADI'S SWAG",
    
    image: tshirt,
  },
  {
    id: 2,
    name: "IRONMAN",
    
    image: tshirt1,
  },

  {
    id: 3,
    name: "PARLE-G",
    
    image: tshirt2,
  },

  {
    id: 4,
    name: "FUTURISTIC",
    
    image: tshirt3,
  },

  {
    id: 5,
    name: "MOHALLA AUNTY",
    
    image: tshirt4,
  },
  

  {
    id: 6,
    name: "RANGBAJI",
    
    image: tshirt5,
  },


  
  {
    id: 7,
    name: "RAGINI",
    
    image: tshirt6,
  },


  {
    id: 8,
    name: "TRINETRA",
    
    image: tshirt7,
  },


  {
    id: 9,
    name: "BABY-BABY",
    
    image: tshirt8,
  },



  {
    id: 10,
    name: "DYNQ",
    
    image: tshirt9,
  },

];

const FeaturedProducts = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
       <h2 className="text-3xl font-bold mb-2 text-center">
  Featured Collections
</h2>

<p className="text-center text-gray-500 mb-10">
  Desi. Modern. Unstoppable.
</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;