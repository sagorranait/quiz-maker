import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Faq from "./components/Faq/Faq";
import Subjects from "./components/Subjects/Subjects";
import Analytics from "./components/Analytics/Analytics";

export const routers = createBrowserRouter([
    {
      path: '/', 
      element: <App/>, 
      children: [
        { index: true, element: <Subjects/> },
        { path: 'faq', element: <Faq/> },
        { path: 'analytics', element: <Analytics/> }
      ]
    },
  ]);