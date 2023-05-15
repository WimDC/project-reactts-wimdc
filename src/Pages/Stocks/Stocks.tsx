import { Box, Button, Typography } from "@mui/material";
import { DropdownMenu } from "./Partial/dropdownMenu";
import { saveStockContent } from "../../Helper/getStockContent";

export const stockLists = [
    { 
        name: 'carStockWim',
        stockId: "1"
    },
    {
        name: 'stockDepot',
        stockId: "2"
    }
]

export const Stocks = () => {
    
    return (  
        <Box>
            <Typography variant="h2">STOCKS</Typography>
            <Box sx={{margin: 5}}>
               <DropdownMenu  />
            </Box>
        </Box>
       )
}