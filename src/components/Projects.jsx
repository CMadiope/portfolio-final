import React from "react";
import ProjectItem from "./ProjectItem";
import pic1 from "../assets/pic1.avif";
import pic2 from "../assets/pic2.avif";
import pic3 from "../assets/pic3.avif";
import pic4 from "../assets/pic4.avif";
import country from "../assets/country.jpeg";
import northstar from "../assets/northstar.png";
import dictionary from "../assets/dictionary.jpeg";
import tesla from "../assets/tesla.png";
import movies from "../assets/movies.png";
import space from '../assets/space.png'
import nike from '../assets/nike-app.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>

      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem
          img={country}
          title='Countries API'
          live='https://country-r3rc8ojx5-cmadiope.vercel.app/'
          gitRepo='https://github.com/CMadiope/country'
        />
         <ProjectItem
          img={nike}
          title='Nike App'
          live='https://nike-app-bice.vercel.app/'
          gitRepo='https://github.com/CMadiope/nike-app'
        />
         <ProjectItem
          img={tesla}
          title='Tesla Clone'
          live='https://tesla-clone-z8ay.vercel.app/'
          gitRepo='https://github.com/CMadiope/tesla-clone'
        />
          <ProjectItem
          img={space}
          title='Space Tourism'
          live='https://space-tourism-nextjs-one.vercel.app/'
          gitRepo='https://github.com/CMadiope/space-tourism-nextjs'
        />
            
        <ProjectItem
          img={movies}
          title='Movies App'
          live='https://movies-rosy-pi.vercel.app/'
          gitRepo='https://github.com/CMadiope/movies'
        />
        <ProjectItem
          img={northstar}
          title='Shopping'
          live='https://northstar-nine.vercel.app/'
          gitRepo='https://github.com/CMadiope/northstar'
        />
        <ProjectItem
          img={dictionary}
          title='Online Dictionary'
          live='https://dictionary-ten-alpha.vercel.app/'
          gitRepo='https://github.com/CMadiope/dictionary'
        />
       
      </div>
    </div>
  );
};

export default Projects;
