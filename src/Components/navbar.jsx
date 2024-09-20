import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../Styles/navbar.css'

const Navbar = () => {
    let location = useLocation()
    let path=location.pathname.startsWith('/adminPortal')
    let logo1='./images/logo.png'
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo1} alt="" />
            </div>
            <div className='links'>
                {path ?
                <div>
                    
                <NavLink to='/adminPortal/'>Home</NavLink>
                <NavLink to='/adminPortal/Books'>Books</NavLink>
                <NavLink to='/adminPortal/AddBooks'>Add Book</NavLink>
                <NavLink to='/adminPortal/AddUsers'>Add User</NavLink>
                <NavLink to='/adminPortal/Users'>Users</NavLink>
                <NavLink to='/adminLogin'>Sign Out</NavLink>
                </div>
                :
                <div>
                <NavLink to='/userPortal/'>Home</NavLink>
                <NavLink to='/userPortal/Books'>Books</NavLink>
                <NavLink to='/userPortal/favorites'>favorites</NavLink>
                <NavLink to='/userLogin'>Sign Out</NavLink>
                </div>
                }

                
            </div>
        </div>
    )
}

export default Navbar
