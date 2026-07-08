import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition">
      <div className="h-80 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">
          {product.name}
        </h3>

        <p className="text-[#A86B00] font-bold mt-2">
          ₹{product.price}
        </p>

        <button className="w-full mt-4 bg-[#A86B00] text-white py-2 rounded-lg hover:opacity-90">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;