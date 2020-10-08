import React from 'react';
import './App.css';
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";
import ResultCard from "./components/ResultCard";


function App() {
  return (
    <div className="App">
      <SearchPage />
      {/* <SavedPage /> */}

    </div>
  );
}

export default App;
