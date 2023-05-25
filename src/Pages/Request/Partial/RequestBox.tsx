import { FC, useState } from "react";
import { StockProps } from "../../Stocks/stockData";
import {
  getStockContent,
  saveStockContent
} from "../../../Helper/getStockContent";

interface RequestBoxProps {
  stockId: string;
}

export const RequestBox: FC<RequestBoxProps> = ({ stockId }) => {
  const stockData: StockProps[] = getStockContent() ?? [];
  const [productNameText, setProductNameText] = useState("");
  const [productIdText, setProductIdText] = useState("");
  const [amountNumber, setAmountNumber] = useState("");

  console.log(stockData);

  const onSubmit = () => {
    if (!Array.isArray(stockData)) {
      console.log("carStockWimInitiate is not an array");
      return;
    }
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
  };

  return (
    <div>
      <label htmlFor="product-name">Product name:</label>
      <input
        id="product-name"
        type="text"
        value={productNameText}
        onChange={e => setProductNameText(e.target.value)}
      />
      <br />
      <label htmlFor="product-id">Product ID:</label>
      <input
        id="product-id"
        type="text"
        value={productIdText}
        onChange={e => setProductIdText(e.target.value)}
      />
      <br />
      <label htmlFor="amount">Amount:</label>
      <input
        id="amount"
        type="number"
        value={amountNumber}
        onChange={e => setAmountNumber(e.target.value)}
      />
      <br />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
