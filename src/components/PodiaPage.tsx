import { FC } from 'react';
//Components
import './PodiaStyle.css';
import PodiaNavbar from './PodiaNavbar.tsx';
import SectorOne from './SectorOne.tsx';
import SectorTwo from './SectorTwo.tsx';
import SectorThree from './SectorThree.tsx';
import SectorFour from './SectorFour.tsx';
import SectorFooter from './SectorFooter.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
import { useBgAnimation } from './springAnim.tsx';

const PodiaPage: FC = () => {

    const bgStyle = useBgAnimation();

    return (
        <animated.div style={bgStyle} className='container-fluid px-0 user-select-none pt-5'>
            <Container className='pb-5 d-flex flex-column align-items-center gap-3'>
                <PodiaNavbar />
                <SectorOne />
                <SectorTwo />
                <SectorThree />
                <SectorFour />
            </Container>
            <SectorFooter />
        </animated.div>
    );
}

export default PodiaPage;