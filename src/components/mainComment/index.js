import React from 'react';
import './index.css';
import circle from '../../assets/icons/circle.svg' ;

function MainComment({img , name , date , text}) {
  return (
    <div className='mainComment'>
        <div className='mainComment__topContent'>
            <div className='userInfo'>
                <img src={img} alt="user profile image" />
                <h6>{name}</h6>
            </div>

            <div className='commentDate'>
                {date}
            </div>
            
        </div>

        <div className='mainComment__bottomContent'>
            {/* <ul>
                <li>
                    {text}
                </li>
            </ul> */}

            <img src={circle} alt="" />
            <div className='text'>
                {text}
            </div>

        </div>
    </div>
  )
}

export default MainComment;