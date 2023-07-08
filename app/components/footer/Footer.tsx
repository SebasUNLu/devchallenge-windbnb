import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="h-16 w-full bg-slate-500 mt-8 flex justify-around">
      <p className="flex items-center justify-center text-white w-full">
        © {new Date().getFullYear()} Sebastián Marchetti
      </p>
      <div className="flex items-center justify-center w-full">
        <a
          href="https://www.linkedin.com/in/sebasti%C3%A1n-pedro-marchetti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin width={48} height={48} color="white" />
        </a>
        <a
          href="https://github.com/SebasUNLu"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-8 text-white"
        >
          <BsGithub width={48} height={48} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
