import React from "react";
import TaskDescription from "./TaskDescription";
import { query,collection,getDocs,where, onSnapshot} from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase-config";
import { useState } from "react";
import { useEffect } from "react";

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

