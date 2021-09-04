import React from 'react'
import { Modal, Col, Form, Button, FormControl, InputGroup} from 'react-bootstrap';
import './AddProgressModal.scss'
import Logo from '../../assets/images/AddProgressLogo.png'
import {Link} from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoals, getDetailGoals } from "../../redux/action/goals";


function AddProgressModal(props) {
const [modalShow, setModalShow] = React.useState(false);
const {color, type, id} = props;
// console.log (type)
// console.log (color)
// console.log (id)

function AddProgressModal(props) {
    const dispatch = useDispatch();

    const {color, type, id} = props;
    // console.log (type)
    // console.log (color)
    // console.log (id)

        const Token = localStorage.getItem("Token");

        const number = Math.floor(Math.random() * 5)

        function cardColor() {
            if (number === 0) {
              return "#FFBCC2";
            }
            if (number === 1) {
              return "#CCF0D7";
            }
            if (number === 2) {
              return "#FCF3A1";
            }
            if (number === 3) {
              return "#D1CDFA";
            }
            if (number === 4) {
              return "#FF8888";
            }
          }
 
         
          const [state, setState] = useState({
          progress: 0 ,
          color:cardColor(),
    
     });

     const submitAddProgress = async (e) => {
        try {
            const res = await axios.post(`https://remindme.gabatch13.my.id/api/v1/goals/${id}`, state, { headers: { Authorization: `Bearer ${Token}` } });
            setModalShow(false);
            dispatch(getAllGoals());
            dispatch(getDetailGoals(id));
            // res.data.data.currnet_percent === 100 ? null : null
            
            console.log(res);
        } catch (error) {
          if (error.response.status === 400) {
            console.log(error);
            alert(`total current is more than target`)};
            if (error.response.status === 403) {
            alert(`Sesi anda habis, mohon login kembali`);
        }}};
      


return (
<>


    <Modal className='AddProgressModal shadow' {...props} size="lg" aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton >
{/* <p>{`${id}`}</p> */}
        </Modal.Header>
        <Modal.Title className='AddProgressTitle ' id="contained-modal-title-vcenter">
            <img className='MainTitle' style={{width:'34px', height:'34px', marginRight:'1rem'}} src={Logo}></img>
            <div className='MainTitle'>Add Progress</div>
        </Modal.Title>
        <div className='SetProgress' style={{marginBottom:'-6rem', fontSize:'22px',fontWeight:'700',marginTop:'2rem', }}>
            <p>Set Progress</p>
        </div>
        <Modal.Body className='text-dark' >
            <Form onSubmit={submitAddProgress} className='ProgressValue'>
                <Form.Group className="ValuePlaceholderLeft PlaceHolder" controlId="enter value">
                    <Form.Control style={{float:'right', marginRight:'0.5rem', borderRadius:'10px', border:'2px solid #B6C6E5'}} type="number"
                        placeholder="Enter Value" 
                        value={state.progress} onChange={(e) => setState({ ...state,progress: parseInt(e.target.value) })} />
                        {/* <p>{`${state?.progress}`}</p>
                        <p>{`${state?.color}`}</p>
                        <p>{`${id}`}</p> */}


                </Form.Group>
                <Form.Group className="ValuePlaceholderRight PlaceHolder" controlId="enter value">
                    <Form.Control disabled style={{marginLeft:'0.5rem', borderRadius:'10px', border:'2px solid #B6C6E5'}} type="text"
                        placeholder={`${type}`} />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer className="SaveButton">
            <Button style={{ borderRadius:'35px', fontWeight:'700', fontSize:'1.5rem'}}
               type="submit"
               value="Submit"
               onClick={submitAddProgress}
            //    onClick={props.onHide}
               >
                   Save</Button>
        </Modal.Footer>

    </Modal>

</>
);
}

return (
<div className='AddProgressButton' style={{marginBottom:'3.5rem'}}>
{/* Background Color akan diganti sesuai warna background Detail Progress */}
    <Button style={{backgroundColor:`${color}`}} onClick={()=> setModalShow(true)}> 
    <img className='AddProgressImg'
            style={{width:'34px', height:'34px', marginRight:'1rem'}} src={Logo}></img>
        <div style={{color:'Black'}} className='AddProgressText'>Add Progress </div>
    </Button>
    <AddProgressModal id={id} color={color} type={type}  show={modalShow} onHide={()=> setModalShow(false)} />
</div>
)
}

export default AddProgressModal