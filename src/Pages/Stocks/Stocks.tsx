import { Box, Button, Typography } from "@mui/material";
import { DropdownMenu } from "./Partial/dropdownMenu";
import {
  getStockContent,
  saveStockContent
} from "../../Helper/getStockContent";
import { stock } from "./stockData";

export interface StockListProps {
  name: string;
  stockId: string;
}

export const stockLists: StockListProps[] = [
  {
    name: "carStockWim",
    stockId: "1"
  },
  {
    name: "stockDepot",
    stockId: "2"
  }
];

const fillStock = () => {
  saveStockContent(stock);
};

export const Stocks = () => {
  return (
    <Box>
      <Button onClick={() => fillStock()}>Fill Stock With StockItems</Button>
      <Typography variant="h2">STOCKS</Typography>
      <Box sx={{ margin: 5 }}>
        <DropdownMenu />
      </Box>
    </Box>
  );
};
