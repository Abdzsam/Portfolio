import { EXPERIENCES } from "../constants"

const Experience = () => {
  
  return (
    <div>
      <h2 className="my-20 text-center text-6xl text-[#b4dbdc]">Experience</h2>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-base text-[#b4dbdc] font-semibold">{experience.year}</p>
                    <img className="bg-white p-2 mr-3 rounded-2xl w-40" src={experience.logo} alt={experience.altLogo}/>
                </div>
                <div className="w-full max-w-xl lg:w-3/4 bg-gray-400 flex justify-start items-start flex-wrap rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10 p-4">
                <h6 className="mb-2 font-semibold text-[#b4dbdc] text-lg">
                    {experience.role} - <span className="text-base text-[#b4dbdc]">{experience.company}</span>
                </h6>
                <p className="mb-4">{experience.description}</p>
                {experience.technologies.map((tech,index) => (
                    <span key={index} className="mr-2 mt-2 rounded bg-[#b4dbdc] px-2 py-1 text-sm font-semibold text-[#0077b5] hover:text-[#b4dbdc] hover:bg-[#0077b5]">{tech}</span>
                ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
