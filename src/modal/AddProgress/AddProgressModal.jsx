import React from 'react'
import { Modal, Col, Form, Button, FormControl, InputGroup} from 'react-bootstrap';
import './AddProgressModal.scss'
import Logo from '../../assets/images/AddProgressLogo.png'
import {Link} from 'react-router-dom';

function AddProgressModal() {
const [modalShow, setModalShow] = React.useState(false);

function AddProgressModal(props) {



return (
<>


    <Modal  className='AddProgressModal shadow' {...props} size="lg" aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton >

        </Modal.Header>
        <Modal.Title className='AddProgressTitle ' id="contained-modal-title-vcenter">
            <img className='MainTitle' style={{width:'34px', height:'34px', marginRight:'1rem'}} src={Logo}></img>
            <div className='MainTitle'>Add Progress</div>
        </Modal.Title>
        <div className='SetProgress' style={{marginBottom:'-6rem', fontSize:'22px',fontWeight:'700',marginTop:'2rem', }}>
            <p>Set Progress</p>
        </div>
        <Modal.Body className='text-dark' >
            <Form className='ProgressValue'>
                <Form.Group className="ValuePlaceholderLeft PlaceHolder" controlId="enter value">
                    <Form.Control style={{float:'right', marginRight:'0.5rem', borderRadius:'10px', border:'2px solid #B6C6E5'}} type="text"
                        placeholder="Enter Value" />
                </Form.Group>
                <Form.Group className="ValuePlaceholderRight PlaceHolder" controlId="enter value">
                    <Form.Control disabled style={{marginLeft:'0.5rem', borderRadius:'10px', border:'2px solid #B6C6E5'}} type="text"
                        placeholder="km" />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer className="SaveButton">
            <Link to="#"><Button style={{ borderRadius:'35px', fontWeight:'700', fontSize:'1.5rem'}}
                onClick={props.onHide}>Save</Button></Link>
        </Modal.Footer>

    </Modal>

</>
);
}

return (
<div>

    <Button onClick={()=> setModalShow(true)}> <img className='MainTitle'
            style={{width:'34px', height:'34px', marginRight:'1rem'}} src={Logo}></img>
        <div className='MainTitle'>Add Progress</div>
    </Button>
    <AddProgressModal show={modalShow} onHide={()=> setModalShow(false)} />

</div>
)

}

export default AddProgressModal