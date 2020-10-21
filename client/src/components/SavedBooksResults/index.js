import React from "react";
import { Container, ListGroup } from "react-bootstrap"
import SavedResultCard from "../../components/SavedResultCard/index.js"

function SavedBooks(props) {
console.log(props._id)
console.log("Hi:,", props.savedBooks)

    return (
        <Container fluid>
            {props.savedBooks ? (
              <ListGroup>
                { props.savedBooks.length > 0 ? props.savedBooks.map(book => {
                  return (
                    <ListGroup.Item key={book._id}>
                        <SavedResultCard singleBookResult={book} />
                    </ListGroup.Item>
                  );
                }) : "No saved books." }
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Container>
  );
}

export default SavedBooks;