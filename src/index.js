import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './globalTheme.scss';
import React from 'react';
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

