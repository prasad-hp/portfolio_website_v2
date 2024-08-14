import React from 'react'
import NavBar from '../components/NavBar'
import Greet from '../components/Greet'
import About from '../components/About'
import Contact from '../components/Contact'
import Works from '../components/Works'

function HomePage() {
  return (
    <div className=''>
      <div className='h-screen'>
        <NavBar />
        <Greet />
      </div>
      <div className='h-screen'>
        <About />
      </div>
      <div>
        <Works />
      </div>
      <div className='h-screen'>
        <Contact />
      </div>
    </div>
  )
}

export default HomePage