import React from 'react';
import './index.css';
import numbersicon from '../../assets/icons/numbersicon.png';

function LeaveComment() {
  return (
    <div className='LeaveComment'>
        <div className='LeaveComment__header'>
            <img src={numbersicon} alt="" />
            <h4>أترك تعليق</h4>
        </div>

        <div className='LeaveComment__textField'>
            <textarea rows="4" cols="50" placeholder='أكتب تعليقك هنا...'/>
        </div>

        <div className='LeaveComment__sendBtn'>
                <button>إرسال</button>
        </div>
    </div>
  )
}

export default LeaveComment