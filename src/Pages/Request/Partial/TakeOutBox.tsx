import { FC, useState, useEffect } from "react";
import { StockProps } from "../../Stocks/stockData";
import { getStockContent, saveStockContent } from "../../../Helper/getStockContent";
import { Box, InputLabel, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StockLogEntry } from "./PutInBox";


interface TakeOutBoxProps {
  stockId: string;
}

export const TakeOutBox: FC<TakeOutBoxProps> = ({ stockId }) => {
  const navigate = useNavigate();
  const stockData: StockProps[] = getStockContent() ?? [];
  const [productNameText, setProductNameText] = useState("");
  const [productIdText, setProductIdText] = useState("");
  const [amountNumber, setAmountNumber] = useState("");
  const [stockLog, setStockLog] = useState<StockLogEntry[]>([]);
  const stockDataByStockId = stockData.filter((item) => item.stockId === stockId);

  useEffect(() => {
    const storedStockLog = localStorage.getItem("stockLog");
    if (storedStockLog) {
      setStockLog(JSON.parse(storedStockLog));
    }
  }, []);

  const onTakeOut = () => {
    if (!Array.isArray(stockData)) {
      console.log("stockData is not an array");
      return;
    }
    const findItem: StockProps = stockDataByStockId.find(item => item.productId === productIdText) ??  {amount: 0, productId: "error finding item", productName: "error", stockId: "0"};

    let matchFound = false;
    const updatedList = stockDataByStockId.map((item) => {
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
    addStockLogEntry(findItem.productName, productIdText, parseInt(amountNumber));
    redirectToStockDetail(stockId);
    alert("Item successfully taken out from the stock");
  };



  const checkProductInStock = () => {
    const foundProduct = stockDataByStockId.find((item) => item.productId === productIdText);
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

  const addStockLogEntry = (productName: string, productId: string, amount: number) => {
    const currentDate = new Date().toLocaleString();
    const newStockLogEntry: StockLogEntry = {
      productName,
      productId,
      amount,
      date: currentDate,
      in: false,
      stockId,
    };
    const updatedStockLog = [...stockLog, newStockLogEntry];
    setStockLog(updatedStockLog);
    localStorage.setItem("stockLog", JSON.stringify(updatedStockLog));
  };

  const redirectToStockDetail = (stockId: string) => {
    navigate(`/stockdetail/${stockId}`);
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
    const foundProduct = stockDataByStockId.find((item) => item.productId === productIdText);
    return foundProduct ? foundProduct.amount : 0;
  };

  return (
    <Box>
      <Box>
        <Typography>Take Out From Stock</Typography>
        <InputLabel sx={{ padding: 1 }} htmlFor="product-name">
          Product name:
        </InputLabel>
        <input
          id="product-name"
          type="text"
          value={productNameText}
          onChange={(event) => setProductNameText(event.target.value)}
        />
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
        <Button sx={{ margin: 1 }} variant="outlined" onClick={checkProductInStock}>
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
