import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const properties = [
  {
    title: "2BHK Apartment in Andheri East",
    subtitle:
      "Modern interiors | 950 sq.ft | 7th Floor | Gated Society\nNear Metro & Schools",
    description:
      "Spacious, well-lit home with premium finishes. Ideal for families or investment. Ready to move in.",
    price: "₹1.25 Cr",
    image: "/apartment1.png",
  },
  {
    title: "3BHK in Malad West",
    subtitle: "Sea-facing | 1150 sq.ft | 9th Floor | Swimming Pool & Gym",
    description:
      "Elegant interiors with scenic views. Modern amenities and close to shopping centers.",
    price: "₹1.75 Cr",
    image: "/apartment2.png",
  },
];

const Properties = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const imageRef = useRef(null);

  const property = properties[index];

  // Handle the scroll animation
  const scrollImage = () => {
    const image = imageRef.current;
    if (image) {
      gsap.fromTo(
        image,
        {
          x: direction === 1 ? 100 : -100, // Set the initial position
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  };

  useEffect(() => {
    scrollImage(); // Trigger scroll animation whenever the index changes
  }, [index, direction]);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % properties.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  return (
    <div className="relative w-screen h-screen bg-[#2b0a0a] overflow-hidden">
      {/* Apartment Image and View Button */}
      <div className="absolute top-[42%] transform w-screen -translate-y-1/2 z-30 flex flex-col items-center">
        <div className="relative w-1/2 left-[30%]">
          <img
            src="/base.png"
            alt="Base"
            className="w-[663px] h-[250px] object-contain z-0 absolute top-[61%] left-0"
          />

          {/* Scrollable image */}
          <div className="relative flex justify-center items-center">
            <img
              src={property.image}
              ref={imageRef}
              alt="Apartment"
              key={index} // Make sure it re-renders when the index changes
              className="max-w-[90%] md:max-w-[600px] max-h-[560px] mr-36 mb-5 aspect-auto object-contain z-10 transition-all duration-300"
            />
          </div>

          <button
            onClick={prev}
            className="absolute left-[-8%] top-[75%] transform -translate-y-1/2 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow z-40"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-[14%] top-[75%] transform -translate-y-1/2 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow z-40"
          >
            →
          </button>
        </div>
      </div>

      {/* Bottom Cream Section */}
      <div className="absolute bottom-0 w-full h-[35%] bg-[#fff6f2] z-10 flex justify-start items-end px-8 pb-10">
        <div className="text-black w-[75%]">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-1">
            {property.title}
          </h2>
          <p className="text-base text-gray-700 whitespace-pre-line">
            {property.subtitle}
          </p>
          <div className="mt-4">
            <p className="font-semibold text-lg">
              Modern 2BHK Apartment | Prime Location
            </p>
            <p className="text-base mt-1">{property.description}</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold mt-4">{property.price}</p>
          <p className="text-base">Ready to Move</p>
        </div>
        <button className="mt-5 ml-[35px] px-8 py-3 bg-primary text-white font-semibold rounded-2xl hover:bg-secondary">
          View Details
        </button>
      </div>

      {/* Title and Subtitle + Sale Sign */}
      <div className="absolute top-20 left-10 z-30 w-[80%] md:w-[40%]">
        <div className="mb-40">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {property.title}
          </h2>
          <p className="text-base text-white mt-2 whitespace-pre-line leading-snug h-[60px] md:h-[72px] overflow-hidden">
            {property.subtitle}
          </p>
        </div>
        <img
          src="/saleSign.png"
          alt="For Sale"
          className="z-10 w-[100px] md:w-[130px]"
        />
      </div>
    </div>
  );
};

export default Properties;
