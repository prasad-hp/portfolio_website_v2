import NavBar from '../components/NavBar';
import Greet from '../components/Greet';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <div className="bg-background text-neutral">
      <NavBar />
      <section id="home" className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Greet />
        </motion.div>
      </section>
      <section id="about" className="py-16">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.div>
      </section>
      <section id="work" className="py-16">
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Works />
        </motion.div>
      </section>
      <section id="contact" className="py-16 bg-primary text-white">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;
