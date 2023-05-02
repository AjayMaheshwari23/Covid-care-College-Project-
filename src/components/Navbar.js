import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Route, Link, Routes} from 'react-router-dom';
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">C<i className="fa fa-spinner fa-s"></i>VID-CARE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
              
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
          {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
          {/* </NavDropdown> */}
          <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="../components/About.js">About</Nav.Link>
              <Nav.Link href="../components/Prevent.js">Prevent</Nav.Link>
              <Nav.Link href="../components/Symtoms.js">Symptoms</Nav.Link>
              <Nav.Link href="../components/Experts.js">Experts</Nav.Link>
              <Nav.Link href="../components/Blogs.js">Blogs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login In</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Case Report
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;