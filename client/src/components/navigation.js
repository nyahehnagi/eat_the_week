import { Navbar,NavDropdown, Nav, Container } from 'react-bootstrap';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

export default function Navigation() {

  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  const handleClick = () => {
    removeCookie("token", {path:'/'});
    navigate("/");
  }  

  return(
  <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Eat The Week</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/auth/">Login</Nav.Link>
            <Nav.Link onClick={handleClick}>Log Out</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}