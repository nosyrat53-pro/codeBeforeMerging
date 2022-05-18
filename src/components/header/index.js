import React, { useState } from 'react';
import './index.css';
import logo from '../../assets/icons/logo.png';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileImage from '../../assets/icons/profile.svg';
import NotificationImage from '../../assets/icons/notification.svg';

function Header() {
    const [isLogin,setIsLogin] = useState(true);

  return (
    <header className='header'>
        <div className='header__logo'>
            <img src={logo} alt="logo" />
        </div>

        <div className='header__actions'>
            <span className='headeractions__title'>الرئيسية</span>
            <div className='header__form'>
                <Form>
                    <Form.Control type="email" className='headerform__input' placeholder="بحث" />
                </Form>
            </div>
            {
                isLogin ? 
                <div className='header__buttons header__profile'>
                        
                        <div className='header__notification'>
                            <img src={NotificationImage} alt="notifications imgage" />
                            <ul className='header__dropdown'>
                                <li>البروفايل</li>
                                <li>الدردشات</li>
                                <li>المحفوظات</li>
                                <li>الرصيد</li>
                                <li>النقاط</li>
                                <li>تسجيل الخروج</li>
                            </ul>
                        </div>

                        <div className='header__profileImg'>
                            <img src={ProfileImage} alt="profile image" />
                        
                        </div>

                </div> :
                    <div className='header__buttons'>
                        <button className='header__buttons__register'>تسجيل حساب</button>
                        <button className='header__buttons__login'>دخول</button>
                    </div>
            }
        </div>
    </header>
  )
}

export default Header;