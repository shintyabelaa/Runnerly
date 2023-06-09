import React, { useState } from 'react';
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import RunnerlyLogo from '../assets/img/gallery/RunnerlyLogo.png';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const SignUpComp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Sign up berhasil
        const user = userCredential.user;
        // Tampilkan notifikasi pop-up dengan tanda centang hijau dan ikon
        toast.success('Akunmu berhasil terdaftar!', {
          position: toast.POSITION.BOTTOM_CENTER,
          progressClassName: 'toast-progress',
          autoClose: 3000,
          hideProgressBar: true,
          closeButton: false,
        });
        // Lakukan tindakan setelah sign up sukses
      })
      .catch((error) => {
        // Handle error saat sign up
        console.log(error);
      });
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar
        style={{ backgroundColor: '#FF6A13', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}
        expand="lg"
        className="d-flex align-items-center justify-content-between"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={RunnerlyLogo} width="100px" height="25px" className="d-inline-block align-top" alt="Runnerly Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className="nav-link" style={{ marginRight: '20px' }}>
                <h1>Home</h1>
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-link">
                <h1>About</h1>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero */}
      <div className="hero">
        <div className="d-flex align-items-center justify-content-center" style={{ marginTop: '50px' }}>
          <Card className="signup-card small-card" style={{ width: '400px', backgroundColor: 'white' }}>
            <Card.Body>
              <Card.Title className="signup-card-title">Sign Up</Card.Title>
              <Card.Text>
                <form onSubmit={handleSignUp}>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="btn-signup"
                    style={{ backgroundColor: '#FF6A13', border: 'none' }}
                  >
                    Sign Up
                  </Button>
                </form>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <p className="text-center">
                Sudah punya akun? <Link to="/login">Login Sekarang</Link>
              </p>
            </Card.Footer>
          </Card>
        </div>
      </div>

      {/* Toast Container */}
      <style>
        {`
          .toast-progress {
            background-color: #28a745 !important;
          }

          .toast-container {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
        `}
      </style>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        closeButton={false}
        toastClassName="toast-container"
      />
    </div>
  );
};

export default SignUpComp;
