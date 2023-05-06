import { Box, Typography } from "@mui/material"

export const WeatherBox = ({data}) => {
    return (
        <Box sx={{backgroundColor:'lightblue' ,display: 'flex', width: 750, alignItems: 'center'}}>
            <Typography variant="h4">Weather for today</Typography>
            <Typography>{data.location.name}</Typography>
            <Typography>{data.current.condition.text}</Typography>
            <Typography>Temperature: {data.current.temp_c}°C</Typography>
        </Box>
    )
}
