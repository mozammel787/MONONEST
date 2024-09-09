import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../page/Home";
import Shop from "../page/Shop";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import SingleProduct from "../page/SingleProduct";


export const Router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            // errorElement:,
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
                },
                

            ]
        }
    ]
);


