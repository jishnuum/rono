
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home">Cristiano Ronaldo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#homeSection">Home</Nav.Link>
            <Nav.Link href="#aboutSection">About</Nav.Link>
            <Nav.Link href="#careerSection">Career</Nav.Link>
            <Nav.Link href="#gallerySection">Gallery</Nav.Link>
            <Nav.Link href="#contactSection">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;