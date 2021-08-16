import React from 'react'
import { Container, Col, Carousel, Form, Button, FormControl, InputGroup} from 'react-bootstrap';
import './Sign.css'
import gambar1 from '../../img/Ilustrasi Tangan.png'
import gambar2 from '../../img/Illustrasi [Recovered] 1.png'
import gambar3 from '../../img/Illustrasi [Recovered] 1-1.png'
import { useState } from "react"
import SignIn from './SignIn';
import SignUp from './SignUp';


function SignInUpPage() {
const [SignUpPage, setSignUpPage] = useState(true)


return (
<>
    <div >
        <Container className='d-flex flex-row align-items-start justify-content-center'
            style={{maxWidth:'100%', marginLeft:'auto', marginRight:'auto', margin:'5% 0 10% 0', }}>

            <Col className='LeftBox d-flex flex-column align-items-end justify-content-center' style={{maxWidth:'50%',borderRight:'1px solid #B6C6E5', paddingRight:'3rem'}}>
            <Carousel className='CarouselBox d-flex justify-content-center align-items-start flex-column text-dark' interval={5000}
                controls={false}>
                <Carousel.Item>
                    <h3>Organize Your Life</h3>
                    <p> Set your life to be more scheduled</p>
                    <img className="d-block w-100" style={{maxWidth:'600px', maxHeight:'auto'}} src={gambar1}
                        alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Achieve Your Goal </h3>
                    <p> Reach your goal faster</p>
                    <img className="d-block w-100" style={{maxWidth:'600px', maxHeight:'auto'}}src={gambar2}
                        alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>No More Forget </h3>
                    <p> Get a reminder to let you know what you want to do</p>
                    <img className="d-block w-100" style={{maxWidth:'600px', maxHeight:'auto'}} src={gambar3}
                        alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            </Col>

            
            {/* <Col style={{maxWidth:'10%'}} className='Line'>
            </Col> */}


            <Col className='RightBox align-content-start flex-wrap d-flex justify-content-start align-self-start align-items-center flex-column' style={{maxWidth:'50%', }}>
            {SignUpPage ?
            <SignIn /> :
            <SignUp />}
            {!SignUpPage ? null : <p className="SignUpQuestion text-center mt-2" >Don't have an account yet? <a
                    style={{ cursor: 'pointer', textDecoration:'none', fontWeight:'700' }} onClick={()=> setSignUpPage(false)}
                    className="text-dark">Sign Up</a></p>}

            </Col>
        </Container>
    </div>
</>
)
}

export default SignInUpPage