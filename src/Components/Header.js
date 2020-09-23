import React, { useContext } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import logo from "../Icon/Logo.png";
import "./Header.css";

const Header = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#home">News</Nav.Link>
          <Nav.Link href="#features">Destination</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          {loggedUser.name ? (
            loggedUser.name
          ) : (
            <Link to="/LogIn">
              <Button variant="outline-light">Login</Button>
            </Link>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
