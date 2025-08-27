import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
const Card = ({img,title,star,reviews,prevPrice,newPrice}) => {
  return (
    <>
    
            <section className='card'>
             <img src={img} alt='NikeShoe'  className='card-img'/>
             <div className='card-details'>
                     <h1 className='card-title'>{title}</h1>
                     <section className='card-reviews'>
                        
                              <FaStar className='review-star' /> <FaStar className='review-star' /> <FaStar className='review-star' /> <FaStar className='review-star' />
                              <span className='total-reviews'> {reviews}</span>
                     </section>
                     <section className='card-price'>
                        <div className='price'>
                            <del>{prevPrice}</del>{newPrice}
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