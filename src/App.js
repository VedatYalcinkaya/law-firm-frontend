import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { useDispatch } from "react-redux";
import { isSignedIn } from "./store/slices/signInSlice";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isSignedIn") === "true";
    dispatch(isSignedIn(isLoggedIn));
  }, [dispatch]);

  return(
    <>
        <Dashboard />
        <ToastContainer />
    </>
  )
}

export default App;
