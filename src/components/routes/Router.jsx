import React, { createContext, useState } from 'react'
import {
    RouterProvider,
} from "react-router-dom";
import { router } from '../pages/page';
export const UserContext = createContext();

export default function Router() {
    const [loggedInUser, setLoggedInUser] = useState({});
    console.log("Router JS ")
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <RouterProvider router={router} />
        </UserContext.Provider>
    )
}
