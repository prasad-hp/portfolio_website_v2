import React from 'react'
import ProjectCard from './ProjectCard'

function Works() {
  return (
    <div className='h-screen' id='work'>
      <h1 className='lg:px-36 text-5xl font-medium py-5'>Projects</h1>
      <div className='grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 grid-rows-1 overflow-x-hidden space-x-10 lg:h-1/2 lg:px-36'>
        <ProjectCard heading='Ai Chat' imgSrc='../../aichat.png' description='' github='https://github.com/prasad-hp/ai-chatbot' link='https://ai-chatbot-byprasad.netlify.app/'/>
        <ProjectCard heading='Textgram' imgSrc='../../textgram.png' description='' github='https://github.com/prasad-hp/Textgram' link='https://textgram.netlify.app/'/>
        <ProjectCard heading='Payment Wallet' imgSrc='../../payment-wallet.png' description='' github='https://github.com/prasad-hp/Payment-Wallet' link='https://payment-wallet.netlify.app/'/>
        <ProjectCard heading='Identity Reconciliation' imgSrc='../../identity.png' description='' github='https://github.com/prasad-hp/Backend-Assignment' link='http://backendtaskprasadhp.netlify.app/'/>
        <ProjectCard heading='Sperax Clone' imgSrc='../../sperax.png' description='' github='https://github.com/prasad-hp/Sperax-Clone' link='https://speraxclone.netlify.app/' />
        <ProjectCard heading='Airbnb Clone' imgSrc='../../airbnb.png' description='' github='https://github.com/prasad-hp/Airbnb' link='https://hotelsearchbyhpp.netlify.app/' />
      </div>
    </div>
  )
}

export default Works