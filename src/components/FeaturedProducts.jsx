import React from "react";
import ProductCard from "./ProductCard";

const products = [
 
  {
    id: 1,
    name: "Kids Traditional Wear",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1771340590455-a0597478e091?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8S2lkcyUyMFRyYWRpdGlvbmFsJTIwV2VhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Mens T-Shirt",
    price: 1,
    image:
      "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Women's Designer Suit",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1610312713011-25e74e59cfca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFdvbWVuJ3MlMjBEZXNpZ25lciUyMFN1aXR8ZW58MHx8MHx8fDA%3D",
  },


  {
    id: 4,
    name: "Women's Designer Suit",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },



 {
    id: 5,
    name: "Kids Wear",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1604303768345-038b79a8c47a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    name: "Men's Cotton T-Shirt",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Women's Designer Suit",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1610312713011-25e74e59cfca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFdvbWVuJ3MlMjBEZXNpZ25lciUyMFN1aXR8ZW58MHx8MHx8fDA%3D",
  },


  {
    id: 8,
    name: "Women's Designer Suit",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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