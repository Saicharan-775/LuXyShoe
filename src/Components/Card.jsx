import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
const Card = () => {
  return (
    <>
    
            <section className='card'>
             <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='NikeShoe'  className='card-img'/>
             <div className='card-details'>
                     <h1 className='card-title'>Nike shoe</h1>
                     <section className='card-reviews'>
                        
                              <FaStar className='review-star' /> <FaStar className='review-star' /> <FaStar className='review-star' /> <FaStar className='review-star' />
                              <span className='total-reviews'> 4</span>
                     </section>
                     <section className='card-price'>
                        <div className='price'>
                            <del>$300</del>200
                        </div>
                        <div className='bag'>
                            <IoBagHandleSharp/>
                        </div>
                            
                     </section>
             </div>
            </section>

    </>
      
  )
}

export default Card