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
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Components/Dashboard/Profile";
import OrderHistory from "../Components/Dashboard/OrderHistory";
import PrivateRouter from "./PriveatRouter";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

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
                    element: <Shop />,
                },
                {
                    path: "product/:id",
                    element: <SingleProduct />,
                    loader: ({ params }) => fetch(`${API_URL}/product/${params.id}`)
                },
                {
                    path: "about",
                    element: <AboutUs />
                },
                {
                    path: "contact",
                    element: <ContactUs />
                },
                {
                    path: '/dashboard',
                    element:
                        <PrivateRouter>
                            <DashboardLayout />
                        </PrivateRouter>,
                    children: [
                        {
                            path: '',
                            element: <Profile />,
                        },
                        {
                            path: 'orders',
                            element: <OrderHistory />,
                        },
                    ],
                },


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


