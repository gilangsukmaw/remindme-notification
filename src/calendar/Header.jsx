import { isThisMonth } from "date-fns";
import React from "react";

export default function CalendarHeader({ value, setValue }) {
  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function prevYear() {
    return value.clone().subtract(1, "year");
  }

  function nextYear() {
    return value.clone().add(1, "year");
  }
  //   function thisMonth() {
  //     return value.isSame(new Date(), "month");
  //   }
  return (
    <div className="header">
      <div className="header__left">
        <div className="previous" onClick={() => setValue(prevMonth())}>
          {String.fromCharCode(171)}
        </div>
        <div className="current">{currMonthName()}</div>
        <div className="next" onClick={() => setValue(nextMonth())}>
          {String.fromCharCode(187)}
        </div>
      </div>
      <div className="header__right">
        <div className="previous" onClick={() => setValue(prevYear())}>
          {String.fromCharCode(171)}
        </div>
        <div className="current">{currYear()}</div>
        <div className="next" onClick={() => setValue(nextYear())}>
          {String.fromCharCode(187)}
        </div>
      </div>
    </div>
  );
}
