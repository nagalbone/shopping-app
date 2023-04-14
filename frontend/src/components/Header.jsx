import { Container,Navbar,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = ()=>{
    return(
            <>
            <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{color: "#ffffff",textDecoration: "none"}}>Shopping App</Link>
        
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
            <i class="fa-solid fa-cart-shopping" style={{color: "#ffffff"}}></i>
            <Link to="/cart" style={{color: "#ffffff",textDecoration: "none"}}>Cart</Link></Nav.Link>
            <Nav.Link>
            <i class="fa-solid fa-user" style={{color: "#ffffff"}}></i>
            <Link to="/signin" style={{color: "#ffffff",textDecoration: "none"}}>Sign In</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container> 
      </Navbar>
   
            </>
    )
}

export default Header;