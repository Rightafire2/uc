import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../Assets/CSS/App.css';
import { Outlet, Link } from 'react-router-dom';

const Navigation = ({ mode, toggleMode }) => {
    return (
      <>
        <Navbar className={`navbar navbar-expand-lg navbar-${mode === 'light' ? 'dark' : 'white'} bg-${mode === 'light' ? 'dark' : 'white'} text-${mode}`}>
            <Navbar.Brand className="ms-5">
              <Link to={"/"} style={{ textDecoration: "none", color: "white"}}>
                Ulcerative Colitis
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link>
                  <Link to={"/MyStory"} style={{ textDecoration: "none", color: "gray"}}>
                    My Story
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/NutritionGuide"} style={{ textDecoration: "none", color: "gray"}}>
                    Nutrition Guide
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/Supplements"} style={{ textDecoration: "none", color: "gray"}}>
                    Supplements
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/MentalHealth"} style={{ textDecoration: "none", color: "gray"}}>
                    Mental Health
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/Map"} style={{ textDecoration: "none", color: "gray"}}>
                    Map Locations
                  </Link>
                </Nav.Link>
                <NavDropdown title="Configuration" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Change Color</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Outlet />
        </>
    );
}

export default Navigation;