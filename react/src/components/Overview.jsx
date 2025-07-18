import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Overview = () => {
  const polaroidRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".floating-icon",
      { rotate: -25 },
      {
        rotate: 25,
        scrollTrigger: {
          trigger: "#next-section",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      polaroidRef.current,
      { rotate: 15 },
      {
        rotate: -15,
        scrollTrigger: {
          trigger: "#next-section",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="h-auto min-h-screen w-full bg-neutral flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-10 relative gap-10 md:gap-20">
      {/* Floating icons */}
      <img
        src="/small1.png"
        alt="icon1"
        className="floating-icon h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 absolute top-[8%] left-[10%]"
      />
      <img
        src="/small2.png"
        alt="icon2"
        className="floating-icon h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 absolute top-[40%] right-[10%]"
      />
      <img
        src="/small3.png"
        alt="icon3"
        className="floating-icon h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 absolute bottom-[10%] left-1/2 transform -translate-x-1/2"
      />
      <img
        src="/small4.png"
        alt="icon4"
        className="floating-icon h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 absolute bottom-[40%] left-[6%]"
      />

      {/* Polaroid Card */}
      <div
        ref={polaroidRef}
        className="relative h-auto w-72 sm:w-80 p-5 bg-accent shadow-lg rounded-lg"
      >
        <img
          src="poloroid.png"
          alt="Polaroid"
          className="h-52 sm:h-60 w-full object-cover rounded-md"
        />
        <h2 className="text-center font-poppins font-semibold text-base sm:text-lg mt-4">
          <span className="text-xl font-bold">.</span> A Nest Built On Purpose{" "}
          <span className="text-xl font-bold">.</span>
        </h2>
        <p className="text-center font-roboto text-sm mt-2 leading-snug">
          At Terranest, we don’t just sell properties.
          We help you find spaces that reflect comfort, belonging, and value.
        </p>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-80 text-accent">
        <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-left">
          Homes Designed for Living
        </h2>
        <p className="font-roboto text-base sm:text-lg text-left mt-4 leading-relaxed">
          From city apartments to peaceful retreats, our listings are curated
          to help you invest in the right space — for today, and for your future.
        </p>
      </div>
    </div>
  );
};

export default Overview;
