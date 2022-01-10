import React from "react";
import { useParams } from "react-router";

const TaskDetails = () => {
    
    const {id} = useParams(); //accesez parametrii rutei curente
    console.log(id);
  return (
    <div className="container section-task-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Finish React Project - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis excepturi autem consequuntur sint. Laborum tempore
            libero doloremque repudiandae nam aliquam.
          </p>
          <div>
            <i className="material-icons">alarm</i> 24th of January, 2pm
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
