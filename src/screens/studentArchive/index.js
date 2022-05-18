import React, { useState } from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import TitleSection from '../../components/titleSection';
import math from '../../assets/icons/math.png';
import physics from '../../assets/icons/physics.png';

const StudentArchiveScreen = () => {
    const [states,setStates] = useState([
        {value: '1',text: 'يوم' , checked: false},
        {value: '2',text: 'شهر' , checked: false},
        {value: '3',text: 'سنة', checked: false},
        {value: '4',text: 'مدة زمنية محددة', checked: false}
    ]);
    const [renderInfos,setRenderInfos] = useState(false);

    const handleChange = (e) => {
        let clone = states ;

        if(e.target.value == '4') {
            setRenderInfos(true);
        }else {
            setRenderInfos(false);
        }


        for(let i=0;i<states.length;i++){
            if(clone[i].value === e.target.value ){
                clone[i].checked = true ;
            }else {
                clone[i].checked = false;
            }
        }

        setStates([...clone]);
    }

  return (
      <>
      <Header /> 
      <TitleSection title="المراحل التي قمت باجتيازها" />
    <div className='studenArchiveScreen'>

        <h3 className='maintitle'>الرجاء تحديد المدة الزمنية</h3>
        <div className='chooseTimeLine'>
            <div className='checkboxesContainer'>

            {
                states.map((st,index) => {          
                    return   <div className='checkboxCon'>
                                <input type='checkbox' value={st.value} checked={st.checked} onChange={(e) => handleChange(e)}/>
                                <p>{st.text}</p>
                                </div>
                })
            }
            </div>



        </div>
        {
        renderInfos &&
        <>
        <div className='choosDateContainer'>
                <div className='datepicker'>
                    <p>من تاريخ</p>
                    <input type='date' />
                </div>

                <div className='datepicker'>
                    <p>الى تاريخ</p>
                    <input type='date' />
                </div>
                
                
            </div>
        </>
        }
        <div className='infos'>
            <div className='circleInfoAll'>
                عدد ساعات الدراسة الكلية
                170
            </div>

            <div className='circleInfo yellow'>
                <img src={physics} alt="" />
                <p>الفيزياء</p>
                <p>120</p>
            </div>

            <div className='circleInfo purpl '>
                <img src={math} alt="" />
                <p>العلوم</p>
                <p>120</p>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default StudentArchiveScreen;