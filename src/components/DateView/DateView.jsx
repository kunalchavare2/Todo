import React from "react";
import "./DateView.scss";
import SingleDate from "./../SingleDate/SingleDate";

const DateView = () => {
  let today = new Date();
  let dayBeforeyesterday = new Date();
  let yesterday = new Date();
  let tommorrow = new Date();
  let dayAfterTommorrow = new Date();

  dayBeforeyesterday.setDate(today.getDate() - 2);
  yesterday.setDate(today.getDate() - 1);
  tommorrow.setDate(today.getDate() + 1);
  dayAfterTommorrow.setDate(today.getDate() + 2);

  function selectDate(ev) {
    console.log(ev.target);
  }

  return (
    <div className="dateView">
      <SingleDate
        date={dayBeforeyesterday}
        onClick={selectDate}
        className={""}
      />
      <SingleDate date={yesterday} onClick={selectDate} className={"hello"} />
      <SingleDate date={today} onClick={selectDate} className={""} />
      <SingleDate date={tommorrow} onClick={selectDate} className={""} />
      <SingleDate
        date={dayAfterTommorrow}
        onClick={selectDate}
        className={""}
      />
    </div>
  );
};

export default DateView;
