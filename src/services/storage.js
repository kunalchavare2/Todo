function saveTask(task) {
  const saveTasks = localStorage.getItem("todoTask");

  let tasks = JSON.parse(saveTasks);

  if (Array.isArray(tasks)) {
    const hasAvailableTasks = tasks.find((t) => t.id === task.id);

    if (hasAvailableTasks) {
      const newTasks = tasks.filter((t) => t.id !== task.id);

      tasks = [...newTasks, task];
    } else {
      tasks = [...tasks, task];
    }
  } else {
    tasks = [task];
  }

  localStorage.setItem("todoTask", JSON.stringify(tasks));
}

function setSaveTask() {
  const saveTasks = localStorage.getItem("todoTask");

  let tasks = JSON.parse(saveTasks);
  if (Array.isArray(tasks)) {
    return tasks;
  }

  return [];
}

function deleteTask(id) {
  const saveTasks = localStorage.getItem("todoTask");

  let tasks = JSON.parse(saveTasks);

  if (Array.isArray(tasks)) {
    const newtasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("todoTask", JSON.stringify(newtasks));
    return true;
  }

  return false;
}

export { saveTask, setSaveTask, deleteTask };
