import React, { useContext, useState } from "react";
import StatusPillEnum from "../../helpers/enum/StatusPillEnum";
import "./Filter.scss";
import { FilterContext } from "../../context/TaskContext";

const Filter = () => {
  const [selected, setSelected] = useState("All");
  const [filter, setFilter] = useContext(FilterContext);

  function changeFilter(ev) {
    if (ev.target.localName === "li") {
      setFilter({
        type: ev.target.innerText !== "All" ? ev.target.innerText : null,
      });
      setSelected(ev.target.innerText);
    }
  }
  return (
    <ul className="filter" onClick={changeFilter}>
      <li className={`filter__item ${selected === "All" && "selected"}`}>
        All
      </li>
      <li
        className={`filter__item ${
          selected === StatusPillEnum.InProgress && "selected"
        }`}
      >
        {StatusPillEnum.InProgress}
      </li>
      <li
        className={`filter__item ${
          selected === StatusPillEnum.Todo && "selected"
        }`}
      >
        {StatusPillEnum.Todo}
      </li>
      <li
        className={`filter__item ${
          selected === StatusPillEnum.Done && "selected"
        }`}
      >
        {StatusPillEnum.Done}
      </li>
    </ul>
  );
};

export default Filter;
