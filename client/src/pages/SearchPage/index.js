import React from "react";
import TopNav from "../../components/TopNav/index.js"
import TopBanner from "../../components/TopBanner/index.js"
import BookSearchBox from "../../components/BookSearchBox/index.js"
import SearchResults from "../../components/SearchResults/index.js"



function SearchPage() {
  return (
    <div>
        <TopNav />
        <TopBanner />
        <BookSearchBox />
        <SearchResults />
    </div>
  );
}

export default SearchPage;
