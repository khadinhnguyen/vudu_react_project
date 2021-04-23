import {Container, Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './Footer.css';
export default function Footer(){
    
    return (
        <Container className="pg-max-width">
            <div className="ml-5">
            <Row className="mt-3">
                <Image src="../img/download-icons.png"/>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Row className="foot-col-top-row" as={Link} to='#'>Watch</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Spotlight</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Movie</Row>
                    <Row className="foot-col-small" as={Link} to='#'>TV</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Free</Row>
                </Col>
                <Col>
                    <Row className="foot-col-top-row" as={Link} to='#'>My Account</Row>
                    <Row className="foot-col-small" as={Link} to='#'>My Vudu</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Account</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Settings</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Manage Devices</Row>
                </Col>
                <Col>
                    <Row className="foot-col-top-row" as={Link} to='#'>Features</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Lists</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Family</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Disc to Digital</Row>
                    <Row className="foot-col-small" as={Link} to='#'>IntalWatch</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Movies Anywhere</Row>
                </Col>
                <Col>
                    <Row className="foot-col-top-row" as={Link} to='#'>Help</Row>
                    <Row className="foot-col-small" as={Link} to='#'>About Us</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Devices</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Support</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Forum</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Contact Us</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Jobs</Row>
                </Col>
            </Row>

            <Row >
                <Image src="../img/social-icons.png"/>
            </Row>

            <Row className="foot-last-info">
                <Link to="#">Terms and Policies</Link>
                <p className="foot-separator">|</p>
                <Link to="#">Your Privacy Rights</Link>
                <p className="foot-separator">|</p>
                <Link to="#">AdChoices</Link>
                <p className="foot-separator">|</p>
                <Link to="#">Do Not Sell My Personal Information</Link>
                <p className="foot-separator">|</p>
                <Link to="#">California Notice</Link>
                <p className="foot-separator">|</p>
                <Link to="#">Feedback</Link>
            </Row>
            </div>
        </Container>
    )
}