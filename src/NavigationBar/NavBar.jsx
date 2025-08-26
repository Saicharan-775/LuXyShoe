import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
        <div className='nav-container'>
        <input
        type='text'
        placeholder='search your shoes'
        />
         
        </div>
        <div className='profile-container'>
            <a href='#'>
             <FaRegHeart   className='nav-icons'/>
            </a>
              <a href='#'>
             <FiShoppingCart  className='nav-icons'/>
            </a>
             <a href='#'>
             <FaRegUser  className='nav-icons'/>
            </a>
            
        </div>
        
    </nav>
  )
}

export default NavBar