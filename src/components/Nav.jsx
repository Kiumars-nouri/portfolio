import React from 'react'
import { useState } from 'react'
import menu from "../assets/menu.png"
import close from "../assets/close.png"

const nav = [
    {
        text: "Home",
        href: "#Home"
    },
    {
        text: "My Journey",
        href: "#Journey"
    },
    {
        text: "Projects",
        href: "#Projects"
    },
    {
        text: "Contact",
        href: "#Contact"
    },
]

const Nav = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick =() => {setToggle((prev)=> !prev)};


  return (
    <nav className='flex fixed top-0 left-0 pl-[16px] lg:pl-0 pr-[16px] lg:pr-0 pb-[10px] w-[100vw]
    pt-[10px] bg-[#00000d] z-50'
    >

        <p className=' mr-auto lg:ml-[10%] lg:text-[28px] text-[#93DEFF] text-[18px] font-serif '>
            Kiumars N.
        </p>

      
        <ul className='list-non lg:flex hidden items-center lg:mr-[10%]'>
            {nav.map(item=> {
                return(
                <li key={item.text} className='lg:w-[130px] text-[1rem]'><a href={item.href}>{item.text}</a></li>
            )})}
        </ul>
       

        <div className="lg:hidden flex">
          <img src={toggle ? close : menu} alt="menu"
          className="mt-[10px] w-[32px] h-[32px] object-contain"
          onClick={handleClick}
          />


          <div className={`${toggle ? 'flex' : 'hidden'} p-2 absolute top-12 
          right-0 mx-4 min-w-[140px] rounded-xl sidebar z-10`}>

        <ul className="list-non flex justify-end items-center flex-1 flex-col mt-[6px]
        bg-[#242938e6] rounded-xl">
            {nav.map(item=>{
                return(
                    <li key={item.text} className="pb-[4px] pt-[4px]"><a href={item.href} onClick={handleClick}>{item.text}</a></li>
                )
            })}
         
        </ul>

          </div>
        </div>

    </nav>
  )
}

export default Nav