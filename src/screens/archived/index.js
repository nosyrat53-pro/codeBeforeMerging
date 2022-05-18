import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import './index.css';
import chalks from '../../assets/icons/chalks.png';
import ArchivedLessons from '../../components/archivedLessons';

const ArchivedScreen = () => {
  return (
      <>
      <Header />
    <div className="archivedScreen">
        <div className='archivedscreen__title'>
            <img src={chalks} alt="" />
            <h3>مادة الرياضيات</h3>
        </div>

        <ArchivedLessons />
    </div>
    <Footer />
    </>
  )
}

export default ArchivedScreen