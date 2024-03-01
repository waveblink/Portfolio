import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
    return (
        <div id='contact'>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <DrawOutlineIcon href="https://github.com/waveblink" icon={<FaGithub size={30} />} />
                    <DrawOutlineIcon href="https://www.linkedin.com/in/maxwell-hahn/" icon={<FaLinkedin size={30} />} />
                    <DrawOutlineIcon href="mailto:maxwellhahn@gmail.com" icon={<FaEnvelope size={30} />} />
                </div>
            </div>
        </div>
        </div>
    );
}

const DrawOutlineIcon = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group relative">
      {icon}
      {/* Animation spans */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-green-300 transition-all duration-100 group-hover:w-full" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-green-300 transition-all delay-200 duration-100 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </a>
  );
}

export default Contact;
