import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* ================= TOP BAR ================= */}

      <div className="bg-black text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <span>🚚 Free Shipping on Orders Above ₹999</span>

          {/*<span className="hidden sm:block">
            📞 +91 9631091472
          </span>*/}
        </div>
      </div>

      {/* ================= HEADER ================= */}

      <header className="sticky top-0 z-50 bg-white shadow">

        <div className="w-full pl-2 pr-4 lg:pl-4 lg:pr-8">

          <div className="flex justify-between items-center h-16 lg:h-20">

            {/* ================= LOGO ================= */}

            <a
  href="/"
  className="flex items-center gap-2 md:gap-3 shrink-0"
>
  <img
    src="/logo.png"
    alt="Dynique Bharat"
    className="w-16 h-16 sm:w-12 sm:h-12 lg:w-18 lg:h-18 object-contain"
  />

  <div className="leading-tight">
    <h1 className="font-bold text-base sm:text-xl lg:text-3xl text-[#A86B00]">
      Dynique Bharat
    </h1>

    <p className="hidden md:block text-[10px] lg:text-xs uppercase tracking-[0.2em] text-gray-500">
      Premium Collection
    </p>
  </div>
</a>
            {/* ================= DESKTOP MENU ================= */}

            <nav className="hidden lg:flex items-center gap-8 font-medium">

              <a
                href="/"
                className="hover:text-[#A86B00]"
              >
                Home
              </a>

              {/* MEN */}

              <div className="relative group">

                <button className="flex items-center gap-1 hover:text-[#A86B00]">

                  Men

                  <ChevronDown size={16} />

                </button>

                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-lg w-56 p-4">

                  <ul className="space-y-3">

                    <li><a href="#">T-Shirts</a></li>

                    <li><a href="#">Shirts</a></li>

                    <li><a href="#">Jeans</a></li>

                    <li><a href="#">Trousers</a></li>

                    <li><a href="#">Hoodies</a></li>

                    <li><a href="#">Jackets</a></li>

                  </ul>

                </div>

              </div>

              {/* WOMEN */}

              <div className="relative group">

                <button className="flex items-center gap-1 hover:text-[#A86B00]">

                  Women

                  <ChevronDown size={16} />

                </button>

                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-lg w-56 p-4">

                  <ul className="space-y-3">

                    <li><a href="#">Saree</a></li>

                    <li><a href="#">Kurti</a></li>

                    <li><a href="#">Tops</a></li>

                    <li><a href="#">Jeans</a></li>

                    <li><a href="#">Night Wear</a></li>

                    <li><a href="#">Gowns</a></li>

                  </ul>

                </div>

              </div>

              {/* KIDS */}

              <div className="relative group">

                <button className="flex items-center gap-1 hover:text-[#A86B00]">

                  Kids

                  <ChevronDown size={16} />

                </button>

                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-lg w-56 p-4">

                  <ul className="space-y-3">

                    <li><a href="#">Boys</a></li>

                    <li><a href="#">Girls</a></li>

                    <li><a href="#">Baby Clothing</a></li>

                    <li><a href="#">Party Wear</a></li>

                    <li><a href="#">Winter Wear</a></li>

                  </ul>

                </div>

              </div>

              <a
                href="#"
                className="hover:text-[#A86B00]"
              >
                New Arrivals
              </a>

            </nav>

            {/* ================= SEARCH ================= */}

            <div className="hidden lg:flex flex-1 max-w-md ml-8">

              <div className="flex w-full border rounded-full overflow-hidden">

                <input
                  type="text"
                  placeholder="Search Products..."
                  className="flex-1 px-4 py-3 outline-none"
                />

                <button className="bg-[#A86B00] px-5 text-white">

                  <Search size={20} />

                </button>

              </div>

            </div>

            {/* ================= HAMBURGER ================= */}

            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden"
            >
              <Menu size={30} />
            </button>

          </div>

        </div>

      </header>
            {/* ================= MOBILE MENU ================= */}

      {mobileMenu && (
        <>
          {/* Overlay */}

          <div
            onClick={() => setMobileMenu(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          ></div>

          {/* Sidebar */}

          <div className="fixed top-0 left-0 w-72 h-screen bg-white z-50 shadow-xl overflow-y-auto lg:hidden transition-all duration-300">

            {/* Header */}

            <div className="flex items-center justify-between px-5 py-4 border-b">

              <div>

                <h2 className="text-xl font-bold text-[#A86B00]">
                  Dynique Bharat
                </h2>

                <p className="text-xs text-gray-500">
                  Premium Collection
                </p>

              </div>

              <button
                onClick={() => setMobileMenu(false)}
              >
                <X size={28} />
              </button>

            </div>

            {/* Search */}

            <div className="p-4">

              <div className="flex border rounded-full overflow-hidden">

                <input
                  type="text"
                  placeholder="Search Products..."
                  className="flex-1 px-4 py-3 outline-none"
                />

                <button className="bg-[#A86B00] text-white px-5">

                  <Search size={20} />

                </button>

              </div>

            </div>

            {/* Navigation */}

            <nav className="flex flex-col pb-10">

              <a
                href="/"
                className="px-5 py-4 border-b hover:bg-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                Home
              </a>

              {/* MEN */}

              <details className="border-b">

                <summary className="px-5 py-4 cursor-pointer font-medium">
                  Men
                </summary>

                <div className="flex flex-col pl-10 pb-3 gap-3 text-gray-600">

                  <a href="#">T-Shirts</a>

                  <a href="#">Shirts</a>

                  <a href="#">Jeans</a>

                  <a href="#">Trousers</a>

                  <a href="#">Hoodies</a>

                  <a href="#">Jackets</a>

                </div>

              </details>

              {/* WOMEN */}

              <details className="border-b">

                <summary className="px-5 py-4 cursor-pointer font-medium">
                  Women
                </summary>

                <div className="flex flex-col pl-10 pb-3 gap-3 text-gray-600">

                  <a href="#">Saree</a>

                  <a href="#">Kurti</a>

                  <a href="#">Tops</a>

                  <a href="#">Jeans</a>

                  <a href="#">Night Wear</a>

                  <a href="#">Gowns</a>

                </div>

              </details>

              {/* KIDS */}

              <details className="border-b">

                <summary className="px-5 py-4 cursor-pointer font-medium">
                  Kids
                </summary>

                <div className="flex flex-col pl-10 pb-3 gap-3 text-gray-600">

                  <a href="#">Boys</a>

                  <a href="#">Girls</a>

                  <a href="#">Baby Clothing</a>

                  <a href="#">Party Wear</a>

                  <a href="#">Winter Wear</a>

                </div>

              </details>

              <a
                href="#"
                className="px-5 py-4 border-b hover:bg-gray-100"
              >
                New Arrivals
              </a>

            </nav>

          </div>
        </>
      )}
            {/* ================= CATEGORY BAR ================= */}

      <div className="border-y bg-gray-50">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-6 lg:gap-10 overflow-x-auto whitespace-nowrap px-4 py-3 text-sm font-medium scrollbar-hide">

            <a
              href="#"
              className="hover:text-[#A86B00] transition"
            >
              🔥 Trending
            </a>

            <a
              href="#"
              className="hover:text-[#A86B00] transition"
            >
              👕 Clothing
            </a>

            <a
              href="#"
              className="hover:text-[#A86B00] transition"
            >
              👨 Men
            </a>

            <a
              href="#"
              className="hover:text-[#A86B00] transition"
            >
              👩 Women
            </a>

            <a
              href="#"
              className="hover:text-[#A86B00] transition"
            >
              🧒 Kids
            </a>

            <a
              href="#"
              className="hover:text-[#A86B00] transition"
            >
              🎁 Offers
            </a>

            <a
              href="#"
              className="hover:text-[#A86B00] transition"
            >
              ⭐ Best Sellers
            </a>

          </div>

        </div>

      </div>

    </>
  );
};

export default Navbar;