import React from "react";
import { Container } from "react-bootstrap"
import ResultCard from "../../components/ResultCard/index.js"

function SearchResults(props) {
    return (
        <Container fluid>
            <h3>Results</h3>
            <ResultCard books={props}/>
        </Container>
  );
}

export default SearchResults;