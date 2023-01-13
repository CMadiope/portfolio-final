import React from 'react'
import WorkItem from './WorkItem'


const data = [
  {
    year: 2020,
    title: 'Intern',
    duration: '6 Months',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa odio iure maiores, aliquid sit inventore beatae quis earum ab assumenda!'
  },
  {
    year: 2019,
    title: 'Google',
    duration: '1 year',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa odio iure maiores, aliquid sit inventore beatae quis earum ab assumenda!'
  },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, index) => (
        <WorkItem key={index} {...item}/> 
      ))}
    </div>
  )
}

export default Work
