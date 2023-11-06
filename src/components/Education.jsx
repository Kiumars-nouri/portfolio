import {education} from "./xp-edu.js"
import {motion} from "framer-motion"
import {StagWrapper, moveIn} from "./motion.jsx"

const Education = () => {
  return (
    <section className="xl:mx-[10%] 2xl:mx-[20%] lg:mx-[5%] mx-4">

        <h1 className='sm:text-[2rem] text-[1.5rem] mb-4 font-serif'>
          What I have <span className="text-[#93deff] font-bold">studied</span>:
        </h1>


      <div className="flex justify-between xl:justify-center items-center flex-col lg:flex-row gap-4">
      {education.map((item, i)=>{
        return(
          <motion.div variants={moveIn(i%2==0 ? "up" : "down", i * 0.5, 0.75)}
          key={i} className="edu-cart flex justify-between items-start flex-col 
          2xl:w-[370px] 2xl:h-[240px] lg:w-[270px] w-full h-[180px] bg-[#606470] p-4">

            <h2 className="text-[1.15rem] 2xl:text-[1.5rem] text-[#93deff] font-serif">{item.title}</h2>
            <p className="text-[1.1rem] 2xl:text-[1.25rem]">date: <span className="text-[.9rem] 2xl:text-[1.15rem]">{item.date}</span></p>
            <p className="text-[1.1rem] 2xl:text-[1.25rem]">Institute: <br/><span className="text-[.9rem] 2xl:text-[1.15rem]">{item.desc}</span></p>
          </motion.div>
        )
      })}
      </div>
    </section>
  )
}

export default StagWrapper(Education)