import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import CartWidget from '../cartWidget/cartWidget';
import { Link } from 'react-router-dom'


const Navbar1 = () => {
    return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/">Un Poco De Todo</Navbar.Brand>
              <Nav className="me-auto">
              <Link to={"/"} ><h2>  Home  </h2></Link>
              <Link to={"/Productos"} ><h2>  Productos  </h2></Link>
              <Link to={"/Cart"} ><h2>  Carrito  </h2></Link>
            </Nav>
            </Container>
            <CartWidget/>
          </Navbar>
        </>
    );
}

export default Navbar1
