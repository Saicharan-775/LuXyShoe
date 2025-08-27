import React from 'react'
import Input from '../../Components/InputTemp.jsx'
import './Colors.css'
const Colors = ({handleChange}) => {
  return (
    <div>
      <h2>Colors</h2>
          <label className='sidebar-label-container'>
          <input  onChange={handleChange}  type='radio' value="" name='test2' />
          <span className='checkmark'></span>All
        </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name='test2'
        color="Black"
      />
        <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name='test2'
        color="Blue"
      />
        <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name='test2'
        color="Red"
      />
       <label className='sidebar-label-container'>
          <input  onChange={handleChange}  type='radio' value="white" name='test2' />
          <span className='checkmark' style={{background:"#ffffffff", border:"2px solid black"}}></span>White
        </label>
       
    </div>
  )
}

export default Colors