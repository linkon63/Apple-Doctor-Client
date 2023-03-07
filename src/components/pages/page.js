import { createBrowserRouter } from "react-router-dom";
import HomePage from "../lib/HomePage/HomePage";
import Login from "../lib/Login/Login.jsx";
import PrivateRoute from "../Private/PrivateRoute";
import OrderService from "../lib/OrderService/OrderService/OrderService.jsx";
import Dashboard from "../lib/Dashboard/Dashboard/Dashboard";
import YourServiceOrder from "../lib/Dashboard/YourServiceOrder/YourServiceOrder";
import AddReview from "../lib/Dashboard/AddReview/AddReview/AddReview.jsx";
import AddServices from "../lib/Dashboard/AddServices/AddServices/AddServices";
import ManageReview from "../lib/Dashboard/ManageReview/ManageReview/ManageReview";
import Admin from "../lib/Dashboard/Admin/Admin/Admin";
import AllOrders from "../lib/Dashboard/AllOrders/AllOrders/AllOrders";
import ManageContact from "../lib/Dashboard/ManageContact/ManageContact";

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
        path: "/dashboard",
        element:
            <PrivateRoute>
                < Dashboard />
            </PrivateRoute>,
    },
    {
        path: "/dashboard/services",
        element:
            <PrivateRoute>
                < YourServiceOrder />
            </PrivateRoute>,
    },
    {
        path: "/dashboard/review",
        element:
            <PrivateRoute>
                <AddReview />
            </PrivateRoute>,
    },
    {
        path: "/dashboard/addServices",
        element:
            <PrivateRoute>
                < AddServices />
            </PrivateRoute>,
    },
    {
        path: "/dashboard/manageReview",
        element:
            <PrivateRoute>
                <ManageReview />
            </PrivateRoute>,
    },
    {
        path: "/dashboard/admin",
        element:
            <PrivateRoute>
                <Admin />
            </PrivateRoute>,
    },
    {
        path: "/dashboard/allOrders",
        element:
            <PrivateRoute>
                < AllOrders />
            </PrivateRoute>,
    },
    {
        path: "/dashboard/showContactUsData",
        element:
            <PrivateRoute>
                < ManageContact />
            </PrivateRoute>,
    },
    {
        path: "*",
        element: <HomePage />,
    },
]);