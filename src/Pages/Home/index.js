import React, {useEffect,useState} from 'react';
import {Grid, Table, TableBody, TableCell, TableRow, TableHead, TableContainer, Paper} from '@material-ui/core';
import './style.scss';
import api from '../../services/api';


export default function Home(){
    const [rows,setRows]=useState([]);
    let array = [];
    useEffect(
        ()=>{
            api.get('/projetos').then(response=>{
                response.data.map(index=>{
                    array.push(index)
                })
                setRows(array)
            })
        },[]
    )
    return(
        <Grid container xs={12} >
            <Grid container xs={12} className="header">
                <h1>
                    Gerenciador de Projetos
                </h1>
            </Grid>
            <Grid container xs={12} direction="row" alignItems="center" justify="space-between" className="botoes">
                <button>Cadastrar</button>
                <button>Editar</button>
                <button>Excluir</button>
                <button>Simular Retorno</button>
            </Grid>
            <Grid container xs={12} >
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Projeto</TableCell>
                        <TableCell align="right">Data Início</TableCell>
                        <TableCell align="right">Data Término</TableCell>
                        <TableCell align="right">Valor</TableCell>
                        <TableCell align="right">Risco</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row._id}>
                        <TableCell component="th" scope="row">
                            {row.nomeProjeto}
                        </TableCell>
                        <TableCell align="right">{row.dataInicio}</TableCell>
                        <TableCell align="right">{row.dataTermino}</TableCell>
                        <TableCell align="right">{row.valorProjeto}</TableCell>
                        <TableCell align="right">{row.risco}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}