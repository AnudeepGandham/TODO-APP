import React from "react";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TaskContext } from "../contexts/TaskContext";
function TaskList() {
  let [tasks, setTasks] = useContext(TaskContext);
  return (
    <div>
      <p className="lead fs-1 text-center bg-warning text-dark">TASKS</p>
      {tasks.map((e, i) => (
        <p className="lead" key={i}>
          {e.newTask}
        </p>
      ))}
    </div>
  );
}

export default TaskList;
