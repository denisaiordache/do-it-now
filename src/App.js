import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import TaskDetails from "./components/tasks/TaskDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NewTask from "./components/tasks/NewTask";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/task/:id">
            <TaskDetails />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/newtask">
            <NewTask />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
