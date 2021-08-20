import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Dashboard />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
