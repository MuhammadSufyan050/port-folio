import React from 'react';

const About = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-24 py-12 max-w-screen-2xl mx-auto">

      <div className="font-bold text-left mb-6 w-full">
        <h1 className="text-customBlue text-5xl">about</h1>
        <hr className="border border-customBlue mx-48 w-2/3 " />
      </div>

      <div className="text-white text-left max-w-3xl px-4 md:px-8 lg:px-16">
        <p className="my-4 leading-relaxed">
        Im focused on improving my design and coding abilities, excited to bring creative ideas to life, and eager to collaborate with others in the field. This portfolio is a showcase of my journey so far, and I look forward to growing as a developer with each new project.        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-24 mt-12 w-full max-w-3xl">
        <div className="text-center mb-8 lg:mb-0">
          <h1 className="text-white font-bold text-2xl">Front-End</h1>
          <p className="text-gray-400 mt-2 font-light">60+ Hours Experience</p>
        </div>
        
        <div className="text-center mb-8 lg:mb-0">
          <h1 className="text-white font-bold text-2xl">Python</h1>
          <p className="text-gray-400 mt-2 font-light">1 Monts Experience</p>
        </div>

        <div className="text-center">
          <h1 className="text-white font-bold text-2xl">Machine Learning</h1>
          <p className="text-gray-400 mt-2 font-light">0 Hours Experience</p>
        </div>
      </div>
    </div>
  );
};

export default About;
