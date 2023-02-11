import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";



const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
      <Container fluid>
        <Navbar.Brand href="/">Blog.app</Navbar.Brand>
        <Nav placement="end">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
