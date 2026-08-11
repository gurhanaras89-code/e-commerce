import AppRouter from "./routes/AppRouter";
import Shop from "./components/Shop/Shop";

function App() {
  return <AppRouter />;
  <Route path="/shop" component={Shop} />
}

export default App;