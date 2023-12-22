import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typewriter from 'typewriter-effect';
import React from "react";
import { Props } from "../App";

const Home: React.FC<Props> = ({elementRef}) => {
  return (
    <div className="h-screen w-full flex justify-between items-center px-[10%] py-[70px]" ref={elementRef}>
        <div>
          <h3 className="text-3xl font-semibold animate-slide-bottom animation-delay-700 opacity-0">Hello, my name is <span className="font-extrabold">Hai Long Do Pham</span></h3>
          <span className="text-3xl font-semibold mb-2 animate-slide-top animation-delay-700 opacity-0 inline-block">And I'm a&nbsp;
            <span className="text-secondary-color font-extrabold absolute w-[500px]">
              <Typewriter
                options={{
                  strings: ['VT-Student @SAP', 'Fullstack Developer'],
                  autoStart: true,
                  loop: true,
                  delay: 70
                }}
              />
            </span>
          </span>
          <div className="mt-[30px] w-[45%] ml-[5px]">
            <div className="animate-[slideLeft_1s_ease_forwards] opacity-0 animation-delay-1000">
              Currently I'm  a VT-Student <a target="_blank" rel="noopener noreferrer" href="https://www.sap.com/germany/index.html">@SAP</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.hwr-berlin.de/">@HWR</a> in Berlin, because of that I shift between a practical and a theoretical phase. 
              Additionally I work on side projects, especially in fullstack development.
            </div>
            <div>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/hai-long05'>
                  <FontAwesomeIcon icon={faGithub} className={"cursor-pointer animate-slide-left opacity-0 w-[20px] h-[20px] border-2 rounded-[50%] p-2 border-[#0ef] text-[#0ef] mt-[15px] mr-[10px] hover:bg-[#0ef] hover:text-[#1f242d] hover:shadow-[0_0_20px_#0ef] animation-delay-1400"}/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/hai_long05'>
                  <FontAwesomeIcon icon={faXTwitter} className={"cursor-pointer animate-slide-left opacity-0 w-[20px] h-[20px] border-2 rounded-[50%] p-2 border-[#0ef] text-[#0ef] mt-[15px] mr-[10px] hover:bg-[#0ef] hover:text-[#1f242d] hover:shadow-[0_0_20px_#0ef] animation-delay-1600"}/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/hldp05'>
                  <FontAwesomeIcon icon={faInstagram} className={"cursor-pointer animate-slide-left opacity-0 w-[20px] h-[20px] border-2 rounded-[50%] p-2 border-[#0ef] text-[#0ef] mt-[15px] mr-[10px] hover:bg-[#0ef] hover:text-[#1f242d] hover:shadow-[0_0_20px_#0ef] animation-delay-1800"}/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href=''>
                  <FontAwesomeIcon icon={faLinkedin} className={"cursor-pointer animate-slide-left opacity-0 w-[20px] h-[20px] border-2 rounded-[50%] p-2 border-[#0ef] text-[#0ef] mt-[15px] mr-[10px] hover:bg-[#0ef] hover:text-[#1f242d] hover:shadow-[0_0_20px_#0ef] animation-delay-2000"}/>
                </a>
            </div>
            <a href="" className="cursor-pointer animate-slide-top animation-delay-2000 opacity-0 flex mx-[5px] w-[150px] h-12 my-[28px] text-[#1f242d] bg-[#0ef] font-semibold tracking-[1px] items-center justify-center rounded-[40px] hover:shadow-[0_0_10px_#0ef]">Download CV</a>
          </div>
        </div>
        <div>
          <img alt="" 
               src="https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png" 
               className="animate-zoom-in opacity-0 animation-delay-2000"
          />
        </div>
    </div>
  )
}

export default Home