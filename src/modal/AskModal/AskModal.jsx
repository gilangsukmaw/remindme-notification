import React from 'react'
import { Modal, Col, Form, Button, FormControl, InputGroup} from 'react-bootstrap';
import './AskModal.scss'
import TandaTanya from '../../img/emojione-monotone_question-mark.png'
import {Link} from 'react-router-dom';

function AskModal() {
    const [modalShow, setModalShow] = React.useState(false);

    function AskModal(props) {
       


        return (
        <>


        <Modal className='AskModal shadow' sytle={{maxWidth:'1rem'}} {...props} size="lg"
            aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <img style={{width:'57px'}} src={TandaTanya}></img>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body  style={{}}>
                <p className='text-dark ' style={{fontWeight:'580', fontSize:'1.5rem', }}>
                   
                    Are you sure want to<br></br>
delete this note?
                </p>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-between' style={{width:'90%'}}>
                <Link to="#"><Button variant='outline-warning'
                        style={{color:'black',padding:'0.5rem 2rem 0.5rem 2rem',height:'3.5rem' , width:'9rem', borderRadius:'35px', fontWeight:'700', fontSize:'1.5rem'}}
                        onClick={props.onHide}>Yes</Button></Link>
                        <Link to="#"><Button variant='warning'
                        style={{padding:'0.5rem 2rem 0.5rem 2rem',height:'3.5rem' , width:'9rem', borderRadius:'35px', fontWeight:'700', fontSize:'1.5rem'}}
                        onClick={props.onHide}>No</Button></Link>
            </Modal.Footer>
           
        </Modal>

        </>
        );
        }

    return (
        <div>
            
            <Button onClick={()=> setModalShow(true)}>AskModal Modal (Tombol Sementara)</Button>
            <AskModal show={modalShow} onHide={()=> setModalShow(false)} />

        </div>
    )

}

export default AskModal
