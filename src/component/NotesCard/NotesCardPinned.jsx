import React from "react";
import "./NotesCard.css";
import Pin from "../../assets/images/Pin.png";
import { useState } from "react";
import { Button } from "react-bootstrap";

function NotesPinnedCard() {
  const [color, setColor] = useState();
  return (
    <>
      <div
        className="CardContainer text-dark"
        style={{ backgroundColor: "powderblue" }}
      >
        <div className="CardTittle d-flex flex-row justify-content-between">
          {/* Title diganti dari maping */}
          <p>Understanding Business Value</p> <img src={Pin}></img>
        </div>
        <div className="CardTanggal">
          {/* tanggal diganti dari maping */}
          <p>11 Agustus 2021</p>
        </div>
        <div className="MainNotes">
          {/* Content diganti dari maping */}
          <p>
            As designer that understands how to continually bring value to the
            business while also advocating for the user is a golden egg for
            organizations.
          </p>
        </div>
      </div>

      <div
        className="CardContainer text-dark "
        style={{ backgroundColor: `${color}` }}
      >
        <div className="CardTittle d-flex flex-row justify-content-between">
          <p>Understanding Business Value</p> <img src={Pin} alt="" />
        </div>
        <div className="CardTanggal">
          <p>11 Agustus 2021</p>
        </div>
        <div className="MainNotes">
          <p>
            As designer that understands how to continually bring value to the
            business while also advocating for the user is a golden egg for
            organizations.
          </p>
        </div>
        <div className="ColorPicker">
          <Button
            style={{ backgroundColor: "#FFBCC2" }}
            onClick={() => setColor("#FFBCC2")}
          ></Button>
          <Button
            style={{ backgroundColor: "#FCF3A1" }}
            onClick={() => setColor("#FCF3A1")}
          ></Button>
          <Button
            style={{ backgroundColor: "#B1A8FF" }}
            onClick={() => setColor("#B1A8FF")}
          ></Button>
          <Button
            style={{ backgroundColor: "#FF8888" }}
            onClick={() => setColor("#FF8888")}
          ></Button>
          <Button
            style={{ backgroundColor: "#CCF0D7" }}
            onClick={() => setColor("#CCF0D7")}
          ></Button>
        </div>
      </div>
    </>
  );
}

export default NotesPinnedCard;
