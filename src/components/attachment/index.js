import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Attachment({img,title,btn1Text,btn2Text,btn1function,btn2function,link}) {
  return (
    <div className='attachment'>
        <img src={img} alt="" />
        <div className='content'>
            <div className='title'>{title}</div> 
            <div className='buttonsContainer'>
                <button className='downloadBtn' onClick={btn1function}>
                <a href={link} download="pdf_file">{btn1Text}</a> 
                </button>
                <button className='openBtn' onClick={btn2function}>
                  {btn2Text == 'تشغيل' ? <Link to='/audioplayer'>{btn2Text}</Link> : btn2Text }
                </button>
            </div>     
        </div>  
    </div>
  )
}

export default Attachment