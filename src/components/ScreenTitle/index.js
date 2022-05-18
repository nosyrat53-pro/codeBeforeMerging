import React from 'react';
import './index.css';
import chalkImg from '../../assets/icons/chalks2x.png';
import calendar from '../../assets/icons/calendar.png';

function ScreenTitle({
  title,
  secondTitle ,
  secondTitleNum ,
  thirdTitle , 
  thirdTitleNum ,
  completTitle = false , 
  startDate = false  , 
  endDate = false ,
  lessonNum ,
  withOutAdTitles = false
}) {


  return (
    <div className={`pagetitle ${completTitle && startDate && 'expanded'} ${withOutAdTitles && 'withoutAdditionsTitles'}`}>
            <div className='wraptitle'>
              <h2 className='pagetitle__title'>
                  <img src={chalkImg} alt="title" /> 
                  {title}{completTitle && `${' - '+completTitle}`}{lessonNum && `${' - '+lessonNum}`}
              </h2>
              {
                !withOutAdTitles &&
              <div className='pagetitle__infos'>
                  <div className='infos__units'>
                      {secondTitle} 
                      <div className='infos__circle'></div>
                      {secondTitleNum}
                  </div>
                  <div className='infos__sector'></div>
                  <div className='infos__units'>
                    {thirdTitle} 
                      <div className='infos__circle'></div>
                      {thirdTitleNum}
                  </div>
              </div>
              }
            </div>

            {startDate && 
            <div className='date'>
              <h5 className='title'><img src={calendar} alt="" /> مدة الانجاز</h5>
              {"من "+startDate + " الى " + endDate}
            </div>
            }
    </div>
  )
}

export default ScreenTitle;