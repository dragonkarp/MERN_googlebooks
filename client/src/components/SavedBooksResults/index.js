import React from "react";
import { Container, ListGroup } from "react-bootstrap"
import SavedResultCard from "../../components/SavedResultCard/index.js"

function SavedBooks(props) {
    return (
        <Container fluid>
            {props.savedBooks > 0  ? (
              <ListGroup>
                {props.savedBooks.map(book => {
                  return (
                    <ListGroup.Item eventKey={props.id}>
                        <SavedResultCard singleBookResult={book} />
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Container>
  );
}

export default SavedBooks;