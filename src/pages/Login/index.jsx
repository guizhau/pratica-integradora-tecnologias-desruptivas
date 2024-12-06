import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// Estilos personalizados
const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #ff7e5f, #4a90e2)", // Gradiente laranja para azul
  },
  paper: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
    borderRadius: 8,
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
  },
  formControl: {
    marginBottom: "16px",
  },
  button: {
    backgroundColor: "#2575fc",
    color: "white",
    "&:hover": {
      backgroundColor: "#6a11cb",
    },
  },
  title: {
    marginBottom: "16px",
    fontWeight: "bold",
    color: "#333",
  },
}));

const Login = () => {
  const [login, setLogin] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();

  const handleLogin = () => {
    if (!login) {
      setError("Por favor, insira seu login!");
    } else {
      setError("");
      alert("Login realizado com sucesso!");
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.title}>
          Bem-vindo
        </Typography>

        <FormControl fullWidth className={classes.formControl} error={!!error}>
          <InputLabel htmlFor="login_nome">Login</InputLabel>
          <Input
            id="login_nome"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>

        <Button
          variant="contained"
          fullWidth
          className={classes.button}
          onClick={handleLogin}
        >
          Entrar
        </Button>
      </Paper>
    </div>
  );
};

export default Login;
