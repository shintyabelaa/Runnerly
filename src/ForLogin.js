import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import LoginComp from './components/LoginComp';

const ForLogin = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginComp />} />
      </Routes>
    </Router>
  );
};

export default ForLogin;
