import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Link to="/login">
          <Navbar.Brand>Polling App</Navbar.Brand>
        </Link>

        <Link to="/login">
          <Button variant="outline-primary">Login</Button>
        </Link>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
