import { Box, Typography, Grid } from "@mui/material";
import { StockLogEntry } from "../Request/Partial/PutInBox";
import { useState, useEffect } from "react";

export const Log = () => {
  const [stockLog, setStockLog] = useState<StockLogEntry[]>([]);

  useEffect(() => {
    const storedStockLog = localStorage.getItem("stockLog");
    if (storedStockLog) {
      setStockLog(JSON.parse(storedStockLog));
    }
  }, []);

  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://i0.wp.com/mltechniques.com/wp-content/uploads/2022/06/imgpyRiemannFinalConfetti398.png?resize=800%2C600&ssl=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "16px",
        backdropFilter: "blur(8px)"
      }}
    >
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
        <Typography variant="h2" sx={{ flexGrow: 1, marginRight: 5 }}>
          LOG
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={2} textAlign="center">
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              backgroundColor: "rgba(211, 211, 211, 0.5)",
              backdropFilter: "blur(10px)",
              borderRadius: "8px",
              color: "white",
              textAlign: "center"
            }}
          >
            IN / OUT
          </Typography>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              backgroundColor: "rgba(211, 211, 211, 0.5)",
              backdropFilter: "blur(10px)",
              borderRadius: "8px",
              color: "white",
              textAlign: "center"
            }}
          >
            Product Name
          </Typography>
        </Grid>
        <Grid item xs={2} textAlign="center">
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              backgroundColor: "rgba(211, 211, 211, 0.5)",
              backdropFilter: "blur(10px)",
              borderRadius: "8px",
              color: "white",
              textAlign: "center"
            }}
          >
            Product ID
          </Typography>
        </Grid>
        <Grid item xs={2} textAlign="center">
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              backgroundColor: "rgba(211, 211, 211, 0.5)",
              backdropFilter: "blur(10px)",
              borderRadius: "8px",
              color: "white",
              textAlign: "center"
            }}
          >
            Amount
          </Typography>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              backgroundColor: "rgba(211, 211, 211, 0.5)",
              backdropFilter: "blur(10px)",
              borderRadius: "8px",
              color: "white",
              textAlign: "center"
            }}
          >
            Date
          </Typography>
        </Grid>
        {stockLog.map((logItem, index) =>
          <Grid
            item
            container
            xs={12}
            key={index}
            spacing={0}
            sx={{
              marginBottom: "8px",
              backgroundColor: index % 2 === 0 ? "lightblue" : "lightgray",
              padding: "8px",
              borderRadius: "4px",
              marginTop: 1
            }}
          >
            <Grid item xs={2} textAlign="center">
              <Typography>
                {logItem.in ? "IN" : "OUT"}
              </Typography>
            </Grid>
            <Grid item xs={3} textAlign="center">
              <Typography>
                {logItem.productName}
              </Typography>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <Typography>
                {logItem.productId}
              </Typography>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <Typography>
                {logItem.amount}
              </Typography>
            </Grid>
            <Grid item xs={3} textAlign="center">
              <Typography>
                {logItem.date}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
