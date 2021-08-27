import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import Produto from "./components/produtos/Produto";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ListaCategorias from "./components/categorias/ListaCategorias";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/categorias" component={ListaCategorias} />
            <Route exact path="/produto/:id" component={Produto} />
            <Dashboard />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
