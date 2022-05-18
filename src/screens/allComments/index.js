import React, { useState } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import MainComment from '../../components/mainComment';
import ScreenTitle from '../../components/ScreenTitle';
import userImg from '../../assets/icons/profile.svg';
import './index.css';

function AllComments() {
    const [ar,setaArr] = useState([1,2,3,4,5,6,7,8,9,10]);
  return (
    <div className='allcommentsScreen'>
        <Header />

        <ScreenTitle 
        title="التعليقات"
        withOutAdTitles
        />

        <div className='comments'>
        {ar.map(el =>         <MainComment 
                            img={userImg}
                            name={"اسم الطالب"}
                            date={"12/5/2022"}
                            text="lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus "
                            />
                )
        }
         {/* <MainComment 
                            img={userImg}
                            name={"اسم الطالب"}
                            date={"12/5/2022"}
                            text="lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus lorem ipsum lorem impus "
                            /> */}
        </div>
        <Footer />
    </div>
  )
}

export default AllComments;