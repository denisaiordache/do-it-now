import React from "react";

const TaskDescription = () => {
  return (
    <div className="row">
      <div className="col s4">
        <div className="card">
          <div className="card-image">
            <img src="/images/bulb.jpg" />
            <span className="card-title">Finish React Project</span>
          </div>
          <div className="card-content">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              rem mollitia facere sapiente inventore? Repellendus doloremque
              cumque libero unde quaerat.{" "}
            </p>
            <div>
              <i className="material-icons">alarm</i> 24th of January, 2pm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDescription;
