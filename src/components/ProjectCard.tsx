import React from 'react';

interface Project {
  heading: string;
  imgSrc: string;
  description: string;
  github: string;
  link: string;
}

function ProjectCard({ heading, imgSrc, github, link, description }: Project) {
  return (
    <div className='col-span-1 border rounded-lg w-80 flex flex-col items-start justify-between p-4 mr-2 bg-white shadow-lg hover:shadow-xl hover:transition-shadow hover:duration-300'>
      <div className='flex flex-col items-start'>
        <h1 className='text-xl font-semibold mb-2'>{heading}</h1>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <img src={imgSrc} alt={`Snapshot of ${heading}`} className='w-full h-48 object-cover rounded-lg mb-2'/>
        </a>
        <p className='text-gray-700 mb-4'>{description}</p>
      </div>
      <div className='flex justify-between items-center w-full mt-4'>
        <a
          href={github}
          target='_blank'
          className='flex items-center space-x-2'>
          <img src="../../github-mark.svg" alt="GitHub Icon" className='w-6 h-6' />
          <span className='sr-only'>GitHub</span>
        </a>
        <a
          href={link} target='_blank' className='flex items-center space-x-2'>
          <img src="../../link.svg" alt="Project Link" className='w-6 h-6' />
          <span className='sr-only'>Project Link</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
