// src/components/AppNavbar.js
import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function AppNavbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/'); // Redirect to home page after logout
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate to previous page
  };

  return (
    <>
      <div className="announcement-bar text-center text-dark py-2 px-3">
        <marquee behavior="scroll" direction="left">
          🎉 Free Delivery on orders over $50! &nbsp;&nbsp; | &nbsp;&nbsp;
          💄 New Arrivals Just Dropped! &nbsp;&nbsp; | &nbsp;&nbsp;
          🛍️ Shop Now and Get 20% Off – Limited Time Only!
        </marquee>
      </div>

      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-success">
            🌿 Organic Glow
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

              {isLoggedIn ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/forgot-password">Forgot Password</NavDropdown.Item>
                </NavDropdown>
              )}

              {/* Go Back Button */}
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={handleGoBack}
                className="ms-3"
              >
                ← Go Back
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
