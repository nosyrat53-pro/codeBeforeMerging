import React, { useState } from 'react';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Header from '../../components/header';
import chalks from '../../assets/icons/chalks.png';
import './index.css';

const ProfileScreen = () => {
    const [editPassword,setEditPassword] = useState(false);

  return (
    <div className='profileScreen'>
        <Header />
        <div className='profileScreen__content'>
            <div className='topcontent'>
                <div className='userImage'></div>
                <h3 className='userName'>اسم المستخدم</h3>
            </div>

            { !editPassword ?
            <div className={`bottomContent`}>

                <div className='leftContent'>
                    <ul>
                        <li><div>الاسم</div><div>Lorem ipsum</div></li>
                        <li><div>اسم الاب</div><div>Lorem ipsum</div></li>
                        <li><div>اسم الام</div><div>Lorem ipsum</div></li>
                        <li><div>الجنس</div><div>Lorem ipsum</div></li>
                        <li><div>تاريخ الميلاد</div><div>Lorem ipsum</div></li>
                        <li><div>العنوان</div><div>Lorem ipsum</div></li>
                        <li><div>المحافظة</div><div>Lorem ipsum</div></li>
                    </ul>
                    <div className='title'>
                        المعلومات الشخصية
                    </div>
                </div>

                <div className='rightContent'>
                <ul>
                        <li><div>الصف</div><div>Lorem ipsum</div></li>
                        <li><div>المدرسة</div><div>Lorem ipsum</div></li>
                        <li><div>رقم الهاتف</div><div>Lorem ipsum</div></li>
                        <li><div>الايميل</div><div>Lorem ipsum</div></li>
                    </ul>
                    <div className='title'>
                        معلومات الحساب
                    </div>
                </div>

            </div>

                : 
                <div className={`editpassword`}>
                    <div className='enterOld'>
                        <div className='text'> <img src={chalks} alt="" />أدخل كلمة السر القديمة</div>
                        <input type="password" />
                    </div>
                    <div className='enterNew'>
                        <div className='text'><img src={chalks} alt="" /> كلمة السر الجديدة </div>
                        <input type="password" />
                    </div>
                    <div className='confirmNew'>
                        <div className='text'><img src={chalks} alt="" /> تأكيد كلمة السر </div>
                        <input type="password" />
                    </div>

                    <div className='btnsContainer'>
                        <Button className='saveBtn' text="حفظ التعديلات" onclick={() => setEditPassword(false)}/>
                        <Button className='closeBtn' text="الغاء" onclick={() => setEditPassword(false)}/>
                    </div>
                </div>
                }

            <Button text={"تعديل كلمة السر"} className="editPasswordBtn" onclick={() => setEditPassword(!editPassword)} /> 
        </div>
        <Footer />
    </div>
  )
}

export default ProfileScreen