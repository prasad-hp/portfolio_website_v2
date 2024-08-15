import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';

function Works() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -400, // Adjust this value based on card width and spacing
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: 400, // Adjust this value based on card width and spacing
      behavior: 'smooth'
    });
  };

  return (
    <div className='relative' id='work'>
      <div className='relative w-11/12'>
      <h1 className='lg:px-36 text-5xl font-medium py-5'>Projects</h1>
        {/* Scroll Buttons */}
        {/* <button 
          onClick={scrollLeft} 
          className='absolute top-1/2 -translate-y-1/2 left-2 z-10 p-2 bg-gray-800 text-white rounded-full'
        >
          &lt;
        </button>
        <button 
          onClick={scrollRight} 
          className='absolute top-1/2 -translate-y-1/2 right-2 z-10 p-2 bg-gray-800 text-white rounded-full'
        >
          &gt;
        </button> */}
        <div ref={scrollContainerRef} className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 overflow-x-auto no-scrollbar lg:px-36'
          // style={{ gridAutoFlow: 'column', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }} 
          >
          <ProjectCard heading='Ai Chat' imgSrc='../../aichat.png' description='An AI-powered chat application utilizing the GEMINI API to simulate conversational interactions similar to ChatGPT.' github='https://github.com/prasad-hp/ai-chatbot' link='https://ai-chatbot-byprasad.netlify.app/' />
          <ProjectCard heading='Textgram' imgSrc='../../textgram.png' description='A Microblogging Platform where users can create text-based posts, see other users posts, and interact with posts by liking and commenting on it.' github='https://github.com/prasad-hp/Textgram' link='https://textgram.netlify.app/' />
          <ProjectCard heading='Payment Wallet' imgSrc='../../payment-wallet.png' description='A cloud wallet where users can store, send, and receive currency from other users.' github='https://github.com/prasad-hp/Payment-Wallet' link='https://payment-wallet.netlify.app/' />
          <ProjectCard heading='Identity Reconciliation' imgSrc='../../identity.png' description='A backend service to help businesses track customers with different email IDs and phone numbers, consolidating the information to assist in tracking customers across multiple purchases' github='https://github.com/prasad-hp/Backend-Assignment' link='http://backendtaskprasadhp.netlify.app/' />
          <ProjectCard heading='Sperax Clone' imgSrc='../../sperax.png' description='Frontend homepage clone of popular crypty website' github='https://github.com/prasad-hp/Sperax-Clone' link='https://speraxclone.netlify.app/' />
          <ProjectCard heading='Airbnb Clone' imgSrc='../../airbnb.png' description='Frontend homepage clone of Airbnb' github='https://github.com/prasad-hp/Airbnb' link='https://hotelsearchbyhpp.netlify.app/' />
        </div>
      </div>
    </div>
  );
}

export default Works;
