import React, { Component } from "react";
import TaskList from "../tasks/TaskList";
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <TaskList />
      </div>
    );
  }
}
export default Dashboard;
