import React, { useContext } from "react";
import TaskCard from "../../components/TaskCard/TaskCard";
import Filter from "./../../components/Filter/Filter";
import "./CalendarView.scss";
import DateView from "../../components/DateView/DateView";
import {
  TaskContext,
  FilterContext,
  TaskDispatchContext,
} from "../../context/TaskContext";
import AppBar from "../../components/AppBar/AppBar";
import { Outlet, useParams } from "react-router-dom";

const CalendarView = ({ className }) => {
  const tasks = useContext(TaskContext);
  const setTasks = useContext(TaskDispatchContext);
  const [filter, setFilter] = useContext(FilterContext);

  const { id } = useParams();

  console.log(id);
  return (
    <div className={`${className && className} calendarview`}>
      {!id && <AppBar title="Tasks" back={false} />}
      <DateView />
      <Filter />
      <ul className="calendarview__tasklist">
        {tasks.length !== 0 &&
          tasks.map((task) => {
            if (!filter.type) {
              return <TaskCard task={task} key={task.id} />;
            } else if (filter.type && filter.type === task.type) {
              return <TaskCard task={task} key={task.id} />;
            }
          })}
      </ul>

      {tasks.length === 0 && <div>There is no task avaliable</div>}
      <Outlet />
    </div>
  );
};

export default CalendarView;
