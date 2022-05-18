import React from 'react';
import './index.css';
import Header from '../../components/header';
import ScreenTitle from '../../components/ScreenTitle';
import chalkImg from '../../assets/icons/chalks2x.png';
import maskImg from '../../assets/images/mask.png';
import { Accordion } from 'react-bootstrap';
import Exam from '../../components/exam';
import Footer from '../../components/footer';
import Comment from '../../components/comment';
import TitleSection from '../../components/titleSection';
import Slider from '../../components/slider';
import UnitLessons from '../../components/unitLessons';
import LeaveComment from '../../components/LeaveComment';
import Button from '../../components/button';


function UnitScreen() {

  return (
    <div className='unitscreen'>
        <Header />

        <ScreenTitle 
        title="مادة الرياضيات"
        secondTitle="عدد الدروس"
        secondTitleNum="12"
        thirdTitle="عدد النقاط"
        thirdTitleNum="55"
        completTitle="الوحدة الاولى"
        startDate="11/5/2022"
        endDate="12/5/2022"
        />

        <div className='subject__videoScection'>
            <div className='subject__videoScection__explanation'>
                <h1><img src={chalkImg} alt="title" />ماذا ستتعلم في هذه الوحدة</h1>
                <p>orem ipsum dolor sit amet,ac ultrices odio tincidunt et. Fusce id semper nibh. Nulla at diam viverra, dapibus urna non, scelerisque eros. Vestibulum tincidunt urna nisi, quis auctor justo lobortis quis. Pellentesque tincidunt blandit sapien, quis ultrices velit volutpat sed.</p>
            </div>

            <div className='subject__videoScection__video'>
                <video src="https://www.youtube.com/watch?v=sca4VG9b0NY" controls />
            </div>
        </div>

        <div className="subject__section">
                <TitleSection title="المتطلبات" />
                <div className='subject__content'>
                    <ul>
                        <li>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et.</li>
                        <li>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et.</li>
                        <li>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et.</li>
                        <li>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et.</li>
                        <li>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et.</li>
                        <li>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et.</li>
                    </ul>

                    <img src={maskImg} alt="" />
                </div>
        </div>

        <div className='unitscreen__inifoAccordion'>
        <Accordion className='acord'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>ماذا ستتعلم في هذه الوحدة</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>ما هي دروس هذه الوحدة</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>ما هي دروس هذه الوحدة</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>

        <TitleSection title="دروس الوحدة الأولى" />
        <UnitLessons />

                <TitleSection title="اختبار الوحدة الأولى النهائي" />
                <Slider>
                    <Exam />
                    <Exam />
                    <Exam />
                    <Exam />
                    <Exam />
                    <Exam />
                    <Exam />
                    <Exam />
                </Slider>

                <Button text="طلب تأشيرة الخروج من الوحدة" />

                <TitleSection title="أسئلة فوق المستوى" />
                <Slider>
                        <Exam topQuestions isLock TQLocked />
                        <Exam topQuestions isLock TQLocked />
                        <Exam topQuestions isLock TQLocked />
                        <Exam topQuestions isLock TQLocked />
                        <Exam topQuestions isLock TQLocked />
                        <Exam topQuestions isLock TQLocked />
                        <Exam topQuestions isLock TQLocked />
                        <Exam topQuestions isLock TQLocked />
                </Slider>
                
                <TitleSection title="أبرز التعليقات" />
                <Slider isComments>
                        <Comment />
                        <Comment />
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

export default UnitScreen;