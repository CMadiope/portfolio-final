import React from "react";
import ProjectItem from "./ProjectItem";
import pic1 from "../assets/pic1.avif";
import pic2 from "../assets/pic2.avif";
import pic3 from "../assets/pic3.avif";
import pic4 from "../assets/pic4.avif";

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        itaque adipisci facere praesentium iure ratione! Ut voluptas atque iure
        corrupti impedit. Modi cum earum dolore, ipsum veniam est nisi ad.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={pic1} title='Crypto' />
        <ProjectItem img={pic2} title='Property App' />
        <ProjectItem img={pic3} title='Netflix Clone' />
        <ProjectItem img={pic4} title='Notes App' />
      </div>
    </div>
  );
};

export default Projects;
