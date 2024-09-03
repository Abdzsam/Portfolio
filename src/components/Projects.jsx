import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div>
      <h2 className="my-20 text-center text-6xl text-[#b4dbdc]">Projects</h2>
      <div>
        {PROJECTS.map((project,index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 mr-10">
                <img className="mb-6 rounded-xl w-96" src={project.image} alt={project.title}/>
            </div>
            <div className="w-full max-w-xl lg:w-3/4  bg-gray-400 flex justify-start items-start flex-wrap rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10 p-4">
                <h6 className="mb-2 font-semibold text-[#b4dbdc] text-lg">{project.title}</h6>
                <p className="mb-4">{project.description}</p>
                {project.technologies.map((tech, index) => (
                    <span key={index} className="mr-2 mt-2 rounded bg-[#b4dbdc] px-2 py-1 text-sm font-semibold text-[#0077b5] hover:text-[#b4dbdc] hover:bg-[#0077b5]">{tech}</span>
                ))}
            </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Projects
