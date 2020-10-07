import React, { useState } from "react";
import TopNav from "../../components/TopNav/index.js"
import TopBanner from "../../components/TopBanner/index.js"
import BookSearchBox from "../../components/BookSearchBox/index.js"
import SearchResults from "../../components/SearchResults/index.js"
import api from "../../utils/API"


function SearchPage() {
  const [googleBooks, setGoogleBooks] = useState([])
  const [title, setTitle] = useState("")

  const handleInputChange = event => {
       const {value} = event.target
       setTitle(value)

       console.log(value)
  }

  const handleSubmit = event => {
    api.googleBooks(title).then(results => {
      console.log(results.data)
    })
  }
  return (
    <div>
        <TopNav />
        <TopBanner />
        <BookSearchBox title={title} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        <SearchResults  />
    </div>
  );
}

export default SearchPage;
