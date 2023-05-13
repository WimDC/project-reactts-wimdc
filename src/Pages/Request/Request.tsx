import { Box, Typography } from '@mui/material'
import { RequestBox } from './Partial/RequestBox';
import {Stocks} from "../Stocks/Stocks";

export const Request = () => {

    return (
        <Box>
            <Typography variant='h2'>Request</Typography>
            <RequestBox stockList={carStockWim} setCarStockWim={setCarStockWim}/>
        </Box>
    )
}