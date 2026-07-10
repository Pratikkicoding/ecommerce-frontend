import React from "react";

const About = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#A86B00] mb-12">
          About Us
        </h1>

        <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">

          <p className="text-gray-700 text-lg leading-8 mb-6">
            <strong>DYNIQUE BHARAT</strong> is a clothing brand created for the
            new generation that loves its roots but lives with a futuristic
            mindset. Our designs bring together the charm of old nostalgia, the
            richness of desi culture, and the bold attitude of Gen-Z fashion.
          </p>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            We believe clothing is more than just fabric. It is a way to express
            memories, personality, culture, and confidence. Every piece we
            create is inspired by old-school emotions and reimagined with modern
            silhouettes, premium comfort, streetwear energy, and fresh creative
            details.
          </p>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            Our brand carries a unique thought — to make fashion that feels
            familiar yet new, rooted yet fearless, simple yet statement-making.
            We take inspiration from the past and design it for the future.
          </p>

          <p className="text-gray-700 text-lg leading-8">
            At <strong>DYNIQUE BHARAT</strong>, we are building a style language
            for people who want to wear their identity with pride and express
            themselves with confidence.
          </p>

          {/* Brand Tagline */}
          <div className="mt-12 text-center border-t pt-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-widest text-[#A86B00]">
              FUTURE SPEAKS DESI
            </h2>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;