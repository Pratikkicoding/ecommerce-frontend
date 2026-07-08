import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
const slides = [
  {
    image: image1,
    //title: "Desi. Modern. Unstoppable.",
    //subtitle: "The Future Speaks देसी. The Fit Speaks Dynique.",
    //description: "One Bharat. Many Stories.",
  },
  {
    image: image2,
    //title: "Fashion That Speaks For You",
    //subtitle: "Premium Styles For Every Occasion.",
    //description: "Look Better. Feel Better.",
  },
  {
    image: image3,
    //title: "New Collection 2026",
    //subtitle: "Trendy • Comfortable • Affordable",
    //description: "Upgrade Your Wardrobe Today.",
  },
  {
    image: image4,
    //title: "Premium Collection",
    //subtitle: "Discover Your New Style",
    //description: "Made For Every Occasion.",
  },
];
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="relative h-[700px] overflow-hidden">
      {/* Background Image */}
    <img
  src={slides[currentSlide].image}
  alt=""
  className="absolute inset-0 w-full h-full object-contain bg-white transition-all duration-1000"
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition"
      >
        <ChevronLeft size={30} className="text-white" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition"
      >
        <ChevronRight size={30} className="text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
       <div
  key={currentSlide}
  className="animate-in fade-in duration-700 slide-in-from-bottom-5"
>
  <h1 className="text-4xl md:text-7xl font-bold mb-6">
    {slides[currentSlide].title}
  </h1>

  <p className="text-lg md:text-2xl mb-4 max-w-3xl">
    {slides[currentSlide].subtitle}
  </p>

  <p className="text-base md:text-lg text-gray-200 mb-8">
    {slides[currentSlide].description}
  </p>

 {/* <button className="bg-[#A86B00] hover:bg-[#8b5900] px-8 py-3 rounded-lg font-semibold transition hover:scale-105">
    Shop Now
  </button>*/}
</div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-125"
                : "bg-white/50"
            }`}
          />
          
        ))}
      </div>
    </section>
  );
};

export default Hero;


