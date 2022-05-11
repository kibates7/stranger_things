import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const App = () => {
  return <div>
      <Header />
   
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

