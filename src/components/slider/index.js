import React, {useRef} from 'react';
import './index.css';
import arrow from '../../assets/icons/next.png';

function Slider({gap = 10 ,dist = 250, children, isComments}) {
    const SliderRef = useRef();

    const handleRightClick = (e) => {
        SliderRef.current.scrollLeft += dist;
    }

    const handleLeftClick = (e) => {
        SliderRef.current.scrollLeft -= dist;
    }

  return (
    <div className='subject__popComments'>

    <div className='comments__arrows'>
    <div className='rightArrow' onClick={(e) => handleRightClick(e)}>
                <img src={arrow} alt="" />
            </div>
    <div className='leftArrow' onClick={(e) => handleLeftClick(e)}>
                <img src={arrow} alt="" />
            </div>
        <div className='comments__container' style={{gap: gap}} ref={SliderRef}>
        
            {children}
         
        </div>

            {isComments && <a href="/">كل التعليقات</a>}
        </div>
    </div>
  )
}

export default Slider