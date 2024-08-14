import React from 'react'

function Contact() {
  return (
    <div>
    <div id="contact" className="lg:h-screen h-screen">
        <div className="grid grid-cols-5 grid-rows-4 row-start-2 h-5/6 lg:grid lg:grid-cols-5 lg:grid-rows-4 lg:h-5/6">
            <div className="col-span-3 col-start-2 row-span-1 row-start-2    lg:col-span-3 lg:col-start-2 lg:row-span-1 lg:row-start-3">
                <h1 className="text-5xl text-Light-White mb-10- flex justify-center text-center">Get in Touch</h1>
                <p className="text-lg text-Lightest-Slate mb-3 lg:text-xl text-center">
                    Currently, I am seeking opportunities as a full-stack engineer. 
                </p>
                <div className="">
                    <div className="p-5 flex justify-center">
                        <a href="mailto:itsprasadhp@gmail.com">
                            <button className="text-Lightest-Slate border p-5 rounded-lg text-xl">Say Hello</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact