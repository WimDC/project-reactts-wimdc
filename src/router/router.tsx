import { BottomNavigationWrapper } from "../Pages/BottomNavigation/BottomNavigation";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { Request } from "../Pages/Request/Request";
import { createBrowserRouter } from "react-router-dom";
import { Stocks } from "../Pages/Stocks/Stocks";
import { AppBarWrapper } from "../Pages/AppBarWrapper/AppBarWrapper";
import { StockDetail } from "../Pages/StockDetail/StockDetail";
import { Log } from "../Pages/Log/Log";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppBarWrapper />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "request/:id", element: <Request /> },
      { path: "stocks", element: <Stocks /> },
      { path: "stockDetail/:id", element: <StockDetail /> },
      { path: "log", element: <Log /> }
    ]
  }
]);
