import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/logo.png'



export const Navbar = () => {   
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true)
        } else {
            setShadow(false)
        }
      };
      window.addEventListener('scroll', handleShadow)
    }, [])
    

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]' : 'fixed w-full h-20 z-[100] bg-[#ecf0f3]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                  <img className='hover:scale-105 duration-200 cursor-pointer mt-4 w-40' src={ logo} alt='/' />
            </Link>
            <div>
                <ul className='hidden md:flex'>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                    <li className='ml-10 text-sm uppercase hover:scale-105 duration-200'>
                        Home
                    </li>
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                    <li className='ml-10 text-sm uppercase hover:scale-105 duration-200'>
                        About us
                    </li>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                    <li className='ml-10 text-sm uppercase hover:scale-105 duration-200'>
                        Contact us
                    </li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='cursor-pointer hover:scale-105 duration-200 md:hidden'>
                    <AiOutlineMenu className='text-[#90185c]' size={25}/>
                </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                            <img className='hover:scale-105 duration-200 cursor-pointer w-40' src={logo} alt='/'/>
                        </Link>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-200 mb-3'>
                            <AiOutlineClose className='text-[#90185c]'/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm hover:scale-105 duration-200 cursor-pointer'>Home</li>
                        </Link>
                        <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm hover:scale-105 duration-200 cursor-pointer'>About us</li>
                        </Link>    
                        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>    
                            <li onClick={()=> setNav(false)} className='py-4 text-sm hover:scale-105 duration-200 cursor-pointer'>Contact us</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
 )
}

export default Navbar
