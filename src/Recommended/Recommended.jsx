import React from 'react'
import './Recommended.css'
import Buttons from '../Components/Buttons'
const Recommended = ({handleClick}) => {
  return (
    <>
    <h1 className='recommended-title'>Recommended</h1>
    <div className='recommended-flex'>
      
      <Buttons handleClick={handleClick}  value="" title="All Products"/>
    <Buttons handleClick={handleClick}  value="Nike" title="Nike"/>
    <Buttons handleClick={handleClick}  value="Puma" title="Puma"/>
    <Buttons handleClick={handleClick}  value="Adidas" title="Adidas"/>
    <Buttons handleClick={handleClick}  value="Vans" title="Vans"/>
    </div>
  
    </>
  )
}

export default Recommended