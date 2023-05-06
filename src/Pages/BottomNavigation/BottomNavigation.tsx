import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material"
import { SlHome, SlLogin } from 'react-icons/sl'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const pages = [
    {label: "Home", icon: <SlHome />, route: "/"},
    {label: "Login", icon: <SlLogin />, route: "/login"},
    {label: "Request", icon: <SlLogin />, route: "/request"}
]

export const BottomNavigationWrapper = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const activeRoute = pages.findIndex((page) => page.route === location.pathname)

    return (
        <Box height="100vh" display="flex" flexDirection="column">
            <Box flex={1} overflow="auto">
                <Outlet />
            </Box>
        <BottomNavigation
            showLabels
            value={activeRoute}
            onChange={(event, newValue) => {
                navigate(pages[newValue].route);
            }}
        >
            {pages.map((page, index) => (<BottomNavigationAction label={page.label} icon={page.icon} key={index}/>)
            )}
        </BottomNavigation>
        </Box>
    )
}