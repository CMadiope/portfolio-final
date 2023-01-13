import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id='main' className='text-white/90'>
      <img
        src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        alt='/'
        className='w-full h-screen object-cover object-left'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-black/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-400'>
            I'm Confidence
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-400'>
            I'm a
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                2000, // Waits 1s
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className='flex justify-evenly pt-6 max-w-[200px] w-full'>
            <a
              href='https://www.linkedin.com/in/confidence-madiope-616852b4/'
              target='_blank'
            >
              <FaLinkedin
                className='cursor-pointer hover:scale-125'
                size={20}
              />
            </a>
            <a href='https://github.com/CMadiope' target='_blank'>
              <FaGithub className='cursor-pointer hover:scale-125' size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
