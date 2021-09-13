import React from 'react'
import { Container, } from 'react-bootstrap';
// import { useState } from "react"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// const data = []


function CircularNotes({...props}) {
  // eslint-disable-next-line no-unused-vars
  const {color, current_percent, name, body, } = props;



function strokeColor() {
    if (color === "#FFBCC2") {
      return "#FF8888";
    }
    if (color === "#CCF0D7") {
      return "#34A69A";
    }
    if (color === "#FCF3A1") {
      return "#E5D119";
    }
    if (color === "#D1CDFA") {
      return "#A258FF";
    }
    if (color === "#FF8888") {
      return "#FF586A";
    }
  }
// console.log (strokeColor)
const percentage = current_percent;

return (
<>
    <div className='bigContainer d-flex flex-row'>
        <Container className='CircularCard d-flex flex-column align-items-center '>
            <div className='CircularCard' id='CircularCard' style={{ width: 100, height: 100, }}>
               <CircularProgressbar background strokeWidth={5} backgroundPadding={0} value={percentage}
                    text={`${percentage}%`} styles={{path:{stroke:`${strokeColor()}`},trail: {stroke: 'none'}, background: {fill: `${color}`},text: {
                      fill: '#342D50',
                      fontSize: '25px',
                    },}} />
            </div>
            <p className='CardTitle mt-2' style={{fontSize:'1rem'}}>{name}</p>
        </Container>
    </div>

   
</>
)
}

export default CircularNotes