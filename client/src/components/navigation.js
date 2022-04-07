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
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Eat The Week</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleClick}>Log Out</Nav.Link>
            <NavDropdown title="Get Cooking" id="basic-nav-dropdown">
              <NavDropdown.Item href="/recipe">My Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/ingredient">My Ingredients</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Weekly Planner</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Edit Profile</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Navbar.Text >
              Signed in as: <a href="/auth">Add Name Here</a>
           </Navbar.Text>
           <Nav.Link href="/auth">Login</Nav.Link>
           <Nav.Link href="/auth/register">Register</Nav.Link>
        </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  </>
  )
}