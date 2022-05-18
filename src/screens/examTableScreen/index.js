import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import OurTable from '../../components/table'

import Button from '../../components/button'
import './index.css'
import LessonTitle from '../../components/lessonTitle'

const ExamsTableScreen = (props) => {
  return (
    <>
    <Header />
        <div className='examtablescreen'> 
            <LessonTitle />
            <OurTable exam />
        </div>
    <Footer />
    </>
  )
}

export default ExamsTableScreen