/* eslint-disable no-unused-vars */
import React from "react";
import "./LandingPage.scss";
import LogoLandingHeader from "../../assets/images/LogoLandingHeader.png";
import LandingLogo from "../../assets/images/LandingLogo.png";
import LandingAppStore from "../../assets/images/LandingAppStore.png";
import LandingGoogle from "../../assets/images/LandingGoogle.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import { Link, useParams } from "react-router-dom";

function LandingPage(...props) {
  const Token = localStorage.getItem("Token");

  const { register } = props;
  return (
    <div className="landing">
      <div className="landing__top">
        <div className="landing__header">
          <div className="header__logo">
            <img src={LogoLandingHeader} alt="" />
            <h6>
              Remind<span>Me</span>
            </h6>
          </div>
          <div className="header__button">
            {/* tes */}
            <Link to="/auth/login">
              <button>Login</button>
            </Link>
            <Link to="/auth/register">
              <button
                style={{
                  padding: "0 2rem 0 2rem",
                  backgroundColor: "#625bad",
                  color: "white",
                }}
              >
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="landing__intro">
          <div className="intro__left">
            <h1>
              Find Balance in<br></br>Your Life
            </h1>
            <p>
              Why do we use it? It is a long established fact that a reader will
              be<br></br>distracted by the readable content of a page when
              <br></br>looking at its layout.
            </p>
            <Link to="/auth/register"><button>Get Started</button> </Link>
              {/* {Token ? <Link to="/home"> <button>Home</button> </Link> : <Link to="/auth/register"><button>Get Started</button> </Link>} */}
            
          </div>
          <div className="intro__right">
            <img src={LandingLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="landing__footer">
        {/* <div className="landing__content"> */}
        <div className="footer__left">
          <div className="left__top">
            <h2>Need Help With Anything?</h2>
            <p>
              Let???s hear about it with <a href="#top">Contact Us!</a>
            </p>
          </div>
        </div>
        <div className="footer__center">
          <div className="center__title">
            <p>Available on</p>
          </div>
          <div className="center__app">
            <img src={LandingAppStore} alt="" />
            <img src={LandingGoogle} alt="" />
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__home">
            <p>Home</p>
            <ul>
              <li>
                <a href="#top">About</a>
              </li>
              <li>
                <a href="#top">Career</a>
              </li>
            </ul>
          </div>
          <div className="footer__about">
            <p>About</p>
            <ul>
              <li>
                <a href="#top">What</a>
              </li>
              <li>
                <a href="#top">Why</a>
              </li>
              <li>
                <a href="#top">Developer</a>
              </li>
              <li>
                <a href="#top">Demo</a>
              </li>
            </ul>
          </div>
          <div className="footer__help">
            <p>Help</p>
            <ul>
              <li>
                <a href="#top">Contact Form</a>
              </li>
              <li>
                <a href="#top">Location</a>
              </li>
              <li>
                <a href="#top">Consultation</a>
              </li>
              <li>
                <a href="#top">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="most__bottom">
        <div className="bottom__logo">
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
export default LandingPage;
