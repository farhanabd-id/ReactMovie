import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Logo } from './assets/images/Logo.svg';

function Navbartwo() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> <Logo /> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Movie</Nav.Link>
            <Nav.Link href="#pricing">TopUp</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default Navbartwo