import React from 'react';
import photo from "../../public/Prasad.jpeg";

function NavBar() {
  return (
    <nav className="bg-primary text-white px-6 py-4 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={photo} alt="Prasad HP" className="w-12 h-12 rounded-full" />
          <span className="text-xl font-bold">Prasad HP</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-accent">Home</a>
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#work" className="hover:text-accent">Work</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
          <a href="https://drive.google.com/file/d/19r98mcVHylhvLCpRnXuS7BWAyzY3LiRi/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Resume</a>
        </div>
        <div className="md:hidden">
          <button id="menu-toggle" className="focus:outline-none">
            <img src="../../menu.svg" alt="Menu" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
