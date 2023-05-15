import { Box, Typography } from '@mui/material'
import { RequestBox } from './Partial/RequestBox';
import {Stocks} from "../Stocks/Stocks";

export const Request = () => {
    const getStockString = localStorage.getItem("stock") ?? "";
    console.log(typeof getStockString);
    console.log(getStockString);


    return (
        <Box>
            <Typography variant='h2'>Request</Typography>
            <RequestBox />
        </Box>
    )
}