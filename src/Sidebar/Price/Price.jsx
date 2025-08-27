import React from 'react'
import Input from '../../Components/InputTemp'
import './Price.css'
const Price = ({handleChange}) => {

  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>
   

         <label className='sidebar-label-container'>
          <input  onChange={handleChange}  type='radio' value="" name='test1' />
          <span className='checkmark'></span>All
        </label>
        <Input
        
        handleChange={handleChange}  
        type='radio' 
        value={50}
        title="0 - $50"
         name='test1'
        />
           <Input
        
        handleChange={handleChange}  
        type='radio' 
        value={100}
        title="$50 - $100"
         name='test1'
        />
           <Input
        
        handleChange={handleChange}  
        type='radio' 
        value={150}
        title="$100 - $150"
         name='test1'
        />
           <Input
        
        handleChange={handleChange}  
        type='radio' 
        value={200}
        title="$150 - $200"
         name='test1'
        />
         
         
       
    </div>
    
  )
}

export default Price