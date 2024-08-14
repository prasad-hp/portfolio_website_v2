import React from 'react'

function Greet() {
  return (
    <div>
        <div className="grid grid-cols-5 grid-rows-5 h-5/6">
            <div className="col-span-3 col-start-2 row-span-2 row-start-1 gap-3 lg:row-start-3">
                <h2 className="text-3xl text-Lightest-Slate mb-10-">Hi, My Name is,</h2>
                <h1 className="text-8xl font-bold text-Light-White mb-5">Prasad Hp</h1>
                <h2 className="text-5xl text-Slate mb-5">I build experiences for Web.</h2>
                <p  className="text-xl text-Lightest-Slate mb-3">I am an Engineer who likes to build experiences for the Web and
                    learn while doing so.</p>
            </div>
        </div>
    </div>
  )
}

export default Greet