import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
const Header = ({balance}) => {
    return (
        <Navbar bg="dark" expand="lg" sticky="top" variant="dark" className="py-4" collapseOnSelect>
            <Container fluid="md">
                <Navbar.Brand href="/portfolio" style={{fontSize:"26px", borderRight:"2px solid grey", padding:"0 10px"}}>RecycIN</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{padding: "0 10px"}}
                        navbarScroll
                    >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#content">Inventory</Nav.Link>
                        <Nav.Link href="#market">Market</Nav.Link>
                        <Nav.Link href="#recycle">Recycle</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <h6 style={{color:"white"}}>Balance: {balance} ABEL</h6>
        </Navbar>
    );
};

export default Header;