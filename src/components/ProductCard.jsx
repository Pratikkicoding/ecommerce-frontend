import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
      
      <div className="aspect-[4/5] bg-white flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-center">
          {product.name}
        </h3>

        {/* <p className="text-[#A86B00] font-bold mt-2 text-center">
          ₹{product.price}
        </p> */}

        {/* <button className="w-full mt-4 bg-[#A86B00] text-white py-2 rounded-lg hover:bg-black transition-colors duration-300">
          Shop Now
        </button> */}
      </div>

    </div>
  );
};

export default ProductCard;