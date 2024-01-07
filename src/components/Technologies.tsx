import React from 'react'
import { Props } from '../App'
import useAnimation from '../hooks/useAnimation'
import TechCard from './TechCard'

type technologieProps = Props & {
  aboutIsVisible: boolean
  techIsVisible: boolean
}

export type technologie = {
  name: string
  icon: string
}

const PROGRAMMING_LANGUAGES: technologie[] = [
  {name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png'},
  {name: 'CSS', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-css-7232197-5944375.png?f=webp'},
  {name: 'JavScript', icon: 'https://media.licdn.com/dms/image/D4D12AQEL9aeB8WqRaw/article-cover_image-shrink_600_2000/0/1685204779306?e=2147483647&v=beta&t=jr7Um-vZDvcgCCzx0a48zCEr3RtUyRVqelGOzrpL4bs'},
  {name: 'TypeScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png'},
  {name: 'Python', icon: 'https://static-00.iconduck.com/assets.00/python-icon-512x512-48og66bp.png'}
]

const FRAMEWORKS: technologie[] = [
  {name: 'React', icon: 'https://www.svgrepo.com/show/452092/react.svg'},
  {name: 'Angular', icon: 'https://angular.io/assets/images/logos/angular/angular.png'},
  {name: 'Tailwind', icon: 'https://www.svgrepo.com/show/374118/tailwind.svg'},
]

const CLOUD_SERVICES: technologie[] = [
  {name: 'Firebase', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/480px-Firebase_icon.svg.png'}
]

const DATABASES: technologie[] = [
  {name: 'MongoDB', icon: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png'},
  {name: 'SQLite3', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png'},
]

const Technologies: React.FC<technologieProps> = ({elementRef, aboutIsVisible, techIsVisible}) => {

  const { getAnimation } = useAnimation(aboutIsVisible, techIsVisible)

  return (
    <div className={"h-screen w-full flex px-[10%] py-[7%] justify-center opacity-0 " + getAnimation('animate-slide-right delay-1000')} ref={elementRef}>
      <div className='flex flex-col items-center w-full h-full'>
        <div>
          <h1 className='text-4xl font-extrabold animate-slide-bottom text-primary-color'><span className='text-4xl font-extrabold text-secondary-color'>Technologie</span> Knowledge</h1>
        </div>
        <div className="flex flex-row w-full h-full">
          <div className='h-full w-[50%] md:pr-10 xl:pr-20 flex items-center mt-20'>
            <div>
              <div className={'opacity-0 ' + getAnimation('animate-slide-bottom animation-delay-200')}>
                <h1 className='font-semibold text-1xl '>Adapt on <span className='font-semibold text-secondary-color text-1xl'>Demand</span></h1>
                <div className='text-primary-color mt-2'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
              <a href="" className={"cursor-pointer flex mx-[5px] opacity-0 w-[150px] h-12 my-[28px] text-[#1f242d] bg-[#0ef] font-semibold tracking-[1px] items-center justify-center rounded-[40px] hover:shadow-[0_0_10px_#0ef] " + getAnimation('animate-slide-top animation-delay-200')}>Request</a>
            </div>
          </div>
          <div className='flex h-full w-[50%] mt-20 flex-col justify-between'>
            <div className='w-full h-[20%]'>
              <h1 className='text-1xl font-semibold'>Programming Languages</h1>
              <div className='flex flex-row w-full h-full'>
                {PROGRAMMING_LANGUAGES.map((language, i) => (
                  <TechCard key={language.name} getAnimation={getAnimation} icon={language.icon} delay={200 * i + 200}/>
                ))}
              </div>
            </div>
            <div className='w-full h-[20%]'>
              <h1 className='text-1xl font-semibold'>Frameworks</h1>
              <div className='flex flex-row w-full h-full'>
                {FRAMEWORKS.map((framework, i) => (
                  <TechCard key={framework.name} getAnimation={getAnimation} icon={framework.icon} delay={200 * i + 200}/>
                ))}
              </div>
            </div>
            <div className='w-full h-[20%]'>
              <h1 className='text-1xl font-semibold'>Cloud Services</h1>
              <div className='flex flex-row w-full h-full'>
                {CLOUD_SERVICES.map((service, i) => (
                  <TechCard key={service.name} getAnimation={getAnimation} icon={service.icon} delay={200 * i + 200}/>
                ))}
              </div>
            </div>
            <div className='w-full h-[20%]'>
              <h1 className='text-1xl font-semibold'>Databases</h1>
              <div className='flex flex-row w-full h-full'>
                {DATABASES.map((database, i) => (
                  <TechCard key={database.name} getAnimation={getAnimation} icon={database.icon} delay={200 * i + 400}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
