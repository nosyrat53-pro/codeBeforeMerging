import React from 'react';
import './index.css';
import chalks from '../../assets/icons/chalks.png';
import news from '../../assets/icons/news.png';

export const Offer = ({isNew}) => {
  return (
    <div className='offer'>
        <div className='details'>
            <img src={chalks} alt="" />
            <div className='text'>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                Lorem ipsum Lorem ipsum Lorem ipsum 
            </div>
        </div>
        <div className='image'>
            <img src={news} alt="" />
         { isNew ?   <div className='new'>
                جديد
            </div> : null}
        </div>
    </div>
  )
}

export default Offer;
