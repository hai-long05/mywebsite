import React from 'react'

type techCardProps = {
  getAnimation: (animation: string) => string
  icon: string
  delay: number
}

const SkillsCard: React.FC<techCardProps> = ({getAnimation, icon, delay}) => {

  return (
    <div className={'bg-secondary-bg-color w-[12%] h-[65%] opacity-0 mr-2 mt-2 flex items-center justify-center rounded-lg cursor-default shadow-[0_0_6px_#4d5252] '  + getAnimation(`animate-slide-right animation-delay-${delay}`)}>
      <img src={icon} alt="" className='w-10 h-10' />
    </div>
  )
}

export default SkillsCard