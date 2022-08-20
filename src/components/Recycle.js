import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import dev from '../images/dev.png';
import fig4 from '../images/figure4.png';
import fig5 from '../images/figure5.png';
import fig1 from '../images/figure1.png';

function Recyle({balance, setBalance}){
    
    const [plastic, setPlastic] = useState(0);
    const [can, setCan] = useState(0);
    const [paper, setPaper] = useState(0);
    const [reward, setReward] = useState(0);

    const calResult = () => {
        setPlastic(5);
        setCan(3);
        setPaper(5);
        setReward(25);
        setBalance(balance + 25);
    }

    return(
         <Container fluid id="recycle">
            <h1 style={{width: "100%", textAlign: "center", margin: "20px 0"}}>Recycle</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "80%"}}>
                <Col>
                    <h4>Number of Plastic Bottles: {plastic}</h4>
                </Col>
                <Col>
                    <h4>Number of Can: {can}</h4>
                </Col>
                <Col>
                    <h4>Weight of Paper (KG): {paper}</h4>
                </Col>
            </Row>
            <Row style={{justifyContent: "center", alignItems: "center", height: "80%"}}>
                <h2> Reward: {reward} ABEL</h2>
            </Row>
            <Row style={{justifyContent: "center", alignItems: "center", height: "80%"}}>
                <Button style={{width: "50%"}} variant="outline-primary" onClick={ () => calResult() }>After Recycle</Button>
            </Row>
        </Container>
    );

}

export default Recyle;

