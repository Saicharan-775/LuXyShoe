import React from 'react'
import "../index.css"
const Buttons = ({handleClick,value,title}) => {
  return (
    <button onClick={handleClick}  value={value} className='btns' >{title}</button>
  )
}

export default Buttons