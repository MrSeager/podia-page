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

const PodiaPage: FC = () => {

    const bgStyle = useSpring({
        from: { backgroundColor: "#fdfbf9" },
        to: async (next) => {
        while (true) {
            await next({ backgroundColor: "#fdfbf9" });
            await next({ backgroundColor: "#ffffff" });
            await next({ backgroundColor: "#f5efeb" });
        }
        },
        config: { duration: 3000 },
    });

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