import React from 'react'
import './Category.css'
const Category = () => {
  return (
    <div>
      <div>
             <h2 className='sidebar-title'>Category</h2>
      </div>
     
      <div>
        <label className="sidebar-label-container">
          <input type='radio' name='test'/>
          <span className="checkmark"></span>Sneakers
        </label>
          <label className="sidebar-label-container">
          <input type='radio' name='test'/>
          <span className="checkmark"></span>Sandles
        </label>
          <label className="sidebar-label-container">
          <input type='radio' name='test'/>
          <span className="checkmark"></span>Heels
        </label>
          <label className="sidebar-label-container">
          <input type='radio' name='test'/>
          <span className="checkmark"></span>Flats
        </label>
        
      </div>
    </div>
    
  )
}

export default Category