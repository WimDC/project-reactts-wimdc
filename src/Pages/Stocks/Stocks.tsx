import { Box, Button, Typography, Unstable_Grid2 } from "@mui/material";
import { Grid } from '@mui/material'; // Grid version 1
import { useState } from 'react';
import { Withdraw } from "../../Components/Withdraw";
import { carStockWimInitiate } from "./stockData";

const withdrawOne = (carStockWim, setCarStockWim, item) => {
    item.amount -= 1;
    const updatedItem = {...item, amount: item.amount};
    const newList = carStockWim.filter(listItem => listItem !== item)
    const updatedNewList = [ ...newList, updatedItem]; 
    const sortedUpdatedNewList = updatedNewList.sort((a, b) => a.index - b.index);   
    setCarStockWim(sortedUpdatedNewList);        
            
    console.log("UproductId:"+updatedItem.productId+"   Uproductname:"+updatedItem.productName+"    Uproduct amount: "+updatedItem.amount);
    console.log("productId:"+item.productId+"   productname:"+item.productName+"    product amount: "+item.amount);     
};

export const Stocks = () => {
const [carStockWim, setCarStockWim] = useState(carStockWimInitiate);
    return (
        <Box>
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
                    <Button onClick={() => withdrawOne(carStockWim, setCarStockWim, item)}>withdraw</Button>
                    <Withdraw carStockWim={carStockWim} setCarStockWim={setCarStockWim} withdrawOne={withdrawOne}/>
                </Grid> 
            </Grid>
            )}
        </Box>
    )
}