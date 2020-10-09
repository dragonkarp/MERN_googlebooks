import React from "react";
import { Container, Row, Col, Button, ButtonGroup, Collapse } from "react-bootstrap"

// Take one json object, parse data, render a card to display book information. 
function ResultCard(props) {
    return (
        <Container fluid>
            <Container>
                <Row>
                <Col>{props.singleBookResult.volumeInfo.title}</Col>
                    <Col>
                        <ButtonGroup>
                            <Button variant="outline-dark">View</Button>
                            <Button variant="outline-dark">Save</Button> 
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col id="author">Written by: {props.singleBookResult.volumeInfo.authors}</Col>
                </Row>
                <Row>
                    <Col><img src={props.singleBookResult.volumeInfo.imageLinks.thumbnail}></img></Col>
                    <Col>{props.singleBookResult.volumeInfo.description}</Col>
                </Row>
            </Container>
        </Container>
  );
}

export default ResultCard;