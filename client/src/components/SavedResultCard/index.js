import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap"
import api from "../../utils/API"

// Take one json object, parse data, render a card to display book information. 
function SavedResultCard(props) {

    const bookData = {
        title : props.singleBookResult.volumeInfo.title,
        author : props.singleBookResult.volumeInfo.authors,
        link : props.singleBookResult.volumeInfo.previewLink,
        image : props.singleBookResult.volumeInfo.imageLinks.thumbnail,
        description : props.singleBookResult.volumeInfo.description 
    }

    const remove = () => {

        console.log("inside savebook front end click ")

        api.saveBook(bookData).then(console.log("front end api call after click"))
        .catch(err => console.log(err));
    }

    return (
        <Container fluid>
            <Container>
                <Row>
                <Col>{bookData.title}</Col>
                    <Col>
                        <ButtonGroup>
                            <Button variant="outline-dark" target="_blank" href={bookData.link}>View</Button>
                            <Button variant="outline-dark" onClick={remove}>Remove</Button> 
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col id="author">Written by: {bookData.author}</Col>
                </Row>
                <Row>
                    <Col><img src={bookData.image} alt={bookData.title}></img></Col>
                    <Col>{bookData.description}</Col>
                </Row>
            </Container>
        </Container>
  );
}

export default SavedResultCard;