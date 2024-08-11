import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Images from "../pages/Images";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import Preview from "../pages/Preview";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/home",
          element: <Home/>
        },
        {
            path: "/images",
            element: <Images/>
        },
        {
            path: "/contactus",
            element: <ContactUs/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/signin",
            element: <SignIn/>
        },
        {
          path: "/images:id",
          element: <Preview/>
        }
      ]
    },
  ]);