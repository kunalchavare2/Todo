import React, { useState } from "react";
import "./DateTimePicker.scss";
import InputField from "./../InputField/InputField";

const DateTimePicker = ({ element, onChangeHandler, inputRef }) => {
  const today = new Date();

  const [date, setDate] = useState(today);

  function onChangeDate(ev) {
    const newdate = new Date(ev.target.value);

    setDate(newdate);
    console.log(ev.target.value.toString());

    onChangeHandler(ev, "datetime");
  }

  useState(() => {
   // inputRef.current.value = date;
  }, [date]);

  function formatDateTime(dateTime) {
    let dateStr = dateTime.toLocaleDateString([], {
      month: "numeric",
      year: "numeric",
      day: "numeric",
    });

    let timeStr = dateTime.toLocaleTimeString();
    return dateStr + " " + timeStr;
  }

  function openPicker() {
    document.querySelector(".datetimepicker__dateInput").showPicker();
  }
  return (
    <div className="datetimepicker">
      <InputField
        type="text"
        label="Due Date"
        name="dueDate"
        isLabelHidden={false}
        placeHolder="Select Due Date."
        onChangeHandler={onChangeDate}
        onClickHandler={openPicker}
        inputValue={formatDateTime(date)}
      />
      <input
        type="datetime-local"
        name=""
        className="datetimepicker__dateInput"
        onChange={onChangeHandler}
        ref={inputRef}
      />
    </div>
  );
};

export default DateTimePicker;
