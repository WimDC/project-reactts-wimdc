import { Box, Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from "react";
import { WeatherBox, WeatherData } from "./Partial/WeatherBox";
import { Dispatch, SetStateAction } from "react";
import { useCycleColor } from "./Partial/useCycleColor";

const getData = async (setData: Dispatch<SetStateAction<WeatherData | null>>) => {
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
  console.log(resultJson);
  setData(resultJson);
  console.log(resultJson);
};

export const Home = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [isExpanded, setExpanded] = useState(false);

  const buttonColor = useCycleColor();

  // useEffect(() => {
  //   const colorInterval = setInterval(() => {
  //     setButtonColor((prevColor) => {
  //       if (prevColor === yellow) {
  //         return cyan;
  //       } else if (prevColor === cyan) {
  //         return magenta;
  //       } else {
  //         return yellow;
  //       }
  //     });
  //   }, 1000);

  //   return () => clearInterval(colorInterval);
  // }, []);

  const toggleAccordion = () => {
    setExpanded(!isExpanded);
  };

  useEffect(() => {
    if (!data) {
      getData(setData);
    }
  }, [data]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundImage: "url('https://myguitarlessons.co.uk/wp-content/uploads/2014/10/Kleinteilelag-Thomann-factory-620x360.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      >
          <Box sx={{backgroundColor: "rgba(211, 211, 211, 0.5)",
        backdropFilter: "blur(10px)",
        borderRadius: "8px",}}>
      <Typography sx={{ fontSize: "100px", fontWeight: "bold", color: "white" }} variant="h2">
        HOME
      </Typography>
      <Typography sx={{ fontSize: 40, marginBottom: 5, color: "white" }} variant="h3">
        Stock-o-matic
      </Typography>
      <Typography sx={{ fontSize: 25, color: "white",  marginBottom: 0}}>
                  Welcome to the stock management tool you need!
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6"></Typography>
        <IconButton onClick={toggleAccordion} sx={{ color: buttonColor }}>
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      <Collapse in={isExpanded}>
        <Typography>
            This app allows you to:
          </Typography>
          <Typography>
            - view stocks and carstocks
          </Typography>
          <Typography>
            - add items to a particular stock
          </Typography>
          <Typography>
            - take items from a particular stock
          </Typography>
          <Typography>
            - view the log of all made transactions
        </Typography>
        </Collapse>
        
              {data?.location && <WeatherBox data={data} />}
          </Box>
          
    </Box>
  );
};