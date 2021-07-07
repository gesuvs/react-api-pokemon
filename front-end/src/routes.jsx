import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import NavBarTop from "./components/NavBarTop/NavBarTop";
import MeusPokemons from "./views/MeusPokemons";

export default function Routes() {
  return (
    <Router>
      <NavBarTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/meus-pokemons" component={MeusPokemons} />
      </Switch>
    </Router>
  );
}
