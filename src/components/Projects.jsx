import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id="Projects" className='mt-[60px] scroll-mt-[90px] xl:mx-[10%] 2xl:mx-[20%] lg:mx-[5%] mx-4'>

        <div>
        <h1 className='text-[2rem] mb-4 font-serif'>
            My <span className="text-[#93deff] font-bold">Works</span>:
        </h1>
        <p className='lg:w-[50%] text-justify mb-8 2xl:text-[1.25rem]'>
          Following projects showcases my skills and experience through
          some simulated examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. 
          It reflects my ability to solve problems, work with different technologies,
          and manage projects effectively.
        </p>
        </div>

        <ProjectCard />
        
    </section>
  )
}

export default Projects