import React from 'react'

interface Project{
    heading: string,
    imgSrc: string,
    description: string
    github: string,
    link: string
}

function ProjectCard({heading, imgSrc, github, link, description}: Project) {
  return (
    <div>
        <div className='border rounded-lg h-full w-full flex flex-col items-start justify-between py-2 '>
            <div>
                <h1>{heading}</h1>
                <img src={imgSrc} alt="Project Snapshot" />
                <p>{description}</p>
            </div>
          <div className='flex justify-center items-center space-x-3 w-full'>
            <a href={github}><img src="../../github-mark.svg" alt="Github Icon" className='w-6'/></a>
            <a href={link}><img src="../../link.svg" alt="link" /></a>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard