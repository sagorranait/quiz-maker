import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header/Header";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
      <ToastContainer /> 
      <ScrollRestoration />
    </div>
  );
}

export default App;
