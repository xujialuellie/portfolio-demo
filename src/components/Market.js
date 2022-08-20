import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import dev from '../images/dev.png';
import fig1 from '../images/figure1.png';
import fig2 from '../images/figure2.png';
import fig3 from '../images/figure3.png';

function Market({balance, setBalance, setCheck}){

    const [imageSrcs, setImageSrcs] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);
    const [levels, setLevels] = useState([2, 4, 8]);
    const [price, setPrice] = useState([12, 23, 45]);
    const [removed, setRemoved] = useState(false);

    const changeImgIndex = (assignedIndex) => {
        let temp = assignedIndex;
        if (temp < 0)
            temp = 0;
        if (temp >= imageSrcs.length)
            temp = imageSrcs.length - 1;
        setImageIndex(temp);
    }

    useEffect(() => {
		// fetch the page information
		setImageSrcs([fig1, fig2, fig3]);
	}, []);

    const itemPurchase = (index) => {
        setBalance(balance - price[index]);
        setRemoved(true);
        setCheck(true);
    }

    return(
         <Container id="market">
            <h1 style={{width: "100%", textAlign: "center", margin: "20px 0"}}>Market</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "80%"}}>
                { !removed &&
                <Col>
                <div>
                    <img 
                        src={imageSrcs[0]} 
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
                    <h4>Price: {price[0]} ABEL </h4>
                    <Button style={{width: "50%"}} variant="outline-primary" onClick={ () => itemPurchase(0) }>Purchase</Button>
                </div>
                </Col>
                }
                <Col>
                <div>
                    <img 
                        src={imageSrcs[1]} 
                        alt="Software Developer" 
                        style={{
                            width: "100%", 
                            boxShadow: "2px 2px 5px #001",
                            borderRadius: "20px"
                        }}
                    />
                    <h4>Cans: 30</h4>
                    <h4>Paper: 24</h4>
                    <h4>Plastic: 22</h4>
                    <h4>Price: {price[1]} ABEL </h4>
                    <Button style={{width: "50%"}} variant="outline-primary" onClick={ () => itemPurchase(1) }>Purchase</Button>
                </div>
                </Col>
                <Col>
                <div>
                    <img 
                        src={imageSrcs[2]} 
                        alt="Software Developer" 
                        style={{
                            width: "100%", 
                            boxShadow: "2px 2px 5px #001",
                            borderRadius: "20px"
                        }}
                    />
                    <h4>Cans: 30</h4>
                    <h4>Paper: 24</h4>
                    <h4>Plastic: 22</h4>
                    <h4>Price: {price[2]} ABEL </h4>
                    <Button style={{width: "50%"}} variant="outline-primary" onClick={ () => itemPurchase(2) }>Purchase</Button>
                </div>
                </Col>
            </Row>
        </Container>
    );

}

export default Market;

