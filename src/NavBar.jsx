import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navBar">
      <Container>
        <Navbar.Brand href="/">Busqueda Marvel Api</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
       
           
          </Nav>
          <Nav>
           
            <Nav.Link eventKey={2} href="#">
            𝕸𝖆𝖗𝖛𝖊𝖑 𝕾𝖊𝖆𝖗𝖈𝖍
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;