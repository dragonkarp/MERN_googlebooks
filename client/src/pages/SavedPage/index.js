import React, { useState, useEffect } from "react";
import TopBanner from "../../components/TopBanner/index.js"
import SavedBooksResults from "../../components/SavedBooksResults/index.js"
import api from "../../utils/API"



function SavedPage() {

  const [savedBooks, setSavedBooks] = useState([])

  useEffect(() =>  {
    api.loadSavedBooks()
      .then(results => {
        setSavedBooks(...savedBooks, results.data)
      })

  }, []) // If we change this to ...}, [savedBooks]) we are given an error. 


  return (
    <div>
        <TopBanner />
        <SavedBooksResults savedBooks={savedBooks}/>
    </div>
  );
}

export default SavedPage;








  // useEffect(() =>  {
  //   setSavedBooks(api.loadSavedBooks())
  // }, [])



 // console.log(results.data, "line 23")
      // console.log(results)
      // console.log(savedBooks)
            // console.log(results.data, "line 21")

//import { Button } from "react-bootstrap"
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
// import { set } from "mongoose";


  // create a state called savedBooks default as an array
  // useEffect to loadBooks() from your saved book database, then set that data to your savedbooks state
  // pass the saved book state to your search results



// useEffect(() => {

//   async function doStuff() {

//     await api.loadSavedBooks()
//       .then(results => {
//         setSavedBooks(...savedBooks, results.data)
//       })
//   }
//   doStuff()

// }, []) 