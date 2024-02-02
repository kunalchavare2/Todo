import React from "react";
import StatusPillEnum from "../../helpers/enum/StatusPillEnum";
import "./SelectCategory.scss";

const SelectCategory = ({ onChangeHandler, inputRef }) => {
  function onValueChange(ev) {
    onChangeHandler(ev, "select");

    if (ev.target.value === StatusPillEnum.done) {
      ev.target.style.color = "#5f33e1";
      ev.target.style.backgroundColor = "#ede8ff";
    } else if (ev.target.value === StatusPillEnum.InProgress) {
      ev.target.style.color = "#ff926f";
      ev.target.style.backgroundColor = "#ffe9e1";
    } else {
      ev.target.style.color = "#007be5";
      ev.target.style.backgroundColor = "#e3f2ff";
    }
  }
  return (
    <div className="category">
      <label htmlFor="category" className="category__label">
        Category
      </label>
      <select
        name="Category"
        id="category"
        className="category__select"
        onChange={onValueChange}
        ref={inputRef}
      >
        <option value={StatusPillEnum.Todo}>{StatusPillEnum.Todo}</option>
        <option value={StatusPillEnum.InProgress}>
          {StatusPillEnum.InProgress}
        </option>
        <option value={StatusPillEnum.Done}>{StatusPillEnum.Done}</option>
      </select>
    </div>
  );
};

export default SelectCategory;
