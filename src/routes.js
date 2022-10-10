import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";

export const routers = createBrowserRouter([
    {
      path: '/', 
      element: <App/>, 
      children: [
        { index: true, element: <p>Home</p> },
        { path: 'questions', element: <p>questions</p> },
        { path: 'analytics', element: <p>Analytics</p> }
      ]
    },
  ]);