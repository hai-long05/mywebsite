import React from 'react'
import { Props } from '../App'

const Projects: React.FC<Props> = ({elementRef}) => {
  return (
    <div className="h-screen w-full flex px-[10%] py-[7%] justify-center bg-secondary-bg-color" ref={elementRef}>
      <h1 className='text-4xl font-extrabold animate-slide-bottom'>Projects</h1>
    </div>
  )
}

export default Projects