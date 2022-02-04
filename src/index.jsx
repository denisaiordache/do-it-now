import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./store/reducers/rootReducer";
import App from "./components/App";


const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk)
);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);