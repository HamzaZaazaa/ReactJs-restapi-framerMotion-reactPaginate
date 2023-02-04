import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

function NavBarr() {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>MY APP</Navbar.Brand>
          <Nav className='me-auto'>
            <Link
              to=''
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Home
            </Link>
            <Link
              to='/categories'
              style={{
                textDecoration: "none",
                color: "white",
              }}
              className='ps-3'
            >
              Categories
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarr;
