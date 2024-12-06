import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial redireciona para o login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listar-tarefa" element={<ListarTarefa />} />
      </Routes>
    </Router>
  );
}

export default App;
