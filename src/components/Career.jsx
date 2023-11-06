import {xp} from "./xp-edu.js"

const Career = () => {
  return (
  <section className="xl:mx-[10%] 2xl:mx-[20%] lg:mx-[5%] mx-4 mt-[60px]">

  <h1 className='sm:text-[2rem] text-[1.5rem] mb-4 font-serif'>
      My work <span className="text-[#93deff] font-bold">experience</span>:
  </h1>

  <div className="flex flex-col gap-y-8">
  {xp.map((item, i)=>{
    return(
      <div key={i} className="flex lg:flex-row flex-col xp">

        <div className="bg-[#93deff] lg:w-[22vw] p-4 text-[#242938] text-[1.3rem] 2xl:text-[1.5rem] xp-info">
          <h2 className="font-serif font-bold">{item.title}</h2>
          <p>{item.date}</p>
            <p>{item.firm}</p>
        </div>

        <div className="bg-[#606470] xl:w-[58vw] lg:w-[68vw] pl-8 py-4 xp-details">
        <ul>
        <span className="text-[1.3rem] 2xl:text-[1.5rem] text-[#93DEFF] font-bold">Responsibilitie</span>:
          {item.desc.map((resp, i)=>{
          return(
            <li className="list-disc leading-8 2xl:text-[1.25rem]" key={i}>{resp}</li>
          )
          })}
        </ul>
        </div>            
      </div>
    )})}
    </div>

    </section>
  )
}

export default Career

