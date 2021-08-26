import React from 'react'
import { Container, Col,} from 'react-bootstrap';
import './Home.scss'
import HomeNotes from './HomeNotes';
import CircularNotes from '../../component/CircularGoals/CircularNotes';
import ReminderCard from './ReminderCard';
import Garis from '../../assets/images/GoalDetailLine.png'


function HomeExisting() {
return (
<>
    <Container className='HomeContainer ' style={{maxWidth:'1360px'}}>
        <Col style={{width:'50%', }}>
        <div className='NotesContainer d-flex flex-column shadow'>
            <div className='TitleContainer'>
                <p>Pinned Notes</p>
            </div>
            <div className='PinnedNotesContainer'>
                <HomeNotes />
            </div>
            <div className='DailyStreakContainer'>
                <div className='TitleContainer'>
                    <p>Daily Streak</p>
                </div>
                <div className='SubTitleText'>
                    <p>Your progress are growing up!</p>
                </div>
                <Container className='CircularGoals'>
                    <CircularNotes style={{height:'20rem', background:'black'}} />
                </Container>
            </div>
        </div>
        </Col>
        <Col style={{width:'50%'}}>
        <div className='CalendarContainer shadow'>
            <div className='CalendarBox'>
                {/*
                <CobaCalendar /> */}
            </div>
            <div>
                <img style={{width:'100%', height:'15px', padding:'0 0rem 0 0rem'}} src={Garis}></img>
            </div>

            <div className='ReminderContainer'>
                <p className='ReminderTitle'>Reminder</p>
                <div className='TodayDates'>13 June 2021 </div>
                <ReminderCard />
            </div>
        </div>
        </Col>

    </Container>
</>
)
}

export default HomeExisting