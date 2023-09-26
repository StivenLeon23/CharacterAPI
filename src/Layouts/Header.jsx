import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function Header(props) {
  return (
    <header>
       <Navbar className="bg-body-tertiary" data-bs-theme="dark">
          <Container>
              <Navbar.Brand href="#home">Esta es la pagina de: {props.name}</Navbar.Brand>
              <Link to="/">Home</Link>
              <Link to="/frutas">Frutas</Link>
              <Link to="/verduras">Verduras</Link>
          </Container>
      </Navbar>
    </header>
  )
}

export default Header
