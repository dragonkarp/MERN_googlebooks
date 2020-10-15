import React, { useState, useEffect } from "react";
import TopBanner from "../../components/TopBanner/index.js"
import BookSearchBox from "../../components/BookSearchBox/index.js"
import SearchResults from "../../components/SearchResults/index.js"
import api from "../../utils/API"


function SearchPage() {
  const [returnedGoogleBooks, setReturnedGoogleBooks] = useState([])
  const [title, setTitle] = useState("")

  // Every keystroke changes the state of the title.
  const handleInputChange = event => {
    const { value } = event.target
    setTitle(value)

    console.log(value)
  }

  // Used just to display user input
  useEffect(() => console.log("State is: ", returnedGoogleBooks), [returnedGoogleBooks])

  // Set state of returnedGoogleBooks to an array of books returned by Google Books API
  const handleSubmit = event => {
    api.googleBooks(title).then(results => {
      setReturnedGoogleBooks(results.data);
    })
  }

  return (
    <div>
      <TopBanner />
      <BookSearchBox title={title} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      <SearchResults returnedGoogleBooks={returnedGoogleBooks} />
    </div>
  );
}

export default SearchPage;

