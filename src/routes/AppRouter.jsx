import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Shop from "../components/Shop/Shop";
import ProductDetail from "./ProductDetail";

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/product/:id" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;