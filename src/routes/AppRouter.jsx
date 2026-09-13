import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Shop from "../components/Shop/Shop";
import ProductDetail from "./ProductDetail";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import AboutPage from "../pages/AboutPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
