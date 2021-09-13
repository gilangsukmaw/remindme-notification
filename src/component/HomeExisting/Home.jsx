import React, { useEffect, useState } from "react";
import { Container, Col } from "react-bootstrap";
import "./Home.scss";
import HomeNotes from "./HomeNotes";
import CircularNotes from "../../component/CircularGoals/CircularNotes";
import ReminderCard from "./ReminderCard";
import Garis from "../../assets/images/GoalDetailLine.png";
// import CobaCalendar from "../../Calendar";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoals, getDetailGoals, getNoteByDate } from "../../redux/action/goals";
import { getNote } from "../../redux/action/note";
import DatePicker from "react-datepicker";
import * as dayjs from "dayjs";
import { Link } from "react-router-dom";

function HomeExisting() {
  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);
  const dispatch = useDispatch();
  const { goals } = useSelector((state) => state.allGoals.goalsData);
  const { data } = useSelector((state) => state.allNote.noteData);
  const { noteDate } = useSelector((state) => state.noteByDate.noteByDate);
  // const [startDate, setStartDate] = useState(new Date());
  const [PilihHari, setPilihHari] = useState(dayjs());

  // const [GabungDate, setGabungDate] = useState({
  //   tanggal: dayjs(),
  //   time: dayjs().format("h:mm A"),
  // });
  // console.log(GabungDate.tanggal, GabungDate.time);

  const a = new Date();
  useEffect(() => {
    dispatch(getAllGoals());
    dispatch(getNote());
    dispatch(getNoteByDate(dayjs().format("YYYY-MM-DD")));
  }, [dispatch]);
  // console.log('Existing goal', goals);
  // console.log('Existing notes', data);
  // console.log("notebydate", noteDate);
  // console.log('klik tanggal', PilihHari);

  // const getnoteDate = async (e) => {
  //   try {
  //     const res = await axios.get(`https://remindme.gabatch13.my.id/api/v1/goals`,  { headers: { Authorization: `Bearer ${Token}` } });
  //     setdatenote(res.data);
  //           Swal.fire({
  //             imageUrl: (`${SaveLogo}`),
  //             imageWidth: 100,
  //             imageHeight: 100,
  //             imageAlt: 'Custom image',
  //             width: 450,
  //             confirmButtonText: "Ok",
  //             confirmButtonColor: "#625BAD",
  //             title: 'Congratulations!',
  //             text: 'You successfully saved your goal',

  //           })

  //     console.log(res);
  //   } catch (error) {
  //     if (error.response.status === 400) {
  //       Swal.fire({
  //         icon: "warning",
  //         width: 450,
  //         confirmButtonText: "Ok",
  //         confirmButtonColor: "#625BAD",
  //         title: error.response.data.errors[0],
  //         text: "Please Check Again",
  //       });
  //     }
  //     if (error.response.status === 403) {
  //       alert(`Sesi anda habis, mohon login kembali`);
  //     }
  //   }
  // };

  return (
    <>
      <Container className="HomeContainer " style={{ maxWidth: "1400px" }}>
        {/* <p>{startDate}</p> */}
        <Col md={12} className="NotesCol d-flex" style={{ width: "50%" }}>
          <div className="NotesContainer d-flex flex-column shadow">
            <div className="TitleContainer">
              <p>Pinned Notes</p>
            </div>
            <div className="PinnedNotesContainer overflow-auto">
              {data
                ?.filter((data) => data?.pinned === true)
                .map((item, index) => (
                  <div key={index}>
                    <HomeNotes title={item?.title} time={item?.time} date={item?.date} body={item?.body} color={item?.color} />
                  </div>
                ))}
            </div>
            <div className="DailyStreakContainer">
              <div className="TitleContainer">
                <p>Daily Streak</p>
              </div>
              <div className="SubTitleText">
                <p>Your progress are growing up!</p>
              </div>
              <Container className="CircularGoals">
                {goals?.data
                  ?.sort((a, b) => (a.current_percent > b.current_percent ? 1 : -1))
                  .map((item, index) => (
                    <div className="mappingGoals" key={index}>
                      <Link
                        id="toAllGoals"
                        to="/allGoals"
                        style={{ textDecoration: "none", color: "black", background: "none", border: "none" }}
                        onClick={() => {
                          dispatch(getDetailGoals(item?.id));
                        }}
                      >
                        {/* <CircularGoals color={item?.color} current_percent={item?.current_percent} id={item?.id} name={item?.name} /> */}
                        <CircularNotes color={item?.color} current_percent={item?.current_percent} id={item?.id} name={item?.name} />
                      </Link>
                    </div>
                  ))}
                {/* <CircularNotes style={{ height: "20rem", background: "black" }} /> */}
              </Container>
            </div>
          </div>
        </Col>
        <Col md={12} className="CalendarColumn" style={{ width: "50%" }}>
          <div className="CalendarContainer shadow">
            <div className="CalendarBox">
              <div className="Home__calendar d-flex flex-column " style={{ float: "left" }}>
                <DatePicker
                  selected={a}
                  // value={state.date}
                  // onChange={(date) => setState((date)}
                  // onClick={(e) => dispatch(getNoteByDate(dayjs(e).format("YYYY-MM-DD")))}
                  // onChange={(e) =>
                  //   setPilihHari(dayjs(e))
                  onChange={(e) => {
                    // eslint-disable-next-line no-lone-blocks
                    {
                      dispatch(getNoteByDate(dayjs(e).format("YYYY-MM-DD")));
                    }
                    // eslint-disable-next-line no-lone-blocks
                    {
                      setPilihHari(dayjs(e));
                    }
                  }}
                  inline
                />
                {/* <div>{dayjs(`${PilihHari}`).format("DD/MM/YYYY")}</div> */}
                {/* <p>{dayjs(`${PilihHari}`)}</p> */}
                <div className="ext__calendar">
                  <button className="exp__today"></button>
                  <p>Chosen Date</p>
                  <button className="exp__chosen"></button>
                  <p>Today</p>
                </div>
              </div>
              {/* <CobaCalendar /> */}
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
              <p className="ReminderTitle">Notes</p>
              <div className="TodayDates">{dayjs(`${PilihHari}`).format("DD MMMM YYYY")} </div>
              <div className="CardMappingBox overflow-auto">
                {noteDate?.length === 0 ? (
                  <div className="d-flex justify-content-center mt-5" style={{}}>
                    <h3>nothing for today</h3>
                  </div>
                ) : (
                  noteDate?.data
                    ?.sort((a, b) => (a.current_percent > b.current_percent ? 1 : -1))
                    .map((item, index) => (
                      <div className="mappingGoals" key={index}>
                        <button
                          style={{ background: "none", border: "none" }}
                          onClick={() => {
                            dispatch(getDetailGoals(item?.id));
                          }}
                        >
                          <ReminderCard time={item?.dateNote} color={item?.color} id={item?.id} title={item?.title} content={item?.body} />
                        </button>
                      </div>
                    ))
                )}
              </div>
            </div>
          </div>
        </Col>
      </Container>
    </>
  );
}

export default HomeExisting;
