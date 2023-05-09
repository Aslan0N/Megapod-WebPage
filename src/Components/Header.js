import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/megapod/img/logo.png" alt="" />
            </div>
    <button><i class="fa-solid fa-bars"></i></button>
            <ul>
                <li className='list-head'> <NavLink to='/' >Home</NavLink> </li>
                <li className='list-head'><NavLink to='/about' >About</NavLink></li>
                <li className='list-head'>Episodes</li>
                <li className='list-head'>Pages</li>
                <li className='list-head'>Contact</li>
            </ul>
            <div className="i-con">
            <form>
                <input type="search" placeholder='Search and hit enter...' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </form>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-dribbble"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header