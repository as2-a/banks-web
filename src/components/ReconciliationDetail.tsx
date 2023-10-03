import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import {  Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import {  Check } from '@mui/icons-material';

const columns = ['fecha', 'importe', 'concepto', 'conciliar'];

const CustomTable = ({ title, rows, setRows, isDarkMode }: any) => {
    const [conceptoOptions] = useState(['Opción 1', 'Opción 2', 'Opción 3']);
    const isSmallScreen = useMediaQuery('(max-width: 1200px)');

    const handleAddRow = () => {
        const newRow = { fecha: '', concepto: '', importe: '', conciliar: false };
        setRows([...rows, newRow]);
    };

    const handleInputChange = (e: any, rowIndex: any, fieldName: any) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex][fieldName] = e.target.value;
        setRows(updatedRows);
    };

    const handleCheckboxChange = (e: any, rowIndex: any) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex].conciliar = e.target.checked;
        setRows(updatedRows);
    };

    const StyledSelect = styled(Select)({
        width: '70%',
    });

    const StyledSmallTextField = styled(TextField)({
        width: '100%', // Ajusta el ancho para que ocupe toda la celda
    });

    return (
        <Card variant="outlined" style={{ marginBottom: '20px', backgroundColor: isDarkMode ? '#1a1a1a' : '' }}>
            <CardContent>
                <Typography variant="h6" align={'left'} color="textPrimary" gutterBottom>
                    {title}
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column}>
                                        {column === 'concepto' ? 'Concepto' : column.charAt(0).toUpperCase() + column.slice(1)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row: any, rowIndex: any) => (
                                <TableRow key={rowIndex}>
                                    {columns.map((column) => (
                                        <TableCell key={column}>
                                            {isSmallScreen ? (
                                                <div>
                                                    {column === 'fecha' ? (
                                                        <StyledSmallTextField
                                                            variant="outlined"
                                                            fullWidth
                                                            type="date"
                                                            label="Fecha"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            value={row[column]}
                                                            onChange={(e: any) => handleInputChange(e, rowIndex, column)}
                                                        />
                                                    ) : column === 'importe' ? (
                                                        <StyledSmallTextField
                                                            variant="outlined"
                                                            fullWidth
                                                            type="number"
                                                            label="Importe"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            value={row[column]}
                                                            onChange={(e: any) => handleInputChange(e, rowIndex, column)}
                                                        />
                                                    ) : column === 'concepto' ? (
                                                        <StyledSelect
                                                            variant="outlined"
                                                            fullWidth
                                                            value={row[column]}
                                                            onChange={(e: any) => handleInputChange(e, rowIndex, column)}
                                                        >
                                                            {conceptoOptions.map((option) => (
                                                                <MenuItem key={option} value={option}>
                                                                    {option}
                                                                </MenuItem>
                                                            ))}
                                                        </StyledSelect>
                                                    ) : column === 'conciliar' ? (
                                                        <Checkbox
                                                            checked={row[column]}
                                                            onChange={(e) => handleCheckboxChange(e, rowIndex)}
                                                        />
                                                    ) : (
                                                        ''
                                                    )}
                                                </div>
                                            ) : (
                                                <div>
                                                    {column === 'fecha' ? (
                                                        <StyledSmallTextField
                                                            variant="outlined"
                                                            fullWidth
                                                            type="date"
                                                            label="Fecha"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            value={row[column]}
                                                            onChange={(e: any) => handleInputChange(e, rowIndex, column)}
                                                        />
                                                    ) : column === 'importe' ? (
                                                        <StyledSmallTextField
                                                            variant="outlined"
                                                            fullWidth
                                                            type="number"
                                                            label="Importe"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            value={row[column]}
                                                            onChange={(e: any) => handleInputChange(e, rowIndex, column)}
                                                        />
                                                    ) : column === 'concepto' ? (
                                                        <StyledSelect
                                                            variant="outlined"
                                                            fullWidth
                                                            value={row[column]}
                                                            onChange={(e: any) => handleInputChange(e, rowIndex, column)}
                                                        >
                                                            {conceptoOptions.map((option) => (
                                                                <MenuItem key={option} value={option}>
                                                                    {option}
                                                                </MenuItem>
                                                            ))}
                                                        </StyledSelect>
                                                    ) : column === 'conciliar' ? (
                                                        <Checkbox
                                                            checked={row[column]}
                                                            onChange={(e) => handleCheckboxChange(e, rowIndex)}
                                                        />
                                                    ) : (
                                                        ''
                                                    )}
                                                </div>
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <IconButton color="primary" onClick={handleAddRow}>
                    <AddIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
};

const ReconciliationDetail = ({ theme }: any) => {
    const [table1Rows, setTable1Rows] = useState([]);
    const [table2Rows, setTable2Rows] = useState([]);
    const [table3Rows, setTable3Rows] = useState([]);
    const [table4Rows, setTable4Rows] = useState([]);
    const isDarkMode: boolean = theme.palette.mode === 'dark';
    const isLargeScreen = useMediaQuery('(min-width: 1200px)');
    const bankAmount = 1000; // Reemplaza esto con tu valor real
    const bookValues = 500; // Reemplaza esto con tu valor real

    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                <Typography variant="h4" align={'left'} color="textPrimary" gutterBottom>
                    Detalle de Conciliación Bancaria
                </Typography>
            </div>
            <Card variant="outlined" style={{ marginBottom: '20px', backgroundColor: isDarkMode ? '#1a1a1a' : '', marginTop: '2rem' }}>
                <CardContent>
                    {isLargeScreen ? (
                        <Grid container spacing={2} justifyContent="flex-end">
                            <Grid item xs={3}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    type="date"
                                    label="Fecha Inicial"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    type="date"
                                    label="Fecha Final"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel id="cuenta-label">Selecciona la cuenta</InputLabel>
                                    <Select
                                        labelId="cuenta-label"
                                        label="Selecciona la cuenta"
                                    >
                                        <MenuItem value={'Cuenta 1'}>Cuenta 1</MenuItem>
                                        <MenuItem value={'Cuenta 2'}>Cuenta 2</MenuItem>
                                        <MenuItem value={'Cuenta 3'}>Cuenta 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    ) : (
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    type="date"
                                    label="Fecha Inicial"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    type="date"
                                    label="Fecha Final"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel id="cuenta-label">Selecciona la cuenta</InputLabel>
                                    <Select
                                        labelId="cuenta-label"
                                        label="Selecciona la cuenta"
                                    >
                                        <MenuItem value={'Cuenta 1'}>Cuenta 1</MenuItem>
                                        <MenuItem value={'Cuenta 2'}>Cuenta 2</MenuItem>
                                        <MenuItem value={'Cuenta 3'}>Cuenta 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    )}
                    <Grid container spacing={2} sx={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                        <Grid item xs={3}>
                            <Typography variant="body1" gutterBottom>
                                Saldo según banco:
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body1" gutterBottom>
                                {bankAmount}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <CustomTable title="(+) Cargos del Banco no correspondidos por la Empresa" rows={table1Rows} setRows={setTable1Rows} isDarkMode={isDarkMode} />
            <CustomTable title="(+) Cargos de la Empresa no correspondidos por el Banco" rows={table2Rows} setRows={setTable2Rows} isDarkMode={isDarkMode} />
            <CustomTable title="(-) Abonos del Banco no correspondidos por la Empresa" rows={table3Rows} setRows={setTable3Rows} isDarkMode={isDarkMode} />
            <CustomTable title="(-) Abonos de la Empresa no correspondidos por el Banco" rows={table4Rows} setRows={setTable4Rows} isDarkMode={isDarkMode} />
            <Card variant="outlined" style={{ marginBottom: '20px', backgroundColor: isDarkMode ? '#1a1a1a' : '' }}>
                <CardContent>
                    <div>
                    <Grid container spacing={2} sx={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'end', marginBottom: '1rem' }}>
                        <Grid item xs={3}>
                            <Typography variant="body1" gutterBottom>
                            Saldos según libros:
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body1" gutterBottom>
                                {bookValues}
                            </Typography>
                        </Grid>
                    </Grid>
                       
                        <div>
                            <Button variant="contained"
                                startIcon={<Check />}>Realizar Conciliación</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ReconciliationDetail;
