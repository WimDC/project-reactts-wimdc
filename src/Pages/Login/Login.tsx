import { Box, Button, Grid, Typography } from '@mui/material'
import { useState } from 'react';

const TestarofobjInitiate=[
    {
  "index": 1,
  "amount": 2,
  "productId": "TOS6LE57210000",
  "productName": "CLUTCH"
 },
 {
  "index": 2,
  "amount": 5,
  "productId": "6LH53742000",
  "productName": "CLUTCH-50R-G28-6"
 },
 {
  "index": 3,
  "amount": 1,
  "productId": "6LH56400000",
  "productName": "CLUTCH-50TL-G33-8"
 }
];

const withdraw = (setTestarofobj, Testarofobj, item) => {
    item.amount -= 1;
    const updatedItem = {...item, amount: item.amount};
    const newList = Testarofobj.filter(listItem => listItem !== item)
    const updatedNewList = [ ...newList, updatedItem]; 
    const sortedUpdatedNewList = updatedNewList.sort((a, b) => a.index - b.index);   
    setTestarofobj(sortedUpdatedNewList);        
            
    console.log("UproductId:"+updatedItem.productId+"   Uproductname:"+updatedItem.productName+"    Uproduct amount: "+updatedItem.amount);
    console.log("productId:"+item.productId+"   productname:"+item.productName+"    product amount: "+item.amount);     
};

//display="flex" height="100vh" alignItems="center" justifyContent="center"
export const Login = () => {
const [Testarofobj, setTestarofobj] = useState(TestarofobjInitiate);
    return (
        <Box >
           <Typography>LOGIN</Typography> 
           {Testarofobj.map((item, index) => 
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
                    <Button onClick={() => withdraw(setTestarofobj, Testarofobj, item)}>withdraw</Button>
                </Grid> 
            </Grid>
            )}
        </Box>
    )
}