import React, { useState } from 'react';
import './index.css';

const OurTable = ({
    exam = false , 
    titles = ['الحالة' ,'الاسم','التاريخ','وقت البدء','وقت الانتهاء'],
    editable = false
}) => {
    const [ar,setArr] = useState([1,2,3,4,5,5,6]);
    const [saveChanges,setSaveChanges] = useState('');

    const [subjects,setSubjects] = useState([
        {state: 'ready',name: 'الرياضيات',date: 'التاريخ' , TimeToStart: '15:00', TimeToEnd: '17:00'},
        {state: 'ready',name: 'الرياضيات',date: 'التاريخ' , TimeToStart: '15:00', TimeToEnd: '17:00'},
        {state: 'hanging',name: 'الرياضيات',date: 'التاريخ' , TimeToStart: '15:00', TimeToEnd: '17:00'},
        {state: 'hanging',name: 'الرياضيات',date: 'التاريخ' , TimeToStart: '15:00', TimeToEnd: '17:00'},
        {state: 'hanging',name: 'الرياضيات',date: 'التاريخ' , TimeToStart: '15:00', TimeToEnd: '17:00'},
        {state: 'unready',name: 'الرياضيات',date: 'التاريخ' , TimeToStart: '15:00', TimeToEnd: '17:00'}
    ]);

    const maintimes = ['9:00-2:00' ,'9:00-2:00','9:00-2:00','9:00-2:00'];

    const [days,setDays] = useState([
        'السبت',
        'الاحد',
        'الاثنين',
        'الثلاثاء',
        'الاربعاء',
        'الخميس',
        'الجمعة'
    ]);

    const checkExamState = (state) => {
        if(state == 'hanging') return '#24C1D4';
        if(state =='ready') return 'rgba(226, 174, 251, 0.967)';
        if(state == 'unready') return '#11B922';
    } 

    const handleChange = (e) => {
        e.stopPropagation();

        e.target.style.display = 'none';

        setSaveChanges(e.target.textContent);

        const input = document.createElement("textarea");
            input.innerHTML = e.target.textContent;
            e.target.parentElement.appendChild(input);

            input.classList.add('tempTextField');

            input.onkeydown = function(e){
                setSaveChanges(e.target.value);
                console.log(input.value);
            }

            input.onfocus = function() {
                setSaveChanges(e.target.textContent);
            } 

            input.focus();

        input.addEventListener('blur',() => {
            input.remove();

            if(e.target.classList.contains('content')){
                e.target.textContent = saveChanges;
                e.target.style.display = 'flex';
            }else {
                e.target.textContent = saveChanges;
                e.target.style.display = 'block';
            }
        })
    }

  return (
    <div className='table'>

        {
        !exam ?
        <div className='leftContent'>
            الفترات
        </div>
        : null
        }

        <div className='rightContent'>

            {!exam ? <div className='times'><div className='text'>الايام</div></div> : null}

        <table>

        <tbody>          
    
            <tr className={`${exam && ' exam'}`}>
                {maintimes.map((element,index) => {
                    if(index ==0){
                        return <>
                            <td  className={`${exam && 'examThead'} thead`}></td>
                            <td className={`${exam && 'examThead'} thead`}><div onDoubleClick={(e) => handleChange(e)}>{element}</div></td>
                        </>
                    }
                    return <td className={`${exam && 'examThead'} thead`}><div onDoubleClick={(e) => handleChange(e)}>{element}</div></td>
                })}  
                {exam? <td className={`${exam && 'examThead'} thead`}></td> : null}       
            </tr> 


            {
                exam ? 
                subjects.map((subject,index) => {
                    return  <tr className={`${exam && ' exam'}`} style={{backgroundColor: checkExamState(subject.state)}}>
                                <td className={`${exam && 'examDay'} day`}>{index+1}</td>
                                <td><div className='content'>{subject.state}</div></td>
                                <td><div className='content'>{subject.name}</div></td>
                                <td><div className='content'>{subject.date}</div></td>
                                <td><div className='content'>{subject.TimeToStart}</div></td>
                                <td><div className='content'>{subject.TimeToEnd}</div></td>
                                {
                                    exam ? <td><div className='content'>
                                    {subject.state=='ready'? <button>بدء الاختبار</button>:null}
                                    </div></td> 
                                    :null
                                }

                                </tr>
                }) :
                days.map((el,index) => {
                    return  <tr className={`${exam && ' exam'}`}>
                                <td data-day={days.indexOf(el)} ><div className='content'>{el}</div></td>
                                <td><div className='content'>علوم</div></td>
                                <td><div className='content'>علوم</div></td>
                                <td><div className='content'>علوم</div></td>
                                <td><div className='content'>علوم</div></td>
                            </tr>
                })
            }
        </tbody>
        </table>
        </div>
    </div>
  )
}

// this code below to make the table editable
// days.map((el,index) => {
//     return  <tr className={`${exam && ' exam'}`}>
//                 <td data-day={days.indexOf(el)} ><div className='content'>{el}</div></td>
//                 <td><div onDoubleClick={(e) => handleChange(e)} className='content'>علوم</div></td>
//                 <td><div onDoubleClick={(e) => handleChange(e)} className='content'>علوم</div></td>
//                 <td><div onDoubleClick={(e) => handleChange(e)} className='content'>علوم</div></td>
//                 <td><div onDoubleClick={(e) => handleChange(e)} className='content'>علوم</div></td>
//             </tr>
// })

export default OurTable