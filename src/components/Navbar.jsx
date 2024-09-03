import logo from "../assets/PortLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-20 rounded-full" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin className="text-[#b4dbdc] size-10"></FaLinkedin>
            <FaGithub className="text-[#b4dbdc] size-10"></FaGithub>
        </div>
    </nav>
  )
}

export default Navbar
