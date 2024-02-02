import React, { useContext } from "react";
import "./TaskCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import StatusPill from "./../StatusPill/StatusPill";
import { useNavigate } from "react-router-dom";
import getParentComp from "../../helpers/GetParentComp";
import { TaskContext, TaskDispatchContext } from "../../context/TaskContext";
import StatusPillEnum from "../../helpers/enum/StatusPillEnum";
import { saveTask } from "../../services/storage";
import ImportantStar from "../ImportantStar/ImportantStar";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  const tasks = useContext(TaskContext);
  const setTasks = useContext(TaskDispatchContext);

  function onClickHandler(ev) {
    if (
      !ev.target.classList.contains("input-check") &&
      !ev.target.classList.contains("taskcard__checkcontainer__checkmark") &&
      ev.target.localName !== "path" &&
      ev.target.localName !== "input"
    ) {
      const element = ev.target.closest(".taskcard");
      navigate(`taskdetail/${element.dataset.id}`);
    }
  }

  function isChecked(ev) {
    const element = getParentComp(ev.target, "taskcard");
    let index = null;
    let gettask = tasks.find((t, i) => {
      index = t.id === element.dataset.id ? i : null;
      return t.id === element.dataset.id;
    });

    const newTasks = tasks.filter((t, index) => {
      return t.id !== element.dataset.id;
    });

    if (gettask) {
      gettask.type = ev.target.checked
        ? StatusPillEnum.Done
        : StatusPillEnum.InProgress;

      newTasks.splice(index, 0, gettask);

      setTasks((prev) => [...newTasks]);

      saveTask(gettask);
    }
  }

  return (
    <li className="taskcard" onClick={onClickHandler} data-id={task.id}>
      <div className="taskcard__header">
        <label className="taskcard__checkcontainer">
          <input
            className="input-check"
            type="checkbox"
            defaultChecked={task.type === "Done" ? "checked" : ""}
            onChange={isChecked}
          />
          <div className="taskcard__checkcontainer__checkmark"></div>
        </label>
        <span className="taskcard__header__title">{task.title}</span>
        <ImportantStar task={task} />
      </div>
      <div className="taskcard__container">
        <span className="taskcard__container__timeWrapper">
          <FontAwesomeIcon
            icon={faClock}
            className="taskcard__container__icon"
          />
          <span className="taskcard__container__endtime">{task.dueDate}</span>
        </span>
        <StatusPill type={task.type} />
      </div>
    </li>
  );
};

export default TaskCard;
