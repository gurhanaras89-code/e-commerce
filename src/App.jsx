import AppRouter from "./routes/AppRouter";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "./store/actions/clientActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(verifyToken()); }, [dispatch]);
  return <><AppRouter /><ToastContainer position="top-center" /></>;
}

export default App;
