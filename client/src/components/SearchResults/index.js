import React from "react";
import { Container, ListGroup } from "react-bootstrap"
import ResultCard from "../../components/ResultCard/index.js"

// If the prop is not an empty array, map it to a ResultCard.
function SearchResults(props) {
    return (
        <Container fluid>
            {props.returnedGoogleBooks ? (
              <ListGroup>
                {props.returnedGoogleBooks.map(book => {
                  return (
                    <ListGroup.Item eventKey={props.returnedGoogleBooks.id}>
                        <ResultCard singleBookResult={book} />
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

export default SearchResults;
