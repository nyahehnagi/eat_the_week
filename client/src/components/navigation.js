import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

export default function Navigation() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  const handleClick = () => {
    removeCookie("token", { path: "/" });
    removeCookie("name", { path: "/" });
    navigate("/");
  }  

  const cookie = document.cookie.replace(
    /(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  
  return(
  <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="/"><img src="/logo.png" height="80" width="130" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {cookie ? (
            <Nav className="me-auto">
              <NavDropdown title="Get Cooking" id="basic-nav-dropdown">
                <NavDropdown.Item href="/recipe">My Recipes</NavDropdown.Item>
                <NavDropdown.Item href="/ingredient">My Ingredients</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Weekly Planner</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="/user">Edit Profile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            ""
          )}
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {cookie ? (
              <>
                <Navbar.Text>
                  Signed in as:{" "}
                  <a href="/auth">
                    {document.cookie.replace(
                      /(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/,
                      "$1"
                    )}
                  </a>
                </Navbar.Text>
                <Nav.Link id="logout" onClick={handleClick}>
                  Log Out
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/auth">Login</Nav.Link>
                <Nav.Link href="/auth/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}
