import React from 'react';
import NavBar from '../components/NavBar';
import Greet from '../components/Greet';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <div className="bg-secondary text-neutral">
      <NavBar />
      <section id="home" className="min-h-screen flex items-center justify-center">
        <Greet />
      </section>
      <section id="about" className="py-16">
        <About />
      </section>
      <section id="work" className="py-16">
        <Works />
      </section>
      <section id="contact" className="py-16 bg-primary text-white">
        <Contact />
      </section>
    </div>
  );
}

export default HomePage;
