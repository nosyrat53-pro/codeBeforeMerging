import React from 'react';
import './index.css';
import profile from '../../assets/icons/profile.svg';

function Comment() {
  return (
    <div className='comment'>
        <div className='comment__header'>
            <img src={profile} />
            اسم الطالب
        </div>
        <div className='comment__body'>
            موقع اكثر من رائع وفرتو علينا كل شيء حتى الضغط النفسي كنت اتعرضله لما اسجل بالمركز اما الموقع بنظم وقتي بناء على راحتي
        </div>
    </div>
  )
}

export default Comment