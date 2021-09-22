import React, { useState } from "react";

// import components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";
import SearchPage from "./components/SearchPage";

// import styles
import "./styles/app.scss";
import Navbar from "./components/Navbar";

// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // states
  const [navOpen, setNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <Router>
        <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
        <Header
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <Switch>
          <Route path="/" exact>
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos navOpen={navOpen} />
            </div>
          </Route>
          <Route path="/search/:searchterm/">
            <div className="app__page">
              <Sidebar />
              <SearchPage navOpen={navOpen} searchTerm={searchTerm} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
