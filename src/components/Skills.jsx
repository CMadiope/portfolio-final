import React from "react";
import { DiJavascript1, DiReact } from "react-icons/di";
import {
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiRedux,
  SiGatsby,
} from "react-icons/si";
import {TbBrandNextjs} from 'react-icons/tb'
import {FaHtml5} from 'react-icons/fa'

const Skills = () => {
  return (
    <div id='skills' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        My Skills
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 p-12'>
        <FaHtml5 size={80} />
        <DiJavascript1 size={80} />
        <DiReact size={80} />
        <SiCss3 size={80} />
        <TbBrandNextjs size={80} />
        <SiTailwindcss size={80} />
        <SiStyledcomponents size={80} />
        <SiRedux size={80} />
        <SiGatsby size={80} />
      </div>
    </div>
  );
};

export default Skills;
