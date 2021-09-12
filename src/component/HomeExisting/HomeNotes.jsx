import React from "react";
import Pin from "../../assets/images/Pin.png";
import "./Home.scss";
import { Container, Col } from "react-bootstrap";

function HomeNotes({ ...props }) {
  const { title, time, date, body, color } = props;

  return (
    <>
      {/* Background color nanti diganti dengan yg dari mapping */}
      <Container
        className="NotesCard text-dark"
        style={{ backgroundColor: `${color}`, marginBottom: "1rem", overflowWrap:'break-word' }}
      >
        <div className="CardTittle d-flex flex-row justify-content-between">
          {/* Title diganti dari maping */}
          <p>{title}</p> <img src={Pin} alt="" />
        </div>

        <div className="NotesTime">
          {/* tanggal diganti dari maping */}
          <p>{date}</p>
          <p>{time}</p>
        </div>

        <div className="MainNotes">
          {/* Content diganti dari maping */}
          <p>{body}</p>
        </div>
      </Container>
    </>
  );
}

export default HomeNotes;
