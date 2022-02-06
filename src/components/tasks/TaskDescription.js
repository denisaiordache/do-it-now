import React from "react";


const TaskDescription = ({task}) => {
  return (
    <div className="row" style={{'margin-top':10}}>
      <div className="col s5" style={{"margin-left":450}}>
        <div className="card">
          <div className="card-image">
            <img src="/images/bulb.jpg" />
            <span className="card-title">{task.title}</span>
          </div>
          <div className="card-content">
            <p>
              {task.content}
            </p>
            <div>
              <i className="material-icons">alarm</i> {task.deadline}
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default TaskDescription;
