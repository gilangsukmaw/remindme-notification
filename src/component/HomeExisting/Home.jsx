import React, { useEffect, useState } from "react";
import { Container, Col } from "react-bootstrap";
import "./Home.scss";
import HomeNotes from "./HomeNotes";
import CircularNotes from "../../component/CircularGoals/CircularNotes";
import ReminderCard from "./ReminderCard";
import Garis from "../../assets/images/GoalDetailLine.png";
import CobaCalendar from "../../Calendar";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoals, getDetailGoals, getNoteByDate } from "../../redux/action/goals";
import { getNote } from "../../redux/action/note";
import CircularGoals from "../../component/CircularGoals/CircularGoals";



function HomeExisting() {

  const dispatch = useDispatch();
  const { goals } = useSelector((state) => state.allGoals.goalsData);
  const { data } = useSelector((state) => state.allNote.noteData);
  const { noteDate } = useSelector((state) => state.noteByDate.ByDate);

  useEffect(() => {
    dispatch(getAllGoals());
    dispatch(getNote());
  }, [dispatch]);
  console.log('Existing goal', goals);
  console.log('Existing notes', data);
  console.log('notebydate', data);


  return (
    <>
      <Container className="HomeContainer " style={{ maxWidth: "1400px" }}>
        <Col md={12} className="NotesCol d-flex" style={{ width: "50%" }}>
          <div className="NotesContainer d-flex flex-column shadow">
            <div className="TitleContainer">
              <p>Pinned Notes</p>
            </div>
            <div className="PinnedNotesContainer overflow-auto">
              
            {data?.filter((data) => data?.pinned === true)
            .map((item, index) => (
              <div key={index}>
              <HomeNotes title={item?.title} time={item?.time} date={item?.date} body={item?.body} color={item?.color} />
              </div>
              ))}

{/* //               body: "lalalalalal"
// color: "#FF8888"
// date: "2021-05-05"
// dateNote: "2021-05-05T00:00:00.000Z"
// id: 174
// id_user: "ebaa25cc-e7f9-4658-8893-34183d06e817"
// image: null
// pinned: false
// time: "00:00"
// title: "tes tes notes" */}


            </div>
            <div className="DailyStreakContainer">
              <div className="TitleContainer">
                <p>Daily Streak</p>
              </div>
              <div className="SubTitleText">
                <p>Your progress are growing up!</p>
              </div>
              <Container className="CircularGoals">
                  {goals?.data?.sort((a, b) => a.current_percent > b.current_percent ? 1 : -1).map((item, index) => (
                  <div className='mappingGoals' key={index} >
                    <button style={{background:'none', border:'none'}} onClick={()=> {dispatch(getDetailGoals(item?.id))}}>
                      {/* <CircularGoals color={item?.color} current_percent={item?.current_percent} id={item?.id} name={item?.name} /> */}
                      <CircularNotes color={item?.color} current_percent={item?.current_percent} id={item?.id} name={item?.name} />
                    </button>
                  </div>
                  ))}
               {/* <CircularNotes style={{ height: "20rem", background: "black" }} /> */}
              </Container>
            </div>
          </div>
        </Col>
        <Col md={12} className='CalendarColumn' style={{ width: "50%" }}>
          <div className="CalendarContainer shadow">
            <div className="CalendarBox">
              <CobaCalendar />
            </div>
            <div className="ext__calendar">
              <button className="exp__today"></button>
              <p>Chosen Date</p>
              <button className="exp__chosen"></button>
              <p>Today</p>
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                  height: "15px",
                  padding: "0 0rem 0 0rem",
                }}
                src={Garis}
                alt=""
              />
            </div>

            <div className="ReminderContainer ">
              <p className="ReminderTitle">Note</p>
              {/* nanti di ganti mapping tanggal */}
              <div className="TodayDates">10 September 2021 </div>
              <div className="CardMappingBox overflow-auto">
                <ReminderCard />
              </div>
            </div>
          </div>
        </Col>
      </Container>
    </>
  );
}

export default HomeExisting;
