import React, {useState} from 'react'
// material components
import { Button, Container, Grid, Paper, Box, Typography, TextField, MenuItem,IconButton, InputAdornment} from '@mui/material';
import VisibilityOff    from '@mui/icons-material/VisibilityOff';
import Visibility       from '@mui/icons-material/Visibility';
import LoginIcon        from '@mui/icons-material/Login';
import DeleteIcon       from '@mui/icons-material/Delete';
// react router components
import { Link }         from 'react-router-dom';
// semantic ui
import {Form}           from "semantic-ui-react"
// show pass hook
import { usePassword, handleMouseDownPassword } from '../../context/UsePassword';
// form logic  validation
import { useFormikConfig } from './useFormikConfig';
// aditional components
import BasicAlerts      from '../../components/customs/BasicAlerts';
import SimpleBackdrop   from '../../components/customs/SimpleBackDrop';
// options
import {sexos, tipos, secreta}   from "./optionListRegistro"



export const FormRegistro = () => {
    // muestra la contraseña
    const [showPassword, handleClickShowPassword] = usePassword(false);
    // captura de errores
    const [error, setError] = useState("");
    // loading animation
    const [open, setOpen] = useState(false);
    
    //   validaciones               -- con muestra de errores y estado de carga
    const formik = useFormikConfig({ setError, open, setOpen })

  return (
    <Container maxWidth="sm">
        <Paper sx={{p:2}} elevation={0}>
            <Typography variant="h5" color="primary.dark" sx={{textAlign: "center", margin: "15px 0"}}>
                Crea una cuenta nueva
            </Typography>
            <SimpleBackdrop open={open} />
            {error && <BasicAlerts message={error} />}
            <Box component={Form} onSubmit={formik.handleSubmit} 
                sx={{
                    '& > :not(style)': { my:{md:1, sm:0.75, xs:0.50} }
                }}
            >
                {/* NOMBRE */}
                <TextField component={Form.Input} 
                    fullWidth
                    label="Nombre(s)"
                    type='text' 
                    name="name" 
                    onChange={formik.handleChange} 
                    error={formik.errors.name ? true : false}
                    helperText={formik.errors.name}
                    value={formik.values.name}
                    autoComplete="off"
                />

                {/* APELLIDOS */}
                <TextField component={Form.Input} 
                    fullWidth
                    label="Apellidos"
                    type='text' 
                    name="lastName" 
                    onChange={formik.handleChange} 
                    error={formik.errors.lastName ? true : false}
                    helperText={formik.errors.lastName}
                    value={formik.values.lastName}
                    autoComplete="off"
                />

                {/* EDAD Y SEXO */}
                <Grid container spacing={1}>
                    <Grid item md={6} sm={6} xs={12} >
                        {/* EDAD */}
                        <TextField component={Form.Input} 
                            fullWidth
                            label="Edad"
                            type='text' 
                            name="age" 
                            onChange={formik.handleChange} 
                            error={formik.errors.age ? true : false}
                            helperText={formik.errors.age}
                            value={formik.values.age}
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        {/* SEXO */}
                        <TextField component={Form.Input} 
                            fullWidth
                            select
                            label="Sexo"
                            type='text' 
                            name="gender" 
                            onChange={formik.handleChange} 
                            error={formik.errors.gender ? true : false}
                            helperText={formik.errors.gender}
                            value={formik.values.gender}
                            autoComplete="off"
                        >
                            {sexos.map((sexo) => (
                            <MenuItem key={sexo.value} value={sexo.value}>
                                {sexo.label}
                            </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>        

                {/* OCUPACIÓN Y CP */}
                <Grid container spacing={1}>
                    <Grid item md={6} sm={6} xs={12} >
                        {/* OCUPACION */}
                        <TextField component={Form.Input} 
                            fullWidth
                            select
                            label="Ocupación"
                            type='text' 
                            name="occupation" 
                            onChange={formik.handleChange} 
                            error={formik.errors.occupation ? true : false}
                            helperText={formik.errors.occupation}
                            value={formik.values.occupation}
                            autoComplete="off"
                        >
                            {tipos.map((tipo) => (
                            <MenuItem key={tipo.value} value={tipo.value}>
                                {tipo.label}
                            </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        {/* CODIGO POSTAL */}
                        <TextField component={Form.Input} 
                            fullWidth
                            label="Código postal"
                            type='text' 
                            name="zipCode" 
                            onChange={formik.handleChange} 
                            error={formik.errors.zipCode ? true : false}
                            helperText={formik.errors.zipCode}
                            value={formik.values.zipCode}
                            autoComplete="off"
                        />
                    </Grid>
                </Grid>
            
                {/* CORREO */}
                <TextField component={Form.Input}
                    fullWidth
                    label="Correo electronico"
                    type='text' 
                    name="email" 
                    onChange={formik.handleChange} 
                    error={formik.errors.email ? true : false}
                    helperText={formik.errors.email}
                    value={formik.values.email}
                    autoComplete="off"
                />
                
                {/* CONTRASEÑA */}
                <TextField component={Form.Input}
                    fullWidth
                    label="Contraseña"
                    type={showPassword ? 'text' : 'password'}
                    name="password" 
                    onChange={formik.handleChange} 
                    error={formik.errors.password ? true : false}
                    helperText={formik.errors.password}
                    value={formik.values.password}
                    autoComplete="off"
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        )
                    }}
                />
                
                {/* REPETIR CONTRASEÑA */}
                <TextField component={Form.Input} 
                    fullWidth
                    label="Repetir contraseña"
                    type={showPassword ? 'text' : 'password'}
                    name="repeatPassword" 
                    onChange={formik.handleChange} 
                    error={formik.errors.repeatPassword ? true : false}
                    helperText={formik.errors.repeatPassword}
                    value={formik.values.repeatPassword}
                    autoComplete="off"
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        )
                    }}
                />

                {/* Pregunta secreta */}
                <TextField component={Form.Input} 
                    fullWidth
                    select
                    label="Pregunta secreta de recuperación de contraseña"
                    type='text' 
                    name="secretQuestion" 
                    onChange={formik.handleChange} 
                    error={formik.errors.secretQuestion ? true : false}
                    helperText={formik.errors.secretQuestion}
                    value={formik.values.secretQuestion}
                    autoComplete="off"
                >
                    {secreta.map((secreta) => (
                    <MenuItem key={secreta.value} value={secreta.value}>
                        {secreta.label}
                    </MenuItem>
                    ))}
                </TextField>

                {/* Respuesta a pregunta */}
                <TextField component={Form.Input}
                    fullWidth
                    label="Respuesta de la pregunta secreta"
                    type={showPassword ? 'text' : 'password'}
                    name="secretQuestionAnswer" 
                    onChange={formik.handleChange} 
                    error={formik.errors.secretQuestionAnswer ? true : false}
                    helperText={formik.errors.secretQuestionAnswer}
                    value={formik.values.secretQuestionAnswer}
                    autoComplete="off"
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        )
                    }}
                />             

                {/* BOTONES */}
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6} >
                        <Button type='submit' fullWidth variant="contained" endIcon={<LoginIcon/>}>
                        Registro
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Button type='button' fullWidth variant="outlined" onClick={formik.handleReset} endIcon={<DeleteIcon/>}>
                        Limpiar 
                        </Button>
                    </Grid>
                </Grid>
            
                {/* enlaces */}
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Typography textAlign="center" variant='body1'>
                        ¿Tienes cuenta? <Link to="/acceso">inicia sesión</Link> 
                        </Typography>
                    </Grid>
                </Grid>

            </Box>
        </Paper>
    </Container>
  )
}
