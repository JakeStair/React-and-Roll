import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../assets/style/navigation.css';

export default function Navigation() {
    const location = useLocation();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            {/* <Navbar.Brand as={Link} to="/about">Jake Watson</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/about" active={location.pathname === '/about'}>
                        About Me
                    </Nav.Link>
                    <Nav.Link as={Link} to="/portfolio" active={location.pathname === '/portfolio'}>
                        Portfolio
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact" active={location.pathname === '/contact'}>
                        Contact
                    </Nav.Link>
                    <Nav.Link as={Link} to="/resume" active={location.pathname === '/resume'}>
                        Resume
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
