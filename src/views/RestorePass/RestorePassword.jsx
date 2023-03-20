import React, {useState} from 'react'
import { useAuth } from '../../context/AuthContext'
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute'
import { Bread } from '../../components/customs/Bread';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


import imgLogo from "../../assets/img/imgLogoHuejutla.png"


export const RestorePassword = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [variant, setVariant] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);


    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email){ 
            setVariant("warning");
            setError("Porfavor ingresa un correo electrónico");
            setSnackbarOpen(true);
            return
        }
        try {
            setVariant("info");
            await resetPassword(user.email);
            setError("Revisa tu correo para restaurar tu contraseña");
            setSnackbarOpen(true);
        } catch (error) {
            setVariant("error");
            setError("El correo electronico introducido no existe en el servidor");
            setSnackbarOpen(true);
        }
    };

    

  return (
    <WrapperSingleRoute>
        {/* Breadcrumbs */}
        <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "ACCESO", ruta: "/acceso"}, {miga: "RESTAURAR CONTRASEÑA", ruta: "/acceso/restaurar-pass"}]}/>

        {/* Contenido */}
        <Snackbar
            open={snackbarOpen}
            autoHideDuration={4000}
            onClose={() => setSnackbarOpen(false)}
            anchorOrigin={{ vertical: 'top', horizontal: "center" }}

        >
            <MuiAlert elevation={6} variant="filled" severity={variant ? variant : "info"}>
                {error}
            </MuiAlert>
        </Snackbar>

        
        <Grid container spacing={1}>
            <Grid item xs>
                <Container maxWidth="xs" >
                    <Paper elevation={3} sx={{p:{md:7, sm:5, xs:3}}}>
                    <Box sx={{display: "flex", justifyContent: "center", mb:3}}>
                        <img src={imgLogo} alt="logo" width="100vw"/>
                    </Box>

                        <Typography textAlign="center" variant="h5" component="p" gutterBottom color="primary.main">
                            Restaurar contraseña
                        </Typography>
                        <Typography textAlign="center" variant="body2" component="p" gutterBottom color="primary.main" sx={{mb:2}}>
                            Ingresa tu correo para recuperar tu cuenta
                        </Typography>
                        <Box
                            sx={{
                                '& > :not(style)': { my:{md:1, sm:0.75, xs:0.50} }
                            }}
                        >
                            <TextField
                                fullWidth
                                label="Correo electronico"
                                type='email' 
                                name="email" 
                                id="email"
                                onChange={handleChange} 
                                autoComplete="off"
                            />
                            <Button variant="contained" onClick={handleResetPassword}>Enviar</Button>
                        </Box>
                    </Paper>
                </Container>
            </Grid>
        </Grid>
        
        
    </WrapperSingleRoute>
  )
}
