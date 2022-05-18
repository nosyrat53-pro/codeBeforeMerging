import React,{useEffect, useRef, useState} from 'react';
import './index.css';
import backgroundimage from '../../assets/images/footerimage.png';
import Logo from '../../assets/icons/logo.png';
import youtube from '../../assets/images/youtube.png';
import facebook from '../../assets/images/facebook.png';
import insta from '../../assets/images/instagram.png';
import whatsapp from '../../assets/images/whatsapp.png';
import ladder from '../../assets/icons/ladder.png';
import numbersIcon from '../../assets/icons/numbersicon.png';
import group from '../../assets/icons/group.png';
import books from '../../assets/icons/books.png';
import communication from '../../assets/icons/communication.png';
import CountUp from '../countUp';

function Footer() {

    const [animateNumbers,setAnimateNumbers] = useState(false);
    const ref = useRef();

    useEffect(() => {
        console.log(ref.current);
        function checkIfArriveToNumbers() {
            // console.log('scrolling')
            if(window.scrollY >= ref.current.getBoundingClientRect().top){
 
                setAnimateNumbers(true);
            }
            if(window.scrollY < ref.current.getBoundingClientRect().top){
   
                setAnimateNumbers(false);
            }
        }
        window.addEventListener('scroll', checkIfArriveToNumbers);

        // () => {
        //     window.removeEventListener('scroll',checkIfArriveToNumbers);
        // }
    },[]);

  return (
    <div className='footer' style={{backgroundImage: `url(${backgroundimage})`}}>
        <div className='footer__logo'>
            <img src={Logo} alt="" />
            <div className='contactus'>
                <h5>تواصلوا معنا</h5>
                <div className='links'>
                    <a><img src={insta} alt="" /></a>
                    <a><img src={facebook} alt="" /></a>
                    <a><img src={youtube} alt="" /></a>
                    <a><img src={whatsapp} alt="" /></a>
                </div>
            </div>
        </div>

        <div className='footer__links'>
            <div className='rightLinks'>
                <a>
                    <div className='link'>
                        <img src={ladder} alt="" />
                        الرئيسية
                    </div>
                </a>

                <a>
                    <div className='link'>
                        <img src={ladder} alt="" />
                        الاشتراكات
                    </div>
                </a>

                <a>
                    <div className='link'>
                        <img src={ladder} alt="" />
                        لمحة عنا
                    </div>
                </a>
                <a>
                    <div className='link'>
                        <img src={ladder} alt="" />
                        مكتبة الموقع
                    </div>
                </a>
            </div>

            <div className='leftLinks'>
                <a>
                    <div className='link'>
                        <img src={ladder} alt="" />
                        الاحكام والقوانين
                    </div>
                </a>
                <a>
                    <div className='link'>
                        <img src={ladder} alt="" />
                        سياسة الخصوصية
                    </div>
                </a>
            </div>
        </div>

        <div className='footer__numbers' id='numbers'>
            <h3><img src={numbersIcon} alt="" />أرقام منصة طريقي</h3>

            <div className='numbers__units' ref={ref}>
                <div className='unit'>
                    <img src={group} alt="" />
                    <h2>+<CountUp end={100} start={animateNumbers}/></h2>
                    <p>طالب وطالبة</p>
                   
                </div>

                <div className='unit'>
                    <img src={books} alt="" />
                    <h2>+<CountUp end={2500} start={animateNumbers}/></h2>
                    <p>طالب وطالبة</p>
                </div>

                <div className='unit'>
                    <img src={communication} alt="" />
                    <h2>+<CountUp end={500} start={animateNumbers}/></h2>
                    <p>طالب وطالبة</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;