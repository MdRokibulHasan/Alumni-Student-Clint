import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Event from "../Pages/Event/Event";
import Gallery from "../Pages/Gallery/Gallery";
import Career from "../Pages/RecentJobs/Career";
import Contact from "../Pages/Contact/Contact";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/event",
        element: <Event></Event>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
]);
