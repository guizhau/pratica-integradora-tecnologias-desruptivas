import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom'; // Adicionado para navegação

import CriarTarefa from './CriarTarefa';
import EditarTarefa from './EditarTarefa';

// Função para criar dados iniciais
function createData(
  idTarefa,
  tituloTarefa,
  descricaoTarefa,
  inicioTarefa,
  fimTarefa,
  statusTarefa,
  recursoTarefa
) {
  return { idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa };
}

// Dados iniciais da listagem de tarefas
const initialRows = [
  createData(1, 'Tarefa 1', 'Descrição da Tarefa 1', '2022-01-01', '2022-01-02', 'Concluída', 'Recurso 1'),
  createData(2, 'Tarefa 2', 'Descrição da Tarefa 2', '2022-01-03', '2022-01-04', 'Em Andamento', 'Recurso 2'),
  createData(3, 'Tarefa 3', 'Descrição da Tarefa 3', '2022-01-04', '2022-01-05', 'Em Andamento', 'Recurso 3'),
  createData(4, 'Tarefa 4', 'Descrição da Tarefa 4', '2022-01-05', '2022-01-06', 'Em Andamento', 'Recurso 4'),
  createData(5, 'Tarefa 5', 'Descrição da Tarefa 5', '2022-01-06', '2022-01-07', 'Em Andamento', 'Recurso 5'),
  createData(6, 'Tarefa 6', 'Descrição da Tarefa 6', '2022-01-07', '2022-01-08', 'Aguardando', 'Recurso 6'),
];

const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState(null);
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState(null);
  const navigate = useNavigate(); // Para navegação

  useEffect(() => {
    setTarefas(initialRows);
  }, []);

  const handleEditar = (id) => {
    setIdTarefaSelecionada(id);
    const tarefaParaEditar = tarefas.find((obj) => obj.idTarefa === id);
    setTarefa(tarefaParaEditar);
    setOpenEditar(true);
  };

  const handleDeletar = (id) => {
    setTarefas((current) => current.filter((tarefa) => tarefa.idTarefa !== id));
  };

  return (
    <>
      <Card sx={{ backgroundColor: '#f5f5f5', border: '1px solid #ddd', borderRadius: '8px' }}>
        <CardHeader
          title="Tarefas"
          subheader="Listagem de Tarefas"
          sx={{ backgroundColor: '#FFA726', color: 'white' }}
        />
        <CardContent>
          <TableContainer component={Paper} sx={{ boxShadow: '0px 4px 8px rgba(0,0,0,0.1)' }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#1976D2', color: 'white' }}>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>#</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Título</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">
                    Descrição
                  </TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">
                    Data de Início
                  </TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">
                    Data de Finalização
                  </TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">
                    Status
                  </TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">
                    Recurso
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tarefas.map((row, indice) => (
                  <TableRow
                    key={indice}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: '#e3f2fd' }}
                  >
                    <TableCell component="th" scope="row">
                      {row.idTarefa}
                    </TableCell>
                    <TableCell>{row.tituloTarefa}</TableCell>
                    <TableCell align="right">{row.descricaoTarefa}</TableCell>
                    <TableCell align="right">{row.inicioTarefa}</TableCell>
                    <TableCell align="right">{row.fimTarefa}</TableCell>
                    <TableCell align="right">{row.statusTarefa}</TableCell>
                    <TableCell align="right">{row.recursoTarefa}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: '#42A5F5', color: 'white' }}
                        onClick={() => handleEditar(row.idTarefa)}
                      >
                        <EditIcon fontSize="small" />
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: '#EF5350', color: 'white' }}
                        onClick={() => handleDeletar(row.idTarefa)}
                      >
                        <DeleteIcon fontSize="small" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end', padding: '16px' }}>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: '#FFA726', color: 'white' }}
            onClick={() => setOpen(true)}
          >
            Criar Tarefa
          </Button>
          <Button
            size="small"
            variant="outlined"
            sx={{ borderColor: '#FFA726', color: '#FFA726' }}
            onClick={() => navigate('/')}
          >
            Sair
          </Button>
        </CardActions>
      </Card>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div>
          <CriarTarefa handleClose={() => setOpen(false)} tarefas={tarefas} setTarefas={setTarefas} />
        </div>
      </Modal>
      <Modal open={openEditar} onClose={() => setOpenEditar(false)}>
        <div>
          <EditarTarefa
            handleCloseEditar={() => setOpenEditar(false)}
            idTarefaSelecionada={idTarefaSelecionada}
            tarefas={tarefas}
            tarefa={tarefa}
            setTarefas={setTarefas}
          />
        </div>
      </Modal>
    </>
  );
};

export default ListarTarefa;
