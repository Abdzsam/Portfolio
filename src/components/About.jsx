import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
const About = () => {
  return (
    <div>
      <h1 className="my-20 text-center text-6xl text-[#b4dbdc]">About <span className="text-[#0077b5]">Me</span></h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutImg} alt="about"/>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:mt-28">
                <div className="flex justify-center lg:justify-center">
                    <p className="my-2 py-6 tracking-tighter min-h-3/4 h-auto w-full bg-gray-400 flex justify-start items-start flex-wrap rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10 p-4">{ABOUT_TEXT}</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default About
