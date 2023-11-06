
const Hero = () => {
  return (
    <section id="Home" className='mt-[60px] scroll-mt-[60px] bg-[#00000d] hero-wraper'>
    <div className="hero flex items-center 2xl:justify-items-center">

    <div className='fc flex-col lg:flex-row my-8 sm:mx-8 mx-4 gap-4 xl:mx-[10%] 2xl:w-full lg:mx-[5%]'>

            <div className='qq 2xl:w-[450px] 2xl:h-[450px] md:w-[300px] md:h-[300px] w-[220px] h-[220px]'/>

        <div className='flex flex-col'>
            <h1 className='lg:text-[3rem] 2xl:text-[3.5rem] sm:text-[2rem] text-[1.5rem] font-serif typed-out'>
                Hello, I'm <span className='font-bold neonText'>Kiumars</span>
            </h1>
            <p className='lg:text-[2rem] 2xl:text-[2.5rem] sm:text-[1.2rem] text-[1.1rem] font-serif typed-out2'>
                and develope web applications.
            </p>
            <p className="lg:w-[430px] 2xl:w-[800px] text-justify hero-fade 2xl:text-[1.5rem]">
              I'm a skilled developer with experience in frameworks like React and Next.js. 
              I'm a quick learner and goal-oriented person who collaborate closely with my team and clients to create efficient, 
              scalable, and user-friendly solutions that solve problems and get the jobs done. 
              I would like to be part of an agile team to bring our ideas to life!
            </p>
        </div>
    </div>
    </div>

    </section>
  )
}

export default Hero