import React from 'react'
import './Sidebar.css'
import Category from './Category/Category.jsx'
import Colors from './Colors/Colors.jsx'
import Price from './Price/Price.jsx'
const Sidebar = ({handleChange}) => {
  return (
    <>
    <section className='sidebar'>
        <div className='logo-container'>
            <h1>LuxStore</h1>
           
        </div>
        <div className='sidebar-items'>
        <Category handleChange={handleChange}/>
        <Colors handleChange={handleChange} />
        <Price handleChange={handleChange}/>
        </div>
       

    </section>
    
    </>
  )
}

export default Sidebar