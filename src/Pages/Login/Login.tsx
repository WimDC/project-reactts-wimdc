import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setLoginError(false);
      setUsername("");
      setPassword("");
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      setLoginError(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5"
      }}
    >
      <Box
        sx={{
          p: 4,
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={event => setUsername(event.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          sx={{ mb: 2 }}
        />
        {loginError &&
          <Typography variant="body2" sx={{ color: "red", mb: 2 }}>
            Invalid username or password
          </Typography>}
        <Button variant="contained" onClick={handleLogin} fullWidth>
          Login
        </Button>
      </Box>
    </Box>
  );
};
