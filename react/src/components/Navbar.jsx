import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-primary text-white shadow-md px-6 py-3 fixed w-full z-50 flex justify-between items-center">
        <div className="hidden gap-6 text-sm font-medium flex-grow justify-center  md:flex">
          <a href="#home" className="hover:text-secondary transition">Home</a>
          <a href="#about" className="hover:text-secondary transition">About</a>
          <a href="#projects" className="hover:text-secondary transition">Projects</a>
          <a href="#contact" className="hover:text-secondary transition">Contact</a>
        </div>

        <div className="text-sm font-bold items-center flex mr-20">
          <img src="/Terranest.png" className="h-8 mr-2" alt="Logo" />
          <img src="/Terranest-brown.png" className="h-6" alt="Logo" />
        </div>

        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={toggleMenu}>
           <GiHamburgerMenu className="text-white h-6 w-6" />
          </button>
        </div>
      </nav>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute left-0 w-full bg-primary text-white mt-2 transition-all duration-300 ease-in-out`}>
        <a href="#home" className="block text-white py-3 text-center font-semibold hover:text-secondary transition">Home</a>
        <a href="#about" className="block text-white py-2 text-center font-semibold hover:text-secondary transition">About</a>
        <a href="#contact" className="block text-white py-2 text-center font-semibold hover:text-secondary transition">Projects</a>

        <a href="#contact" className="block text-white py-2 text-center font-semibold hover:text-secondary transition">Contact</a>
      </div>
    </>
  );
};

export default Navbar;
