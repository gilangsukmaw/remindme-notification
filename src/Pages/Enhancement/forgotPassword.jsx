import React from 'react'
import { Modal, Form, Button, FormControl, InputGroup} from 'react-bootstrap';
import './enhancement.scss'
import Logo from '../../assets/images/AddProgressLogo.png'
import Confetti from '../../assets/images/confetti-ball.svg'
import Cross from '../../assets/images/OopsCross.svg'
// import {Link} from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoals, getDetailGoals } from "../../redux/action/goals";
import Swal from 'sweetalert2'
import Email from '../../assets/images/email.png'



function ForgotPassword(props) {
const [ForgotShow, setForgotShow] = useState(false);
const {color, type, id} = props;
// console.log (type)
// console.log (color)
// console.log (id)

function ForgotPassword(props) {
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
 
          const {details} = useSelector((state) => state.detailGoals.detailData);

          const [state, setState] = useState({
          email: '' ,
    
     });

     const SendForgotPassword = async (e) => {
        try {
            const res = await axios.post(`https://remindme.gabatch13.my.id/api/v1/auth/forgot`, state, { headers: { Authorization: `Bearer ${Token}` } });
            setForgotShow(false);
            Swal.fire({
                imageUrl: (`${Email}`),
                imageWidth: 150,
                // imageHeight: auto,
                imageAlt: 'Custom image',
                width: 450,
                confirmButtonText: "Ok",
                confirmButtonColor: "#625BAD",
                title: 'Email Sent!',
                text: res.data.message,
                });
           
            
        } catch (error) {
            if (error.response.status === 400) {
                // console.log("ini error" ,error.response.data.errors[0]);
                Swal.fire({
                  imageUrl: (`${Cross}`),
                  imageWidth: 100,
                  imageHeight: 100,
                  imageAlt: 'Custom image',
                  width: 450,
                  confirmButtonText: "Ok",
                  confirmButtonColor: "#625BAD",
                  title: (error.response.data.errors),
                  text: 'Please Check Again',
                  
                })};
          
            if (error.response.status === 403) {
            alert(`Sesi anda habis, mohon login kembali`);
        }}};


return (
<>


    <Modal className='ForgotPasword shadow' {...props} size="lg" aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton >
        </Modal.Header>
        <Modal.Title className='ForgotTitle ' id="contained-modal-title-vcenter">
            <h1 style={{ fontWeight:'600'}} className=''>Forgot Password?</h1>
        </Modal.Title>
    
        <Modal.Body className='InputBox text-dark' >
            <Form style={{width:'80%'}} id='inputEmail' onSubmit={SendForgotPassword} >
            <p style={{marginTop:'1rem', fontWeight:'600'}}>We Will Send Reset Password Link To Your Email</p>

                <Form.Group className="EmailInput " controlId="enterEmail">
                    <Form.Control className="EmailInput "  style={{ borderRadius:'10px', border:'2px solid #B6C6E5'}} type="email"
                        placeholder="Email" 
                        value={state.email}
                        onChange={(e) => setState({ ...state, email: e.target.value })}
                        />
                    </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer className="ForgotButton">
            <Button style={{ borderRadius:'35px', fontWeight:'700', fontSize:'1.5rem'}}
               type="submit"
               value="Submit"
               onClick={SendForgotPassword}
            //    onClick={props.onHide}
               >
                   Send</Button>
        </Modal.Footer>

    </Modal>

</>
);
}

return (
<div className='EditPhotoButton' style={{outline:'none' ,outlineColor:'none', outlineBorder:'none'}}>
    <button id='ButtonPassword' style={{outline:'none' ,outlineColor:'none', outlineBorder:'none', background:'none', border:'none', padding:'none'}} onClick={()=> setForgotShow(true)}> 
            <div style={{color:'Black'}} className='AddProgressText'>Forgot Password?</div>
    </button>
    <ForgotPassword id={id} color={color} type={type}  show={ForgotShow} onHide={()=> setForgotShow(false)} />
</div>
)
}

export default ForgotPassword
