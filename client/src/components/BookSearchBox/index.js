import React from "react";
import { Container, Form, Button} from "react-bootstrap"

function BookSearchBox(props) {
    return (
        <Container>
            <h3>Book Search</h3>
            <p>Book</p>
            <Form.Group>
                <Form.Control size="lg" type="text" placeholder={"Search for a book!"}
                value={props.title}
                onChange={props.handleInputChange}
                />
            </Form.Group>
            <Button variant="outline-dark" onClick={props.handleSubmit}>Search</Button>
    <p value={props.title}></p>
        </Container>
  );
}

export default BookSearchBox;