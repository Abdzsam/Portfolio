import logo from "../assets/PortLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-20 rounded-full" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/abdsam04/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[#b4dbdc] size-10" />
            </a>
            <a href="https://github.com/Abdzsam" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-[#b4dbdc] size-10" />
            </a>
            <a href="https://leetcode.com/u/abdzsam/" target="_blank" rel="noopener noreferrer">
                <SiLeetcode className="text-[#b4dbdc] size-10" />
             </a>   
        </div>
    </nav>
  )
}

export default Navbar
