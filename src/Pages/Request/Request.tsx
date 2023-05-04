import { Box, Typography } from '@mui/material'
import { RequestBox } from '../../Components/RequestBox';

export const Request = () => {

    const articles = [{id: 1, name: 'lfkhf'}]

    return (
        <Box>
            <Typography variant='h2'>Request</Typography>
            <RequestBox />
        </Box>
    )
}