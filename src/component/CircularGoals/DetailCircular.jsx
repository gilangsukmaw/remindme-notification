import React from 'react'
import { Container, Col, Button, } from 'react-bootstrap';
import { useState } from "react"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AddProgressModal from '../../modal/AddProgress/AddProgressModal';
import './CircularGoals.scss'

function DetailCircular(props) {
const { color, currentPercentage,type, id, title, currentProgress ,target,remaining} = props;


function strokeColor () {
if (color === '#FFBCC2') {return '#FF8888'};
if (color === '#CCF0D7') {return '#34A69A'};
if (color === '#FCF3A1') {return '#E5D119'};
if (color === '#D1CDFA') {return '#A258FF'};
if (color === '#FF8888') {return '#FF586A'};
} ;

function value () {
if (type === 'Mililiter') {return 'ml'};
if (type === 'Kilometer') {return 'km'};
if (type === 'Meter') {return 'm'};
if (type === 'Hours') {return 'Hours'};
if (type === 'Minutes') {return 'Minute'};
if (type === 'Liter') {return 'L'};
if (type === 'Times') {return 'Times'};
if (type === 'Plate') {return 'Plate'};
if (type === 'Drink') {return 'Drink'};
if (type === 'Other') {return 'Other'};

} ;
const percentage = currentPercentage;
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
                <p>{`${title}`}</p>
            </div>
            <div className='CicularDetail' style={{ maxWidth: 300, maxHeight: 300, }}>
                <CircularProgressbar background strokeWidth={5} backgroundPadding={0} value={percentage}
                    text={`${percentage}%`} styles={{path:{stroke:`${strokeColor()}`},trail: {stroke: 'none'}, background: {fill: `${color}`},text: {
        fill: '#342D50',
        fontSize: '25px',},}} />
            </div>
            <div className='TargetGoals'>
                <p>{` ${target} ${value()} `}</p>
            </div>
            <div className='TargetDetail'>
                <p className='Achievement'>{` ${currentProgress} ${value()} `}</p>
                <p>{` ${remaining} ${value()} `}</p>
            </div>
            <AddProgressModal id={`${id}`} color={color} type={`${type}`}/>
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