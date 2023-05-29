import { Box, Button, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StockProps } from "../Stocks/stockData";
import { getStockContent } from "../../Helper/getStockContent";
import { stockLists } from "../Stocks/Stocks";

export const StockDetail: FC<StockProps[]> = () => {
  const navigate = useNavigate();
  const { id: stockId = "" } = useParams() ?? "";
  const getStock = getStockContent();
  const [stockData, setStockData] = useState<StockProps[]>(getStock);
  const stockById = stockData.filter((stockItem) => stockItem.stockId === stockId);
  const stock = stockData.find((specificStock) => specificStock.stockId === stockId);

  const goToRequestPage = (stockId: string) => {
    navigate("/request/" + stockId);
  };

  const withdrawOne = (stockData: StockProps[], setStockData: any, item: StockProps) => {
    item.amount > 0 ? (item.amount -= 1) : 0;
    const updatedItem = { ...item, amount: item.amount };
    const newList = stockData.filter((listItem) => listItem !== item);
    const updatedNewList = [...newList, updatedItem];
    const sortedUpdatedNewList = updatedNewList.sort((a, b) => a.amount - b.amount);
    setStockData(sortedUpdatedNewList);
    localStorage.setItem("stock", JSON.stringify(sortedUpdatedNewList));
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
    src="https://www.autoscout24.be/cms-content-assets/77CEiXP0Lzd84zh2Fl2jxs-3e13195a9f6a4d25561ecbb990547339-190612_-_BMW_3_Series_Touring__17_-1100.jpg"
    alt="Car"
    style={{ height: "128px", objectFit: "cover", marginLeft: 50 }} // Adjust image dimensions as needed
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
          <Typography variant="h6" sx={{ fontWeight: "bold", backgroundColor: "rgba(211, 211, 211, 0.5)",
        backdropFilter: "blur(10px)",
        borderRadius: "8px", color: "white" }}>
            Amount
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold", backgroundColor: "rgba(211, 211, 211, 0.5)",
        backdropFilter: "blur(10px)",
        borderRadius: "8px", color: "white" }}>
            productId
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold", backgroundColor: "rgba(211, 211, 211, 0.5)",
        backdropFilter: "blur(10px)",
        borderRadius: "8px", color: "white" }}>
            productName
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold", backgroundColor: "rgba(211, 211, 211, 0.5)",
        backdropFilter: "blur(10px)",
        borderRadius: "8px", color: "white" }}>
            stockId
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
            marginRight: 40
          }}
        >
          <Grid item xs={1}>
            <Typography>{item.amount}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.productId}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.productName}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.stockId}</Typography>
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
