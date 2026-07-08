import React from "react";

const categories = [
 
  "Fashion",
  
];

const Categories = () => {
  return (
    <section className="bg-white border-y">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-8 py-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

          {categories.map((item) => (
            <button
              key={item}
              className="font-medium text-gray-700 hover:text-[#A86B00] transition"
            >
              {item}
            </button>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Categories;