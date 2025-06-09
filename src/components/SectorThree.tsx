import { FC } from 'react';
//Bootstrap
import { Container, Row, Col, Button, Image, Carousel } from 'react-bootstrap';
//Icons
import { FaArrowRight } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
//Images
import ImgFirstOne from '../images/pexels-pixabay-207691.jpg';
import ImgFirstTwo from '../images/pexels-polina-tankilevitch-4443160.jpg';
import ImgFirstThree from '../images/pexels-rdne-7092350.jpg';

import ImgSecondOne from '../images/pexels-teono123-no-18036-88476.jpg';
import ImgSecondTwo from '../images/pexels-designecologist-1779487.jpg';
import ImgSecondThree from '../images/pexels-pixabay-267350.jpg';

const SectorThree: FC = () => {
    return (
        <Container>
            <Row>
                <Col xs={{ span: 12, order: 1 }} className='text-center px-lg-5 d-flex flex-column gap-3'>
                    <h2 className='fw-bold'>What kinds of products can you sell with Podia?</h2>
                    <p className='text-secondary'>Podia gives you the flexibility to sell whatever you want. That means you have more ways to grow your
                    creator business</p>
                </Col>
                <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 3 }} className='d-flex flex-column text-lg-start text-center gap-3 align-items-lg-start align-items-center justify-content-center py-3'>
                    <h2 className='fs-6 m-0 text-uppercase cs-tc-one fw-bold'>Online courses</h2>
                    <h3 className='fw-bold'>Beutiful online courses you can build in
                    moments</h3>
                    <p className='text-secondary'>Make a beautiful online for your customers. Podia hosts your
                    course. That means all the lessons, files, and videos you want handled
                    for you.</p>
                    <Button className='cs-transition bg-transparent border-0 cs-tc-two fw-bold px-0 cs-link'>Learn more about courses <FaArrowRight /></Button>
                </Col>
                <Col lg={{ span: 6, order: 3 }} xs={{ span: 12, order: 2 }} className='py-3 mx-auto'>
                    <Carousel interval={2000} controls={false} indicators={false}>
                        <Carousel.Item>
                            <Image fluid src={ImgFirstOne} alt='image' className='cs-carousel-image rounded rounded-3 border border-2' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image fluid src={ImgFirstTwo} alt='image' className='cs-carousel-image rounded rounded-3 border border-2' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image fluid src={ImgFirstThree} alt='image' className='cs-carousel-image rounded rounded-3 border border-2' />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={{ span: 12, order: 4 }} className='d-flex flex-column align-items-center gap-3 py-5 text-center'>
                    <Container className='d-flex flex-row gap-3 justify-content-center h3 text-warning'>
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                    </Container>
                    <p className='m-0'>I've wanted to offer e-courses for a while but always felt overwhelmed with how to set it up. Podia has
                    made it super easy.</p>
                    <p className='m-0 text-secondary'>- Joy Cho, Oh Joy! Academy</p>
                </Col>
                <Col lg={{ span: 6, order: 5 }} xs={{ span: 12, order: 6 }} className='d-flex flex-column text-lg-start text-center gap-3 align-items-lg-start align-items-center justify-content-center py-3'>
                    <h2 className='fs-6 m-0 text-uppercase cs-tc-one fw-bold'>Digital downloads</h2>
                    <h3 className='fw-bold'>Ebooks, templates, and any file type you can
                    think of</h3>
                    <p className='text-secondary'>Have an ebook to sell? Templates you love? Podia makes it easy to
                    spin up a sales page and sell ebooks, templates, audio files, video
                    files, spreadsheets, and any other file type.</p>
                    <Button className='cs-transition bg-transparent border-0 cs-tc-two fw-bold px-0 cs-link'>Learn more about downloads <FaArrowRight /></Button>
                </Col>
                <Col lg={{ span: 6, order: 5 }} xs={{ span: 12, order: 6 }} className='py-3 mx-auto'>
                    <Carousel interval={2000} controls={false} indicators={false}>
                        <Carousel.Item>
                            <Image fluid src={ImgSecondOne} alt='image' className='cs-carousel-image rounded rounded-3 border border-2' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image fluid src={ImgSecondTwo} alt='image' className='cs-carousel-image rounded rounded-3 border border-2' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image fluid src={ImgSecondThree} alt='image' className='cs-carousel-image rounded rounded-3 border border-2' />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col lg={{ order: 5 }} xs={{ span: 12, order: 7 }} className='d-flex flex-column align-items-center gap-3 py-5 text-center'>
                    <Container className='d-flex flex-row gap-3 justify-content-center h3 text-warning'>
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                    </Container>
                    <p className='m-0'>We didn't have to stress about technical details or custom coding. Using Podia made selling our first
                    eBook quick, efficient, and fun.</p>
                    <p className='m-0 text-secondary'>- Matt & Steph, Plant-based food bloggers</p>
                </Col>
            </Row>
        </Container>
    );
}

export default SectorThree;