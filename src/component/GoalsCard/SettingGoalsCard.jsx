import React from 'react'
import './Goals.css'
import { useState } from "react"
import { Col, Form, Button, FormControl, InputGroup} from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function SettingGoalsCard() {
const [bColor, setbColor] = useState();

    return (
        <>
       
  
  

        <div className='SetGoalsContainer text-dark' style={{}}>
        <Form>
        <h1 className='GoalTitle'>My Goals</h1>

        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="What is Your Goal?" />
     </Form.Group>
<div className='d-flex flex-row justify-content-between'>
<Col className='kolomCalendar' style={{maxWidth:'45%', }}>
<p>Choose Time</p>
<Calendar/>
</Col>
<Col className='kolomValue' style={{maxWidth:'45%', }}>
    <p>Set Value</p>
</Col>

</div>

     
        
        </Form>
        <div><p>Choose Progress bar Color</p></div>
        <p>{bColor}</p>
        <div className='ColorPicker'>
        <button style={{backgroundColor:'#FFBCC2'}} onClick={()=> setbColor('#FFBCC2')}></button>
        <button style={{backgroundColor:'#FCF3A1'}} onClick={()=> setbColor('#FCF3A1')}></button>
        <button style={{backgroundColor:'#B1A8FF'}} onClick={()=> setbColor('#B1A8FF')}></button>
        <button style={{backgroundColor:'#FF8888'}} onClick={()=> setbColor('#FF8888')}></button>
        <button style={{backgroundColor:'#CCF0D7'}} onClick={()=> setbColor('#CCF0D7')}></button>
        </div>
        </div>
        </>
    )
}

export default SettingGoalsCard
