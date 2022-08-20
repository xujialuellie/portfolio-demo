import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import dev1 from '../images/dev1.png';
import dev2 from '../images/dev2.png';

const About = () => {
    return(
        <Container fluid style={{height: "75vh"}} id="about">
            <h1 style={{width: "100%", textAlign: "center", margin: "20px 0"}}>Content</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "80%"}}>

                <Col sm={6} md={5} lg={{span: 4, offset: 1}}>
                    <div>
                        <img 
                            src={dev1} 
                            alt="Software Developer" 
                            style={{
                                width: "100%", 
                                boxShadow: "2px 2px 5px #001",
                                borderRadius: "20px"
                            }}
                        />
                        <h4 style={{display: 'block', fontWeight: '300', margin: '0 150px'}}>Remaining: 4</h4>
                    </div>
                    
                </Col>
                    
                <Col sm={6} md={5} lg={{span: 4, offset: 1}}>
                    <img 
                        src={dev2} 
                        alt="Software Developer" 
                        style={{
                            width: "100%", 
                            boxShadow: "2px 2px 5px #001",
                            borderRadius: "20px"
                        }}
                    />
                    <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 150px'}}>Remainning: 3</h4>
                </Col>
            </Row>
        </Container>
    );
};

export default About;