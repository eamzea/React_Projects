import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/" className="navbar-brand">
          useContext
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact activeClassName="active" to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink
            exact
            activeClassName="active"
            to="/about"
            className="nav-link"
          >
            About
          </NavLink>

          <NavLink
            exact
            activeClassName="active"
            to="/login"
            className="nav-link"
          >
            Login
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
