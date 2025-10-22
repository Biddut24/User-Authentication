import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../components/Home/Home";
import About from "./../../components/About/About";
import Signin from "../../components/Signin/Signin";
import SignUp from "../../components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/sign-in",
        element: <Signin></Signin>,
      },
      {
        path: "sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
