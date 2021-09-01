import React from "react";
import { Container, Col, Carousel } from "react-bootstrap";
import "./Sign.css";
import gambar1 from "../../assets/images/Ilustrasi Tangan.png";
import gambar2 from "../../assets/images/Illustrasi [Recovered] 1.png";
import gambar3 from "../../assets/images/Illustrasi [Recovered] 1-1.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./modal.scss";
// import logofull from "../../assets/images/logoFull.png";
import { useParams } from "react-router-dom";

function SignInUpPage(...props) {
  const { type } = useParams();
  console.log("type", type);
  return (
    <>
      <div>
        <Container className="d-flex flex-row align-items-start justify-content-center" style={{ maxWidth: "1440px", marginLeft: "auto", marginRight: "auto", marginTop: "5%" }}>
          <Col className="LeftBox d-flex flex-column align-items-end justify-content-center" style={{ maxWidth: "50%", borderRight: "1px solid #B6C6E5", paddingRight: "3rem" }}>
            {/* <div className="LogoFull">
              <img src={logofull} style={{ float: "left" }}></img>
            </div> */}
            <Carousel className="CarouselBox d-flex justify-content-center align-items-start flex-column text-dark" interval={5000} controls={false}>
              <Carousel.Item>
                <h3>Organize Your Life</h3>
                <p> Set your life to be more scheduled</p>
                <img className="d-block w-100" style={{ maxWidth: "600px", maxHeight: "auto" }} src={gambar1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <h3>Achieve Your Goal </h3>
                <p> Reach your goal faster</p>
                <img data-testid="ImgSignIn" className="d-block w-100" style={{ maxWidth: "600px", maxHeight: "auto" }} src={gambar2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <h3>No More Forget </h3>
                <p> Get a reminder to let you know what you want to do</p>
                <img className="d-block w-100" style={{ maxWidth: "600px", maxHeight: "auto" }} src={gambar3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* <Col style={{maxWidth:'10%'}} className='Line'>
            </Col> */}

          <Col className="RightBox align-content-start flex-wrap d-flex justify-content-start align-self-start align-items-center flex-column" style={{ maxWidth: "50%" }}>
            {type === "login" ? <SignIn /> : <SignUp />}
          </Col>
        </Container>
      </div>
      {/* <a href='/TaskPage'><button>TaskPage</button></a>   
    <a href='/Calendar'><button>Calendar Workshop</button></a> */}
    </>
  );
}

export default SignInUpPage;
