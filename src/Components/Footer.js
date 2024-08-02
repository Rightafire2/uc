import { Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

function Footer({ mode, toggleMode }) {
    return (
        <>
        <Navbar className={`navbar navbar-expand-lg navbar-${mode === 'light' ? 'dark' : 'white'} bg-${mode === 'light' ? 'dark' : 'white'} text-${mode}`} fixed='bottom'>
            <Navbar.Brand href="/App.js" className={`ms-5 text-${mode === 'light' ? 'gray' : 'white'}`}>
                <Nav.Link>
                    <Link to={"/ContactMe"} style={{ textDecoration: "none" }}>
                        Contact Me
                    </Link>    
                </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              <Nav.Link>
                    <Link to={"/UsefulLinks"} style={{ textDecoration: "none", color: "gray" }}>
                        Useful Links
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to={"/SupportForums"} style={{ textDecoration: "none", color: "gray" }}>
                        Support Forums
                    </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Outlet />
        </>
    )
}

export default Footer;