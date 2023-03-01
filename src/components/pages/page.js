import { createBrowserRouter } from "react-router-dom";
import HomePage from "../lib/HomePage/HomePage";
import Login from "../lib/Login/Login.jsx";
import PrivateRoute from "../Private/PrivateRoute";
import OrderService from "../lib/OrderService/OrderService/OrderService.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/orderService/:id",
        element:
            <PrivateRoute>
                <OrderService />
            </PrivateRoute>,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "*",
        element: <HomePage />,
    },
]);