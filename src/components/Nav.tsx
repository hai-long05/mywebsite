import React from 'react'

type navInterface = {
  currentSection: string
  homeRef: React.RefObject<HTMLDivElement>
  aboutRef: React.RefObject<HTMLDivElement>
  skillsRef: React.RefObject<HTMLDivElement>
  projectsRef: React.RefObject<HTMLDivElement> 
  contactRef: React.RefObject<HTMLDivElement>
}

const Nav: React.FC<navInterface> = ({currentSection, homeRef, aboutRef, skillsRef, projectsRef, contactRef}) => {

  const isCurrentSection = (navItem: string) => {
    return currentSection === navItem ? 'text-[#0ef]' : 'text-[#fff]'
  }

  const executeScroll = (to: React.RefObject<HTMLDivElement>) => {
    console.log(to.current?.offsetTop)
    window.scrollTo({
      behavior: 'smooth',
      top: to === homeRef ? 0 : to.current?.offsetTop! + 1
    })
  }


  return (
    <header className='fixed px-[10%] py-[20px] flex justify-between items-center w-[100%] z-10 opacity-90'>
      <a href="" className='text-[20px] text-[#fff] no-underline font-semibold cursor-default animate-slide-right'>Portfolio.</a>
      <nav>
        <div className={'animate-slide-top opacity-0 inline-block text-[18px] duration-300 no-underline cursor-pointer font-medium ml-[35px] hover:text-[#0ef] animation-delay-200 ' + isCurrentSection('home')} onClick={() => executeScroll(homeRef)}>Home</div>
        <div className={'animate-slide-top opacity-0 inline-block text-[18px] duration-300 no-underline cursor-pointer font-medium ml-[35px] hover:text-[#0ef] animation-delay-400 ' + isCurrentSection('about')} onClick={() => executeScroll(aboutRef)}>About</div>
        <div className={'animate-slide-top opacity-0 inline-block text-[18px] duration-300 no-underline cursor-pointer font-medium ml-[35px] hover:text-[#0ef] animation-delay-600 ' + isCurrentSection('skills')} onClick={() => executeScroll(skillsRef)}>Skills</div>
        <div className={'animate-slide-top opacity-0 inline-block text-[18px] duration-300 no-underline cursor-pointer font-medium ml-[35px] hover:text-[#0ef] animation-delay-800 ' + isCurrentSection('projects')} onClick={() => executeScroll(projectsRef)}>Projects</div>
        <div className={'animate-slide-top opacity-0 inline-block text-[18px] duration-300 no-underline cursor-pointer font-medium ml-[35px] hover:text-[#0ef] animation-delay-1000 ' + isCurrentSection('contact')} onClick={() => executeScroll(contactRef)}>Contact</div>
      </nav>
    </header>
  )
}

export default Nav
