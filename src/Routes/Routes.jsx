import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Home/Home";
import Login from "../Forms/Login";
import Signup from "../Forms/Signup";
import Addtoy from "../Components/AddToy/Addtoy";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Components/AllToys/AllToys";
import SingleToy from "../Components/Tab/SingleToy";
import Shop from "../Components/Shop/Shop";
import MyToy from "../Components/Mytoys/MyToy";
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
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
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
        path: "alltoys",
        element: <AllToys></AllToys>,
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
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "mytoy",
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
