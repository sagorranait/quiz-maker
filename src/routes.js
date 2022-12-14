import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Faq from "./components/Faq/Faq";
import Subjects from "./components/Subjects/Subjects";
import Analytics from "./components/Analytics/Analytics";
import { subjectLoader } from "./components/QuizSubjects/QuizSubjects";
import Quizzes, { quizLoader } from "./components/Quizzes/Quizzes";
import ErrorPage from "./components/ErrorPage/ErrorPage";

export const routers = createBrowserRouter([
    {
      path: '/', 
      element: <App/>, 
      children: [
        { index: true, element: <Subjects/>, loader: subjectLoader },
        { path: 'quizzes/:quizId', element: <Quizzes/>, loader: quizLoader },
        { path: 'faq', element: <Faq/> },
        { path: 'analytics', element: <Analytics/>, loader: subjectLoader },
      ],      
      errorElement: <ErrorPage/>,
    },
  ]);