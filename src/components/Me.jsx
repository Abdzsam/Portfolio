import profPic from "../assets/Portfoliopicupdated.png"
import unilogo from "../assets/daluni.jpg"

const Me = () => {
  return (
    <div className="pb-2 lg:mb-35">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center justify-center lg:items-center bg-gray-400 flex-wrap rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10">
                <h1 className="text-6xl font-thin tracking-tight text-[b4dbdc] lg:mt-10 lg:text-8xl text-[#b4dbdc]">Abdul <span className="text-[#0077b5]">Samad</span></h1>
                <span className="bg-clip-text text-2xl tracking-tight pb-10 text-[#b4dbdc]">Computer Science Student<span><img className="rounded-full w-40 mt-2 ml-12"  src={unilogo} alt="Dalhousie University"/></span></span>
                  
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center">
            <img className="rounded-full" src={profPic} alt="Abdul Samad"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Me
