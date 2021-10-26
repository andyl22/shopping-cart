import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
