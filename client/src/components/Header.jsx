import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <div className="mb-auto fx-1">
      <Navbar bg="dark" variant="dark">
        {/* <Navbar.Brand href="/">Movie Review</Navbar.Brand> */}
        <Link className="navbar-brand" to="/">
          Movie Review
        </Link>
        {/* <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
        <Nav className="ml-auto">
          <Nav.Link href="#pricing">Logout</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
