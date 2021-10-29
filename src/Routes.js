import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import ShopDetail from "./components/ShopDetail"
import Cart from "./components/Cart";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/shopping-cart/" component={App} />
        <Route exact path="/shopping-cart/shop" component={Shop} />
        <Route exact path="/shopping-cart/shop/:id" component={ShopDetail} />
        <Route path="/shopping-cart/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
