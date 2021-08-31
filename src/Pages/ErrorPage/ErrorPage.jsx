import React from 'react';
import { useHistory } from "react-router-dom";
import img1 from './12510.jpg';
import "./ErorPage.css";

function ErrorPage ()  {
    let history = useHistory();
    return (
            <div className="jaw">
                <div className="epl">
                    <div className="sem">
                        <h1 className="err">404</h1>
                        <h2 className="yoo">Something <br /> Gone Missing</h2>
                        <p className="pp">Why do you see it? <br/> It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <button className="buttona" onClick={()=> history.replace('/') }>Back to Home</button>
                    </div>
                </div>
                <div className="ass">
                    <img src={img1} className="images" alt="" />
                </div>
            </div>
    );
}

export default ErrorPage;