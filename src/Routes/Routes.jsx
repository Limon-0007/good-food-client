import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Components/LoginLayout/LoginLayout/LoginLayout";
import Login from "../Components/LoginLayout/Login/Login";
import Register from "../Components/LoginLayout/Register/Register";
import HomeLayout from "../Components/Pages/HomeLayout/HomeLayout";
import Home from "../Components/Pages/HomeLayout/Home/Home";
import Blog from "../Components/Pages/Blog/Blog";
import Error from "../Components/Pages/Error/Error";
import About from "../Components/Pages/About/About";
import Contact from "../Components/Pages/Conact/Contact";
import ViewDetails from "../Components/Pages/HomeLayout/Home/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home"></Navigate>,
      },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        },
        {
          path: "blog",
          element: <Blog></Blog>
         
        },
        {
          path: "about",
          element: <About></About>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        },
        {
          path: "*",
          element: <Error></Error>
        }
    ]
  },
  {
    path: "home",
    element: <HomeLayout></HomeLayout>,
    children: [
        {
            path: "/home",
            element: <Home></Home>,
            loader: () => fetch("https://myapp-limonahmed3023-gmailcom.vercel.app/home")
            
        },
        {
          path: ":id",
          element: <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>,
          loader: ({params}) => fetch(`https://myapp-limonahmed3023-gmailcom.vercel.app/home/${params.id}`)
        }
    ]
  }
]);

export default router;
