import React, { useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch} from "react-icons/io5";
import { TbMenu2,TbMenu3 } from "react-icons/tb";
import { NavLink ,Link} from 'react-router-dom';




export default function Navbar() {

  const [showMenu , setShowmenu] = useState(false)

  const [isScrolled , setIsScrolled ] = useState(false)


useEffect(()=>{

  const handleScroll = () =>{
    setIsScrolled(window.scrollY > 10)
   }

   window.addEventListener('scroll', handleScroll)
   return () => window.removeEventListener('scroll', handleScroll)
}, [] )


 

 const toggleMenu = ()=>{
   setShowmenu(!showMenu)
 }

  return (
    <>
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.2)]': ' '}`}>
      <nav className=' max-w-[1400px] mx-auto  px-10 md:h-[14vh] h-[12vh] flex justify-between  items-center'>
       
       {/* Logo */}
       
        <Link to ='/' className='text-3xl font-bold'> 
         Gr<span className='text-orange-500 uppercase'>o</span>cify
        </Link>

        {/* destop menu */}
        <ul className=' md:flex items-center gap-x-15 hidden'>
          <li>
            <NavLink to='/' className='font-semibold text-orange-500 tracking-wider' > Home</NavLink>
          </li> 
          <li> 
            <NavLink to='/about' className='font-semibold text-zinc-800 tracking-wider hover:text-orange-500 ' >About Us</NavLink>
          </li> 
          <li> 
            < NavLink to='/process' className='font-semibold text-zinc-800 tracking-wider hover:text-orange-500 '> Process</NavLink >
          </li> 
          <li> 
            <NavLink to ='/contact' className='font-semibold text-zinc-800 tracking-wider hover:text-orange-500 ' > Contact</NavLink>
          </li>
        </ul>

        {/* Nav Action */}
        <div className=' flex items-center gap-x-5'>

          {/* Input field */}
          <div className=' md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
          <input type="text" name="text" id="text"  placeholder='search...' autoComplete='off'
          className='flex-1 h-[5vh] px-3 focus:outline-none'/>
          <button className=' bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
          <IoSearch />
          </button>
          </div>
         
            <a href='#' className=' text-zinc-800 text-2xl'>
              <GoHeartFill />
            </a>

            <a href='#' className=' text-zinc-800 text-2xl'>
              <HiShoppingBag />
            </a>

            <a href=" #" className='text-3xl text-zinc-800 md:hidden' onClick={toggleMenu}>
               {showMenu ? <TbMenu3 /> : <TbMenu2 />}
            </a>
         
        </div>

        {/* mobile menu */}
        <ul className={`flex flex-col items-center gap-x-15 md:hidden absolute gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 top-30 -left-1/2 transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2': ' '}` }>
          <li>
            <Link to='/' className='font-semibold text-orange-500 tracking-wider' > Home</Link>
          </li> 
          <li> 
            <Link to='/about' className='font-semibold text-zinc-800 tracking-wider hover:text-orange-500 ' >About Us</Link>
          </li> 
          <li> 
            <Link to='/process' className='font-semibold text-zinc-800 tracking-wider hover:text-orange-500 ' > Process</Link>
          </li> 
          <li> 
            <Link to='/contact' className='font-semibold text-zinc-800 tracking-wider hover:text-orange-500 ' > Contact</Link>
          </li>

          {/* Input field */}
          <li className=' flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
          <input type="text" name="text" id="text"  placeholder='search...' autoComplete='off'
          className='flex-1 h-[5vh] px-3 focus:outline-none'/>
          <button className=' bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
          <IoSearch />
          </button>
          </li>
        </ul>

      </nav>
    </header>
    
    
    
    
    </>
  )
}

