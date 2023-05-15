import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { Grid } from '@mui/material'; // Grid version 1
import { useState } from 'react';
import { stockLists } from "../Stocks/Stocks";
import { stock } from "../Stocks/stockData"; 
import { saveStockContent } from "../../Helper/getStockContent";

saveStockContent(stock);

export const withdrawOne = (stockData, setStockData, item) => {
    item.amount > 0 ? item.amount -= 1 : 0;
    const updatedItem = {...item, amount: item.amount};
    const newList = stockData.filter(listItem => listItem !== item)
    const updatedNewList = [ ...newList, updatedItem]; 
    const sortedUpdatedNewList = updatedNewList.sort((a, b) => a.index - b.index);   
    setStockData(sortedUpdatedNewList); 
    localStorage.setItem("stock", JSON.stringify(sortedUpdatedNewList)); 
    console.log("sortedUpdatedNewList: "+sortedUpdatedNewList);
}

export const StockDetail = () => {
    const getStockString = localStorage.getItem("stock") ?? "";
  //  console.log(typeof getStockString);
   // console.log(getStockString);

    const getStock = JSON.parse(getStockString);
 //   console.log(typeof getStock);
  //  console.log(getStock);
    const [stockData, setStockData] = useState(getStock);
   // console.log(stockData);

    const { id: stockId } = useParams();
  //  console.log(typeof stockId);
 //   console.log(stockId);

    const stockById = stockData.filter((stockItem) => stockItem.stockId === stockId);

    const stock = stockData.find((specificStock) => {
 // console.log(specificStock);
 // console.log("specificStock.stockId: "+specificStock.stockId);
 // console.log("stockId: "+stockId);
  const match = specificStock.stockId === stockId;
//  console.log("specificStock.stockId === stockId: "+match);
  return match;
});
  //  console.log(typeof stock);
    //console.log(stock);

    if (!stock) {
 return <Typography>Not found</Typography>
 }
return (
    <Box>
        <Typography variant="h2">{stockLists[stockId-1].name}</Typography>
            <Typography variant="h4">STOCK DETAIL</Typography>
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
                    <Typography variant="h6">stockId</Typography>
                </Grid> 
                <Grid xs={2}>
                    <Typography variant="h6">
                        
                    </Typography>
                </Grid>   
            </Grid>
            {stockById.map((item, index) => 
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
                    <Typography>{item.stockId}</Typography>
                </Grid>
                <Grid xs={2}>
                    <Button onClick={() => withdrawOne(stockData, setStockData, item)}>Withdraw</Button>
                </Grid> 
            </Grid>
            )}
        </Box>
    )
}

//const { stockId } = useParams();

 //const stock = stocks.find((stock) => stock.id === stockId);
 
 //const [allItemsInStock, setALlItemsInStock] = useState<StockItem[]>([]);

// if (!stock) {
 //return <Typography>Not found</Typography>
 //}
 
 //stock.name

// const itemsInStock = allItemsInStock.filter((item) => item.stockId === stockId);

 //const takeItemOutStock = (itemId: String) => {

 //const newItemsInStock = itemsInStock.map(item => item.id === itemId ?  {...item, amount: item.amount - 1}: item);

 //setALlItemsInStock(newItemsInStock);

//const newItem = {id: , product, name, amount: 2}
 //[...itemsInStock, newItem]
//}

//productNumber -- name -- amount -- takeOutButton