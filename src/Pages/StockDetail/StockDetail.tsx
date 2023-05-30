import { Box, Button, Grid, Typography } from "@mui/material";
import { FC, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StockProps } from "../Stocks/stockData";
import { getStockContent } from "../../Helper/getStockContent";
import { stockLists } from "../Stocks/Stocks";
import { StockLogEntry } from "../Request/Partial/PutInBox";
import stock1Image from "../../static/images/bmw3.png";
import stock2Image from "../../static/images/2018-Mercedes_Benz-Sprinter-COLORS-Tenorite-Grey.png";

interface StockImageMap {
  [key: string]: string;
}

const stockImageMap: StockImageMap = {
  "1": stock1Image,
  "2": stock2Image,
};

export const StockDetail: FC = () => {
  const navigate = useNavigate();
  const { id: stockId = "" } = useParams() ?? "";
  const getStock = getStockContent();
  const [stockData, setStockData] = useState<StockProps[]>(getStock);
  const [stockLog, setStockLog] = useState<StockLogEntry[]>([]);
  const stockById = stockData.filter((stockItem) => stockItem.stockId === stockId);
  const stock = stockData.find((specificStock) => specificStock.stockId === stockId);

  useEffect(() => {
    const storedStockLog = localStorage.getItem("stockLog");
    if (storedStockLog) {
      setStockLog(JSON.parse(storedStockLog));
    }
  }, []);

  const goToRequestPage = (stockId: string) => {
    navigate("/request/" + stockId);
  };

  const addStockLogEntry = (productName: string, productId: string | number, amount: number) => {
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

  const withdrawOne = (stockData: StockProps[], setStockData: any, item: StockProps) => {
    item.amount > 0 ? (item.amount -= 1) : 0;
    const updatedItem = { ...item, amount: item.amount };
    const newList = stockData.filter((listItem) => listItem !== item);
    const updatedNewList = [...newList, updatedItem];
    const sortedUpdatedNewList = updatedNewList.sort((a, b) => a.amount - b.amount);
    setStockData(sortedUpdatedNewList);
    localStorage.setItem("stock", JSON.stringify(sortedUpdatedNewList));
    addStockLogEntry(item.productName, item.productId, 1)
    console.log(item.productName, item.productId, 1)
  };

  if (!stock) {
    return <Typography>Not found</Typography>;
  }

  return (
    <Box sx={{
      backgroundImage: "url('https://myguitarlessons.co.uk/wp-content/uploads/2014/10/Kleinteilelag-Thomann-factory-620x360.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "16px",
      backdropFilter: "blur(8px)"
    }}>
      <Box
  sx={{
    backgroundColor: "rgba(211, 211, 211, 0.5)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
    color: "white",
    textAlign: "right",
    marginRight: 20,
    marginLeft: 20
  }}
>
  <img
  src={stockImageMap[stockId]}
  alt="Stock"
  style={{ height: "128px", objectFit: "cover", marginLeft: 50 }}
/>
  <Typography variant="h2" sx={{ flexGrow: 1, marginRight: 5 }}>
    {stockLists[parseInt(stockId) - 1].name}
  </Typography>
</Box>


      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", backgroundColor: "rgba(211, 211, 211, 0.5)",
        backdropFilter: "blur(10px)",
        borderRadius: "8px", color: "white" }}>
        <Typography variant="h4">STOCK DETAIL</Typography>
        <Button variant="outlined" sx={{ color: "white", borderColor: "white"}} onClick={() => goToRequestPage(stockId)}>
          Request
        </Button>
      </Box>
      <Grid container spacing={0} sx={{ marginBottom: "16px" }}>
  <Grid item xs={1}>
    <Typography variant="h6" sx={{
      fontWeight: "bold",
      backgroundColor: "rgba(211, 211, 211, 0.5)",
      backdropFilter: "blur(10px)",
      borderRadius: "8px",
      color: "white",
      textAlign: "center" }}>
      stockId
    </Typography>
  </Grid>
  <Grid item xs={2}>
    <Typography variant="h6" sx={{
      fontWeight: "bold",
      backgroundColor: "rgba(211, 211, 211, 0.5)",
      backdropFilter: "blur(10px)",
      borderRadius: "8px",
      color: "white",
      textAlign: "center" }}>
      productId
    </Typography>
  </Grid>
  <Grid item xs={2}>
    <Typography variant="h6" sx={{
      fontWeight: "bold",
      backgroundColor: "rgba(211, 211, 211, 0.5)",
      backdropFilter: "blur(10px)",
      borderRadius: "8px",
      color: "white",
      textAlign: "center" }}>
      productName
    </Typography>
  </Grid>
  <Grid item xs={2}>
    <Typography variant="h6" sx={{
      fontWeight: "bold",
      backgroundColor: "rgba(211, 211, 211, 0.5)",
      backdropFilter: "blur(10px)",
      borderRadius: "8px",
      color: "white",
      textAlign: "center" }}>
      amount
    </Typography>
  </Grid>
  <Grid item xs={2} />
</Grid>
{stockById.map((item, index) => (
  <Grid
    key={index}
    container
    spacing={0}
    sx={{
      marginBottom: "8px",
      backgroundColor: index % 2 === 0 ? "lightblue" : "lightgray",
      padding: "8px",
      borderRadius: "4px",
      marginRight: 40,
    }}
  >
    <Grid item xs={1}>
      <Typography sx={{ textAlign: "center" }}>{item.stockId}</Typography>
    </Grid>
    <Grid item xs={2}>
      <Typography sx={{ textAlign: "center" }}>{item.productId}</Typography>
    </Grid>
    <Grid item xs={2}>
      <Typography sx={{ textAlign: "center" }}>{item.productName}</Typography>
    </Grid>
    <Grid item xs={2}>
      <Typography sx={{ textAlign: "center", fontSize: 22 }}>{item.amount}</Typography>
    </Grid>
    <Grid item xs={2}>
      <Button variant="contained" sx={{
        backgroundColor: "rgba(211, 211, 211, 0.5)",
        backdropFilter: "blur(10px)",
        borderRadius: "8px",
        color: "black",
        cursor: item.amount > 0 ? "pointer" : "not-allowed"
      }}
        disabled={item.amount === 0}
        onClick={() => withdrawOne(stockData, setStockData, item)}>Withdraw</Button>
    </Grid>
  </Grid>
))}

    </Box>
  );
};
