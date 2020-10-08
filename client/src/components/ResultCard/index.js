import React from "react";
import { Container, Row, Col, Button, ButtonGroup, Collapse } from "react-bootstrap"


function ResultCard(props) {
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col>title</Col>
                    <Col>
                        <ButtonGroup>
                            <Button variant="outline-dark">View</Button>
                            <Button variant="outline-dark">Save</Button> 
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col id="author">Written by: </Col>
                </Row>
                <Row>
    <Col>{/* <img src={props.} alt={"Book Alt Test"}></img> */}{props.children}</Col>
                    <Col>Description </Col>
                </Row>
            </Container>
        </Container>
  );
}

export default ResultCard;