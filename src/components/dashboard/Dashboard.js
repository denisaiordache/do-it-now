import React, { Component } from "react";
import TaskList from "../tasks/TaskList";
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const {tasks} = this.props
    return (
      <div className="dashboard-container">
        <TaskList tasks = {tasks}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks
}
}

export default connect(mapStateToProps)(Dashboard);
