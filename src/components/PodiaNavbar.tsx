import { FC } from 'react';
//Bootstrap
import { Container, Nav, Navbar, NavDropdown, Image, Dropdown } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import LogoImg from '../images/podialogo.png';

const PodiaNavbar: FC = () => {
    return (
        <Navbar fixed='top' expand='lg' className='cs-bg-navbar w-100'>
            <Container>
                <Navbar.Brand href='#' className='cs-w-logo'>
                    <Image fluid src={LogoImg} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Dropdown className='mx-lg-2 mx-0'>
                            <Dropdown.Toggle className='border-0 bg-transparent text-dark px-0 pt-2 cs-transition cs-link'>Feature</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#action/1.1" className='cs-transition cs-link bg-transparent'>Online courses</Dropdown.Item>
                                <Dropdown.Item href="#action/1.2" className='cs-transition cs-link bg-transparent'>Downloads</Dropdown.Item>
                                <Dropdown.Item href="#action/1.3" className='cs-transition cs-link bg-transparent'>Webinars</Dropdown.Item>
                                <Dropdown.Item href="#action/1.4" className='cs-transition cs-link bg-transparent'>Coaching</Dropdown.Item>
                                <Dropdown.Item href="#action/1.5" className='cs-transition cs-link bg-transparent'>Email marketing</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href='#' className='cs-transition cs-link'>Examples</Nav.Link>
                        <Nav.Link href='#' className='cs-transition cs-link'>Pricing</Nav.Link>
                        <Nav.Link href='#' className='cs-transition cs-link'>Demo</Nav.Link>
                        <Dropdown className='mx-lg-2 mx-0'>
                            <Dropdown.Toggle className='border-0 bg-transparent text-dark px-0 pt-2 cs-transition cs-link'>Resources</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#action/1.1" className='cs-transition cs-link bg-transparent'>Examples</Dropdown.Item>
                                <Dropdown.Item href="#action/1.2" className='cs-transition cs-link bg-transparent'>Creator stories</Dropdown.Item>
                                <Dropdown.Item href="#action/1.3" className='cs-transition cs-link bg-transparent'>Blog</Dropdown.Item>
                                <Dropdown.Item href="#action/1.4" className='cs-transition cs-link bg-transparent'>Free tools</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    <Nav className='ms-auto d-flex flex-row justify-content-between'>
                        <Nav.Link href='#' className='cs-transition cs-link'>Login</Nav.Link>
                        <Nav.Link href='#' className='cs-btn rounded-pill text-white px-3 cs-transition'>Sign up free</Nav.Link>    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PodiaNavbar;