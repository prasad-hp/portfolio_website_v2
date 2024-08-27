import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import photo from "../../public/Prasad.jpeg";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white px-6 py-4 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <img src={photo} alt="Prasad HP" className="w-12 h-12 rounded-full" />
          <span className="text-xl font-semibold">Prasad HP</span>
        </motion.div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-neutral transition duration-300">Home</a>
          <a href="#about" className="hover:text-neutral transition duration-300">About</a>
          <a href="#work" className="hover:text-neutral transition duration-300">Work</a>
          <a href="#contact" className="hover:text-neutral transition duration-300">Contact</a>
          <a href="https://drive.google.com/file/d/1ORlJN3fmKYqRsd0FmxSSQJbiYzcN9p1T/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-neutral transition duration-300">Resume</a>
          <a href="https://www.linkedin.com/in/prasadhp" target="_blank" rel="noopener noreferrer" className="hover:text-neutral transition duration-300"><FaLinkedin size={24} /></a>
          <a href="https://github.com/prasad-hp" target="_blank" rel="noopener noreferrer" className="hover:text-neutral transition duration-300"><FaGithub size={24} /></a>
        </div>
        <div className="md:hidden">
          <button id="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <img src="../../menu.svg" alt="Menu" className="w-8 h-8" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-2 bg-secondary rounded-lg shadow-md"
        >
          <a href="#home" className="block px-4 py-2 text-white hover:text-neutral">Home</a>
          <a href="#about" className="block px-4 py-2 text-white hover:text-neutral">About</a>
          <a href="#work" className="block px-4 py-2 text-white hover:text-neutral">Work</a>
          <a href="#contact" className="block px-4 py-2 text-white hover:text-neutral">Contact</a>
          <a href="https://drive.google.com/file/d/1ORlJN3fmKYqRsd0FmxSSQJbiYzcN9p1T/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-white hover:text-neutral">Resume</a>
          <a href="https://www.linkedin.com/in/prasadhp" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-white hover:text-neutral">LinkedIn</a>
          <a href="https://github.com/prasad-hp" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-white hover:text-neutral">GitHub</a>
        </motion.div>
      )}
    </nav>
  );
}

export default NavBar;
