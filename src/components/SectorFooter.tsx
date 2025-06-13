import { FC } from 'react';
//Bootstrap
import { Container, Nav } from 'react-bootstrap';
//Spring
import { a } from '@react-spring/web';
import { Trail } from './springAnim.tsx';
//Observer
import { useInView } from 'react-intersection-observer';

const SectorFooter: FC = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

    return (
        <Container ref={ref} fluid className='cs-bg-two border-bottom pt-5'>
            <Container className='text-lg-start text-center d-flex flex-lg-row flex-column align-items-center'>
                <Trail open={inView} direct={0} del={0}>
                <h4 className='h6 me-lg-3 me-0'>Platform</h4>
                <Nav className="justify-content-center">
                    <Trail open={inView} direct={0} del={0}>
                        <Nav.Item>
                            <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Pricing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Sign up free</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Demo</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Community</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Website buider</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Digital products</Nav.Link>
                        </Nav.Item>
                    </Trail>
                </Nav>
                </Trail>
            </Container>
            <Container className='text-lg-start text-center d-flex flex-lg-row flex-column align-items-center'>
                <Trail open={inView} direct={0} del={100}>
                <h4 className='h6 me-lg-3 me-0'>Support</h4>
                    <Nav className="justify-content-center">
                        <Trail open={inView} direct={0} del={0}>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Contact us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Help center</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Hire a Podia pro</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Creator community</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Podia 101</Nav.Link>
                            </Nav.Item>
                        </Trail>
                    </Nav>
                </Trail>
            </Container>
            <Container className='text-lg-start text-center d-flex flex-lg-row flex-column align-items-center'>
                <Trail open={inView} direct={0} del={200}>
                    <h4 className='h6 me-lg-3 me-0'>Features</h4>
                    <Nav className="justify-content-center">
                        <Trail open={inView} direct={0} del={0}>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Online courses</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Downloads</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Webinars</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Coaching</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Email marketing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">All resources</Nav.Link>
                            </Nav.Item>
                        </Trail>
                    </Nav>
                </Trail>
            </Container>
            <Container className='text-lg-start text-center d-flex flex-lg-row flex-column align-items-center'>
                <Trail open={inView} direct={0} del={300}>
                    <h4 className='h6 me-lg-3 me-0'>Compare</h4>
                    <Nav className="justify-content-center">
                        <Trail open={inView} direct={0} del={0}>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Kajabi</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Teachable</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Thinkific</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Patreon</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Gumroad</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Podia alternatives</Nav.Link>
                            </Nav.Item>
                        </Trail>
                    </Nav>
                </Trail>
            </Container>
            <Container className='text-lg-start text-center d-flex flex-lg-row flex-column align-items-center'>
                <Trail open={inView} direct={0} del={400}>
                    <h4 className='h6 me-lg-3 me-0'>Resources</h4>
                    <Nav className="justify-content-center">
                        <Trail open={inView} direct={0} del={0}>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Examples</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Creator stories</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Blog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Free tools</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">All resources</Nav.Link>
                            </Nav.Item>
                        </Trail>
                    </Nav>
                </Trail>
            </Container>
            <Container className='text-lg-start text-center d-flex flex-lg-row flex-column align-items-center'>
                <Trail open={inView} direct={0} del={500}>
                    <h4 className='h6 me-lg-3 me-0'>Podia</h4>
                    <Nav className="justify-content-center">
                        <Trail open={inView} direct={0} del={0}>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Jobs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Branding</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Reviews</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Refer-a-creator</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Affiliates</Nav.Link>
                            </Nav.Item>
                        </Trail>
                    </Nav>
                </Trail>
            </Container>
            <Container className='text-lg-start text-center d-flex flex-lg-row flex-column align-items-center'>
                <Trail open={inView} direct={0} del={600}>
                    <h4 className='h6 me-lg-3 me-0'>Social</h4>
                    <Nav className="justify-content-center">
                        <Trail open={inView} direct={0} del={0}>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Twitter</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Facebook</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Instagram</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">YouTube</Nav.Link>
                            </Nav.Item>
                        </Trail>
                    </Nav>
                </Trail>
            </Container>
            <Container className='d-flex flex-row align-items-center mt-5'>
                <Trail open={inView} direct={0} del={700}>
                    <h5 className='h6 me-3'>Podia Labs, Inc. &copy; 2023</h5>
                    <Nav className="justify-content-center">
                        <Trail open={inView} direct={0} del={0}>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Terms</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='px-2 pt-0 cs-tc-one cs-link-two cs-transition text-decoration-underline' href="/">Privacy</Nav.Link>
                            </Nav.Item>
                        </Trail>
                    </Nav>
                </Trail>
            </Container>
        </Container>
    );
}

export default SectorFooter;