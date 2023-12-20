import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faInstagram, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons";

const ICONS: IconDefinition[] = [faGithub, faXTwitter, faInstagram, faLinkedin]

const Home = () => {
  return (
    <div className="h-screen flex justify-between items-center px-[10%] py-[70px]">
        <div>
          <h3 className="text-3xl font-semibold">Hello, my name is <span className="font-extrabold">Hai Long Do Pham</span></h3>
          <h3 className="text-3xl font-semibold mb-3">And I'm a <span className="text-[#0ef] font-extrabold">VT-Student @SAP</span></h3>
          <div className="mt-[30px] w-[60%] ml-[5px]">
            <div>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa. 
            </div>
            <div>
              {ICONS.map((icon) =>(
                <a href="">
                  <FontAwesomeIcon icon={icon} className="w-[20px] h-[20px] border-2 rounded-[50%] p-2 border-[#0ef] text-[#0ef] mt-[15px] mr-[10px] hover:bg-[#0ef] hover:text-[#1f242d] hover:shadow-[0_0_20px_#0ef]"/>
                </a>
              ))}
            </div>
            <a href="" className="flex mx-[5px] w-[150px] h-12 my-[28px] text-[#1f242d] bg-[#0ef] font-semibold tracking-[1px] items-center justify-center rounded-[40px] shadow-[0_0_10px_#0ef]">Download CV</a>
          </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Home