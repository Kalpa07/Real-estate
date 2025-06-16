import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: "Sustainable Living",
    description: "Eco-friendly homes that reduce your carbon footprint.",
    image: "/reason1.png", 
  },
  {
    title: "Modern Architecture",
    description: "Smart, sleek designs for a luxurious lifestyle.",
    image: "/headerbg.png",
  },
  {
    title: "Community First",
    description: "Thriving communities with shared spaces and joy.",
    image: "/headerbg.png",
  },
];

const WhyUs = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRefs.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRefs.current[0]?.parentNode,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-screen flex bg-neutral">
      {reasons.map((reason, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="w-1/3 h-screen relative group overflow-hidden bg-cover bg-center bg-no-repeat transition-opacity duration-500"
          style={{
            backgroundImage: `url(${reason.image})`,
            backgroundColor: 'lightgray',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>

          <div className="absolute inset-0 group-hover:bg-opacity-70 transition-all duration-500 z-20 flex items-center justify-center">
            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs text-center px-4">
              <h2 className="text-2xl font-bold mb-2">{reason.title}</h2>
              <p className="text-md">{reason.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
