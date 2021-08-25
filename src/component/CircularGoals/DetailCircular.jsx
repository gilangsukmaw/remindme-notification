import React from 'react'
import { Container, Col, Carousel, Form, Button, FormControl, InputGroup} from 'react-bootstrap';
import { useState } from "react"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AddProgressModal from '../../modal/AddProgress/AddProgressModal';
import './CircularGoals.scss'

function DetailCircular(props) {
const {id, BackgrounColor, } = props
const [colorCard, setcolorCard] = useState()


const color = `${colorCard}`
function strokeColor () {
if (color === '#FFBCC2') {return '#FF8888'};
if (color === '#CCF0D7') {return '#34A69A'};
if (color === '#FCF3A1') {return '#E5D119'};
if (color === '#B1A8FF') {return '#A258FF'};
if (color === '#FF8888') {return '#FF586A'};
} ;
console.log (strokeColor)
const percentage = 80;
return (
<>
    <div className='MainContainer '>
        <div className='GoalDetails'>
            <p>Goal Detail</p>
            <div className='EditButton'><Button style={{fontSize:'20px',
fontWeight: '600',border:'0',background: '#625BAD',borderRadius:'21px',height: '38px'
,width: '129px'}}>Edit Goal</Button></div>
        </div>

        <Container style={{width:'90%'}} className='detailContainer'>
            <Col style={{width:'50%'}} className='CircularContainer'>
            <div className='GoalsTitle'>
                <p>Goal Title</p>
            </div>
            <div className='CicularDetail' style={{ maxWidth: 300, maxHeight: 300, }}>
                <CircularProgressbar background strokeWidth={5} backgroundPadding={0} value={percentage}
                    text={`${percentage}%`} styles={{path:{stroke:`${strokeColor()}`},trail: {stroke: 'none'}, background: {fill: `${color}`},text: {
        fill: '#342D50',
        fontSize: '25px',},}} />
            </div>
            <div className='TargetGoals'>
                <p>2000 ml</p>
            </div>
            <div className='TargetDetail'>
                <p className='Achievement'>1450 ml</p>
                <p>-550 ml</p>
            </div>
            <AddProgressModal />
            </Col>
            <Col style={{width:'50%'}} className='ProgressList'>
            <div className='ProgressListText'>
                <p>History</p>
            </div>
            <div className='MappingBar ' style={{background:'#CCF0D7'}}>
                {/* logo buat maping blm dimasukin */}
                <p>250 ml</p>
                {/* text mapping */}
            </div>
            </Col>
        </Container>
    </div>
</>
)
}

export default DetailCircular