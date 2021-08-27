import React from 'react'
import './Home.scss'
import { Container, Col,} from 'react-bootstrap';

function ReminderCard() {

return (

<>
    <Container className='ReminderContainer mb-3 d-flex flex-row ' style={{padding:'0'}}>
        <Col className='ReminderTimes' style={{width:'20%'}}>
        <div>13:00 AM</div>
        {/* nanti diganti dengan mapping waktu */}
        </Col>
        <Col className='RemiderCol' style={{width:'80%', }}>
        {/* nanti diganti dengan mapping card */}
        <div className='RemiderCard shadow' style={{background:'pink'}}>
            <div className='CardTitle'>
                <p>Biweekly Meeting</p>
            </div>
            <div className='CardContent'>
                <p>Brainstorming with Product Team</p>
            </div>
        </div>
        </Col>
    </Container>
 
 

</>
)
}

export default ReminderCard