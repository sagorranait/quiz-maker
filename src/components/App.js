import { Outlet } from "react-router-dom";
import Header from "./Header/Header"

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
