import React, { useEffect, useRef } from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
        },
      }
    );

    sectionRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
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
    <footer
      ref={footerRef}
      className="bg-primary text-accent px-6 py-14 sm:px-10 lg:px-24 rounded-t-3xl shadow-inner"
    >
      <div className="grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div ref={(el) => (sectionRefs.current[0] = el)}>
          <h2 className="text-3xl font-bold mb-3 ">TerraNest</h2>
          <p className="text-sm leading-relaxed">
            Discover your perfect space with TerraNest. Modern architecture, prime locations, and unmatched lifestyle — curated just for you.
          </p>
        </div>

        {/* Links */}
        <div ref={(el) => (sectionRefs.current[1] = el)}>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2  text-sm">
            <li><a href="/" className="hover:text-secondary transition-all">Home</a></li>
            <li><a href="/properties" className="hover:text-secondary transition-all">Properties</a></li>
            <li><a href="/about" className="hover:text-secondary transition-all">About Us</a></li>
            <li><a href="/contact" className="hover:text-secondary transition-all">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div ref={(el) => (sectionRefs.current[2] = el)}>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300 mb-2">Mumbai, India</p>
          <p className="text-sm text-gray-300 flex items-center gap-2">
            <FaEnvelope /> support@terranest.in
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-5 text-xl">
            <a
              href="#"
              className="hover:text-secondary transform hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-secondary transform hover:scale-110 transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-secondary transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-accent text-center">
        © {new Date().getFullYear()} TerraNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
