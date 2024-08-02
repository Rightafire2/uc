import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../Assets/CSS/App.css';
import { Outlet, Link } from 'react-router-dom';

const Navigation = ({ mode, toggleMode }) => {
    return (
      <>
        <Navbar className={`navbar navbar-expand-lg navbar-dark bg-${mode === 'light' ? 'dark' : 'light'} text-${mode}`}>
            <Navbar.Brand className={`ms-5 text-${mode === 'light' ? 'gray' : 'white'}`} tabIndex={0}>
              <Link to={"/"} style={{ textDecoration: "none", color: `${mode === 'light' ? 'dark' : 'light'}`}}>
                Ulcerative Colitis
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link tabIndex={0}>
                  <Link to={"/MyStory"} style={{ textDecoration: "none", color: "gray"}} tabIndex={0}>
                    My Story
                  </Link>
                </Nav.Link>
                <Nav.Link tabIndex={0}>
                  <Link to={"/NutritionGuide"} style={{ textDecoration: "none", color: "gray"}}>
                    Nutrition Guide
                  </Link>
                </Nav.Link>
                <Nav.Link tabIndex={0}>
                  <Link to={"/Supplements"} style={{ textDecoration: "none", color: "gray"}}>
                    Supplements
                  </Link>
                </Nav.Link>
                <Nav.Link tabIndex={0}>
                  <Link to={"/MentalHealth"} style={{ textDecoration: "none", color: "gray"}}>
                    Mental Health
                  </Link>
                </Nav.Link>
                <Nav.Link tabIndex={0}>
                  <Link to={"/Map"} style={{ textDecoration: "none", color: "gray"}}>
                    Map Locations
                  </Link>
                </Nav.Link>
                <NavDropdown title="Configuration" id="basic-nav-dropdown" style={{ textDecoration: "none", color: "blue" }} tabIndex={0}>
                  <NavDropdown.Item href="#action/3.1" onClick={toggleMode} className={`text-${mode === 'light' ? 'dark' : 'white'}`} tabIndex={0}>Change Color</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Outlet />
        </>
    );
}

export default Navigation;