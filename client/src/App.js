import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <TopNav />
          <Switch>
            <Route exact path="/">
              <SearchPage />
            </Route>
            <Route exact path="/saved">
              <SavedPage />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
