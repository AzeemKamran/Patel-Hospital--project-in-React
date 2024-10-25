import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import {NavLink , Outlet} from 'react-router-dom'
const Navbar = () => {
  let navstyle = {
    textDecoration:"none",
    color:"black"
  }
  const nav1 = useRef('')
  return (
    <>
      <nav>
        <ul ref={nav1}>
          <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVcJztyEfI4_9x2cvb__qttExciR5B2KcZhw&usqp=CAU" alt="Image" />
          </li>
          <li>
            <div className="options">
              <li><NavLink style={navstyle} to='home'>Home</NavLink></li>
              <li><NavLink style={navstyle} to='branches'>Branches</NavLink></li>
              <li><NavLink style={navstyle} to='jobs'>Jobs</NavLink></li>
            </div>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  )
}


export default Navbar
