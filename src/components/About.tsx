import React, { useEffect, useState } from 'react'
import { Props } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faSchool, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import useAnimation from '../hooks/useAnimation'

type aboutProps = Props & {
  homeIsVisible: boolean
  aboutIsVisible: boolean
}

const About: React.FC<aboutProps> = ({elementRef, homeIsVisible, aboutIsVisible}) => {

  const { getAnimation } = useAnimation(homeIsVisible, aboutIsVisible);

  return (
    <div className="h-screen w-full flex px-[10%] py-[7%] bg-secondary-bg-color justify-between" ref={elementRef}>
      <div className={'flex w-[40%] justify-end bg-ref-100 mt-10 opacity-0 ' + getAnimation('animate-slide-right')}>
        <ol className={"relative border-s border-gray-200 dark:border-gray-700 "}>                  
          <li className={"mb-10 ms-6 "}>            
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <FontAwesomeIcon icon={faSchool} size='xs'/>
              </span>
              <div className={'opacity-0 ' + getAnimation('animate-slide-top animation-delay-400')}>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-primary-color">Leibniz-Gymnasium Potsdam<span className="bg-blue-100 text-blue-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-secondary-color dark:text-primary-bg-color ms-3">Abitur</span></h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2016 - 2023</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  I discovered my passion for coding in the cs-class in my high school, 
                  from there I taught myself to code and to solve complex problems.
                  I graduated in 2023 with a mathematics award.
                </p>
              </div>
          </li>
          <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <FontAwesomeIcon icon={faBuildingColumns} size='xs' />
              </span>
              <div className={'opacity-0 ' + getAnimation('animate-slide-top animation-delay-700')}>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-primary-color">Berlin School of Economics and Law<span className="bg-blue-100 text-blue-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-secondary-color dark:text-primary-bg-color ms-3">Bachelor</span></h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023 - 2026</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  I am studying Business Informatics at the HWR over the course of the next 3 years 
                  and I'm looking forward to learn a lot of new things, that I can apply for my work
                  and projects.
                </p>
              </div>
          </li>
          <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <FontAwesomeIcon icon={faSuitcase} size='xs'/>
              </span>
              <div className={'opacity-0 ' + getAnimation('animate-slide-top animation-delay-1000')}>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-primary-color">SAP SE<span className="bg-blue-100 text-blue-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-secondary-color dark:text-primary-bg-color ms-3">Work</span></h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023 - present</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  I'm exited to work for such a known and trusted company.
                </p>
              </div>
          </li>
          {/* <li className="ms-6 mb-10">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
          </li>
          <li className="ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
          </li> */}
        </ol>
      </div>
      <div className={'w-[50%] h-full flex justify-center flex-col opacity-0 ' + (getAnimation('animate-slide-left'))}>
        <h1 className='text-4xl font-extrabold h-12'>About <span className='text-secondary-color'>Me</span></h1>
        <div >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <a href="" className={"cursor-pointer flex mx-[5px] opacity-0 w-[150px] h-12 my-[28px] text-[#1f242d] bg-[#0ef] font-semibold tracking-[1px] items-center justify-center rounded-[40px] hover:shadow-[0_0_10px_#0ef] " + getAnimation('animate-slide-top animation-delay-1000')}>Read More</a>
      </div>
    </div>
  )
}

export default About