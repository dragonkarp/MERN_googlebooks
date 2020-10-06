import React from "react";
import { Container, Form, Button} from "react-bootstrap"

function BookSearchBox() {
    return (
        <Container>
            <h3>Book Search</h3>
            <p>Book</p>
            <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Search for a book!" />
            </Form.Group>
            <Button variant="outline-dark">Search</Button>
        </Container>
  );
}

export default BookSearchBox;