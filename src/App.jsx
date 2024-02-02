import "./App.scss";
import CalendarView from "./pages/CalendarView/CalendarView";
import AddTaskView from "./pages/AddTaskView/AddTaskView";
import { Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import TaskDetailsView from "./pages/TaskDetailsView/TaskDetailsView";
import Navigation from "./components/Navigation/Navigation";
import HomeView from "./pages/HomeView/HomeView";
import ImportantView from "./pages/ImportantView/ImportantView";
import SettingsView from "./pages/SettingsView/SettingsView";

function App() {
  return (
    <>
      <div className="taskapp">
        <TaskProvider>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route
              path="/important"
              element={<ImportantView classValue="taskapp__impView" />}
            />
            <Route path="/settings" element={<SettingsView />} />

            <Route
              path="/tasks"
              element={<CalendarView className="taskapp__calenderView" />}
            >
              <Route
                path="taskdetail/:id"
                element={<TaskDetailsView />}
              ></Route>
              <Route path="edittask/:id" element={<AddTaskView />} />
              <Route path="addtask/:id" element={<AddTaskView />} />
            </Route>
            <Route path="/addtask/:id" element={<AddTaskView />} />
            <Route path="/edittask/:id" element={<AddTaskView />} />
          </Routes>
        </TaskProvider>

        <Navigation className="taskapp__nav" />
      </div>
    </>
  );
}

export default App;
