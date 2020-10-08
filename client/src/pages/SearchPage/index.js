import React, { useState } from "react";
import TopNav from "../../components/TopNav/index.js"
import TopBanner from "../../components/TopBanner/index.js"
import BookSearchBox from "../../components/BookSearchBox/index.js"
import SearchResults from "../../components/SearchResults/index.js"
import api from "../../utils/API"


function SearchPage() {
  const [returnedGoogleBooks, setReturnedGoogleBooks] = useState([])
  const [title, setTitle] = useState("")

  const handleInputChange = event => {
       const {value} = event.target
       setTitle(value)

       console.log(value)
  }

  const handleSubmit = event => {
    api.googleBooks(title).then(results => {
      console.log(results.data)
      setReturnedGoogleBooks(...returnedGoogleBooks, results.data)
      // console.log(returnedGoogleBooks + "This is the main page file, line 24.")
    })
  }

  return (
    <div>
        <TopNav />
        <TopBanner />
        <BookSearchBox title={title} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        <SearchResults bookList={returnedGoogleBooks} />
    </div>
  );
}

export default SearchPage;



// console.log(results.data[0].volumeInfo.title)
      // console.log(results.data[0].volumeInfo.authors)
      // console.log(results.data[0].volumeInfo.description)
      // console.log(results.data[0].volumeInfo.imageLinks.thumbnail)
      // console.log(results.data[0].volumeInfo.previewLink)