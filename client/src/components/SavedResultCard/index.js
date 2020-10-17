import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap"
import API from "../../utils/API";
// import api from "../../utils/API"

// Take one json object, parse data, render a card to display book information. 
function SavedResultCard(props) {
console.log(props, " Line 7")
console.log(props.singleBookResult._id, " Line 9")
let testItem = (props.singleBookResult._id);

    const remove = () => {
        API.removeBook(testItem)
            .then(API.findAll())


    }

    return (
        <Container fluid>
            <Container>
                <Row>
                <Col>{props.singleBookResult.title}</Col>
                    <Col>
                        <ButtonGroup>
                            <Button variant="outline-dark" target="_blank" href={props.singleBookResult.link}>View</Button>
                            <Button variant="outline-dark" onClick={remove}>Remove</Button> 
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col id="author">Written by: {props.singleBookResult.author}</Col>
                </Row>
                <Row>
                    <Col><img src={props.singleBookResult.image} alt={props.singleBookResult.title}></img></Col>
                    <Col>{props.singleBookResult.description}</Col>
                </Row>
            </Container>
        </Container>
  );
}

export default SavedResultCard;