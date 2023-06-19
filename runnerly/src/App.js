import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import AboutUsComp from './components/AboutUsComp';
import ArticleComp from './components/ArticleComp';
import FooterComp from './components/FooterComp';
import HeroComp from './components/HeroComp';
import HowItWorksComp from './components/HowItWorksComp';
import ArticleDetailComp from './components/ArticleDetailComp';
import LoginComp from './components/LoginComp';
import SignUpComp from './components/SignUpComp';
import DashboardComp from './components/DashboardComp';
import DashboardUserComp from './components/DashboardUserComp';
import BeratBadanComp from './components/BeratBadanComp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JarakLariComp from './components/JarakLariComp';
import ReportComp from './components/ReportComp';

const App = () => {
  return (
    <Router>
      <div>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsComp />} />
          <Route path="/article" element={<ArticleComp />} />
          <Route path="/article/:index" element={<ArticleDetailComp />} />
          <Route path="/how-it-works" element={<HowItWorksComp />} />
          <Route path="/login" element={<LoginComp />} />
          <Route path="/signup" element={<SignUpComp />} />
          <Route path="/dashboard" element={<DashboardComp />} />
          <Route path="/dashboard/user/:level" element={<DashboardUser />} />
          <Route path="/beratbadan/:level" element={<BeratBadan />} />
          <Route path="/jaraklari/:level" element={<JarakLari />} />
          <Route path="/report/:level" element={<Report />} />
        </Routes>
        <FooterComp />
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick pauseOnHover />
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <HeroComp />
      <AboutUsComp />
      <ArticleComp />
      <HowItWorksComp />
    </div>
  );
};

const DashboardUser = () => {
  const params = useParams();
  const level = params.level;
  return <DashboardUserComp level={level} />;
};

const BeratBadan = () => {
  const params = useParams();
  const level = params.level;
  return <BeratBadanComp userLevel={level} />;
};

const JarakLari = () => {
  const params = useParams();
  const level = params.level;
  return <JarakLariComp userLevel={level} />;
};

const Report = () => {
  const params = useParams();
  const level = params.level;
  return <ReportComp userLevel={level} />;
};

export default App;
