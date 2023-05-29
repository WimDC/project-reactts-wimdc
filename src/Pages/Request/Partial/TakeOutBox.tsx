import { FC, useState } from "react";
import { StockProps } from "../../Stocks/stockData";
import { getStockContent, saveStockContent } from "../../../Helper/getStockContent";
import { Box, InputLabel, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface TakeOutBoxProps {
  stockId: string;
}

export const TakeOutBox: FC<TakeOutBoxProps> = ({ stockId }) => {
  const navigate = useNavigate();
  const stockData: StockProps[] = getStockContent() ?? [];
  const [productNameText, setProductNameText] = useState("");
  const [productIdText, setProductIdText] = useState("");
  const [amountNumber, setAmountNumber] = useState("");

  const onTakeOut = () => {
    if (!Array.isArray(stockData)) {
      console.log("stockData is not an array");
      return;
    }

    let matchFound = false;
    const updatedList = stockData.map((item) => {
      if (item.productId === productIdText) {
        matchFound = true;
        const remainingAmount = item.amount - parseInt(amountNumber);
        const updatedItem = { ...item, amount: remainingAmount > 0 ? remainingAmount : 0 };
        return updatedItem;
      }
      return item;
    });

    if (!matchFound) {
      alert("There is no product with the specified product id");
      return;
    }

    saveStockContent(updatedList);
    redirectToStockDetail(stockId);
    alert("Item successfully taken out from the stock");
  };

  const checkProductInStock = () => {
    const foundProduct = stockData.find((item) => item.productId === productIdText);
    if (foundProduct) {
      if (foundProduct.amount > 0) {
        alert(foundProduct.amount + " item(s) of this product found in stock");
      } else {
        alert("This item is out of stock");
      }
    } else {
      alert("Product not found in stock");
    }
  };

  const redirectToStockDetail = (stockId: string) => {
    navigate(`/stockdetail/${stockId}`);
    console.log(stockId);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    const remainingAmount = getRemainingAmount();

    if (value > remainingAmount) {
      setAmountNumber(remainingAmount.toString());
    } else if (value <= 0) {
      setAmountNumber("");
    } else {
      setAmountNumber(value.toString());
    }
  };

  const getRemainingAmount = () => {
    const foundProduct = stockData.find((item) => item.productId === productIdText);
    return foundProduct ? foundProduct.amount : 0;
  };

  return (
    <Box>
      <Box>
        <Typography>Take out</Typography>
        <InputLabel sx={{ padding: 1 }} htmlFor="product-name">
          Product name:
        </InputLabel>
        <input
          id="product-name"
          type="text"
          value={productNameText}
          onChange={(e) => setProductNameText(e.target.value)}
        />
        <br />
        <InputLabel sx={{ padding: 1 }} htmlFor="product-id">
          Product ID:
        </InputLabel>
        <input
          id="product-id"
          type="text"
          value={productIdText}
          onChange={(e) => setProductIdText(e.target.value)}
        />
        <Button variant="outlined" onClick={checkProductInStock}>
          Check
        </Button>
        <br />
        <InputLabel sx={{ padding: 1 }} htmlFor="amount">
          Amount:
        </InputLabel>
        <input
          id="amount"
          type="number"
          value={amountNumber}
          onChange={handleAmountChange}
        />
        <br />
        <Button sx={{ margin: 1 }} variant="outlined" onClick={onTakeOut}>
          Take out
        </Button>
      </Box>
    </Box>
  );
};
