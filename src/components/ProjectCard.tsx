import React from 'react';

interface Project {
  heading: string;
  imgSrc: string;
  description: string;
  github: string;
  link: string;
}

function ProjectCard({ heading, imgSrc, description, github, link }:Project) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <img src={imgSrc} alt={heading} className="w-full h-40 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{heading}</h3>
        <p className="text-neutral mb-4">{description}</p>
        <div className="flex space-x-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Live Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
