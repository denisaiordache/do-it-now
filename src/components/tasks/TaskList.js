import React from "react";
import TaskDescription from "./TaskDescription";

const TaskList = () => {
  return (
    <div className="task-list">
      <TaskDescription />
      <TaskDescription />
      <TaskDescription />
    </div>
  );
};

export default TaskList;
