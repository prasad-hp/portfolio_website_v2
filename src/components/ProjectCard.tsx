import { motion } from 'framer-motion';

interface Project {
  heading: string;
  imgSrc: string;
  description: string;
  github: string;
  link: string;
}

function ProjectCard({ heading, imgSrc, description, github, link }: Project) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
    >
      <div className="p-4">
        <img src={imgSrc} alt={heading} className="w-full h-40 object-cover mb-4 rounded-lg" />
        <h3 className="text-2xl text-primary font-semibold mb-2">{heading}</h3>
        <p className="text-secondary mb-4">{description}</p>
        <div className="flex space-x-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Live Demo</a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
