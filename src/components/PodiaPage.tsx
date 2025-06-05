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
import { Container, Nav } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import DesktopImg from '../images/free-photo-of-minimalist-setup-office.jpeg';

const PodiaPage: FC = () => {
    return (
        <Container fluid className='min-vh-100 px-0'>
            <Container className='pb-5 d-flex flex-column align-items-center gap-3'>
                <PodiaNavbar />
                <SectorOne />
                <SectorTwo />
                <SectorThree />
                <SectorFour />
            </Container>
            <SectorFooter />
        </Container>
    );
}

export default PodiaPage;