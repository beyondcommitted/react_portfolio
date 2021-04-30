import "./App.scss";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";

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
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/projects" component={ProjectPage} />
              <Route exact path="/blogs" component={BlogPage} />
              <Route exact path="/contact" component={ContactPage} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
