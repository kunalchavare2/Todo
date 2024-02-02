import React, { useContext } from "react";
import {
  TaskContext,
  TaskDispatchContext,
  FilterContext,
} from "../../context/TaskContext";
import TaskCard from "../../components/TaskCard/TaskCard";
import "./ImportantView.scss";

const ImportantView = ({ classValue }) => {
  const tasks = useContext(TaskContext);
  const setTasks = useContext(TaskDispatchContext);
  const [filter, setFilter] = useContext(FilterContext);
  return (
    <div className={`impView ${className && className}`}>
      <ul className="impView__tasklist">
        {tasks.length !== 0 &&
          tasks.map((task) => {
            return task.important && <TaskCard task={task} key={task.id} />;
          })}
      </ul>
    </div>
  );
};

export default ImportantView;
