import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../page/Home";
import Shop from "../page/Shop";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import SingleProduct from "../page/SingleProduct";
import SignUp from "../page/SignUp";
import SignIn from "../page/SignIn";
import ErrorPage from "../Components/Global/ErrorPage";


export const Router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "shop",
                    element: <Shop />
                },
                {
                    path: "product",
                    element: <SingleProduct />
                },
                {
                    path: "about",
                    element: <AboutUs />
                },
                {
                    path: "contact",
                    element: <ContactUs />
                }


            ]
        },
        {
            path: "signup",
            element: <SignUp />
        },
        {
            path: "signin",
            element: <SignIn />
        },
        
    ]
);


