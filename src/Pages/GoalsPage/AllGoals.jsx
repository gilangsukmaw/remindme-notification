import React from 'react'
import CircularGoals from '../../component/CircularGoals/CircularGoals'
import { Container, Col, Carousel} from 'react-bootstrap';
import Garis from '../../assets/images/GoalDetailLine.png'
import DetailCircular from '../../component/CircularGoals/DetailCircular';

function AllGoals() {
return (
<>
<div className='PageTitle' style={{ margin:'2rem', }}>
<p style={{fontSize:'34px', fontWeight:'500' }}>My All Goals</p>
</div>
    <div className='GoalsContainer d-flex overflow-auto mt-5' style={{maxWidth:'1440px', marginLeft:'2rem' }}>

        <CircularGoals />

    </div>
    <br />
    <div>
        <img style={{width:'100%', height:'15px', padding:'0 2rem 0 2rem'}} src={Garis}></img>
    </div>
   
    <div>
        <DetailCircular />
    </div>
</>
)
}

export default AllGoals