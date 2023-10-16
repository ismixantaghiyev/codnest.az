import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Navbar.css'
import logo from '../img/codnest.png'




function Navbar() {

  return (
    <>
      <div className='navbar' >
        <div className="navbarLogo">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className="navbarMenu">
          <ul>
            <li><NavLink to="/">Əsas Səhifə</NavLink></li>
            <li><NavLink to="about">Haqqımızda</NavLink></li>
            <li><NavLink to="projects">Layihələr</NavLink></li>
            <li><NavLink to="contact">Əlaqə</NavLink></li>
          </ul>

        </div>
      </div>
      <Outlet />
      {/* <span>+994 50 342 41 74</span> */}
    </>
  )
}

export default Navbar
