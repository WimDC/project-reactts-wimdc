import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { BottomNavigationWrapper } from "./Pages/BottomNavigation/BottomNavigation"




function App() {
  return (
    <RouterProvider router={router} />

  )
}

export default App
