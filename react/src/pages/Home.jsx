import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Overview from "../components/Overview";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    gsap.set(navbarRef.current, { opacity: 0 }); // Set initial opacity to 0

    ScrollTrigger.create({
      trigger: "#next-section",
      start: "top center", // When the top of #next-section hits the center of the viewport
      onEnter: () => {
        gsap.to(navbarRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(navbarRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-neutral">
      {/* 1️⃣ Header stays full-screen */}
      <Header />

      {/* 2️⃣ Navbar appears only after Header scrolls out */}
      <div
        ref={navbarRef}
        className="fixed top-0 w-full z-[60] pointer-events-none"
      >
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>

      {/* 3️⃣ This section triggers the Navbar */}
      <div id="next-section" className="h-screen bg-neutral">
        <div className="flex justify-center items-center h-full">
          <Overview />
        </div>
      </div>
    </div>
  );
};

export default Home;
