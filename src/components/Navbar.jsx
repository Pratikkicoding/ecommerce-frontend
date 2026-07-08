import React from "react";
import {
  ShoppingCart,
  User,
  Search,
  Heart,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between">
          <span>🚚 Free Shipping on Orders Above ₹999</span>
          <span>📞 +91 9631091472</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-full px-2">
          <div className="flex items-center justify-between h-20 gap-6">

            {/* Logo */}
           {/* Logo */}
<div className="flex items-center gap-4 cursor-pointer shrink-0">
  <img
    src="/logo.png"
    alt="Dynique Bharat"
    className="h-16 w-16 lg:h-28 lg:w-28 object-contain"
  />

  <div>
    <h1 className="text-2xl lg:text-3xl font-bold text-[#A86B00]">
      Dynique Bharat
    </h1>

    <p className="text-xs text-gray-500 tracking-widest uppercase">
      Premium Collection
    </p>
  </div>
</div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8 font-medium whitespace-nowrap">
              <a href="/" className="hover:text-[#A86B00] transition">
                Home
              </a>

              {/*<div className="flex items-center gap-1 cursor-pointer hover:text-[#A86B00]">
                Categories
                <ChevronDown size={16} />
              </div>*/}

             {/*<a href="#" className="hover:text-[#A86B00] transition">
                Men
              </a>*/}

<div className="relative group">
  <a href="#" className="hover:text-[#A86B00] transition">
    Men
  </a>

  <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 w-52 z-50">
    <ul className="space-y-2">
      <li><a href="#">T-Shirts</a></li>
      <li><a href="#">Shirts</a></li>
      <li><a href="#">Jeans</a></li>
      <li><a href="#">Trousers</a></li>
      <li><a href="#">Hoodies</a></li>
      <li><a href="#">Jackets</a></li>
    </ul>
  </div>
</div>




             {/*} <a href="#" className="hover:text-[#A86B00] transition">
                Women
              </a>*/}

<div className="relative group">
  <a href="#" className="hover:text-[#A86B00] transition">
    Women
  </a>

  <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 w-52 z-50">
    <ul className="space-y-2">
      <li><a href="#">Saree</a></li>
      <li><a href="#">Kurti</a></li>
      <li><a href="#">Tops</a></li>
      <li><a href="#">Jeans</a></li>
      <li><a href="#">Gowns</a></li>
      <li><a href="#">Nightwear</a></li>
    </ul>
  </div>
</div>






             

            {/*  <a href="#" className="hover:text-[#A86B00] transition">
                Kids
              </a>*/}


<div className="relative group">
  <a href="#" className="hover:text-[#A86B00] transition">
    Kids
  </a>

  <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 w-52 z-50">
    <ul className="space-y-2">
      <li><a href="#">Boys T-Shirts</a></li>
      <li><a href="#">Girls Dresses</a></li>
      <li><a href="#">Baby Clothing</a></li>
      <li><a href="#">Party Wear</a></li>
      <li><a href="#">Winter Wear</a></li>
    </ul>
  </div>
</div>







              <a href="#" className="hover:text-[#A86B00] transition">
                New Arrivals
              </a>
            </nav>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-md">
              <div className="flex items-center w-full border border-gray-300 rounded-full overflow-hidden">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-3 outline-none"
                />

                <button className="bg-[#A86B00] text-white px-5 py-3">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-5">

            {/* <Heart
                size={22}
                className="cursor-pointer hover:text-red-500 transition"
              />

             {/* <div className="flex items-center gap-2 cursor-pointer hover:text-[#A86B00]">
                <User size={22} />
                <span className="hidden xl:block text-sm">
                  Account
                </span>
              </div>*/}

             {/* <div className="relative flex items-center gap-2 cursor-pointer hover:text-[#A86B00]">
                <ShoppingCart size={24} />

                <span className="absolute -top-2 left-4 bg-[#A86B00] text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                  2
                </span>

               <span className="hidden xl:block text-sm">
                  Cart
                </span>
              </div>*/}

            </div>

          </div>
        </div>
      </header>

      {/* Category Bar */}
      <div className="border-t border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-10 py-3 text-sm font-medium overflow-x-auto">

            <a href="#" className="hover:text-[#A86B00]">
              🔥 Trending
            </a>

            <a href="#" className="hover:text-[#A86B00]">
              👕 Clothing
            </a>

            <a href="#" className="hover:text-[#A86B00]">
              🧒 Kids
            </a>

           
           
            <a href="#" className="hover:text-[#A86B00]">
              🎁 Offers
            </a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;