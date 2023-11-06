import {tech} from "./tech.js"
import {motion} from "framer-motion"
import {StagWrapper, fadeIn,} from "./motion.jsx"

const Technologies = () => {
  return (
  <section className="xl:mx-[10%] 2xl:mx-[20%] lg:mx-[5%] mx-4 mt-[60px]">
        
    <h1 className='sm:text-[2rem] text-[1.5rem] mb-4 font-serif'>
      <span className="text-[#93deff] font-bold">Technologies</span> I have worked with:
    </h1>

    <div className="fc gap-8 techs flex-wrap">
    {tech.map((item, i)=>{
        return(
            <motion.div variants={fadeIn(i * 0.5, 0.5)}
            key={item.text}>
              <div className="fc flex-col tech-div">
                <img src={item.img} alt={item.text}
                className="2xl:w-[96px] w-16 2xl:h-[96px] h-16 rounded-full p-2 tech mb-2"/>
                <p className="font-serif">{item.text}</p>
              </div>
            </motion.div>
        )})}
    </div>

  </section>
  )
}

export default StagWrapper(Technologies)