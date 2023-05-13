import { FC, useState } from 'react';
import { CarstockProps } from '../../Stocks/stockData';

interface RequestBoxProps {
}


export const RequestBox = ({stockList, setCarStockWim}) => {
  const [productNameText, setProductNameText] = useState('');
  const [productIdText, setProductIdText] = useState('');
  const [amountNumber, setAmountNumber] = useState('');

  console.log(stockList);

  const onSubmit = () => {
    if (!Array.isArray(stockList)) {
    console.log("carStockWimInitiate is not an array");
    return;
  }
    const newCarstockItem = {
      productName: productNameText,
      productId: productIdText,
      amount: parseInt(amountNumber),
      index: stockList.length + 1,
    };
    console.log(newCarstockItem);
    if (stockList) {
      const newCarstockList = [...stockList, newCarstockItem];
      console.log(newCarstockList);
      setCarStockWim(newCarstockList);
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
