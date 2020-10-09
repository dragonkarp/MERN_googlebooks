import React from 'react';
import './App.css';
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <SearchPage />
      <SavedPage />
    </div>
  );
}

export default App;
