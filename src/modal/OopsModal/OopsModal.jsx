import React from 'react'
import { Modal, Col, Form, Button, FormControl, InputGroup} from 'react-bootstrap';
import './OopsModal.scss'
import Cross from '../../img/OopsCross.png'
import {Link} from 'react-router-dom';

function OopsModal() {
    const [modalShow, setModalShow] = React.useState(false);

    function OopsModal(props) {
       


        return (
        <>


        <Modal className='OopsModal shadow' sytle={{maxWidth:'1rem'}} {...props} size="lg"
            aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <img style={{width:'57px'}} src={Cross}></img>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body  style={{}}>
                <p className='text-dark ' style={{fontWeight:'580', fontSize:'1.5rem', }}>
                    Oops!<br></br>
                    there's something<br></br>
                    wrong with our system<br></br>
                    please wait a minute
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Link to="#"><Button variant='warning'
                        style={{padding:'0.5rem 2rem 0.5rem 2rem',height:'3.5rem' , width:'20rem', borderRadius:'35px', fontWeight:'700', fontSize:'1.5rem'}}
                        onClick={props.onHide}>Ok</Button></Link>
            </Modal.Footer>
           
        </Modal>

        </>
        );
        }

    return (
        <div>
            
            <Button onClick={()=> setModalShow(true)}>Opps Modal (Tombol Sementara)</Button>
            <OopsModal show={modalShow} onHide={()=> setModalShow(false)} />

        </div>
    )

}

export default OopsModal
