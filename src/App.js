import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComp from "./components/NavbarComp";
import AboutUsComp from "./components/AboutUsComp";
import ArticleComp from "./components/ArticleComp";
import FooterComp from "./components/FooterComp";
import HeroComp from "./components/HeroComp";
import HowItWorksComp from "./components/HowItWorksComp";
import ArticleDetailComp from './components/ArticleDetailComp';
import LoginComp from './components/LoginComp';
import SignUpComp from './components/SignUpComp';
import DashboardComp from './components/DashboardComp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsComp />} />
          <Route path="/article" element={<ArticleComp />} />
          <Route path="/article/:id" element={<ArticleDetailComp />} />
          <Route path="/how-it-works" element={<HowItWorksComp />} />
          <Route path="/login" element={<LoginComp />} />
          <Route path="/signup" element={<SignUpComp />} />
          <Route path="/dashboard" element={<DashboardComp />} />
        </Routes>
        <FooterComp />
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick pauseOnHover />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <HeroComp />
      <AboutUsComp />
      <ArticleComp />
      <HowItWorksComp />
    </div>
  );
}

export default App;
