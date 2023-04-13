import { Container,Navbar,Nav } from "react-bootstrap";
const Header = ()=>{
    return(
            <>
            <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Shopping App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Cart</Nav.Link>
            <Nav.Link href="#link">SignIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </>
    )
}

export default Header;