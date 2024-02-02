import React from "react";
import "./SingleDate.scss";

const SingleDate = ({ date, className, onClick }) => {
  function convertDateString(dateValue) {
    const tempDate = new Date(dateValue);
    return tempDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
      weekday: "long",
      day: "numeric",
    });
  }
  const todayDate = new Date();
  const todayDateStr = convertDateString(todayDate);
  const dateStr = convertDateString(date);

  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  const weekDay = date.toLocaleDateString("en-US", { weekday: "short" });
  return (
    <span
      className={`date ${todayDateStr === dateStr ? "today" : ""}  ${
        className && className
      }`}
      onClick={onClick}
    >
      <span className="date__month">{month}</span>
      <span className="date__day">{day}</span>
      <span className="date__weekDay">{weekDay}</span>
    </span>
  );
};

export default SingleDate;
