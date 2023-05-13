import { Box, Button, Typography } from "@mui/material";
import { Grid } from '@mui/material'; // Grid version 1
import { useState } from 'react';
import { carStockWimInitiate } from "./stockData";
import { CarstockProps } from "./stockData";
import { RequestBox } from "../Request/Partial/RequestBox";
import { DropdownMenu } from "./Partial/dropdownMenu";
    
const withdrawOne = (carStockWim, setCarStockWim, item) => {
    item.amount > 0 ? item.amount -= 1 : 0;
    const updatedItem = {...item, amount: item.amount};
    const newList = carStockWim.filter(listItem => listItem !== item)
    const updatedNewList = [ ...newList, updatedItem]; 
    const sortedUpdatedNewList = updatedNewList.sort((a, b) => a.index - b.index);   
    setCarStockWim(sortedUpdatedNewList); 
    localStorage.setItem(Stock, sortedUpdatedNewList); 
}

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
const [carStockWim, setCarStockWim] = useState(carStockWimInitiate);
    return (  
        <Box>
            <Box sx={{margin: 5}}>
               <DropdownMenu /> 
            </Box>
            <Typography variant="h2">STOCK</Typography>
            <Grid container spacing={0}>
                <Grid xs={1}>
                    <Typography variant="h6">Amount</Typography>
                </Grid>
                <Grid xs={2}>
                    <Typography variant="h6">productId</Typography>
                </Grid>
                <Grid xs={2}>
                    <Typography variant="h6">productName</Typography>
                </Grid> 
                <Grid xs={2}>
                    <Typography variant="h6">
                        
                    </Typography>
                </Grid>   
            </Grid>
            {carStockWim.map((item, index) => 
            <Grid key={index} container spacing={0}>
                <Grid xs={1}>
                    <Typography>{item.amount}</Typography>
                </Grid>
                <Grid xs={2}>
                    <Typography>{item.productId}</Typography>
                </Grid>
                <Grid xs={2}>
                    <Typography>{item.productName}</Typography>
                </Grid> 
                <Grid xs={2}>
                    <Button onClick={() => withdrawOne(carStockWim, setCarStockWim, item)}>Withdraw</Button>
                </Grid> 
            </Grid>
            )}
            <RequestBox stockList={carStockWim} setCarStockWim={setCarStockWim} />
        </Box>
    )
}