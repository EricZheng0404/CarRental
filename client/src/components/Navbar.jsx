import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    // Use to determine the current path/location, so that the navigation bar 
    // could change to different color
    const location = useLocation()

    // The default setting of if showing the nav bar is not showing/open
    const [open, setOpen] = useState(false)

    const navigate = useNavigate()

    // index comes with the map function
    let menuItem = menuLinks.map((link, index) => ( 
        // If use () or not with any brackets, there's no need to add return keyword
        <Link key={index} to={link.path}>
            {link.name}
        </Link>
    ))
  return (
    <div className={`flex item-center justify-between px-6 md:px-16 lg:px-24
    xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all
    ${location.pathname === "/" && "bg-light"}`}>
        <Link to="/"> {/* Add a link to the home page */}
            <img src={assets.logo} alt="logo" className="h-8"/>
        </Link>

        <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full 
        max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col
        sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 
        transition-all duration-300 z-50 
        ${location.pathname === "/" ? "bg-light" : "bg:white"}
        ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"} 
        `} >
            {menuItem}
            {/* hidden means it will not show for small screen */}
            <div className='hidden lg:flex items-center text-sm gap-2 border
            border-borderColor px-3 rounded-full max-w-56'>
                <img src={assets.search_icon} alt="search" />
                <input type="text" classnName="py-1.5 w-full bg-transparent 
                outline-none placeholder-gray-500" placeholder='Search Products'/>
            </div>

            <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
                <button className='cursor-pointer' onClick={() => navigate('/owner')}>Dashboard</button>
                <button className='cursor-pointer px-8 py-2 bg-primary
                hover:bg-primary-dull transition-all text-white rounded-lg'>Login</button>
            </div>
        </div>
        

    </div>
  )
}

export default Navbar
