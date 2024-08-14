import React from 'react'
import photo from "../../public/Prasad.jpeg"

function About() {
  return (
    <div>
        <div className="lg:h-screen h-auto" id="about">
            <div className="grid grid-cols-6 grid-rows-4 h-5/6 lg:grid lg:grid-cols-5 lg:grid-rows-4 lg:h-5/6">
                <div className="col-span-4 col-start-2 row-span-3 row-start-1 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-3">
                    <h2 className="text-3xl text-Light-White mb-10-">About</h2>
                    <p  className="text-lg text-Lightest-Slate mb-3 lg:text-xl">Full-stack developer experienced in developing, deploying, and maintaining full-stack applications from 
                            concept to production. Proficient in frontend and backend technologies like React.js, Node.js, Express.js, 
                            PostgreSQL and MongoDB.
                    </p>
                </div>
                <div className="lg:col-span-1 lg:col-start-4 lg:row-span-1 lg:gap-3 lg:row-start-3 hidden lg:inline">
                    <div className="p-5">
                        <img src={photo} className="p-0 m-0 rounded-lg"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-7 grid-rows-3 lg:hidden">
            <div className="p-1 col-span-3 col-start-3 row-span-3 row-start-1">
                <img src={photo} className="p-0 m-0 rounded-lg justify-center"/>
            </div>
        </div>
    </div>
  )
}

export default About