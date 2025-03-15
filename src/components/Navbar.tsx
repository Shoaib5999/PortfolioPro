import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("Navbar is running");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="sticky top-0 bg-white/95 z-50">
      <nav className="w-full h-16  flex justify-between items-center  px-5 md:px-10 sticky top-0 z-50">
        <div>
          <p className="font-bold text-2xl font-serif">
            <span className="text-blue-600">Shoaib</span>.dev
          </p>
        </div>
        <div>
          <ul className="hidden md:flex gap-6 text-lg px-5">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">About</li>
            <li className="cursor-pointer hover:text-blue-600">Skills</li>
            <li className="cursor-pointer hover:text-blue-600">Projects</li>
            <li className="cursor-pointer hover:text-blue-600">Contact</li>
          </ul>
        </div>
        <div className="md:hidden text-4xl text-grey cursor-pointer">
          <a onClick={toggleMenu}>{isMenuOpen ? <CloseIcon /> : <>&#8801;</>}</a>
        </div>
      </nav>
      {/* Mobile navView */}
      {isMenuOpen && (
        <div className={`md:hidden bg-white w-full absolute left-0 shadow-md transition-all duration-300 ease-in-out ${isMenuOpen ? "top-16 opacity-100" : "-top-full opacity-0"}`}>
          <ul className="flex flex-col items-center gap-4 py-4 text-lg">
            <li className="cursor-pointer hover:text-blue-600" onClick={toggleMenu}>
              Home
            </li>
            <li className="cursor-pointer hover:text-blue-600" onClick={toggleMenu}>
              About
            </li>
            <li className="cursor-pointer hover:text-blue-600" onClick={toggleMenu}>
              Skills
            </li>
            <li className="cursor-pointer hover:text-blue-600" onClick={toggleMenu}>
              Projects
            </li>
            <li className="cursor-pointer hover:text-blue-600" onClick={toggleMenu}>
              Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
