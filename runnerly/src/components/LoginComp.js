import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RunnerlyLogo from '../assets/img/gallery/RunnerlyLogo.png';
import firebase from './firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginComp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    setIsLoggedIn(location.pathname !== '/login');
  }, [location.pathname]);

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login berhasil
        const user = userCredential.user;
        console.log('Login berhasil:', user);
        toast.success('Login berhasil');
        // Arahkan ke DashboardComp
        navigate('/dashboard');
      })
      .catch((error) => {
        // Tangani error saat login
        setLoginError('Login gagal. Periksa kembali email dan password Anda.');
        console.log('Login gagal:', error);
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
            <Nav>
              {!isLoggedIn && (
                <Nav.Link as={Link} to="/login" className="nav-link" style={{ marginLeft: '20px' }}>
                  <i className="fas fa-user footer-user-icon" onClick={handleUserIconClick}></i>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="hero">
        <div className="d-flex align-items-center justify-content-center">
          {!isLoggedIn && (
            <Card className="login-card small-card" style={{ backgroundColor: 'white', marginBottom: '130px'}}>
              <Card.Body>
                <Card.Title className="login-card-title" style={{ fontSize: '22px', color: '#FF6A13' }}>Login</Card.Title>
                <Card.Text style={{ maxHeight: '20vw', overflow: 'unset', fontSize: '20px', }}>
                  <form onSubmit={handleLogin}>
                    <div className="form-group" style={{ marginTop: '30px' }}>
                      <label style={{ display: 'flex', color:'#FF6A13' }}>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group" style={{ marginTop: '20px' }}>
                      <label style={{ display: 'flex', color:'#FF6A13' }}>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {loginError && <p className="text-danger">{loginError}</p>}
                    <Button
                      type="submit"
                      variant="primary"
                      className="btn-login"
                      style={{ backgroundColor: '#FF6A13', border: 'none', width:'100px', marginTop:'20px' }}
                    >
                      Login
                    </Button>
                  </form>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <p className="text-center" style={{ marginTop: '20px'}}>
                  Belum memiliki akun? <Link to="/signup" style={{ color: "rgb(255, 106, 19)" }}>Daftar Sekarang</Link>
                </p>
              </Card.Footer>
            </Card>
          )}
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default LoginComp;
