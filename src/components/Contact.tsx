import React from 'react'
import { Props } from '../App'

const Contact: React.FC<Props> = ({elementRef}) => {
  return (
    <div className="h-screen w-full flex px-[10%] py-[7%] items-center flex-col" ref={elementRef}>
      <h1 className='text-4xl font-extrabold animate-slide-bottom text-primary-color'><span className='text-secondary-color'>Contact</span> Me</h1>
      <div className='mt-[10%] h-full flex w-[50%] flex-col '>
        <div className='flex h-fit w-full justify-between'>
          <div className='w-[49%]'> 
            <label htmlFor="">Name</label>
            <input type="text" className='w-full h-10 rounded-md bg-secondary-bg-color pl-3' />
          </div>
          <div className='w-[49%]'> 
            <label htmlFor="">Name</label>
            <input type="text" className='w-full h-10 rounded-md bg-secondary-bg-color pl-3' />
          </div>
        </div>
        <div className='flex h-fit w-full mt-4 flex-col'>
          <label htmlFor="">Subject</label>
          <input type="text" className='w-[100%] h-10 rounded-md bg-secondary-bg-color pl-3' />
        </div>
        <div className='w-full h-fit mt-4 flex-1 mb-10'>
          <label htmlFor="">Message</label>
          <input type="text" className='w-full h-full rounded-md bg-secondary-bg-color'/>
        </div>
        <div className='flex justify-center'>
          <button type='submit' className={"cursor-pointer flex mx-[5px] w-[150px] h-12 my-[28px] text-[#1f242d] bg-[#0ef] font-semibold tracking-[1px] items-center justify-center rounded-[40px] hover:shadow-[0_0_10px_#0ef] "}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact