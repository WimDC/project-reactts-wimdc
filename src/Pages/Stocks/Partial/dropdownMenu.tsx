import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box, Typography } from '@mui/material';
import { stockLists } from '../Stocks';

export const DropdownMenu = () => {
  const [selectedStock, setSelectedStock] = useState('');

  const handleChange = (event) => {
    setSelectedStock(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel sx={{display: "grid"}} id="stock-label">Select a stock:</InputLabel>
        <Select
          labelId="stock-label"
          id="stock"
          value={selectedStock}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>--Please select a stock--</em>
          </MenuItem>
          {stockLists.map((stock) => (
            <MenuItem key={stock.stockId} value={stock.name}>
              {stock.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography>You selected: {selectedStock}</Typography>
    </Box>
  );
};