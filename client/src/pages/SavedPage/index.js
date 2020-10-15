import React, { useState, useEffect } from "react";
import TopBanner from "../../components/TopBanner/index.js"
import SavedBooksResults from "../../components/SavedBooksResults/index.js"
import api from "../../utils/API"
import { Button } from "react-bootstrap"
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
// import { set } from "mongoose";



function SavedPage() {
  // create a state called savedBooks default as an array
  // useEffect to loadBooks() from your saved book database, then set that data to your savedbooks state
  // pass the saved book state to your search results

const [savedBooks, setSavedBooks] = useState([])

useEffect(() => {
  api.loadSavedBooks()
  .then(results => {
    setSavedBooks(results.data)
    console.log(results.data)
  })
}, [savedBooks])


  return (
    <div>
        <TopBanner />
        <SavedBooksResults savedBooks={savedBooks}/>
    </div>
  );
}

export default SavedPage;
