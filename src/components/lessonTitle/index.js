import React from 'react';
import './index.css';
import Button from '../../components/button';
import chalk from '../../assets/icons/chalks.png'
import average from '../../assets/icons/average.png'

const LessonTitle = () => {
  return (
    <div className='programe__examTitle'>

    <div className='firstTitle'>

        <img src={chalk} alt="" />
        <h3 className='title'>
            مادة الرياضيات
        </h3>

    </div>


    <div className='secondTitle'>
        <img src={average} alt="" />
        <Button className="averageBtn" text="معدل الاختبارات 55.6"></Button>
    </div>


    </div>
  )
}

export default LessonTitle