import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../Icon/Logo.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" >

                <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">News</Nav.Link>
                    <Nav.Link href="#features">Destination</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                    <Button variant="outline-light">Login</Button>
                </Nav>
                
            </Navbar>
        </div>
    );
};

export default Header;