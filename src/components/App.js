import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
      <ToastContainer /> 
    </div>
  );
}

export default App;
