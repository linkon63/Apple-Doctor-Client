import { createBrowserRouter } from "react-router-dom";
import HomePage from "../lib/HomePage/HomePage";

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
        path: "*",
        element: <HomePage />,
    },
]);