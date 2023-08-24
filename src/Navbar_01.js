import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbar_01() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">BookWorm project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/Lending Library">Lending Library</Nav.Link>
            <Nav.Link href="/Myshelf">Myshelf</Nav.Link>
            <Nav.Link href="/MyLibrary">MyLibrary</Nav.Link>
            <Nav.Link href="/About Us">About Us</Nav.Link>
            <Nav.Link href="/Contactus">Contactus</Nav.Link>
            <Nav.Link href="/Feedback">Feedback</Nav.Link>
            <Nav.Link href="/sign">sign </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


  export default Navbar_01;