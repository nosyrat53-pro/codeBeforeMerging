import React from 'react';
import './index.css';
import trigon from '../../assets/icons/trigon.png';
import star from '../../assets/icons/point.png';
import lock from '../../assets/icons/lock.png';

function Lesson({btnText,isLock,starsNum,lessonName,lessonNum,lessonTime,date}) {
  return (
    <div className='lessonCard'>
      {
        starsNum && 
        <div className={`stars ${starsNum}`}>
          <img src={star} alt="" />
            <div>{starsNum}</div>
        </div>
      }
        <div className={`container`}>
            {isLock ? <div className='locked'/> : null}

            <img src={trigon} className="centerimg" alt="" />
            <h5><span>{lessonNum} </span>- {lessonName}</h5>
            <h6>مدة الانجاز <span className='infos__circle'></span>{lessonTime}</h6>
            {date && <p className="date">{date}</p>}
            <button className='lesson__button'>{btnText}</button>

            {isLock && <img src={lock} className="locking" alt="" />}
        </div>  
    </div>
  )
}

export default Lesson;