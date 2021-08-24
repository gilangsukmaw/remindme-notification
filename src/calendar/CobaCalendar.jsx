import React, { useState, useEffect } from "react";
import moment from "moment";
import "../calendar/CobaCalendar.scss";
import buildCalendar from "./build";
import dayStyles, { beforeToday } from "./styles";
import Header from "./Header";

export default function Calendar({ value, onChange }) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className="calendar__container">
      <div className="calendar">
        <Header value={value} setValue={onChange} />
        <div className="body">
          <div className="day-names">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <div className="week">{d}</div>
            ))}
          </div>
          {calendar.map((week) => (
            <div>
              {week.map((day) => (
                <div className="day" onClick={() => onChange(day)}>
                  <div className={dayStyles(day, value)}>
                    {day.format("D").toString()}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
