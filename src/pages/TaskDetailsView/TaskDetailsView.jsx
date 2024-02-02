import React, { useContext, useEffect, useState } from "react";
import "./TaskDetailsView.scss";
import {  Outlet, useNavigate, useParams } from "react-router-dom";
import { TaskContext, TaskDispatchContext } from "../../context/TaskContext";
import DetailItem from "./../../components/DetailItem/DetailItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faFilePen } from "@fortawesome/free-solid-svg-icons";
import AppBar from "./../../components/AppBar/AppBar";
import { deleteTask } from "../../services/storage";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

const TaskDetailsView = () => {
  const navigate = useNavigate();
  const tasks = useContext(TaskContext);
  const setTasks = useContext(TaskDispatchContext);
  const [task, setTask] = useState();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  function onDeleteHandler(shouldDelete) {
    if (shouldDelete) {
      const newtasks = tasks.filter((t) => t.id !== id);
      setTasks(newtasks);
      deleteTask(id);
      navigate(-1);
    }
  }

  useEffect(() => {
    const taskbyid = tasks.find((t) => t.id === id);

    setTask(taskbyid);
  }, []);

  return (
    <>
      <div
        className="addtaskWrapper"
        onClick={(e) =>
          e.target.classList.contains("addtaskWrapper") && navigate(-1)
        }
      >
        <div className="taskDetailView">
          <AppBar title="Task Details" />
          {task && (
            <div className="taskDetailView__content">
              {Object.keys(task).map((objectKey) => {
                if (objectKey !== "id") {
                  console.log(task[objectKey]);
                  return (
                    <DetailItem
                      label={objectKey}
                      value={task[objectKey]}
                      key={task[`${task.id}${objectKey}`]}
                    />
                  );
                }
              })}
            </div>
          )}

          <div className="taskDetailView__btnWrapper">
            <button
              className="taskDetailView__btnWrapper__btn editBtn"
              onClick={() => navigate(`../edittask/${id}`, { replace: true })}
            >
              <FontAwesomeIcon icon={faFilePen} className="icon" />
              <span className="label">Edit</span>
            </button>
            <button
              className="taskDetailView__btnWrapper__btn deleteBtn"
              onClick={() => setIsOpen(true)}
            >
              <FontAwesomeIcon icon={faTrashCan} className="icon" />
              <span className="label">Delete</span>
            </button>
          </div>
        </div>
        <DeleteModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onDelete={onDeleteHandler}
        />
        <Outlet />
      </div>
    </>
  );
};

export default TaskDetailsView;
