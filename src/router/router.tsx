import { BottomNavigationWrapper } from "../Pages/BottomNavigation/BottomNavigation";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { Request } from "../Pages/Request/Request";
import { createBrowserRouter } from "react-router-dom"

export const router =  createBrowserRouter([
    {
        path: "/",
        element: <BottomNavigationWrapper />,
        children: [
            {path: "", element: <Home />},
            {path: "login", element: <Login />}
        ],
    
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/request",
        element: <Request />,
    }
]);