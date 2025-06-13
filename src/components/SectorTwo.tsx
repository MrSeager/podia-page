import { FC } from 'react';
//Bootstrap
import { Container, Row, Col, Badge } from 'react-bootstrap';
//Observer
import { useInView } from 'react-intersection-observer';
//Icons
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMdExit } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
//Spring
import { Trail } from './springAnim.tsx';

const SectorTwo: FC = () => {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.3 })
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.3 })

    return (
        <Container className='py-5'>
            <Row>
                <Col ref={ref1} xs={12} className='text-center px-lg-5 d-flex flex-column gap-3'>
                     <Trail open={inView1} direct={0} del={0}>
                        <h2 className='h2 fw-bold'>All you have to do is make the product. Podia takes care of
                        details for you.</h2>
                        <p className='text-secondary'>Podia lets you make your seles page, take payments , and give your customer access all in one place. Host 
                        and sell your products without needing to figure out a handful of new tools.</p>
                    </Trail>
                </Col>
                <Col ref={ref2} lg={4} xs={12} className='py-3 d-flex flex-column align-items-center gap-3 text-center'>
                    <Trail open={inView2} direct={0} del={100}>
                        <Badge bg='custom' className='rounded-circle p-2 cs-bg-badge fs-4'>
                            <HiOutlineShoppingCart className='cs-tc-one' />
                        </Badge>
                        <h3 className='h5 m-0'>Checkout and sales are handled for you</h3>
                        <p className='m-0 text-secondary'>You don't have to figure out a bunch of tools or website
                        embeds. Just connect a payment provider and your
                        Podia site takes care of payments for you.</p>
                    </Trail>
                </Col>
                <Col lg={4} xs={12} className='py-3 d-flex flex-column align-items-center gap-3 text-center'>
                    <Trail open={inView2} direct={0} del={250}>
                        <Badge bg='custom' className='rounded-circle p-2 cs-bg-badge fs-4'>
                            <IoMdExit className='cs-tc-one' />
                        </Badge>
                        <h3 className='h5 m-0'>Your customers log in, and your products are there  for them</h3>
                        <p className='m-0 text-secondary'>Your Podia site handles access to products for you.
                        Everything is in one place. When your customers buy a
                        product, they get a log in. After that, they can see all
                        the products they've bought from you.</p>
                    </Trail>
                </Col>
                <Col lg={4} xs={12} className='py-3 d-flex flex-column align-items-center gap-3 text-center'>
                    <Trail open={inView2} direct={0} del={400}>
                        <Badge bg='custom' className='rounded-circle p-2 cs-bg-badge fs-4'>
                            <IoCloudUploadOutline className='cs-tc-one' />
                        </Badge>
                        <h3 className='h5 m-0'>Upload your product. Make your sales page. Done</h3>
                        <p className='m-0 text-secondary'>You could sell a digital product by this afternoon. Podia
                        handles hosting, sales pages, checkout, and delivery. All
                        you need is something to sell</p>
                    </Trail>
                </Col>
            </Row>
        </Container>
    );
}

export default SectorTwo;