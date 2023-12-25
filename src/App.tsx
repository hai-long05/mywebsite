import './App.css'
import './index.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import { useRef } from 'react'
import { useOnScreen } from './hooks/useOnScreen'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

export type Props = {
  elementRef: React.RefObject<HTMLDivElement>
}

function App() {

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const homeIsVisible = useOnScreen(homeRef);
  const aboutIsVisible = useOnScreen(aboutRef);
  const techIsVisible = useOnScreen(techRef);
  const projectsIsVisible = useOnScreen(projectsRef);
  const contactIsVisible = useOnScreen(contactRef);

  const getCurrentSection = () => {
    if (homeIsVisible) {
      return 'home'
    } else if (aboutIsVisible) {
      return 'about'
    } else if (techIsVisible) {
      return 'tech'
    } else if (projectsIsVisible) {
      return 'projects'
    } else if (contactIsVisible){
      return 'contact'
    } else {
      return ''
    }
  }

  // window.onbeforeunload = () => {
  //   window.scrollTo(0, 0);
  // }

  const currentSection = getCurrentSection();

  return (
    <>
      <div className='bg-[#1f242d] w-[99vw] h-[100%]'>
        <Nav currentSection={currentSection} homeRef={homeRef} aboutRef={aboutRef} techRef={techRef} projectsRef={projectsRef} contactRef={contactRef}/>
        <Home elementRef={homeRef} />
        <About elementRef={aboutRef} homeIsVisible={homeIsVisible} aboutIsVisible={aboutIsVisible}/>
        <Technologies elementRef={techRef} aboutIsVisible={aboutIsVisible} techIsVisible={techIsVisible} />
        <Projects elementRef={projectsRef} />
        <Contact elementRef={contactRef} />
        <div className='h-[1px]'></div>
      </div>
    </>
  )
}

export default App
