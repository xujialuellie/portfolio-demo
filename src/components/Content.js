import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import dev1 from '../images/figure4.png';
import dev2 from '../images/figure5.png';
import dev3 from '../images/figure1.png';

const Content = ({check}) => {
    return(
        <Container fluid id="content">
            <h1 style={{width: "100%", textAlign: "center", margin: "20px 0"}}>Inventory</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "80%"}}>

                <Col>
                    <div style={{width: "50%"}}>
                        <img 
                            src={dev1} 
                            alt="Software Developer" 
                            style={{
                                width: "100%", 
                                boxShadow: "2px 2px 5px #001",
                                borderRadius: "20px"
                            }}
                        />
                        <h4>Cans: 23</h4>
                        <h4>Paper: 12</h4>
                        <h4>Plastic: 25</h4>
                    </div>
                    
                </Col>
                    
                <Col>
                <div style={{width: "50%"}}>
                    <img 
                        src={dev2} 
                        alt="Software Developer" 
                        style={{
                            width: "100%", 
                            boxShadow: "2px 2px 5px #001",
                            borderRadius: "20px"
                        }}
                    />
                    <h4>Cans: 13</h4>
                    <h4>Paper: 16</h4>
                    <h4>Plastic: 9</h4>
                </div>
                </Col>
                {check &&
                <Col>
                <div style={{width: "50%"}}>
                    <img 
                        src={dev3} 
                        alt="Software Developer" 
                        style={{
                            width: "100%", 
                            boxShadow: "2px 2px 5px #001",
                            borderRadius: "20px"
                        }}
                    />
                    <h4>Cans: 12</h4>
                    <h4>Paper: 15</h4>
                    <h4>Plastic: 23</h4>
                </div>
                </Col>
                }
            </Row>
        </Container>
    );
};

export default Content;