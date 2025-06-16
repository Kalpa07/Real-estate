import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    gsap.set(navRef.current, { opacity: 0 }); 

    ScrollTrigger.create({
      trigger: "#next-section",
      start: "top center", 
      end: "bottom top", 
      toggleActions: "play none none reverse", 
      onEnter: () => {
        gsap.to(navRef.current, { opacity: 1, duration: 0.8, ease: "power2.out" });
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, { opacity: 0, duration: 0.8, ease: "power2.in" });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="bg-none bg-opacity-50 text-white shadow-md px-6 py-3 fixed w-full z-50 flex justify-between items-center transition-opacity duration-500"
      >
        <div className="hidden gap-6 text-sm font-medium flex-grow justify-center md:flex">
          <a href="#home" className="hover:text-secondary transition">
            Home
          </a>
          <a href="#about" className="hover:text-secondary transition">
            About
          </a>
          <a href="#projects" className="hover:text-secondary transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-secondary transition">
            Contact
          </a>
        </div>

        <div className="text-sm font-bold items-center flex mr-20">
          <img src="/Terranest.png" className="h-8 mr-2" alt="Logo" />
          <img src="/Terranest-green.png" className="h-6" alt="Logo" />
        </div>

        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={toggleMenu}>
            <GiHamburgerMenu className="text-white h-6 w-6" />
          </button>
        </div>
      </nav>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute left-0 w-full bg-primary text-white mt-2 transition-all duration-300 ease-in-out`}
      >
        <a href="#home" className="block py-3 text-center font-semibold hover:text-secondary transition">
          Home
        </a>
        <a href="#about" className="block py-2 text-center font-semibold hover:text-secondary transition">
          About
        </a>
        <a href="#projects" className="block py-2 text-center font-semibold hover:text-secondary transition">
          Projects
        </a>
        <a href="#contact" className="block py-2 text-center font-semibold hover:text-secondary transition">
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
