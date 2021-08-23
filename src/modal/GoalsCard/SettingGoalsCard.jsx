import React from 'react'
import { useState } from "react"
import { Modal, Col, Form, Button, FormControl, InputGroup, SplitButton, Dropdown} from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './SettingGoals.scss'
import DatePicker from "react-datepicker";
import * as dayjs from 'dayjs'

import "react-datepicker/dist/react-datepicker.css";


function SettingGoalsCard() {
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)
const [modalShow, setModalShow] = React.useState(false);
const [startDate, setStartDate] = useState(new Date());


function SettingGoalsCard(props) {
const [bColor, setbColor] = useState();


return (
<>



    <Modal className='GoalSetting shadow' {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <div className='SetGoalsContainer shadow text-dark'>
            <Modal.Header closeButton style={{alignItems: 'flex-start'}}>
                <h1 style={{fontSize:'1.8rem',fontWeight:'600', padding:'0'}} className='mb-4'>My Goal</h1>
            </Modal.Header>

            <Form>

                <Form.Group className="mb-4" controlId="GoalText">
                    <Form.Control className="Goals__Title" type="text" placeholder="What is Your Goal?" />
                </Form.Group>
                <div>
                    <p style={{fontSize:'1.3rem', fontWeight:'600'}}>Built or Quit This Goal?</p>
                </div>

                <div className='BuiltorQuitButton mt-4 mb-4'>
                    <Col className='d-flex flex-row justify-content-between'>
                    <Button className='BuildButton' variant="secondary"
                        style={{borderRadius:'40px',width:"45%", fontWeight:'700' }}>Build</Button>
                    <Button className='BuildButton' variant="secondary"
                        style={{borderRadius:'40px',width:"45%", fontWeight:'700',  }}>Quit</Button>
                    </Col>
                </div>
                <div className='d-flex flex-row justify-content-between'>

                    <p style={{fontSize:'1.3rem', fontWeight:'600'}}>Choose Time</p>
                    <p style={{fontSize:'1.3rem', fontWeight:'600'}}>Set Value</p>

                </div>
                <div className='d-flex flex-row justify-content-between'>

                    <Col className='kolomCalendar' style={{maxWidth:'45%', }}>
                    <div className='ChooseTime mb-3'
                        style={{float:'left', paddingLeft:'0.5rem', borderRadius:'10px' , border:'1px solid #B6C6E5'}}
                        id="ChooseTime">
                        <div style={{padding: '0.45rem 0 0  1.25rem',}}>{dayjs(`${startDate}`).format('DD/MM/YYYY')}
                        </div>
                    </div>
                    <div className='MonthYear mb-3 mt-5' style={{}}>
                        <div>{dayjs(`${startDate}`).format('MMM,')}</div>

                        <div style={{paddingLeft:'0.25rem'}}>{dayjs(`${startDate}`).format('YYYY')}</div>
                    </div>
                    <div className="Goals__calendar " style={{float:'left'}}>
                        <Calendar onChange={(date)=> setStartDate(date)}/>
                    </div>
                    </Col>
                    <Col className='kolomValue  ' style={{maxWidth:'30%', }}>
                    <Form.Select className="PilihSatuan me-sm-2" id="PilihSatuan" style={{ borderRadius:'10px' }}>
                        <option id="PilihItem" value="0">Select</option>
                        <option id="PilihItem" value="1">ml (Mili Liter)</option>
                        <option id="PilihItem" value="2">km (Kilo Meter)</option>
                        <option id="PilihItem" value="3">m (Meter)</option>
                        <option id="PilihItem" value="4">Hours</option>
                        <option id="PilihItem" value="5">Minute</option>
                        <option id="PilihItem" value="6">Second</option>
                        <option id="PilihItem" value="7">Times</option>
                    </Form.Select>

                    {/* <div className="mt-2">
                        <SplitButton align="end" className='ChooseValue' title="Select" id="ChooseValue">
                            <Dropdown.Item eventKey="1">ml (Mili Liter)</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">km (Kilo Meter)</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3">m (Meter)</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Hours</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="5">Minute</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="6">Seconds</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="7">Times</Dropdown.Item>
                        </SplitButton>
                    </div> */}
                    </Col>

                </div>
                <div className="mt-4">
                    <p style={{fontSize:'1.3rem', fontWeight:'600'}}>Choose Progress bar Color</p>
                </div>
                <div className='ColorPicker'>
                    <Button style={{backgroundColor:'#FFBCC2'}} onClick={()=> setbColor('#FFBCC2')}></Button>
                    <Button style={{backgroundColor:'#FCF3A1'}} onClick={()=> setbColor('#FCF3A1')}></Button>
                    <Button style={{backgroundColor:'#B1A8FF'}} onClick={()=> setbColor('#B1A8FF')}></Button>
                    <Button style={{backgroundColor:'#FF8888'}} onClick={()=> setbColor('#FF8888')}></Button>
                    <Button style={{backgroundColor:'#CCF0D7'}} onClick={()=> setbColor('#CCF0D7')}></Button>
                </div>
                {/* <h1>{`${bColor}`}</h1> */}

                <div className='SaveButton d-flex justify-content-center'>
                    <Button type="submit" className='mt-4'
                        style={{width:'100%', fontWeight:'700',height:'3rem', borderRadius:'35px'}}>Save</Button>
                </div>
            </Form>

            {/* <div className='mt-5' style={{paddingLeft:'0.2rem'}}>
                <h1>{dayjs(`${startDate}`).format('YYYY-MM-DDTHH:mm:ssZ[Z]')}</h1>
            </div>
            <div className="Goals__calendar " style={{float:'left'}}>
                <DatePicker selected={startDate} onChange={(date)=> setStartDate(date)} />
                    <Calendar selected={startDate} onChange={(date)=> setStartDate(date)}/>
            </div> */}
        </div>
    </Modal>
</>
)
}
return (
<div>

    <Button onClick={()=> setModalShow(true)}>SettingGoalsCard (Tombol Sementara)</Button>
    <SettingGoalsCard show={modalShow} onHide={()=> setModalShow(false)} />

</div>
)

}

export default SettingGoalsCard