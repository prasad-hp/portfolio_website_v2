import photo from "../../public/Prasad.jpeg";

function About() {
  return (
    <div className="max-w-4xl xl:mt-20 mx-auto flex flex-col items-center md:flex-row space-y-8 md:space-y-0 md:space-x-12">
      <img src={photo} alt="Prasad HP" className="w-40 h-40 rounded-full shadow-md" />
      <div>
        <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
        <p className="text-lg leading-relaxed text-secondary">I'm a Full-Stack Developer with experience in building, deploying, and maintaining full-stack applications. I'm proficient in frontend and backend technologies like React.js, Node.js, Express.js, PostgreSQL, and MongoDB.</p>
      </div>
    </div>
  );
}

export default About;
