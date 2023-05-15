import { FC, useState } from 'react';
import { StockProps } from '../../Stocks/stockData';
import { getStockContent, saveStockContent } from '../../../Helper/getStockContent';

interface RequestBoxProps {
}


export const RequestBox = () => {
  const getStockData = getStockContent();
  const [productNameText, setProductNameText] = useState('');
  const [productIdText, setProductIdText] = useState('');
  const [amountNumber, setAmountNumber] = useState('');

  console.log(getStockData);

  const onSubmit = () => {
    if (!Array.isArray(getStockData)) {
    console.log("carStockWimInitiate is not an array");
    return;
  }
    const newStockItem: StockProps[] = {
      productName: productNameText,
      productId: productIdText,
      amount: parseInt(amountNumber),
      index: getStockData.length + 1,
      stockId: "1"
    };
    console.log(newStockItem);
    if (getStockData) {
      const newStockList = [...getStockData, newStockItem];
      console.log(newStockList);
      saveStockContent(newStockList);
    } else {
      console.log('No initial carstock');
    }
    
  };

  return (
    <div>
      <label htmlFor="product-name">Product name:</label>
      <input
        id="product-name"
        type="text"
        value={productNameText}
        onChange={(e) => setProductNameText(e.target.value)}
      />
      <br />
      <label htmlFor="product-id">Product ID:</label>
      <input
        id="product-id"
        type="text"
        value={productIdText}
        onChange={(e) => setProductIdText(e.target.value)}
      />
      <br />
      <label htmlFor="amount">Amount:</label>
      <input
        id="amount"
        type="number"
        value={amountNumber}
        onChange={(e) => setAmountNumber(e.target.value)}
      />
      <br />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
