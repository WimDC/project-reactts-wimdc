import { Box, Typography } from '@mui/material'
import { RequestBox } from './Partial/RequestBox';
import { useParams } from 'react-router-dom';

export const Request = () => {
    const getStockString = localStorage.getItem("stock") ?? "";
    console.log(typeof getStockString);
    console.log(getStockString);

    const { id: stockId } = useParams();
    return (
        <Box sx={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography sx={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }} variant='h2'>Request</Typography>
            <RequestBox stockId={stockId ?? ""}/>
        </Box>
    )
}