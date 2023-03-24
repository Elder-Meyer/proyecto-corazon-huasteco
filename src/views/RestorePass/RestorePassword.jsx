import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute'
import { Bread } from '../../components/customs/Bread';
import { Button, Container, Grid, Paper, Box, Typography, TextField, Collapse, Divider } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Form } from "semantic-ui-react"
import imgLogo from "../../assets/img/imgLogoHuejutla.png"

import { usePassword } from '../../context/UsePassword';
import { db } from '../../config/firebase/firebaseDB'
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const RestorePassword = () => {
    //obtener el dato del correo
    const [textFieldValue, setTextFieldValue] = useState("");
    const [res, setRes] = useState("");
    const [estado, setEstado] = useState(true);
    const [validar, setValidar] = useState(true);
    const [pregunta, setPregunta] = useState(false);
    const [nuevo, setNuevo] = useState(false);
    const [data, setData] = useState([]);
    const [fieldValue, setFieldValue] = useState('');

    const handleButtonClick = async (e) => {

        e.preventDefault();
        if (!setTextFieldValue) {
            setVariant("warning");
            setError("Porfavor ingresa un correo electrónico");
            setSnackbarOpen(true);
            return
        }
        try {
            console.log(textFieldValue);
            const referencia = doc(db, `usuarios_correo/${textFieldValue}`)
            const docSnap = await getDoc(referencia);
            if (docSnap.exists()) {
                getDoc(referencia)
                    //.then(res => console.log(res.data()))
                    .then(res => setData(res.data()))
                setVariant("info");

                // setData=docSnap.data();
                setError("El correo electronico introducido existe en el servidor");
                setSnackbarOpen(true);
                setValidar(false);
                setPregunta(true);
                // Use a City instance method
            } else {
                setVariant("error");
                setError("El correo electronico introducido no existe en el servidor");
                setSnackbarOpen(true);
            }
        } catch (error) {
            setVariant("warning");
            setError("Porfavor ingresa un correo electrónico");
            setSnackbarOpen(true);
        }
    };



    const validarPregunta = async (e) => {
        e.preventDefault();
        if (!res) {
            setVariant("warning");
            setError("Porfavor ingresa una respuesta");
            setSnackbarOpen(true);
            return
        } else if (data.secretQuestionAnswer === res) {
            setVariant("success");
            setError("Respuesta correcta");
            setSnackbarOpen(true);
            setPregunta(false);
            setNuevo(true);
        } else {
            setVariant("error");
            setError("Respuesta incorrecta");
            setSnackbarOpen(true);

        }

    };
    const cambiarEstado = () => {
        setEstado(!estado)
        setNuevo(false);
        setPregunta(false);
        setValidar(true);
        setTextFieldValue("");
        setRes("");
        setFieldValue("");
    };



    const handleUpdate = async (e) => {
        e.preventDefault();
        const documentRef = doc(db, `usuarios_correo/${textFieldValue}`);
        if (!fieldValue) {
            setVariant("warning");
            setError("Introduce el puevo password");
            setSnackbarOpen(true);
            return
        }
        try {
            setVariant("success");
            await updateDoc(documentRef, {
                password: fieldValue
            });
            setError("Datos guardados correctamente");
            setSnackbarOpen(true);
            cambiarEstado();
            

        } catch (error) {
            setVariant("error");
            setError("No se pudo guardar el correo");
            setSnackbarOpen(true);
        }
    }

    // muestra la contraseña
    // eslint-disable-next-line
    const [showPassword, handleClickShowPassword] = usePassword(false);
    // captura de errores
    const [error, setError] = useState("");

    

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { resetPassword } = useAuth();
    const [variant, setVariant] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);


    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) {
            setVariant("warning");
            setError("Porfavor ingresa un correo electrónico");
            setSnackbarOpen(true);
            return
        }
        try {
            setVariant("success");
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
            <Bread migas={[{ miga: "INICIO", ruta: "/inicio" }, { miga: "ACCESO", ruta: "/acceso" }, { miga: "RESTAURAR CONTRASEÑA", ruta: "/acceso/restaurar-pass" }]} />

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
                        <Paper elevation={3} sx={{ p: { md: 5, sm: 4, xs: 3 }, mb: 3 }}>
                            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                                <img src={imgLogo} alt="logo" width="100vw" />
                            </Box>

                            <Typography textAlign="center" variant="h5" component="p" gutterBottom color="primary.main">
                                Restaurar contraseña
                            </Typography>
                            <Collapse in={validar}>
                                <Typography textAlign="center" variant="body2" component="p" gutterBottom color="primary.main" sx={{ mb: 2 }}>
                                    Ingresa tu correo para recuperar tu cuenta
                                </Typography>
                            </Collapse>

                            <Box
                                sx={{
                                    '& > :not(style)': { my: { md: 1, sm: 0.75, xs: 0.50 } },
                                }}
                            >
                                <Collapse in={estado}>

                                    <TextField
                                        fullWidth
                                        label="Correo electronico fire"
                                        type='email'
                                        name="email"
                                        id="email"
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    <Button sx={{ mt: 1 }} fullWidth variant="contained" onClick={handleResetPassword}>
                                        Enviar
                                    </Button>
                                </Collapse>
                                <Collapse in={validar}>
                                    <Collapse in={!estado}>

                                        <TextField
                                            fullWidth
                                            label="Correo electronico pregunta"
                                            type='email1'
                                            name="email1"
                                            id="email1"
                                            value={textFieldValue || ""}
                                            onChange={(e) => setTextFieldValue(e.target.value)}
                                            autoComplete="off"
                                        />
                                        <Button sx={{ mt: 1 }} type='submit' fullWidth variant="contained" onClick={handleButtonClick}>
                                            Validar
                                        </Button>
                                    </Collapse>

                                </Collapse>



                                <Collapse in={pregunta}>
                                    <Box
                                        sx={{
                                            '& > :not(style)': { my: { md: 1, sm: 0.75, xs: 0.50 } },
                                        }}
                                    >
                                        {/* Pregunta secreta */}
                                        <Typography textAlign="center" variant="body2" component="p" gutterBottom color="primary.main" sx={{ mb: 2 }}>
                                            Introduce tu respuesta a la pregunta secreta
                                        </Typography>
                                        <TextField component={Form.Input}
                                            fullWidth
                                            type='text'
                                            name="secretQuestion"
                                            value={data.secretQuestion || "Pregunta secreta"}
                                            autoComplete="off"
                                        />

                                        {/* Respuesta a pregunta */}
                                        <TextField component={Form.Input}
                                            fullWidth
                                            label="Respuesta de la pregunta secreta"
                                            type={showPassword ? 'text' : 'passwordPregunta'}
                                            name="secretQuestionAnswer"
                                            onChange={(e) => setRes(e.target.value)}
                                            value={res}
                                            //error={formik.errors.passwordPregunta ? true : false}
                                            //helperText={formik.errors.passwordPregunta}
                                            //value={formik.values.passwordPregunta} no deja poner respuesta
                                            autoComplete="off"
                                        />

                                        <Button type='submit' variant="contained" fullWidth onClick={validarPregunta}>
                                            Validar
                                        </Button>

                                    </Box>
                                </Collapse>
                                <Collapse in={nuevo}>
                                    <Box
                                        sx={{
                                            '& > :not(style)': { my: { md: 1, sm: 0.75, xs: 0.50 } },
                                        }}
                                    >
                                        {/* CONTRASEÑA */}
                                        <Typography textAlign="center" variant="body2" component="p" gutterBottom color="primary.main" sx={{ mb: 2 }}>
                                            Introduce tu nueva contraseña
                                        </Typography>




                                        <TextField
                                            fullWidth
                                            label="Contraseña"
                                            // type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={fieldValue}
                                            onChange={(e) => setFieldValue(e.target.value)}
                                            //error={formik.errors.password ? true : false}
                                            //helperText={formik.errors.password}
                                            autoComplete="off"
                                        />


                                        <Grid  >
                                            <Button type='submit' fullWidth variant="contained" onClick={handleUpdate}>
                                                Validar
                                            </Button>
                                        </Grid>



                                    </Box>
                                </Collapse>

                                <Collapse in={validar}>
                                    <Divider>o</Divider>
                                </Collapse>

                                <Button variant="contained" fullWidth onClick={cambiarEstado}>
                                    {estado ? "Pregunta secreta" : "Correo"}
                                </Button>

                            </Box>
                        </Paper>
                    </Container>
                </Grid>
            </Grid>
        </WrapperSingleRoute>
    )
}
