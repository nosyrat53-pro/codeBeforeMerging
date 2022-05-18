import React from 'react';
import './index.css';

function ContactTeacher({toRight}) {
  return (
    <div className={`subject__contactTeacher ${toRight && 'toright'}`}>
    <div className='contactShape'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>
        <button className='contactBtn'>تواصل مع الاستاذ</button>
    </div>
  )
}

export default ContactTeacher