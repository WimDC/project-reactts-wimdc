import { BottomNavigationWrapper } from "../Pages/BottomNavigation/BottomNavigation";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { Request } from "../Pages/Request/Request";
import { createBrowserRouter } from "react-router-dom"
import { Stocks } from "../Pages/Stocks/Stocks";

export const router =  createBrowserRouter([
    {
        path: "/",
        element: <BottomNavigationWrapper />,
        children: [
            {path: "", element: <Home />},
            {path: "login", element: <Login />},
            {path: "request", element: <Request />},
            {path: "stocks", element: <Stocks />}
        ],
    
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/request",
        element: <Request />,
    },
    {
        path: "/Stocks",
        element: <Stocks />,
    }
]);