import React from 'react'
import { Container, Col, Carousel, Form, Button} from 'react-bootstrap';
import './Sign.css'
import gambar1 from '../../img/Ilustrasi Tangan.png'
import gambar2 from '../../img/Illustrasi [Recovered] 1.png'
import gambar3 from '../../img/Illustrasi [Recovered] 1-1.png'


function SignInUpPage() {


return (
<>
    <div>
        <Container className='d-flex flex-row justify-content-center' style={{maxWidth:'100%', marginLeft:'auto', marginRight:'auto', margin:'5% 0 10% 0'}}>

            <Col className='d-flex ' style={{maxWidth:'40%'}}>
            <Carousel className='d-flex justify-content-center align-items-center flex-column text-dark' interval={5000} controls={false}>
                <Carousel.Item>
                    <h3>Organize Your Life</h3>
                    <p> Set your life to be more scheduled</p>
                    <img className="d-block w-100" style={{maxWidth:'600px', maxHeight:'auto'}} src={gambar1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                <h3>Achieve Your Goal </h3>
                    <p> Reach your goal faster</p>
                    <img className="d-block w-100"  style={{maxWidth:'600px', maxHeight:'auto'}}src={gambar2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                <h3>No More Forget </h3>
                    <p> Get a reminder to let you know what you want to do</p>
                    <img className="d-block w-100" style={{maxWidth:'600px', maxHeight:'auto'}} src={gambar3} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            </Col>

            {/* <Col  className='Line'>
            </Col> */}


            <Col  style={{maxWidth:'40%'}}>
            <h5>Sign In</h5>
            <div className='SignIn-Container d-flex align-items-center justify-content-center flex-column' style={{}}>
                <div>
                    To Sign In
                </div>
                <div style={{textAlign:'center', maxWidth:'60%'}}>
                    Enter your email address or username you’ve created when you registering and last, don’t forget to
                    enter the right password
                </div>
                <Form>
                    <Form.Group className="mb-4 mt-4" controlId="formBasicEmail">
                        <Form.Control style={{width:'100%', borderRadius:'10px', border:'2px solid #B6C6E5'}} type="email" placeholder="Email / Username" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control style={{width:'100%', borderRadius:'10px', border:'2px solid #B6C6E5'}} variant="secondary" type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="warning" type="submit" style={{width:'100%', borderRadius:'35px'}}>
                        Sign In
                    </Button>
                </Form>
            </div>
            </Col>
        </Container>
    </div>
</>
)
}

export default SignInUpPage