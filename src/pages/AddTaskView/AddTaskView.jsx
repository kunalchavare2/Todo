import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./../../components/InputField/InputField";
import "./AddTaskView.scss";
import DateTimePicker from "./../../components/DateTimePicker/DateTimePicker";
import SelectCategory from "./../../components/SelectCategory/SelectCategory";
import { TaskContext, TaskDispatchContext } from "../../context/TaskContext";
import { useParams } from "react-router-dom";
import { saveTask } from "../../services/storage";
import AppBar from "../../components/AppBar/AppBar";

const AddTaskView = () => {
  const tasks = useContext(TaskContext);
  const setTasks = useContext(TaskDispatchContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const noteRef = useRef(null);
  const dueDateRef = useRef(null);
  const categoryRef = useRef(null);
  const isEdit = id === "0" ? false : true;

  function onChangeHandler(params) {
    console.log(params);
  }

  function getUID() {
    // Get the timestamp and convert
    // it into alphanumeric input
    return Date.now().toString(36);
  }

  function onSubmitHandler(ev) {
    ev.preventDefault();
    const task = {
      id: isEdit ? id : getUID(),
      title: titleRef.current.value,
      note: noteRef.current.value,
      dueDate: dueDateRef.current.value,
      type: categoryRef.current.value,
      important: false,
    };
    if (isEdit) {
      let index = null;
      const newTasks = tasks.filter((t, i) => {
        index = t.id === id ? i : null;
        return t.id !== id;
      });

      newTasks.splice(index, 0, task);

      setTasks((prev) => [...newTasks]);
    } else {
      setTasks((prev) => [...prev, task]);
    }
    saveTask(task);
    navigate(-1);
  }

  useEffect(() => {
    if (id !== "0" && id !== "undefined") {
      const editTask = tasks.find((t) => t.id === id);
      titleRef.current.value = editTask.title;
      noteRef.current.value = editTask.note;
      dueDateRef.current.value = editTask.dueDate;
      categoryRef.current.value = editTask.type;
    }
  }, []);

  return (
    <div
      className="addtaskWrapper"
      onClick={(e) =>
        e.target.classList.contains("addtaskWrapper") && navigate(-1)
      }
    >
      <div className="addtask">
        <AppBar title={`${isEdit ? "Edit Task" : "Add Task"}`} />
        <form className="addtask__form" name="addTaskForm">
          <InputField
            type="text"
            label="Title"
            name="dueDate"
            isLabelHidden={false}
            placeHolder="Enter task title."
            inputRef={titleRef}
            onChangeHandler={onChangeHandler}
          />
          <InputField
            type="textarea"
            label="Notes"
            name="dueDate"
            isLabelHidden={false}
            placeHolder="Select Due Date."
            inputRef={noteRef}
            onChangeHandler={onChangeHandler}
          />
          <DateTimePicker
            onChangeHandler={onChangeHandler}
            inputRef={dueDateRef}
          />
          <SelectCategory
            onChangeHandler={onChangeHandler}
            inputRef={categoryRef}
          />

          <button
            type="submit"
            onClick={onSubmitHandler}
            className="addtask__form__addbtn"
          >
            {`${isEdit ? "Edit Task" : "Add Task"}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskView;
