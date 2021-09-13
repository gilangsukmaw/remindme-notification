import React from "react";
import { Container,} from "react-bootstrap";
// import { useState } from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// const data = []

function CircularGoals(props) {
  // eslint-disable-next-line no-unused-vars
  const { color, current_percent, id, name } = props;

  // const color = `${colorCard}`;
  function strokeColor() {
    if (color === "#FFBCC2") {
      return "#FF8888";
    }
    if (color === "#CCF0D7") {
      return "#34A69A";
    }
    if (color === "#FCF3A1") {
      return "#E5D119";
    }
    if (color === "#D1CDFA") {
      return "#A258FF";
    }
    if (color === "#FF8888") {
      return "#FF586A";
    }
  }
//percentage dari mapping
  const percentage = current_percent;

  return (
    <>
      <div className="bigContainer d-flex flex-row">
        <Container className="CircularCard d-flex flex-column align-items-center ">
          <div className="CircularCard" id="CircularCard" style={{ width: 125, height: 125 }}>
              <CircularProgressbar
                background
                strokeWidth={5}
                backgroundPadding={0}
                value={percentage}
                text={`${percentage}%`}
                styles={{
                  path: { stroke: `${strokeColor()}` },
                  trail: { stroke: "none" },
                  background: { fill: `${color}` },
                  text: {
                    fill: "#342D50",
                    fontSize: "25px",
                  },
                }}
              />
          </div>
          <p className="CardTitle mt-3" style={{lineHeight:'1.2rem',textAlign:'center', fontSize: "1.5rem" }}>
            {name}
          </p>
        </Container>
       
      </div>

      {/* <div>
        <p>tes warna</p>
        <div className="ColorPicker">
          <Button
            style={{ backgroundColor: "#FFBCC2" }}
            onClick={() => setcolorCard("#FFBCC2")}
          ></Button>
          <Button
            style={{ backgroundColor: "#FCF3A1" }}
            onClick={() => setcolorCard("#FCF3A1")}
          ></Button>
          <Button
            style={{ backgroundColor: "#B1A8FF" }}
            onClick={() => setcolorCard("#B1A8FF")}
          ></Button>
          <Button
            style={{ backgroundColor: "#FF8888" }}
            onClick={() => setcolorCard("#FF8888")}
          ></Button>
          <Button
            style={{ backgroundColor: "#CCF0D7" }}
            onClick={() => setcolorCard("#CCF0D7")}
          ></Button>
        </div>
      </div> */}
    </>
  );
}

export default CircularGoals;
