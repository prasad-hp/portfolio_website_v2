import ProjectCard from './ProjectCard';

function Works() {
  return (
    <section id="work" className="py-24 bg-background text-neutral">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-primary">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ProjectCard 
            heading='AI Chat' 
            imgSrc='../../aichat1.png' 
            description='An AI-powered chat application utilizing the GEMINI API to simulate conversational interactions similar to ChatGPT.' 
            github='https://github.com/prasad-hp/ai-chatbot' 
            link='https://ai-chatbot-byprasad.netlify.app/' 
          />
          <ProjectCard 
            heading='Textgram' 
            imgSrc='../../textgram1.png' 
            description='A Microblogging Platform where users can create text-based posts, see other users posts, and interact with posts by liking and commenting on it.' 
            github='https://github.com/prasad-hp/Textgram' 
            link='https://textgram.netlify.app/' 
          />
          <ProjectCard 
            heading='Payment Wallet' 
            imgSrc='../../payment1.png' 
            description='A cloud wallet where users can store, send, and receive currency from other users.' 
            github='https://github.com/prasad-hp/Payment-Wallet' 
            link='https://payment-wallet.netlify.app/' 
          />
          <ProjectCard 
            heading='Identity Reconciliation' 
            imgSrc='../../identity1.png' 
            description='A backend service to help businesses track customers with different email IDs and phone numbers, consolidating the information to assist in tracking customers across multiple purchases.' 
            github='https://github.com/prasad-hp/Backend-Assignment' 
            link='http://backendtaskprasadhp.netlify.app/' 
          />
          <ProjectCard 
            heading='Sperax Clone' 
            imgSrc='../../Sperax1.png' 
            description='Frontend homepage clone of a popular crypto website.' 
            github='https://github.com/prasad-hp/Sperax-Clone' 
            link='https://speraxclone.netlify.app/' 
          />
          <ProjectCard 
            heading='Airbnb Clone' 
            imgSrc='../../airbnb.png' 
            description='Frontend homepage clone of Airbnb.' 
            github='https://github.com/prasad-hp/Airbnb' 
            link='https://hotelsearchbyhpp.netlify.app/' 
          />
        </div>
      </div>
    </section>
  );
}

export default Works;
