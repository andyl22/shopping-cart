import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import ShopDetail from "./components/ShopDetail"
import Cart from "./components/Cart";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/:id" component={ShopDetail} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
