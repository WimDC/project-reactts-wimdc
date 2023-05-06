import { Box, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useState } from "react"
import { WeatherBox } from "../../Components/WeatherBox";

const getData = async (setData) => {
    const result = await fetch(
        'https://weatherapi-com.p.rapidapi.com/current.json?q=Mechelen',
        {
	    method: 'GET',
	    headers: {
		'X-RapidAPI-Key': 'b40d99d42dmsha3832b1327f844dp1f3a9bjsn9e8a7b3c1e0a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	    }
        }
    );
    const resultJson = await result.json();
    setData(resultJson);
    console.log(resultJson);
}

export const Home = () => {
const [data, setData] = useState(null);

    if(!data) {
        getData(setData)
    }

    return(
         <Box>
            <Typography variant="h2">HOME</Typography>
            <Typography variant="h3">Stock-o-matic</Typography>
            <Typography> Welcome to the stock management tool you need!</Typography>
            {data?.location && <WeatherBox data={data} />}
            <Link to="/login">Login</Link>
        </Box>
    )
}