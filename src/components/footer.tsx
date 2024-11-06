import React from 'react';
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 max-w-screen-2xl mx-auto">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <h1 className="font-bold text-2xl">Portfolio</h1>

        <div className="flex text-3xl gap-4">
          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
