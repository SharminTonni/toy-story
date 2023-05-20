import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Home/Home";
import Login from "../Forms/Login";
import Signup from "../Forms/Signup";
import Addtoy from "../Components/AddToy/Addtoy";
import PrivateRoute from "./PrivateRoute";

import SingleToy from "../Components/Tab/SingleToy";
import Shop from "../Components/Shop/Shop";
import MyToy from "../Components/Mytoys/MyToy";
import Update from "../Components/Update/Update";
import Errorpage from "../Components/ErrorPage/Errorpage";
import Blog from "../Components/Blogs/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "addtoy",
        element: (
          <PrivateRoute>
            <Addtoy></Addtoy>
          </PrivateRoute>
        ),
      },

      {
        path: ":id",
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "shop",
        element: <Shop></Shop>,
        loader: () => fetch("http://localhost:5000/mytoys"),
      },
      {
        path: "mytoy",
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
    ],
  },
]);

export default router;
