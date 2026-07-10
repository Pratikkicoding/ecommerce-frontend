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
   <section className="relative aspect-[1920/900] w-full overflow-hidden">
      {/* Background Image */}
<img
  src={slides[currentSlide].image}
  alt=""
  className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700"
/>

      {/* Overlay */}
     <div className="absolute inset-0 bg-black/25 md:bg-black/35" />

      {/* Left Arrow */}
      <button
  onClick={prevSlide}
  className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-2 md:p-3 transition"
>
  <ChevronLeft className="text-white w-5 h-5 md:w-8 md:h-8" />
</button>

<button
  onClick={nextSlide}
  className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-2 md:p-3 transition"
>
  <ChevronRight className="text-white w-5 h-5 md:w-8 md:h-8" />
</button>

      {/* Content */}
     <div className="relative z-10 flex h-full items-center justify-center text-center px-5">

  <div
    key={currentSlide}
    className="max-w-4xl animate-in fade-in duration-700"
  >

    {slides[currentSlide].title && (
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
        {slides[currentSlide].title}
      </h1>
    )}

    {slides[currentSlide].subtitle && (
      <p className="text-sm sm:text-lg md:text-2xl text-white mb-3">
        {slides[currentSlide].subtitle}
      </p>
    )}

    {slides[currentSlide].description && (
      <p className="text-sm md:text-lg text-gray-200">
        {slides[currentSlide].description}
      </p>
    )}

  </div>

</div>

      {/* Dots */}
    <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">

  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={`rounded-full transition-all duration-300 ${
        currentSlide === index
          ? "bg-white w-8 h-2"
          : "bg-white/50 w-2 h-2"
      }`}
    />
  ))}

</div>
    </section>
  );
};

export default Hero;


