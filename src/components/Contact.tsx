import React from 'react'
import { Props } from '../App'

const Contact: React.FC<Props> = ({elementRef}) => {
  return (
    <div className="h-screen w-full flex px-[10%] py-[7%] justify-center" ref={elementRef}>
      <h1 className='text-4xl font-extrabold animate-slide-bottom text-primary-color'><span className='text-secondary-color'>Contact</span> Me</h1>
    </div>
  )
}

export default Contact