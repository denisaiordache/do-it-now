import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Dashboard from "../dashboard/Dashboard";
import TaskDetails from "../tasks/TaskDetails";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import NewTask from "../tasks/NewTask";
import WelcomePage from "../WelcomePage";
import PrivateRoute from "../PrivateRoute";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase-config";

function App() {
  const isAuthenticated = useAuthState(auth);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />

          <Route path="/task/:id" element={<TaskDetails />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="/signin" element={<SignIn />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/newtask" element={<NewTask />} />
        </Routes>
      </Router>
    </>
  );
};


export default App;
