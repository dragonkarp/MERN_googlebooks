import React, { setState, useEffect} from "react";
import TopBanner from "../../components/TopBanner/index.js"
import SearchResults from "../../components/SearchResults/index.js"
import api from "../../utils/API"
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";



function SavedPage() {
// create a state called savedBooks default as an array
  //useEffect to loadBooks() from your saved book database, then set that data to your savedbooks state
  // pass the saved book state to your search results

const [savedBooks, setSavedBooks] = setState([])

// useEffect(() => {
//   api.loadSavedBooks()
//   .then()
//   .then(console.log(savedBooks)), [savedBooks]
// })

  return (
    <div>
        <TopBanner />
        <SearchResults />
    </div>
  );
}

export default SavedPage;
