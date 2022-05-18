import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Offer from '../../components/offer';

export const OffersScreen = () => {
  return (
      <>
       <Header />
        <div className='offersScreen'>
            <Offer isNew/>
            <Offer isNew/>
            <Offer />
            <Offer />
            <Offer />
        </div>
    <Footer />
    </>
  );
}

export default OffersScreen;
