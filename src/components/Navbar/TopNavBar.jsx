import React from "react";
import { Navbar } from 'react-bootstrap'
import { Container } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import { Nav } from "react-bootstrap";
function TopNavBar(props){

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
            <Icon.Box alt=""
                width="30"
                height="30"
                className="d-inline-block align-top"/>
            Menu
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Blog</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Resources</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
        </Container>
        </Navbar>
    )
};

export default TopNavBar;