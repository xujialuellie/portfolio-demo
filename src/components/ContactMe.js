import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const ContactMe = () => {
    return(
        <Container fluid id='contact' style={{backgroundColor: "#343a40", padding: "20px"}}>
            <h1 style={{width: "100%", textAlign: "center", marginBottom: "50px", marginTop: "20px", color: "#dee2e6"}}>Contact Me</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={6} md={3} lg={3} style={{display: 'flex', justifyContent: 'center'}}>
                    <SocialIcon url='https://twitter.com/xujialu126' />
                </Col>
                <Col sm={6} md={3} lg={3} style={{display: 'flex', justifyContent: 'center'}}>
                    <SocialIcon url='https://www.instagram.com/_chuiklellie/' />
                </Col>
                <Col sm={6} md={3} lg={3} style={{display: 'flex', justifyContent: 'center'}}>
                    <SocialIcon url='https://www.linkedin.com/in/xujialuellie/' />
                </Col>
                <Col sm={6} md={3} lg={3} style={{display: 'flex', justifyContent: 'center'}}>
                    <SocialIcon url='https://github.com/xujialuellie' fgColor="#dee2e6" />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactMe;
