import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'
import { Navbar, Nav } from 'react-bootstrap';


const Menu = () => {
    return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand>Lagersystem</Navbar.Brand>
                 <Nav className="mr-auto">
                    <Link className="home" to="/">Hovedside</Link>
                    <Link className="about" to="/about">Om</Link>
                </Nav>
            </Navbar>
    );
}

export default Menu;