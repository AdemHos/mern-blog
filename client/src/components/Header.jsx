import { Button, Navbar, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import { Link, Links, useLocation } from 'react-router-dom'

const Header = () => {
    const path = useLocation().pathname
  return (
    <Navbar className='border-b-2'>
       <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
       <span className='px-2 py-1 bg-gradient-to-r from-purple-400 to-blue-300 text-white rounded-lg '>Daily</span>
       Think
       </Link> 
       <form>
        <TextInput
        type='text'
        placeholder='Search'
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'
        />
       </form>
       <Button className='w-12 h-10 lg:hidden ' color='gray' pill>
         <AiOutlineSearch/>
       </Button>
       <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
         <FaMoon/>
        </Button>
        <Link to='/sign-in'>
        <Button gradientDuoTone='purpleToBlue'>
            Sign In
        </Button>
        </Link>
        <NavbarToggle/>
       </div>
        <Navbar.Collapse>
            <Navbar.Link active={path === '/'} as={'div'}>
                <Link to='/'>
                Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/about'} as={'div'}>
                <Link to='/about'>
                About
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/projects'} as={'div'}>
                <Link to='/projects'>
                Projects
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
