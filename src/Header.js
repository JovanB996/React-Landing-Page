import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function NavMenu() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#jovan-beljakovic">Jovan Beljakovic</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#who">Who</Nav.Link>
            <Nav.Link href="#what">What</Nav.Link>
            <Nav.Link href="#network">Network</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMenu;