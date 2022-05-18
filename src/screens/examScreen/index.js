import React, { useState , useEffect} from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import ScreenTitle from '../../components/ScreenTitle';
import TitleSection from '../../components/titleSection';
import timer from '../../assets/icons/timer.png';
import './index.css';
import Slider from '../../components/slider';
import { FileUploader } from "react-drag-drop-files";
import addImage from '../../assets/icons/addimage.png';
import Attachment from '../../components/attachment';
import pdfImage from '../../assets/icons/pdf.png';

function ExamScreen() {

    const [fileTypes,setFileTypes] = useState(["JPG", "PNG", "GIF"]);
    const [examTime,setExamTime] = useState(6);
    const [startExam,setStartExam] = useState(false);
    const [examIsFinished,setExamIsFinished] = useState(false); 
    const [file, setFile] = useState(null);
    const [allFiles,setAllFiles] = useState([]);

    const handleChange = (file) => {
      setFile(file);
    };

    useEffect(() => {
        let interval;
        if(startExam == true) {
            interval = setInterval(() => {

            if(examTime != 0){
                setExamTime((currentValue) => currentValue -1);
            }else {
                clearInterval(interval);
                setExamIsFinished(true);
            }

            },1000);
        }

        if(examIsFinished) {
            clearInterval(interval);
        }
    },[startExam,examIsFinished]);

    useEffect(() => {
        const sliderImages = [...allFiles];
        //console.log(sliderImages)
        let url;
        if(file){
         url = window.URL.createObjectURL(file) ;
        }
        sliderImages.push(url);

        setAllFiles(sliderImages);

    },[file]);

    const formatSecondsToMinutes = (seconds) => {
        const CompletMinutes = Math.floor(seconds/60);
        const restSeconds = seconds - (60*CompletMinutes) ;
        return `${CompletMinutes < 10 ? '0'+CompletMinutes:CompletMinutes}:${restSeconds < 10 ?'0'+restSeconds:restSeconds}` ;
    }
    
  return (
    <div className='examScreen'>
        <Header />
        <ScreenTitle 
        title="مادة الرياضيات"
        completTitle="الوحدة الأولى"
        lessonNum="اسم الاختبار"
        secondTitle={"مدة الانجاز"}
        secondTitleNum={"40د"}
        thirdTitle={"عدد النقاط"}
        thirdTitleNum={"55"}
        />

        <div className='examScreen__explanatino'>
            <h2>شرح عن الاختبار</h2>
            <ul>
                <li>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </li>
                <li>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </li>
            </ul>
        </div>


        {startExam ? 
                <div className='examItself'>
                <TitleSection title="الأسئلة" />
                <div className='examItself__content'>
                    <div className='timer'>
                    {formatSecondsToMinutes(examTime)}
                        <img src={timer} alt="" />
                    </div>
        
                    <div className='questions'>
                        <ul>
                            <li>
                                الأسئلة
                            </li>
                        </ul>
                        
                    <Slider>
                        {/* <img src={timer} alt="" />
                        <img src={timer} alt="" />
                        <img src={timer} alt="" /> */}
                    </Slider>
        
                    <ul>
                            <li>
                                أرفق الأجوبة
                            </li>
                        </ul>

                        <div className='questions__answersContainer'>
                            <div className='uploadFile'>
                                <FileUploader className="holako" handleChange={handleChange} name="file" types={fileTypes} />
                                <img src={addImage} className="addimage" alt="" />
                            </div>
                            { // dist ... static width of the images
                                file ? 
                                <Slider dist={200} gap={30}>
                                    {
                                        allFiles.map((img,index) => {
                                            return <img src={img} className="imageAnswer" alt="" />
                                        })
                                    }
                                    
                                </Slider>
                                : null 
                            }
                        </div>
                    </div>
        
                </div>
                
        <div className='finishExamBtn'>

            { examIsFinished ?   
             <div className='examFinished'>
                تم إنهاء الاختبار
            </div> :
            <button onClick={() => setExamIsFinished(true)}>إنهاء الاختبار</button>
            }

        </div>
            {
                examIsFinished ?
                <div className='lessonAnswers'>  
                    <Attachment 
                    title="أسئلة الدرس" 
                    img={pdfImage} 
                    btn1Text="تحميل" 
                    btn2Text="تصفح" 
                    />
                </div> : null
            }
        </div> :
                
            <div className='BtnContainer'>
                <button  onClick={() => setStartExam(true)} className='startExamBtn'>البدء بالاختبار</button>
            </div>
        
        }


        
        <Footer />
        </div>
  )
}

export default ExamScreen