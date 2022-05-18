import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './index.css';
import wallet from '../../assets/icons/wallet.png';
// import Button from '../../components/button';
import PopupModal from '../../components/popupModal';
import { Button, Form, Modal } from 'react-bootstrap';
import chalks from '../../assets/icons/chalks.png';
import wall1 from '../../assets/icons/wall1.png';
import crypto from '../../assets/icons/crypto.png';
import folder from '../../assets/icons/folder.png';
import credit from '../../assets/icons/credit.png';
import { FileUploader } from 'react-drag-drop-files';
import addImage from '../../assets/icons/addimage.png';

const WalletScreen = () => {
    const [show, setShow] = useState(false);
    const [step,setStep] = useState(0);
    const [fileTypes,setFileTypes] = useState(["JPG", "PNG", "GIF"]);
    const [file, setFile] = useState(null);

    const handleChange = (file) => {
      setFile(file);
      console.log(file);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const ModalStepZero =  <div className='modalContent'>
                        <div className='top'>
                            <img src={wallet} at={""} />
                            <h4>الرصيد الكلي</h4>
                            <h5>10000</h5>
                        </div>

                        <div className='middle'>

                            <div className='field'>
                                <input type={"text"} />
                                <div>
                                اسم المستخدم
                                <img src={chalks} alt="" />
                                </div>
                            </div>

                            <div className='field'>
                                <input type={"text"} />
                                <div>
                                الرصيد الذي تريد ارساله
                                <img src={chalks} alt="" />
                                </div>
                            </div>

                        </div>

                        <div className='bottom'>
                            <button className='sendBtn'>إرسال</button>
                        </div>
                        </div>;

const ModalStepOne = <div className='modalContent modalstep1ontent'>
                    <div className='top'>
                        <div className='stepImage active' onClick={() => setStep(1)}>
                            <img src={wall1} alt="" />
                        </div>

                        <div className='stepImage' onClick={() => setStep(2)}>
                            <img src={crypto} alt="" />
                        </div>

                        <div className='stepImage' onClick={() => setStep(3)}>
                            <img src={folder} alt="" />
                        </div>

                        <div className='stepImage ' onClick={() => setStep(4)}>
                            <img src={credit} alt="" />
                        </div>
                    </div>

                    <div className='middle'>

                        <div className='field'>
                            <input type={"text"} />
                            <div>
                            المبلغ المراد شحنه
                            <img src={chalks} alt="" />
                            </div>
                        </div>

                        <div className='field'>
                            
                    
                            <div className='uploadFile'>
                                <FileUploader className="holako" handleChange={handleChange} name="file" types={fileTypes} />
                                <img src={addImage} className="addimage" alt="" />
                                {file ? <img src={URL.createObjectURL(file)} className="selectedImage" alt="" /> : null}
                            </div>
                            <div>
                            صورة الفاتورة
                            <img src={chalks} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className='bottom'>
                        <button className='sendBtn'>تأكيد</button>
                    </div>

                    </div>;

const ModalstepTow = <div className='modalContent modalstep1ontent'>
<div className='top'>
    <div className='stepImage' onClick={() => setStep(1)}>
        <img src={wall1} alt="" />
    </div>

    <div className='stepImage active' onClick={() => setStep(2)}>
        <img src={crypto} alt="" />
    </div>

    <div className='stepImage' onClick={() => setStep(3)}>
        <img src={folder} alt="" />
    </div>

    <div className='stepImage' onClick={() => setStep(4)}>
        <img src={credit} alt="" />
    </div>
</div>

<div className='middle'>

    <div className='field'>
        <input type={"text"} />
        <div>
        رقم الشحن
        <img src={chalks} alt="" />
        </div>
    </div>

    {/* <div className='field'>
        
  
        <div className='uploadFile'>
            <FileUploader className="holako" handleChange={handleChange} name="file" types={fileTypes} />
            <img src={addImage} className="addimage" alt="" />
        </div>
        <div>
        صورة الفاتورة
        <img src={chalks} alt="" />
        </div>
    </div> */}

</div>

<div className='bottom'>
    <button className='sendBtn'>تأكيد</button>
</div>

</div>;


const ModalSteopThree = <div className='modalContent modalstep1ontent'>
<div className='top'>
    <div className='stepImage' onClick={() => setStep(1)}>
        <img src={wall1} alt="" />
    </div>

    <div className='stepImage' onClick={() => setStep(2)}>
        <img src={crypto} alt="" />
    </div>

    <div className='stepImage active' onClick={() => setStep(3)}>
        <img src={folder} alt="" />
    </div>

    <div className='stepImage' onClick={() => setStep(4)}>
        <img src={credit} alt="" />
    </div>
</div>

<div className='middle'>

    <div className='field'>
        <input type={"text"} />
        <div>
        رقم الكرت
        <img src={chalks} alt="" />
        </div>
    </div>

    {/* <div className='field'>
        
  
        <div className='uploadFile'>
            <FileUploader className="holako" handleChange={handleChange} name="file" types={fileTypes} />
            <img src={addImage} className="addimage" alt="" />
        </div>
        <div>
        صورة الفاتورة
        <img src={chalks} alt="" />
        </div>
    </div> */}

</div>

<div className='bottom'>
    <button className='sendBtn'>تأكيد</button>
</div>

</div>;

const ModalsteopFour =  <div className='modalContent modalstep1ontent'>
<div className='top'>
    <div className='stepImage' onClick={() => setStep(1)}>
        <img src={wall1} alt="" />
    </div>

    <div className='stepImage' onClick={() => setStep(2)}>
        <img src={crypto} alt="" />
    </div>

    <div className='stepImage' onClick={() => setStep(3)}>
        <img src={folder} alt="" />
    </div>

    <div className='stepImage active' onClick={() => setStep(4)}>
        <img src={credit} alt="" />
    </div>
</div>

<div className='middle'>

    <div className='field'>
        <input type={"text"} />
        <div>
        رقم البطاقة
        <img src={chalks} alt="" />
        </div>
    </div>

    <div className='field'>
        <input type={"text"} />
        <div>
        تاريخ البطاقة
        <img src={chalks} alt="" />
        </div>
    </div>

    <div className='field'>
        <input type={"text"} />
        <div>
        تاريخ البطاقة
        <img src={chalks} alt="" />
        </div>
    </div>

    <div className='field'>
        <input type={"text"} />
        <div>
        تاريخ البطاقة
        <img src={chalks} alt="" />
        </div>
    </div>

</div>

<div className='bottom'>
    <button className='sendBtn'>تأكيد</button>
</div>

</div>

    const renderExactPopupModal = (stopNum) =>{
        switch (stopNum) {
            case 0:
                return ModalStepZero;
                break;
                case 1:
                return ModalStepOne;
                    break;

                    case 2:
                        return ModalstepTow;
                        break;
                        case 3:
                            return ModalSteopThree;
                            break;
                            case 4:
                                return ModalsteopFour;
                                break;
            default:
                break;
        }
    } 

  return (
      <>
      <Header />
        <div className='walletScreen'>
        <div className='walletContent'>

            <div className='right'>
                <h3 className='title'>
                    آلية عمل المحفظة
                </h3>
                <div className='description'>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                </div>
            </div>

            <div className='left'>
                <img src={wallet} alt="" />
                <h3>الرصيد الكلي</h3>
                <h3> 10000 </h3>
            </div>

        </div>

        <div className='buttonsContainer'>

            <button className='sendBtn' onClick={() => { handleShow() ; setStep(0)}}>
                إرسال رصيد
            </button>

            <button className='chargeBtn' onClick={() => {setStep(1); setShow(true)}}>
                شحن المحفظة
            </button>
            </div>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
              
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {renderExactPopupModal(step)}
        </Modal.Body>

        <Modal.Footer>
            
        </Modal.Footer>
      </Modal>
        </div>
        <Footer />
    </> 
  )
}

export default WalletScreen