import React from "react";
import TaskDescription from "./TaskDescription";

const TaskList = ({tasks}) => {
  return (
    <div className="task-list">
      {tasks && tasks.map(task => {
        return (
          <TaskDescription task={task} key={task.id} />
        )
      }
      )}
    </div>
  );
};

export default TaskList;
