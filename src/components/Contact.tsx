import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg mb-6">I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to drop a message!</p>
      <a href="mailto:itsprasadhp@gmail.com" className="bg-accent text-white py-3 px-8 rounded-lg shadow-lg hover:bg-primary transition duration-300">Say Hello</a>
      <div className="flex justify-center space-x-6 mt-6">
        <a href="https://www.linkedin.com/in/prasadhp" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent"><FaLinkedin size={30} /></a>
        <a href="https://github.com/prasad-hp" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent"><FaGithub size={30} /></a>
      </div>
    </div>
  );
}

export default Contact;
