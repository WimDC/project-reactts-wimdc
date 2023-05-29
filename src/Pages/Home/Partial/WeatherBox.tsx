import { Box, Typography } from "@mui/material";
import { FC } from "react";

export interface WeatherData {
  location: {
    name: string;
  };
  current: {
    condition: {
      text: string;
    };
    temp_c: number;
  };
}

interface WeatherBoxProps {
  data: WeatherData;
}

export const WeatherBox: FC<WeatherBoxProps> = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: 750,
        alignItems: "center",
        padding: "16px"
      }}
    >
      <Typography variant="h5" sx={{ color: "white" }}>
        Weather for today
      </Typography>
      <Typography variant="h5" sx={{ padding: 5, color: "white" }}>
        {data.location.name}
      </Typography>
      <Typography variant="h5" sx={{ padding: 5, color: "white" }}>
        {data.current.condition.text}
      </Typography>
      <Typography variant="h5" sx={{ padding: 5, color: "white" }}>
        Temperature: {data.current.temp_c}°C
      </Typography>
    </Box>
  );
};
