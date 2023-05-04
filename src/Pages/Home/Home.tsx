import { Box, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { BottomNavigationWrapper } from "../BottomNavigation/BottomNavigation"

export const Home = () => {
fetch

    return(
         <Box>
            <Typography variant="h2">HOME</Typography>
            <Typography variant="h3">Stock-o-matic</Typography>
            <Typography> Welcome to the stock management tool you need!</Typography>
            <Link to="/login">Login</Link>
        </Box>
    )
}