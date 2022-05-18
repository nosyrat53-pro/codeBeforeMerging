import React from 'react';
import './index.css';
import trigon from '../../assets/icons/trigon.png';
import star from '../../assets/icons/point.png';
import lock from '../../assets/icons/lock.png';
import Footer from '../footer';

function Exam(props) {
  return (
    <>
        <div className='lessonCard exam'>
        <div className={`stars ${props.topQuestions && 'top__questions'}`}>
            <img src={star} alt="" />
            <div>50</div>
        </div>
        <div className="container">
            {props.isLock ? <div className={`locked ${props.TQLocked && 'topQuestionsLocked'}`}/> : null}

            <img src={trigon} className="centerimg" alt="" />
            <h5>الاختبار النهائي</h5>
            <h6>مدة الانجاز <span className='infos__circle'></span>60 دقيقة</h6>

            <button className='lesson__button'>البدء بالاختبار</button>

            {props.isLock && <img src={lock} className="locking" alt="" />}
            </div>  
        </div>

    </>
  )
}

export default Exam;