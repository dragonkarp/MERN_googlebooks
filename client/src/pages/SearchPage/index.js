import React, { useState, useEffect } from "react";
import TopNav from "../../components/TopNav/index.js"
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


  useEffect(() => console.log("State is: ", returnedGoogleBooks), [returnedGoogleBooks])

  // Set state of returnedGoogleBooks to an array of books returned by Google Books API
  const handleSubmit = event => {
    api.googleBooks(title).then(results => {
      setReturnedGoogleBooks(results.data);
    })
  }


  return (
    <div>
      <TopNav />
      <TopBanner />
      <BookSearchBox title={title} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      <SearchResults returnedGoogleBooks={returnedGoogleBooks} />
    </div>
  );
}

export default SearchPage;



// code i used to doodle with.
// console.log(results.data[0].volumeInfo.title)
// console.log(results.data[0].volumeInfo.authors)
// console.log(results.data[0].volumeInfo.description)
// console.log(results.data[0].volumeInfo.imageLinks.thumbnail)
// console.log(results.data[0].volumeInfo.previewLink)

// console.log("Logging results.data: ", results.data)
// console.log(" Line 24 -> typeof results.data is: ", typeof results.data)
// console.log("Logging results.data[1]: ", results.data[1])