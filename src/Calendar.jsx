import React, { useState } from "react";
import moment from "moment"

import "./calendar/CobaCalendar.scss";
import Calendar from "./calendar/CobaCalendar";

export default function CobaCalendar() {
  const [value, setValue] = useState(moment());
  return <Calendar value={value} onChange={setValue} />;
}
