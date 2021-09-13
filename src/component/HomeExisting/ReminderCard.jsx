import React from 'react'
import './Home.scss'
import { Container, Col,} from 'react-bootstrap';
import * as dayjs from "dayjs";

function ReminderCard(props) {
const {time, color, title, content} = props
var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);
return (

<>
    <Container className='ReminderContainer mb-3 d-flex flex-row ' style={{padding:'0'}}>
        <Col className='ReminderTimes' style={{width:'20%'}}>
        <p>{dayjs.utc(`${time}`).format("h:mm A ")} </p>
        
        {/* <p>{time} </p> */}

        {/* nanti diganti dengan mapping waktu */}
        </Col>
        <Col className='RemiderCol' style={{width:'80%', }}>
        {/* nanti diganti dengan mapping card */}
        <div className='RemiderCard shadow ' style={{background:`${color}`}}>
            <div className='CardTitle'>
                <p>{title}</p>
            </div>
            <div className='CardContent'>
                <p>{content}</p>
            </div>
        </div>
        </Col>
    </Container>
 
 

</>
)
}

export default ReminderCard