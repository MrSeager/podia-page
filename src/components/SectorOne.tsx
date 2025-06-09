import { FC } from 'react';
//Bootstrap
import { Container, Row, Col, Button, Image, Carousel } from 'react-bootstrap';
//Images
import ImgOne from '../images/free-photo-of-minimalist-setup-office.jpeg';
import ImgTwo from '../images/pexels-ben-collins-41034267-7292641.jpg';
import ImgThree from '../images/pexels-drew-williams-1285451-3143813.jpg';
import ImgFour from '../images/pexels-knownasovan-57690.jpg';

const SectorOne: FC = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col lg={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }} className='d-flex flex-column align-items-lg-start align-items-center text-lg-start text-center justify-content-between gap-3'>
                    <h1 className='h6 m-0 text-uppercase cs-tc-one fw-bold'>Digital products</h1>
                    <h2 className='m-0 display-4 fw-bold'>Sell online courses,
                    coaching sessions,
                    webinars, workshops,
                    ebooks, and anything you
                    can think of on Podia</h2>
                    <p className='m-0 text-secondary'>Get everything you need in one place that you own. Podia
                    takes care of hosting products, taking payments, and getting
                    products to your customers. And you always control your own
                    work.</p>
                    <Button className='cs-transition rounded-pill cs-btn border-0 px-3 py-2 fw-bold'>
                        Get your free account
                    </Button>
                </Col>
                <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }} className='p-4 d-flex flex-column align-items-center justify-content-center'>
                    <Carousel interval={2000} controls={false} indicators={false}>
                        <Carousel.Item>
                            <Image fluid src={ImgOne} alt='image' className='rounded rounded-3' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image fluid src={ImgTwo} alt='image' className='rounded rounded-3' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image fluid src={ImgThree} alt='image' className='rounded rounded-3' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image fluid src={ImgFour} alt='image' className='rounded rounded-3' />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default SectorOne;