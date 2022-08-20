import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import dev from '../images/dev.png';
import fig4 from '../images/figure4.png';
import fig5 from '../images/figure5.png';
import fig1 from '../images/figure1.png';

function Home({check}){

    const [imageSrcs, setImageSrcs] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);
    const [levels, setLevels] = useState([5, 3, 5]);

    const changeImgIndex = (assignedIndex) => {
        let temp = assignedIndex;
        if (temp < 0)
            temp = 0;
        if (temp >= imageSrcs.length)
            temp = 0;
        setImageIndex(temp);
    }

    useEffect(() => {
		// fetch the page information
		setImageSrcs([fig4, fig5]);
	}, []);

    useEffect(() => {
        if (check)
            setImageSrcs([fig4, fig5, fig1]);
    });

    return(
         <Container fluid id="home">
            <h1 style={{width: "100%", textAlign: "center", margin: "20px 0"}}>Home Page</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "80%"}}>
                <Col>
                </Col>
                <Col>
                <div>
                    <img 
                        src={imageSrcs[imageIndex]} 
                        alt="Software Developer" 
                        style={{
                            width: "100%", 
                            boxShadow: "2px 2px 5px #001",
                            borderRadius: "20px"
                        }}
                    />
                    <br/>
                </div>
                </Col>
                <Col>
                    <Button variant="outline-primary" onClick={ () => changeImgIndex(imageIndex + 1) }>Forward</Button>
                </Col>
            </Row>
            <Row style={{justifyContent: "center", alignItems: "center", height: "80%"}}>
                <Button style={{width: "50%"}} variant="outline-primary" onClick={ () => changeImgIndex(imageIndex - 1) }>Start Recycle</Button>
            </Row>
        </Container>
    );

}

export default Home;

