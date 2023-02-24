import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <nav>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link> */}

            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
    </div>
  )
}

export default NavBar