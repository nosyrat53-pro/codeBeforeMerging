import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import './index.css';
import rightAnswer from '../../assets/icons/rightcheckbox.png';
import wrongAnswer from '../../assets/icons/wrongcheckbox.png';



function Questino({question ,options, marks,showAnswersToUser = false,row,}) {

    const [state,setState] = useState({checked: false});
    const [answers,setAnswers] = useState([...options]);
    const [positions,setPositions] = useState([]);

    const handlechange = (event) => {
        
            let ans = [...answers];

            for(let i = 0; i < ans.length ; i++){
                if(ans[i].text == event.target.value){
                    ans[i].checked = true;
                    console.log(row+' / ' + ans[i].id);

                }else {
                    ans[i].checked = false;
                }
            }

            setAnswers(ans);
    }

  return (
    <li className={`question`}>
        <div className='question__container'>

            <div className='topsection'>
                <h6>{question}</h6>
                <span>{`( ${marks}${marks == 1 ? 'mark' : 'marks'} )`}</span>
            </div>

            <div className='answers'>
                
                {
                    showAnswersToUser ?  
                    answers.map((answer,id) => {
                        return <div className={`answerItself ${answer.status ? 'rightAnswer' : null } ${!answer.status && answer.checked ? 'wrongAnswer' : null}`}>
                            <label>{answer.text}</label>
                            <input type='checkbox' className={`${answer.checked || answer.status ? 'hidecheckbox' : ''}`}  checked={answer.checked} onChange={(e) => handlechange(e)} value={answer.text} name={id} />
                            <div className='statusImage'>
                                {answer.status ? <img src={rightAnswer} alt=""/> : null }
                                {!answer.status && answer.checked ? <img src={wrongAnswer} alt=""/> : null }
                            </div>
                        </div>
                    }) 
                    :
                    answers.map((answer,id) => {
                        return <div className={`answerItself`}>
                                    <label>{answer.text}</label>
                                    <input type="checkbox" checked={answer.checked} onChange={(e) => handlechange(e)} value={answer.text} name={id} />
                                </div>
                    })
                }
            </div>
        </div>
    </li>
  )
}
// <img src={wrongAnswer} alt=""/>

// className={`${answer.checked &&  ? 'hidecheckbox' : ''}`} 
export default Questino