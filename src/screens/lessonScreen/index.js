import React, { useState } from 'react';
import Comment from '../../components/comment';
import Footer from '../../components/footer';
import Header from '../../components/header';
import LeaveComment from '../../components/LeaveComment';
import ScreenTitle from '../../components/ScreenTitle';
import Slider from '../../components/slider';
import TitleSection from '../../components/titleSection';
import news from '../../assets/icons/news.png';
import './index.css';
import { Carousel } from 'react-bootstrap';
import pdfImg from '../../assets/icons/pdf.png';
import Attachment from '../../components/attachment';
import mp3FileImg from '../../assets/icons/mp3file.png';
import Questino from '../../components/questino';
import Button from '../../components/button';
import ContactTeacher from '../../components/contactTeacher';
import mypdfFile from '../../assets/pro_react_16.pdf';
import mymp3File from '../../assets/clock_sound.mp3';

function LessonScreen(props) {
    const [arr,setArr] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [finishExam,setFinishExam] = useState(false);

    const handleDownloadPdf = () => { 
    }

    const handleOpenPdf = (e) => {
        window.open(mypdfFile,'resizeable,scrollbar');
    }

    const handledownloadMp3 = () => {
    }

    const handleOpenMp3 = () => {
        
    }

  return (
    <div className='lessonScreen'>
        <Header />
        <ScreenTitle 
        title="مادة الرياضيات"
        secondTitle="مدة الإنجاز"
        secondTitleNum="د40"
        thirdTitle="عدد النقاط"
        thirdTitleNum="55"
        completTitle="الوحدة الاولى"
        lessonNum="الدرس الاول"
        />

        <div className='whatUWlearn'>
            <div className='imageCon'>
            <img src={news} alt="" />
            </div>

            <div className='content'>
                <h2> ماذا ستتعلم في هذا الدرس</h2>
                <ul>
                    <li>سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه </li>
                    <li>سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه </li>
                    <li>سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه سوف نتعلم يلي بدكياه </li>
                </ul>
            </div>
        </div>

        <TitleSection title="مرفقات الدرس الاول" />
        <div className='imageGallary'>
            <div className='title'>
                <h4>معرض الصور</h4>
            </div>

            <div className='slider'>
            <Carousel >
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={news}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    {/* <h5 className='descImage'>شرح عن الصورة</h5> */}
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={news}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    {/* <h5 className='descImage'>شرح عن الصورة</h5> */}
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={news}
                alt="Second slide"
                />
             <Carousel.Caption>
                {/* <h5 className='descImage'>شرح عن الصورة</h5> */}
               {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
             </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
            </div>
        </div>

        <div className='paperAttach'>
            <div className='title'>
                <h4>المرفقات الكتابية</h4>
            </div>

            <Slider gap={30}>
                {arr.map((id) => {
                    return <Attachment 
                    key={id}
                    img={pdfImg} 
                    title="أسئلة الدرس"
                    btn1Text="تحميل"
                    btn2Text="تصفح"
                    link={mypdfFile}
                    btn1function={() => handleDownloadPdf()}
                    btn2function={(e) => handleOpenPdf(e)}
                    />
                })}

            </Slider>
        </div>

        <div className='paperAttach'>
            <div className='title'>
                <h4>المرفقات الصوتية</h4>
            </div>

            <Slider gap={30}>
                {arr.map((id) => {
                    return <Attachment 
                    key={id}
                    img={mp3FileImg} 
                    title="أسئلة الدرس"
                    link={mymp3File}
                    btn1Text="تحميل"
                    btn2Text="تشغيل"
                    btn1function={() => handledownloadMp3()}
                    btn2function={() => handleOpenMp3()}
                    />
                })}

            </Slider>
        </div>

        <TitleSection title="أسئلة الدرس الأول" />
        <div className='lesson__questions'>
            <ol type='1' className='questions__container'>
                {arr.map((row,index) => {
                 
                    return  <Questino 
                            showAnswersToUser={finishExam}
                            key={row}
                            row={row}
                            question="The question will be right over"
                            options={[
                                {id:1,text:'lorem ipsum1',status: true, checked: false},
                                {id:2,text:'lorem ipsum2',status: false, checked: false},
                                {id:3,text:'lorem ipsum3',status: false, checked: false},
                                {id:4,text:'lorem ipsum4',status: false, checked: false}
                            ]}
                            isTrue={index % 2 == 0 ? true : false}
                            marks={2}
                            />
                
                })}
     
            </ol>
        </div>
        
        {   !finishExam ?
            <Button 
            text="إنهاء الاختبار" 
            className={`lessonsSecreen__FinishExamBtns`}
            onclick={() => setFinishExam(true)}
            /> 
            : 
            <Button text="النتيجة 95/100" className="examResultBtn" />
        }

        <TitleSection title="الأسئلة المتكررة"/>
        <div className='c'>
            <ul>
                <li>
                    <div className='ques'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                    <div className='explan'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div> 
                </li>
                <li>
                <div  className='ques'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                    <div className='explan'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div> 
                </li>
                <li>
                <div  className='ques'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                    <div className='explan'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div> 
                </li>
            </ul>
            
            <div className='buttonsContianer'>
                <button className='finshLesson'>إنهاء الدرس</button>
                <button className='goBackWard'>الرجوع</button>
            </div>
        </div>

        <ContactTeacher toRight/>

        <TitleSection title="أبرز التعليقات" />
        <Slider isComments>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Slider>
        <LeaveComment />
        <Footer />
        </div>
  )
}

export default LessonScreen;