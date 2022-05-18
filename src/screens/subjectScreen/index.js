import React, {useRef} from 'react';
import './index.css';
import Header from '../../components/header';
import ScreenTitle from '../../components/ScreenTitle';
import chalkImg from '../../assets/icons/chalks2x.png';
import maskImg from '../../assets/images/mask.png';
import lesson from '../../assets/images/lesson.png';
import {Accordion} from 'react-bootstrap'
import lock from '../../assets/icons/lock.png';
import Comment from '../../components/comment';
import Footer from '../../components/footer';
import Slider from '../../components/slider';
import TitleSection from '../../components/titleSection';
import Button from '../../components/button';
import ContactTeacher from '../../components/contactTeacher';

function SubjectScreen() {
    const SliderRef = useRef();

  return (
    <div className='subjectScreenn'>

        <Header />

        <ScreenTitle 
        title="مادة الرياضيات"
        secondTitle="عدد الوحدات"
        secondTitleNum="12"
        thirdTitle="عدد الدروس"
        thirdTitleNum="55"
        />

        <div className='subject__videoScection'>
            <div className='subject__videoScection__explanation'>
                <h1><img src={chalkImg} alt="title" /> فيديو تعريفي بالمادة</h1>
                <p>orem ipsum dolor sit amet,ac ultrices odio tincidunt et. Fusce id semper nibh. Nulla at diam viverra, dapibus urna non, scelerisque eros. Vestibulum tincidunt urna nisi, quis auctor justo lobortis quis. Pellentesque tincidunt blandit sapien, quis ultrices velit volutpat sed.</p>
            </div>

            <div className='subject__videoScection__video'>
                <video src="https://www.youtube.com/watch?v=sca4VG9b0NY" controls />
            </div>
        </div>

        <div>
        <div className='subject__videoScection'>
                <div className='subject__videoScection__explanation'>
                    <h1><img src={chalkImg} alt="title" /> اسم الاستاذ - اسم المادة</h1>
                    <p>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et. Fusce id semper nibh. Nulla at diam viverra orem ipsum dolor sit amet,ac ultrices odio tincidunt et. Fusce id semper nibh. Nulla at diam viverra, dapibus urna non, scelerisque eros. Vestibulum tincidunt urna nisi, quis auctor justo lobortis quis. Pellentesque tincidunt blandit sapien, quis ultrices velit volutpat sed.</p>
                </div>

                <div className='subject__videoScection__video'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWm_741qaM08Rn2xI5WTsmgSnwbgkoDdhrg&usqp=CAU" alt="teacher's pic" />
                </div>

            </div>
            <ContactTeacher />
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
                        <li>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et.</li>
                        <li>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et.</li>
                        <li>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et.</li>
                    </ul>

                    <img src={maskImg} alt="" />
                </div>
        </div>

        <div className='subject__openLessons'>
                <TitleSection title="الدروس المفتوحة" />
                <div className='lessons__container'>
                    <div className='lesson'>
                        <img src={lesson} alt="" />
                        <div className='lesson__details'>
                            <h3>اسم الدرس</h3>
                            <div className='lesson__teacherTime'>اسم المدرس <span className='infos__circle'></span> المدة</div>
                            <div className='lesson__infos'>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et. Fusce id semper nibh. Nulla at diam viverra orem ipsum dolor sit amet,ac ultrices odio tincidunt et. Fusce id semper nibh. Nulla at diam viverra, dapibus urna non, scelerisque eros. Vestibulum tincidunt urna nisi, quis auctor justo lobortis quis.</div>
                        </div>
                    </div>

                    <div className='lesson'>
                        <img src={lesson} alt="" />
                        <div className='lesson__details'>
                            <h3>اسم الدرس</h3>
                            <div className='lesson__teacherTime'>اسم المدرس <span className='infos__circle'></span> المدة</div>
                            <div className='lesson__infos'>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et. Fusce id semper nibh. Nulla at diam viverra orem ipsum dolor sit amet,ac ultrices odio tincidunt et. Fusce id semper nibh. Nulla at diam viverra, dapibus urna non, scelerisque eros. Vestibulum tincidunt urna nisi, quis auctor justo lobortis quis.</div>
                        </div>
                    </div>

                    <div className='lesson'>
                        <img src={lesson} alt="" />
                        <div className='lesson__details'>
                            <h3>اسم الدرس</h3>
                            <div className='lesson__teacherTime'>اسم المدرس <span className='infos__circle'></span> المدة</div>
                            <div className='lesson__infos'>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et. Fusce id semper nibh. Nulla at diam viverra orem ipsum dolor sit amet,ac ultrices odio tincidunt et. Fusce id semper nibh. Nulla at diam viverra, dapibus urna non, scelerisque eros. Vestibulum tincidunt urna nisi, quis auctor justo lobortis quis.</div>
                        </div>
                    </div>

                    <div className='lesson'>
                        <img src={lesson} alt="" />
                        <div className='lesson__details'>
                            <h3>اسم الدرس</h3>
                            <div className='lesson__teacherTime'>اسم المدرس <span className='infos__circle'></span> المدة</div>
                            <div className='lesson__infos'>lorem ipsum dolor sit amet,ac ultrices odio tincidunt et. Fusce id semper nibh. Nulla at diam viverra orem ipsum dolor sit amet,ac ultrices odio tincidunt et. Fusce id semper nibh. Nulla at diam viverra, dapibus urna non, scelerisque eros. Vestibulum tincidunt urna nisi, quis auctor justo lobortis quis.</div>
                        </div>
                    </div>
                </div>
        </div>

        <div className='subject__units'>
                <TitleSection title="وحدات المادة" />

                <div className='units__container'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <img src={lock} alt="" />
                            الوحدة الاولى
                            <div className="time" >
                                60 دقيقة - الدرس 11
                            </div>
                            </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    <div className='lesson__number'>الدرس الاول</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الثاني</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الثالث</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الرابع</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الخامس</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الاول</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" disabled>
                        <Accordion.Header>
                            <img src={lock} alt="" />
                            الوحدة الاولى
                            <div className="time" >
                                60 دقيقة - الدرس 11
                            </div>
                            </Accordion.Header>
                        <Accordion.Body>
                        <ul>
                                <li>
                                    <div className='lesson__number'>الدرس الاول</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الثاني</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الثالث</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الرابع</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الخامس</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الاول</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" disabled>
                        <Accordion.Header>
                            <img src={lock} alt="" />
                            الوحدة الثالثة
                            <div className="time" >
                                60 دقيقة - الدرس 11
                            </div>
                            </Accordion.Header>
                        <Accordion.Body>
                        <ul>
                                <li>
                                    <div className='lesson__number'>الدرس الاول</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الثاني</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الثالث</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الرابع</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الخامس</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الاول</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" disabled>
                        <Accordion.Header>
                            <img src={lock} alt="" />
                            الوحدة الرابعة
                            <div className="time" >
                                60 دقيقة - الدرس 11
                            </div>
                            </Accordion.Header>
                        <Accordion.Body>
                        <ul>
                                <li>
                                    <div className='lesson__number'>الدرس الاول</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الثاني</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الثالث</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الرابع</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الخامس</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                                <li>
                                    <div className='lesson__number'>الدرس الاول</div>
                                    <div className='lesson__time'>2:00</div>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
        </div>

        <TitleSection title="أبرز التعليقات" />

        <Slider>
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

        <Button text="اشترك بمادة الرياضيات الآن" />

        <Footer />
 
    </div>
  )
}

export default SubjectScreen;