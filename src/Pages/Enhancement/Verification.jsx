import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { Form, OverlayTrigger, Tooltip, Modal, Container, Col, Button,Spinner, Placeholder } from "react-bootstrap";
import ceklis from '../../assets/images/saveLogo.svg'
import Cross from '../../assets/images/OopsCross.svg'
import Email from '../../assets/images/email.png'
import Logo from '../../assets/images/Rectangle70.svg'
import TextLogo from '../../assets/images/RemindMe.svg'


function Verification() {
const { token } = useParams();


        const VerificationEmail = async () => {
        try {
        const res = await axios.get(`https://remindme.gabatch13.my.id/api/v1/auth/verification/${token}`);
        // const data = await res.data;
        console.log (res);
        if (res.data.data.verified === true) {
        Swal.fire({
        imageUrl: (`${ceklis}`),
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        width: 450,
        confirmButtonText: "Sign In",
        confirmButtonColor: "#625BAD",
        title: 'Congratulations!',
        text: 'we successfully verified your account',
        allowOutsideClick: false,
        allowEscapeKey:false,
        allowEnterKey: false,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.replace("/auth/login");
          } 
        })
      };
        
        } catch (error) {
        console.log(error.response);
        if (error.response.status === 404) {
        // console.log("ini error", error.response.data);
        Swal.fire({
        imageUrl: `${Cross}`,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Custom image",
        width: 450,
        confirmButtonText: "Ok",
        confirmButtonColor: "#625BAD",
        title: error.response.data.errors,
        text: "Please Send Email For Verification Again",
        });
        setSendEmail(true);
        }
        }       
        }   

useEffect(() => {
VerificationEmail();
}, [token])

const debounce = (func, timeout = 30000) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };
  const debounceVerification = debounce(() => VerificationEmail());

  const [sendEmail, setSendEmail] = useState (false)
  
  function SendEmailModal(props) {

    const SendEmail = async () => {

      try {
      const res = await axios.post(`https://remindme.gabatch13.my.id/api/v1/auth/send-verification`,state);
      setSendEmail(false);
      console.log (res.data.message);
      // const data = await res.data;
      // console.log (res);
      // if (res.data.data.verified === true) {
      Swal.fire({
      imageUrl: (`${Email}`),
      imageWidth: 200,
      // imageHeight: auto,
      imageAlt: 'Custom image',
      width: 450,
      confirmButtonText: "Ok",
      confirmButtonColor: "#625BAD",
      title: res.data.message,
      // text: 'we successfully verified your account',
      });
      // window.location.replace("/auth/login");
      } catch (error) {
      console.log(error.response);
      if (error.response.status === 404) {
      // console.log("ini error", error.response.data);
      Swal.fire({
      imageUrl: `${Cross}`,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "Custom image",
      width: 450,
      confirmButtonText: "Ok",
      confirmButtonColor: "#625BAD",
      title: error.response.data.errors,
      text: "Please Input Registered Email",
      });
      }
      if (error.response.status === 400) {
      // console.log("ini error", error.response.data);
      Swal.fire({
      imageUrl: `${Cross}`,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "Custom image",
      width: 450,
      confirmButtonText: "Ok",
      confirmButtonColor: "#625BAD",
      title: error.response.data.errors,
      text: "Please Check Again",
      });
      }
      }       
      }   

    const [state, setState] = useState({
      email :''
    })
    console.log(state.email)
    return (
      <Modal className="ModalSignUp shadow" sytle={{ maxWidth: "1rem" }} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="d-flex flex-column ">
           <img style={{ width:'20rem', marginTop:'-3rem'}} src={Email}></img>
        </Modal.Header>
        <Modal.Body style={{marginTop:'-2rem'}}>
          <Form onSubmit={SendEmail} className="InformationBox">
          <Form.Group className="d-flex mb-4 mt-4 justify-content-center" controlId="email">
            <Form.Control
                        value={state.email}
                        onChange={(e) => setState({ ...state, email: e.target.value })}
                        style={{
                          height: "2.5rem",
                          width: "70%",
                          borderRadius: "10px",
                          border: "2px solid #B6C6E5",
                        }}
                        required
                        type="email"
                        placeholder="Input Your Email"
                        pattern='[^@]+@[^@]+\.[^@]+'
                        // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      />
            </Form.Group>
          </Form>
          <p>
            We will send another verification link <br/> to your registered email
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* <Link to="/auth/login"> */}
            <button
              className="ButtonUngu"
              style={{
                marginTop:'-1rem',
                width:'20rem',
                height: "2rem",
                padding: "0.5rem 2rem 2rem 2rem",
                borderRadius: "35px",
                fontWeight: "700",
              }}
              onClick={SendEmail}
            >
              Send Email
            </button>
          {/* </Link> */}
        </Modal.Footer>
      </Modal>
    );
  }

return (
<>
        <Container
          className="signin__container d-flex flex-row align-items-start justify-content-center"
          style={{
            maxWidth: "1440px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "8rem",
          }}
        >
          <Col
            className="LeftBox d-flex flex-column align-items-center"
            style={{
              maxWidth: "20rem",
              // paddingRight: "3rem",
            }}
          >
            <div className="LogoFull">
            </div>
                <img
                  // className="d-block w-100"
                  style={{ width: "20rem", maxHeight: "auto" }}
                  src={Logo}
                  alt="First slide"
                /> 
              <h3 style={{  fontWeight:'600' }} >Check Email !</h3>
              <p> We sent verification link there </p>
            {/* <div style={{ margin:" 4rem auto auto 2rem",  }} >
            </div> */}
            </Col>
        </Container>
    {/* <Link to='/auth/login'><Button>tombol ke login</Button></Link> */}
    {/* onClick={() => setSendEmail(false)} onHide={() => setSendEmail(false)}  */}
    <SendEmailModal show={sendEmail}  />
</>
)
}

export default Verification