import { FC } from 'react';
//Bootstrap
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import LogoImg from '../images/podialogo.png';

const PodiaNavbar: FC = () => {
    return (
        <Navbar sticky='top' expand='lg' className='cs-bg-navbar w-100'>
            <Container>
                <Navbar.Brand href='#' className='cs-w-logo'>
                    <Image fluid src={LogoImg} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <NavDropdown title='Feature' id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/1.1" className='cs-transition cs-link'>Online courses</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.2" className='cs-transition cs-link'>Downloads</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.3" className='cs-transition cs-link'>Webinars</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.4" className='cs-transition cs-link'>Coaching</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.5" className='cs-transition cs-link'>Email marketing</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='#' className='cs-transition cs-link'>Examples</Nav.Link>
                        <Nav.Link href='#' className='cs-transition cs-link'>Pricing</Nav.Link>
                        <Nav.Link href='#' className='cs-transition cs-link'>Demo</Nav.Link>
                        <NavDropdown title='Resources' id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/5.1" className='cs-transition cs-link'>Examples</NavDropdown.Item>
                            <NavDropdown.Item href="#action/5.2" className='cs-transition cs-link'>Creator stories</NavDropdown.Item>
                            <NavDropdown.Item href="#action/5.3" className='cs-transition cs-link'>Blog</NavDropdown.Item>
                            <NavDropdown.Item href="#action/5.4" className='cs-transition cs-link'>Free tools</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='ms-auto d-flex flex-row justify-content-between'>
                        <Nav.Link href='#'>Login</Nav.Link>
                        <Nav.Link href='#' className='cs-btn rounded-pill text-white px-3 cs-transition'>Sign up free</Nav.Link>    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PodiaNavbar;