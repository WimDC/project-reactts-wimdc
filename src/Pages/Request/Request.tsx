import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { TakeOutBox } from './Partial/TakeOutBox';
import { PutInBox } from './Partial/PutInBox';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export const Request = () => {
  const getStockString = localStorage.getItem("stock") ?? "";
  console.log(typeof getStockString);
  console.log(getStockString);

  const { id: stockId } = useParams<{ id: string }>();
  const [selectedOption, setSelectedOption] = useState("");

  interface OptionChange {
        target: {
          value: string;
      }
  }
    
  const handleOptionChange = (event: OptionChange) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card variant="outlined" sx={{backgroundColor: selectedOption === "takeOut" ? "red" : "green"}}>
        <CardContent>
          <Typography variant="h4" sx={{ marginBottom: '1rem', color: "white" }}>Request</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" sx={{ marginBottom: '1rem' }}>Select an option:</Typography>
                  <Box sx={{ margin: '20px' }}>
                    <input type="radio" id="takeOut" name="requestOption" value="takeOut" checked={selectedOption === "takeOut"} onChange={handleOptionChange} />
                    <label htmlFor="takeOut">Take out from stock</label>
                  </Box>
                  <Box sx={{ margin: '20px' }}>
                    <input type="radio" id="putIn" name="requestOption" value="putIn" checked={selectedOption === "putIn"} onChange={handleOptionChange} />
                    <label htmlFor="putIn">Put in stock</label>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardContent>
                  {selectedOption === "takeOut" && <TakeOutBox stockId={stockId} />}
                  {selectedOption === "putIn" && <PutInBox stockId={stockId} />}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}
