import React, { useRef, useState } from 'react';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Table from '../../components/table';
import './index.css';
import Spacer from '../../components/spacer';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

const Program = ({}) => {

  const [edit,setEdit] = useState(false);
  const tableRef = useRef();

  const handleEditProgram = () => {
    setEdit(true);
  }

  function savePdf() {
    const myTable = tableRef.current ;
    html2canvas(myTable , {onclone: (docuemnt) => {
   
    }}).then((canvas) => {
      const img = canvas.toDataURL('image/jpeg');
      console.log(img);
      const pdf = new jsPDF();
      pdf.addImage(img , "JPEG" , 0 ,0 , 210,200);
      pdf.save('Program.pdf');
    });
  }

  return (
    <>
    <Header />
    <div className='program'>
        <div className='program__title'>برنامج الاستاذ</div>
        <div ref={tableRef}>
          <Table editable={edit} />
        </div>
        <Button text="تحميل البرنامج" className="stickProgramBtn" onclick={() => { handleEditProgram() ; savePdf();}}/>

        <Spacer />

        {/* <Button text="الاختبارات" className="stickProgramBtn" /> */}

        {/* <Table exam /> */}
    </div>
    <Footer />
    </>
  )
}

export default Program