import React, { createContext, useEffect, useState } from "react";
import { setSaveTask } from "../services/storage";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const TaskContext = createContext("");
const TaskDispatchContext = createContext("");
const StaticTaskContext = createContext("");
const FilterContext = createContext("");

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [staticTasks, setstaticTasks] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const data = setSaveTask();
    setstaticTasks(data);
    setTasks(data);
  }, []);

  return (
    <StaticTaskContext.Provider value={[staticTasks, setstaticTasks]}>
      <TaskContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={setTasks}>
          <FilterContext.Provider value={[filter, setFilter]}>
            {children}
          </FilterContext.Provider>
        </TaskDispatchContext.Provider>
      </TaskContext.Provider>
    </StaticTaskContext.Provider>
  );
}

export {
  TaskProvider,
  TaskContext,
  TaskDispatchContext,
  FilterContext,
  StaticTaskContext,
};
