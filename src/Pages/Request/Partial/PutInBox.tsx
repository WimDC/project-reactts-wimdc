import { FC, useState, useEffect } from "react";
import { StockProps } from "../../Stocks/stockData";
import { getStockContent, saveStockContent } from "../../../Helper/getStockContent";
import { Box, InputLabel, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface PutInBoxProps {
  stockId: string;
}

export interface StockLogEntry {
  productName: string;
  productId: string | number;
  amount: number;
  date: string;
  in: boolean
}

export const PutInBox: FC<PutInBoxProps> = ({ stockId }) => {
  const navigate = useNavigate();
  const stockData: StockProps[] = getStockContent() ?? [];
  const [productNameText, setProductNameText] = useState("");
  const [productIdText, setProductIdText] = useState("");
  const [amountNumber, setAmountNumber] = useState("");
  const [stockLog, setStockLog] = useState<StockLogEntry[]>([]);

  useEffect(() => {
    const storedStockLog = localStorage.getItem("stockLog");
    if (storedStockLog) {
      setStockLog(JSON.parse(storedStockLog));
    }
  }, []);

  const onPutIn = () => {
    if (!stockData.some((item) => item.productId === productIdText)) {
      if (productNameText === "" || productIdText === "" || amountNumber === "") {
        alert("Please fill in product name, product ID, and amount.");
        return;
      }
    } else {
      if (productIdText === "" || amountNumber === "") {
        alert("Please fill in product ID and amount.");
        return;
      }
    }

    const amount = parseInt(amountNumber);
    if (amount <= 0) {
      alert("Amount must be greater than zero.");
      return;
    }

    const foundInStock: StockProps | undefined = stockData.find(
      (item) => item.productId === productIdText
    );

    if (foundInStock) {
      const newAmount = foundInStock.amount + amount;
      const updatedItem: StockProps = { ...foundInStock, amount: newAmount };
      const updatedList = stockData.map((item) =>
        item.productId === productIdText ? updatedItem : item
      );
      saveStockContent(updatedList);
      addStockLogEntry(foundInStock.productName, productIdText, amount);
      alert("Item successfully put in the stock");
    } else {
      const newStockItem: StockProps = {
        productName: productNameText,
        productId: productIdText,
        amount: amount,
        stockId: stockId,
      };

      const newStockList = [...stockData, newStockItem];
      saveStockContent(newStockList);
      addStockLogEntry(productNameText, productIdText, amount);
      alert("Item successfully put in the stock");
    }

    redirectToStockDetail(stockId);
  };

  const addStockLogEntry = (productName: string, productId: string, amount: number) => {
    const currentDate = new Date().toLocaleString();
    const newStockLogEntry: StockLogEntry = {
      productName,
      productId,
      amount,
      date: currentDate,
      in: true,
    };
    const updatedStockLog = [...stockLog, newStockLogEntry];
    setStockLog(updatedStockLog);
    localStorage.setItem("stockLog", JSON.stringify(updatedStockLog));
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);

    if (value <= 0) {
      setAmountNumber("");
    } else {
      setAmountNumber(value.toString());
    }
  };

  const redirectToStockDetail = (stockId: string) => {
    navigate(`/stockdetail/${stockId}`);
  };

  return (
    <Box>
      <Box>
        <Typography>Put In Stock</Typography>
        {!stockData.some((item) => item.productId === productIdText) ? (
          <InputLabel sx={{ padding: 1 }} htmlFor="product-name">
            Product name:
          </InputLabel>
        ) : (
          <Typography></Typography>
        )}
        {!stockData.some((item) => item.productId === productIdText) ? (
          <input
            id="product-name"
            type="text"
            value={productNameText}
            onChange={(event) => setProductNameText(event.target.value)}
          />
        ) : (
          <Typography></Typography>
        )}
        <br />
        <InputLabel sx={{ padding: 1 }} htmlFor="product-id">
          Product ID:
        </InputLabel>
        <input
          id="product-id"
          type="text"
          value={productIdText}
          onChange={(event) => setProductIdText(event.target.value)}
        />
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
        <Button sx={{ margin: 1 }} variant="outlined" onClick={onPutIn}>
          Put In
        </Button>
      </Box>
      <Box>
        <Typography>Stock Log:</Typography>
        {stockLog.map((entry, index) => (
          <Typography key={index}>
            { entry.productName} - {entry.productId} - {entry.amount} - {entry.date} - {entry.in ? 'in' : 'out'}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
