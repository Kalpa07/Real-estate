import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Overview from "../components/Overview";
import WhyUs from "../components/WhyUs";
import Navbar from "../components/Navbar";
import Properties from "../components/Properties";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    gsap.set(navbarRef.current, { opacity: 0 }); 

    ScrollTrigger.create({
      trigger: "#next-section",
      start: "top center",
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
          duration: 0.5,
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
      <Header />

      <div
        ref={navbarRef}
        className="fixed top-0 w-full z-[60] pointer-events-none"
      >
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>

      <div id="next-section" className="h-full bg-neutral">
        <div className="flex justify-center items-center h-screen">
          <Overview />
        </div>
        <div className="flex justify-center items-center h-screen">
          <WhyUs />
        </div>
          <div className="flex justify-center items-center h-screen">
          <Properties />
        </div>
          <div className="flex justify-center items-center h-screen">
          <Reviews />
        </div>
          <div className="flex justify-center items-center h-screen">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
