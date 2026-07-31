import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;