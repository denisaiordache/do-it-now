import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Dashboard from "../dashboard/Dashboard";
import TaskDetails from "../tasks/TaskDetails";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import NewTask from "../tasks/NewTask";

function App() {
  return (
    
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={ <Dashboard />} />
            
         
          <Route path="/task/:id" element={ <TaskDetails />} />
           
         
          <Route path="/signin" element={ <SignIn />}/>
            

          <Route path="/signup" element={<SignUp />}/>
            

          <Route path="/newtask" element={ <NewTask />}/>
            
        </Routes>
        </Router>
      </>
    
  );
};


export default App;
