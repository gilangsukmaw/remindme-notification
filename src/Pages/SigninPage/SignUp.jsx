import React from 'react'
import { Modal, Col, Form, Button, FormControl, InputGroup} from 'react-bootstrap';
import { useState } from "react"
import './Sign.css'
import './modal.scss'
import ceklis from '../../assets/images/signupChecklist.png'
import {Link} from 'react-router-dom';
import SignInUpPage from './SignInBase';

function SignUp(props) {
    const {ganti }    = props


    const [page, setPage] = useState(1);

const [values, setValues] = React.useState({
password: "",
showPassword: false,
});

const handleClickShowPassword = () => {
setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
event.preventDefault();
};

// const handlePasswordChange = (prop) => (event) => {
// setValues({ ...values, [prop]: event.target.value });
// };
const [modalShow, setModalShow] = React.useState(false);

function MyVerticallyCenteredModal(props) {
return (
<Modal className='ModalSignUp shadow' sytle={{maxWidth:'1rem'}} {...props} size="lg"
    aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
            <img src={ceklis}></img>
        </Modal.Title>
    </Modal.Header>
    <Modal.Body  style={{}}>
        <p>
            Congratulations!<br></br>
            we successfully verified
            your account
        </p>
    </Modal.Body>
    <Modal.Footer>
        <Link to="/"><Button variant='warning'
                style={{padding:'0.5rem 2rem 0.5rem 2rem', borderRadius:'35px', fontWeight:'700'}}
                onClick={props.onHide}>Let’s Get It</Button></Link>
    </Modal.Footer>
</Modal>
);
}
return (
<>
    <div className='SignUpBigBox text-dark' style={{marginLeft:'4rem',}}s>
        <div className='SignText'>Sign Up</div>
        <div className='SignUpBox  ' style={{Width:'28rem'}}>

            <div className='SignUp-Container d-flex align-items-center justify-content-center flex-column'>

                {/* --------------------------------page one---------------------------------- */}
                {page === 1 ? <h3>
                    First Name
                </h3> : null }
                {page === 1 ?<p>
                    The first step to start is enter your first name in this box below
                </p>: null }
                {/* --------------------------------page two---------------------------------- */}
                {page === 2 ? <h3>
                    Last Name
                </h3> : null }
                {page === 2 ?<p>
                    Let us know you better, with entering your last name </p>: null }
                {/* --------------------------------page three-------------------------------- */}
                {page === 3 ? <h3>
                    Username </h3> : null }
                {page === 3 ?<p>
                    What should we call you? Please enter your username </p>: null }
                {/* --------------------------------page four--------------------------------- */}
                {page === 4 ? <h3>
                    Email
                </h3> : null }
                {page === 4 ?<p>
                    Tell us how to reach you by enter your Email address in the box below </p>: null }
                {/* --------------------------------page five--------------------------------- */}
                {page === 5 ? <h3>
                    Password
                </h3> : null }
                {page === 5 ?<p>
                    Don’t let anyone know when you enter your password </p>: null }

                {/* --------------------------------page one---------------------------------- */}
                <Form className='InformationBox'>
                    <Form.Group className="mb-4 mt-4" controlId="FirstName">
                        {page === 1 ?
                        <Form.Control style={{width:'100%', borderRadius:'10px', border:'2px solid #B6C6E5'}}
                            type="text" placeholder="First Name" />
                        : null}
                    </Form.Group>
                    {/* --------------------------------page two---------------------------------- */}

                    <Form.Group className="mb-4 mt-4" controlId="LastName">
                        {page === 2 ?
                        <Form.Control style={{width:'100%', borderRadius:'10px', border:'2px solid #B6C6E5'}}
                            type="text" placeholder="Last Name" />
                        : null}
                    </Form.Group>
                    {/* --------------------------------page three---------------------------------- */}

                    <Form.Group className="mb-4 mt-4" controlId="Username">
                        {page === 3 ?
                        <Form.Control style={{width:'100%', borderRadius:'10px', border:'2px solid #B6C6E5'}}
                            type="text" placeholder="Username" />
                        : null}
                    </Form.Group>
                    {/* --------------------------------page four---------------------------------- */}

                    <Form.Group className="mb-4 mt-4" controlId="email">
                        {page === 4 ?
                        <Form.Control style={{width:'100%', borderRadius:'10px', border:'2px solid #B6C6E5'}}
                            type="email" placeholder="Email" />
                        : null}
                    </Form.Group>

                    {/* --------------------------------page five---------------------------------- */}

                    <Form.Group className="mb-4 mt-4" controlId="Password">
                        {page === 5 ?
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control style={{width:'100%', borderRadius:'10px', border:'2px solid #B6C6E5'}}
                                variant="secondary" type={values.showPassword ? "text" : "password" }
                                placeholder="Password" />
                            <Button style={{float:'right', marginTop:'-2.5rem', background:'none', border:'none'}}
                                onMouseDown={handleMouseDownPassword} onClick={handleClickShowPassword}>
                                { !values.showPassword ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="#625BAD" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path
                                        d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                    <path
                                        d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#625BAD"
                                    className="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path
                                        d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                </svg> } </Button>
                        </Form.Group>
                        : null}
                    </Form.Group>

                    {/* --------------------------------Button--------------------------------- */}
                    <div className='signUpButton justify-content-between'>
                        { page === 1 ? <Button  variant="outline-warning" onClick={ganti}
                            style={{width:'45%', borderRadius:'35px'}}>
                            Home
                        </Button> : <Button variant="warning" onClick={()=> setPage(page-1)}
                            style={{width:'45%', borderRadius:'35px'}}>
                            Prev
                        </Button> }
                        {page === 5 ? null : <Button variant="warning" onClick={()=> setPage(page+1)}
                            style={{width:'45%', borderRadius:'35px'}}>
                            Next
                        </Button> }
                        {page === 5 ? <Button variant="warning"   onClick={()=> setModalShow(true)}
                            style={{width:'45%', borderRadius:'35px'}}>
                            Submit
                        </Button> : null }
                        {/* type="submit" value="Submit"*/}
                        {/*sementara pakai button, nanti saat sdh ada fungsi, modal masukin ke fungsi*/}
                        <MyVerticallyCenteredModal show={modalShow} onHide={()=> setModalShow(false)}
                            />
                            
                    </div>
                </Form>
{/* <h1>{page}</h1> */}
            </div>

        </div>


    </div>
</>
)
}

export default SignUp