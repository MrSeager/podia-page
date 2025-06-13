import { FC } from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button } from 'react-bootstrap';
//Spring
import { a } from '@react-spring/web';
import { Trail, useSlide } from './springAnim.tsx';
//Observer
import { useInView } from 'react-intersection-observer';

const SectorFour: FC = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
    const animSlide = useSlide(inView, 0);

    return (
        <Container ref={ref} className='p-0'>
        <a.div style={animSlide} className='container cs-bg-one text-center py-5 rounded d-flex flex-column align-items-center gap-3'>
            <h3 className='m-0 text-white'>Get your free Podia account</h3>
            <p className='m-0 text-light'>Join the 150,000+ creators who use Podia to create websites, sell digital products, and build online communities.</p>
            <Button className='cs-transition rounded-pill cs-btn border-0 px-3 py-2 fw-bold'>
                Sign up free
            </Button>
        </a.div>
        </Container>
    );
}

export default SectorFour;