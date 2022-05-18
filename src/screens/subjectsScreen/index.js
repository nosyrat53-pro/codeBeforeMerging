import React, { useState } from 'react';
import './index.css';
import average from '../../assets/icons/average.png';
import chalk from '../../assets/icons/chalks.png';
import Header from '../../components/header';

import Footer from '../../components/footer';
import LessonTitle from '../../components/lessonTitle';
import UnitLessons from '../../components/unitLessons';
import SubjectLessons from '../../components/subjectLessons';
import TitleSection from '../../components/titleSection';
import Spacer from '../../components/spacer';
import ArchivedUnit from '../../components/archivedUnit';
import ContactTeacher from '../../components/contactTeacher';

const SubjectsScreen = () => {
  const [units,setUnits] = useState([
    {isArchived: true, name: 1},
    {isArchived: true, name: 1},
    {isArchived: true, name: 1},
    {isArchived: true, name: 2},
    {isArchived: true, name: 1},
    {isArchived: true, name: 1},
    {isArchived: true, name: 1},
    {isArchived: true, name: 2},
    {isArchived: true, name: 3},
    {isArchived: false, name: 4},
    {isArchived: false, name: 5},
    {isArchived: false, name: 6},
    {isArchived: false, name: 7},
    {isArchived: false, name: 2},
    {isArchived: false, name: 2},
    {isArchived: false, name: 5},
    {isArchived: false, name: 6},
    {isArchived: false, name: 7},
    {isArchived: false, name: 2},
    {isArchived: false, name: 2},
  ]);

  return (
      <div className='subjectsScreen'>
        <Header />
        <LessonTitle />
        <SubjectLessons />
        <Spacer />
        <TitleSection title="المراحل التي قمت بانجازها" />
        <h3 className='Subjects__Title'>عدد الوحدات المنجزة</h3>
        <div className='archivedUnitsContainer'>
        {
          units.map((unit,index) => {
            return <ArchivedUnit isArchived={unit.isArchived} name={unit.name} />
          })
        }
        </div>

        <h3 className='Subjects__Title'>عدد الدروس المنجزة</h3>
        <div className='archivedUnitsContainer'>
        {
          units.map((unit,index) => {
            return <ArchivedUnit isArchived={unit.isArchived} name={unit.name} />
          })
        }
        </div>

        <ContactTeacher toRight/>
      <Footer />
    </div>
  )
}

export default SubjectsScreen