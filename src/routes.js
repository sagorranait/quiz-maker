import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Faq from "./components/Faq/Faq";
import Subjects from "./components/Subjects/Subjects";
import Analytics from "./components/Analytics/Analytics";
import { quizLoader } from "./components/QuizSubjects/QuizSubjects";

export const routers = createBrowserRouter([
    {
      path: '/', 
      element: <App/>, 
      children: [
        { index: true, element: <Subjects/>, loader: quizLoader },
        { path: 'faq', element: <Faq/> },
        { path: 'analytics', element: <Analytics/> }
      ]
    },
  ]);