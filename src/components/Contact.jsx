import dl from '../assets/dl.png'

const contact = [
    {
        via: "E-mail",
        text: "Kiumars90@yahoo.com",
        href: "mailto:kiumars90@yahoo.com?subject=more%20information",
    },
    {
        via: "Phone",
        text: "+90 554 178 77 56",
        href: "tel:+905541787756",
    },
    {
        via: "WhatsApp",
        text: "+90 554 178 77 56",
        href: "https://wa.me/905541787756",
    },
]

const Contact = () => {
  return (
    <section id="Contact" className='mt-[60px] scroll-mt-[90px] 2xl:px-[20%] xl:px-[10%] lg-px-[5%] sm:px-8 px-4 py-16 contact'>
        
        <h1 className='sm:text-[2rem] text-[1.5rem] mb-4 font-serif'>
            My <span className="text-[#93deff] font-bold">contact</span> and <span className="text-[#93deff] font-bold">CV</span>:
        </h1>

    <div className='flex lg:flex-row flex-col gap-y-8 justify-center items-center'>

        <div className='2xl:mr-auto'>
        <p className='lg:w-[70%] text-justify mb-8 2xl:text-[1.25rem]'>
           If you have found my resume interesting, please contact me via email or phone 
           with the following information:
        </p>

        {contact.map((item, i)=>{
            return(
            <div key={i} className='grid sm:grid-cols-2 grid-cols-1 lg:w-[50%] my-2'>
              <h2 className='text-[1.2rem] 2xl:text-[1.5rem] font-serif text-[#93deff]'>{item.via}:</h2>
              <a href={item.href} className='underline underline-offset-4 decoration-[#93deff] 2xl:text-[1.25rem]' target='_blank'>{item.text}</a>
            </div>
            )})}
        </div>

        <div className='flex flex-col'>
            <p className='mb-8 2xl:text-[1.25rem]'>My full CV and documents can be accessed for further checkings:</p>
            <a href='Kiumars-Documents.rar' className='edu-cart py-3 px-8 self-end fc gap-2' download>
                Download 
                <img src={dl} alt='download_button' className='w-6 h-6'/>
            </a>
        </div>
    </div>

    </section>
  )
}

export default Contact


