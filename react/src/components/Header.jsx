import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const leftGateRef = useRef(null);
  const rightGateRef = useRef(null);
  const headerref = useRef(null);
  const grassref = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial gate transforms
        gsap.set(headerref.current, {
        x: 0,
        scaleX: 1,
        scaleY: 1,
      });
      
         gsap.set(grassref.current, {
        x: 0,
        y:0,
        scaleX: 1,
        scaleY: 1,
      });

      gsap.set(leftGateRef.current, {
        x: 40,
        scaleX: 1.5,
        scaleY: 1.5,
        transformOrigin: "bottom left",
      });

      gsap.set(rightGateRef.current, {
        x: -40,
        scaleX: 1.5,
        scaleY: 1.5,
        transformOrigin: "bottom right",
      });

      // Gates open animation on scroll
      const gateTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gateTL.to(headerref.current, {
        x: 0,
        scaleX: 1.2,
        scaleY: 1.2,
        ease: "none",
      });

      gateTL.to(grassref.current, {
        x: 0,
        y:50,
        scaleX: 1,
        scaleY: 1,
        ease: "none",
        },
        "<"
    );


      gateTL.to(leftGateRef.current, {
        x: 0,
        scaleX: 1.2,
        scaleY: 1.2,
        ease: "none",
        },
        "<"
    );

      gateTL.to(
        rightGateRef.current,
        {
          x: 0,
          scaleX: 1.2,
          scaleY: 1.2,
          ease: "none",
        },
        "<"
      );
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative w-full h-[200vh] overflow-hidden bg-neutral">
      <section className="hero-section relative h-screen w-full">
        {/* Cinematic fixed background */}
        <img
          ref={headerref}
          src="/headerbg.png"
          alt="Background"
          className="top-0 left-0 w-full h-full object-cover z-0"
          style={{ position: "fixed" }}
        />

        {/* Logo */}
        <div className="absolute flex items-center top-4 right-6 z-[25] pointer-events-none">
          <img
            src="/Terranest.png"
            alt="Logo"
            className="w-24 pointer-events-none"
                      style={{ position: "fixed" }}
          />
          <img
            src="/Terranest-brown.png"
            alt="Logo"
            className="h-8 pointer-events-none ml-2"
                      style={{ position: "fixed" }}
          />
        </div>

        {/* Left gate */}
        <img
          ref={leftGateRef}
          src="/gate.png"
          alt="Left Gate"
          className="absolute h-[50vh] bottom-[-3%] left-[-8%] z-10"
                    style={{ position: "fixed" }}
        />

        {/* Right gate */}
        <img
          ref={rightGateRef}
          src="/gate.png"
          alt="Right Gate"
          className="absolute h-[50vh] bottom-[-3%] right-[-8%] z-10"
                    style={{ position: "fixed" }}
        />

        {/* Grass */}
        <img
          ref={grassref}
          src="/grass.png"
          alt="Grass"
          className="absolute bottom-[-1px] left-0 w-full h-auto z-[15]"
                    style={{ position: "fixed" }}
        />
      </section>
    </div>
  );
};

export default Header;
