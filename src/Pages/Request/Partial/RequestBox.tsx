import { FC, useState } from "react";
import { StockProps } from "../../Stocks/stockData";
import {
  getStockContent,
  saveStockContent
} from "../../../Helper/getStockContent";
import { Box, InputLabel, Button } from "@mui/material"

interface RequestBoxProps {
  stockId: string;
}

export const RequestBox: FC<RequestBoxProps> = ({ stockId }) => {
  const stockData: StockProps[] = getStockContent() ?? [];
  const [productNameText, setProductNameText] = useState("");
  const [productIdText, setProductIdText] = useState("");
  const [amountNumber, setAmountNumber] = useState("");

  console.log(stockData);

  const onTakeOut = () => {
  if (!Array.isArray(stockData)) {
    console.log("stockData is not an array");
    return;
    }
    let matchFound = false;
  const updatedList = stockData.map(item => {
    if (item.productId === productIdText) {
      matchFound = true;
      const remainingAmount = item.amount - parseInt(amountNumber);
      const updatedItem = { ...item, amount: remainingAmount > 0 ? remainingAmount : 0 };
      return updatedItem;
    } 
      return item;
  });
    
    if (!matchFound) {
      alert("There is no product with the specified product id")
    }
    
  saveStockContent(updatedList);
  }



  const onPutIn = () => {
    const foundInStock: boolean = stockData.find(item => {
      const match = item.productId === productIdText;
      return match;
    });
    if (foundInStock) {
      const updatedList = stockData.map(item => {
        if (item.productId === productIdText) {
          const newAmount = item.amount + parseInt(amountNumber);
          const updatedItem = { ...item, amount: newAmount };
          return updatedItem;
        }
        return item;
      });
      saveStockContent(updatedList);
    } else {
      const newStockItem: StockProps = {
        productName: productNameText,
        productId: productIdText,
        amount: parseInt(amountNumber),
        stockId: stockId
      };
      console.log(newStockItem);
      if (stockData) {
        const newStockList = [...stockData, newStockItem];
        console.log(newStockList);
        saveStockContent(newStockList);
      } else {
        console.log("No initial carstock");
      }
    }
  
  }

    

  return (
    <Box>
      <Box>
      <InputLabel sx={{padding: 1}} htmlFor="product-name">Product name:</InputLabel>
      <input
        id="product-name"
        type="text"
        value={productNameText}
        onChange={e => setProductNameText(e.target.value)}
      />
      <br />
      <InputLabel sx={{padding: 1}}  htmlFor="product-id">Product ID:</InputLabel>
      <input
        id="product-id"
        type="text"
        value={productIdText}
        onChange={e => setProductIdText(e.target.value)}
      />
      <br />
      <InputLabel sx={{padding: 1}}  htmlFor="amount">Amount:</InputLabel>
      <input
        id="amount"
        type="number"
        value={amountNumber}
        onChange={e => setAmountNumber(e.target.value)}
      />
      <br />
      <Button sx={{ margin: 1 }} variant="outlined" onClick={() => onTakeOut()}>Take out</Button>
      <Button sx={{ margin: 1 }} variant="outlined" onClick={() => onPutIn()}>Put In</Button>
      </Box>
    </Box>
  );
};
