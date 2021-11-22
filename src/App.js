import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ResultAnalys from "./components/ResultAnalys/ResultAnalys";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ResultAnalys></ResultAnalys>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
