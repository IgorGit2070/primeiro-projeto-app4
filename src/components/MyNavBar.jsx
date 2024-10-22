// rafce
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavBar = () => {
  return (
    // <div>
    //     <h3>MyNavBar</h3>
    // </div>
    <nav>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky='top'>
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/1054/1054942.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Omelete
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Início</Nav.Link>
            <Nav.Link href="#action2">Cardápio</Nav.Link>
            <NavDropdown title="Receitas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Miojo</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Macarronada
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Lamen
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contato
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Procure um prato..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </nav>
  )
}

export default MyNavBar