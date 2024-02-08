import React, { useState } from 'react'

import { CiMenuFries } from "react-icons/ci";
import "./Header.css"
const Header = () => {
  const links = [
    "home",
    "about",
    "services",
    "achievements",
    "contact"
  ]
  const [active,setActive] = useState(false)
  return (
    <header className='shadow-lg fixed w-full top-0 bg-white'>
      <nav className="container mx-auto flex items-center justify-between flex-wrap text-xl">

        <div className='py-2'>
          <img src="/logo.png" alt="logo" width={100} />
        </div>
        <ul className={` flex ${active ? 'active':''} gap-5 `} id='navbar'>
        {
          links.map((link,index)=>{
            return <a href={`#${link}`} key={index} className='capitalize' onClick={()=>setActive(!active)}>{link}</a>
          })
        }
        </ul>
        <button className='md:hidden visible z-10 px-2' onClick={()=>setActive(!active)}><CiMenuFries size={30}/></button>
      </nav>
    </header>

  )
}

export default Header