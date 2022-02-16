import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';


function Navigation() {
    return (
        <Navbar style={{backgroundColor : "black",}} variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">Movies</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/favList">My Favourites</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;