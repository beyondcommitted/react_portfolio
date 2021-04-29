import "./App.scss";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <NavBar />
        </div>
        <div className="main-content">
          <div className="content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
