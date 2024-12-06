import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
    backgroundColor: "#ff7e5f",
    color: "white",
    "&:hover": {
      backgroundColor: "#4a90e2",
    },
  },
  title: {
    marginBottom: "16px",
    fontWeight: "bold",
    color: "#333",
  },
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/listar-tarefa");
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.title}>
          Login
        </Typography>
        <TextField
          className={classes.formControl}
          label="Usuário"
          variant="outlined"
          fullWidth
        />
        <TextField
          className={classes.formControl}
          label="Senha"
          type="password"
          variant="outlined"
          fullWidth
        />
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleLogin}
          fullWidth
        >
          Entrar
        </Button>
      </Paper>
    </div>
  );
};

export default Login;
