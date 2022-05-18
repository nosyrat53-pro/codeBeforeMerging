import React,{useState , useEffect} from 'react';
import Lesson from '../lesson';
import './index.css';

function UnitLessons({children}) {
    const [lessons,setLessons] = useState([]);


    useEffect(() => {
        const lessonsClone = lessons;
        for(let i = 0; i < 4; i++){
            lessonsClone.push(i+1);
        }
        setLessons(current => [...lessonsClone])
    }, []);

  return (
    <div className='unit__lessons'>
        <div className='unintLessons__content'>
            {lessons.map((lesson,id) => {
                    if(id % 2 == 0){return  <Lesson key={id} btnText="البدء بالدرس" starsNum={45} lessonName="الهندسة" lessonNum="الدرس الاول" lessonTime="دقيقة 60"/>} 
                    else {return  <Lesson key={id} isLock btnText="البدء بالدرس" starsNum={45} lessonName="الهندسة" lessonNum="الدرس الاول" lessonTime="دقيقة 60"/>}
            })}      
        </div>
    </div>
  )
}

export default UnitLessons