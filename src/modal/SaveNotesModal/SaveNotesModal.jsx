import React from 'react'
import { Modal, Col, Form, Button, FormControl, InputGroup} from 'react-bootstrap';
import './SaveNotesModal.scss'
import Ceklis from '../../assets/images/signupChecklist.png'
import {Link} from 'react-router-dom';

function SaveNotes() {
const [modalShow, setModalShow] = React.useState(false);

        function SaveNotes(props) {



        return (
        <>


            <Modal className='SaveNotes shadow' sytle={{maxWidth:'1rem'}} {...props} size="lg"
                aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <img style={{width:'57px'}} src={Ceklis}></img>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{}}>
                    <p className='text-dark ' style={{fontWeight:'580', fontSize:'1.5rem', }}>
                        Congratulations!<br></br>
                        You successfully saved <br></br>
                        your Note

                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="#"><Button variant='warning'
                        style={{padding:'0.5rem 2rem 0.5rem 2rem',height:'3.5rem' , width:'18rem', borderRadius:'35px', fontWeight:'700', fontSize:'1.5rem'}}
                        onClick={props.onHide}>Ok</Button></Link>
                </Modal.Footer>

            </Modal>

        </>
        );
        }

        return (
        <div>

            <Button onClick={()=> setModalShow(true)}>SaveNotes Modal (Tombol Sementara)</Button>
            <SaveNotes show={modalShow} onHide={()=> setModalShow(false)} />

        </div>
        )

}

export default SaveNotes