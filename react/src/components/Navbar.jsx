const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-md px-6 py-3 fixed w-full h-50 z-50 flex justify-between items-center">
      <div className="text-xl font-bold">Kalpa</div>
      <div className="flex gap-6 text-sm font-medium">
        <a href="#home" className="hover:text-blue-500 transition">Home</a>
        <a href="#about" className="hover:text-blue-500 transition">About</a>
        <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
        <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
