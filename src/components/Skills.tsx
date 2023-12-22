import React from 'react'
import { Props } from '../App'

const Skills: React.FC<Props> = ({elementRef}) => {
  return (
    <div className="h-screen w-full flex px-[10%] py-[7%] justify-center" ref={elementRef}>
      <h1 className='text-4xl font-extrabold animate-slide-bottom'>Skills</h1>
    </div>
  )
}

export default Skills