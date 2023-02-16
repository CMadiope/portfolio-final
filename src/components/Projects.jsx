import React from "react";
import ProjectItem from "./ProjectItem";
import pic1 from "../assets/pic1.avif";
import pic2 from "../assets/pic2.avif";
import pic3 from "../assets/pic3.avif";
import pic4 from "../assets/pic4.avif";
import country from '../assets/country.jpeg'
import northstar from '../assets/northstar.png'

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
        <ProjectItem
          img={country}
          title='Countries API'
          live='https://country-r3rc8ojx5-cmadiope.vercel.app/'
          gitRepo='https://github.com/CMadiope/country'
        />
        <ProjectItem
          img={northstar}
          title='Shopping'
          live='https://northstar-nine.vercel.app/'
          gitRepo='https://github.com/CMadiope/northstar'
        />
        <ProjectItem img={pic3} title='Coming soon' />
        <ProjectItem img={pic4} title='Coming soon' />
      </div>
    </div>
  );
};

export default Projects;
