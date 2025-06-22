import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Aarav Mehta",
    rating: 5,
    text: "TerraNest helped me find my dream home in no time! The listings are genuine and the experience was smooth.",
  },
  {
    name: "Priya Deshmukh",
    rating: 4,
    text: "I loved how easy it was to filter and find exactly what I needed. The team is very responsive and helpful.",
  },
  {
    name: "Rohan Verma",
    rating: 5,
    text: "Beautiful UI and smart property suggestions. It felt like the site just *knew* what I wanted. Highly recommended!",
  },
];

const Reviews = () => {
  const reviewRefs = useRef([]);

  useEffect(() => {
    reviewRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-accent text-gray-900 px-6 py-16 sm:px-10 lg:px-24">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">What Our Clients Say</h2>
        <p className="text-gray-500 text-sm">
          Real experiences from people who found their perfect home with TerraNest.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {reviews.map((review, i) => (
          <div
            key={i}
            ref={(el) => (reviewRefs.current[i] = el)}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <FaQuoteLeft className="text-primary text-xl mb-3" />
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">“{review.text}”</p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm">{review.name}</span>
              <div className="flex gap-1 text-yellow-400 text-sm">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
