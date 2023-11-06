import { ProjectsData } from "./projectsData"
import GitHub from "../assets/technologies/github.png"

const ProjectCard = () => {
  return (
    <div className="flex justify-center lg:flex-row flex-col gap-8 items-stretch">
        {ProjectsData.map((item, i)=>{
            return(
                <div key={item.title} 
                className="bg-[#606470] lg:w-[30vw] relative p-1 flex flex-col xp justify-between">

                    <a href={item.giturl} target="_blank" 
                    className="absolute w-8 h-8 right-3 top-3 rounded-full tech">
                        <img src={GitHub} alt="GitHub" />
                    </a>

                    <img src={item.img} alt={item.title} className="w-full aspect-auto mb-2"/>

                    <a href={item.url} target="_blank" 
                    className="text-[#93deff] font-bold font-serif underline underline-offset-2 ptitle inline-block">
                        {item.title}
                    </a>

                    <p className="my-2 text-justify mx-2">
                        {item.desc}
                    </p>

                    <div className="flex gap-4 justify-self-end mx-2">
                    {item.techs.map((item, i)=>{
                        return(
                            <p className="font-bold">
                                <span className="neonText">#</span>
                                {item}
                            </p>
                        )})}
                    </div>
                </div>
            )})}

    </div>
  )
}

export default ProjectCard