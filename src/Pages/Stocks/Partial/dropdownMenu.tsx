import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box, Typography } from '@mui/material';
import { stockLists } from '../Stocks';
import { useNavigate } from 'react-router-dom';

export const DropdownMenu = () => {
  const [selectedStock, setSelectedStock] = useState<{ name: string; stockId: string } | null>(null);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedStock = stockLists.find((stock) => stock.stockId === event.target.value);
    if (selectedStock) {
      setSelectedStock(selectedStock);
      navigate(`/stockdetail/${selectedStock.stockId}`);
      console.log(`/stockdetail/${selectedStock.stockId}`);
    }
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel sx={{ display: 'grid' }} id="stock-label">
          Select a stock:
        </InputLabel>
        <Select labelId="stock-label" id="stock" value={selectedStock?.name ?? ''} onChange={handleChange}>
          <MenuItem value="">
            <em>--Please select a stock--</em>
          </MenuItem>
          {stockLists.map((stock) => (
            <MenuItem key={stock.stockId} value={stock.stockId}>
              {stock.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
