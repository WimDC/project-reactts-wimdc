import { FC, useState } from "react";
import { StockProps } from "../../Stocks/stockData";
import { getStockContent, saveStockContent } from "../../../Helper/getStockContent";
import { Box, InputLabel, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface PutInBoxProps {
  stockId: string;
}

export const PutInBox: FC<PutInBoxProps> = ({ stockId }) => {
  const navigate = useNavigate();
  const stockData: StockProps[] = getStockContent() ?? [];
  const [productNameText, setProductNameText] = useState("");
  const [productIdText, setProductIdText] = useState("");
  const [amountNumber, setAmountNumber] = useState("");

  const onPutIn = () => {
    if (productNameText === "" || productIdText === "" || amountNumber === "") {
      alert("Please fill in all the fields.");
      return;
    }

    const foundInStock: boolean = stockData.find(item => item.productId === productIdText);

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
      alert("Item successfully put in the stock");
    } else {
      const newStockItem: StockProps = {
        productName: productNameText,
        productId: productIdText,
        amount: parseInt(amountNumber),
        stockId: stockId
      };

      if (stockData) {
        const newStockList = [...stockData, newStockItem];
        saveStockContent(newStockList);
        alert("Item successfully put in the stock");
      } else {
        console.log("No initial carstock");
      }
    }

    redirectToStockDetail(stockId);
  };

  const redirectToStockDetail = (stockId: string) => {
    navigate(`/stockdetail/${stockId}`);
    console.log(stockId);
  };

  return (
    <Box>
          <Box>
              <Typography>Put In</Typography>
        <InputLabel sx={{ padding: 1 }} htmlFor="product-name">
          Product name:
        </InputLabel>
        <input
          id="product-name"
          type="text"
          value={productNameText}
          onChange={e => setProductNameText(e.target.value)}
        />
        <br />
        <InputLabel sx={{ padding: 1 }} htmlFor="product-id">
          Product ID:
        </InputLabel>
        <input
          id="product-id"
          type="text"
          value={productIdText}
          onChange={e => setProductIdText(e.target.value)}
        />
        <br />
        <InputLabel sx={{ padding: 1 }} htmlFor="amount">
          Amount:
        </InputLabel>
        <input
          id="amount"
          type="number"
          value={amountNumber}
          onChange={e => setAmountNumber(e.target.value)}
        />
        <br />
        <Button sx={{ margin: 1 }} variant="outlined" onClick={() => onPutIn()}>
          Put In
        </Button>
      </Box>
    </Box>
  );
};
