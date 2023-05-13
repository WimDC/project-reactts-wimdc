import { CarstockProps } from "../Pages/Stocks/stockData";

export const getStockContent = () => {
 const stockItemsString = localStorage.getItem("stockItems");

 const stockContent: CarstockProps[] = stockItemsString 
    ? JSON.parse(stockItemsString)
    : [];

 console.log(stockContent);

 return stockContent;
};

export const saveStockContent = (content: { [key in string]: number }) => {
  localStorage.setItem("stock", JSON.stringify(content));
};