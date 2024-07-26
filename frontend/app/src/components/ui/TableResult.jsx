import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#FB923C',
        color: theme.palette.common.white,
        borderRight: `1px solid ${theme.palette.divider}`,
        borderLeft: `1px solid ${theme.palette.divider}`,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 13,
        borderRight: `1px solid ${theme.palette.divider}`,
        borderLeft: `1px solid ${theme.palette.divider}`,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    
}));

const StyledTableCellName = styled(StyledTableCell)(({ theme }) => ({
    width: '200px', // Ajusta a largura da coluna "Nome"
}));

export default function TableResult({ data }) {
    const hasData = data && data.length > 0;

    return (

        <Box sx={{ maxWidth: '100%', overflowX: 'auto' }} className="relative">
            {hasData ? (
                <TableContainer component={Paper} sx={{minHeight: '300px'}}>
                    <Table sx={{ minWidth: 680 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCellName align="left">Nome</StyledTableCellName>
                                <StyledTableCell align="center">CPF</StyledTableCell>
                                <StyledTableCell align="center">E-mail</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.length > 0 && data.map((row, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCellName component="th" scope="row">
                                        {row.name}
                                    </StyledTableCellName>
                                    <StyledTableCell align="center">{row.CPF}</StyledTableCell>
                                    <StyledTableCell align="center">{row.email}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ): (
                <></>
            )}
        </Box>
    );
}
