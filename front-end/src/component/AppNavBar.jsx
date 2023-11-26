import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import '../assets/css/AppNavBar.css'

const AppNavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark"  className="appNavBar">
            <Container>
                <Navbar.Brand href="#home">Student CURD</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="/">StudentList</NavLink>
                   <NavLink className="nav-link" to="/save">Registration</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AppNavBar;