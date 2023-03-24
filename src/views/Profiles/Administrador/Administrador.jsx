import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SimpleBackdrop from '../../../components/customs/SimpleBackDrop'
import { WrapperSingleRoute } from '../../../components/customs/WrapperSingleRoute'
import { useAuth } from '../../../context/AuthContext'
import VerticalTabs from './VerticalTabs'


export const Administrador = () => {
  const {logout, user} = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  console.log("vista supervisor: id del usuario =>", user.uid);
  
  
  const handleLogout = async() => {
    try{
      setOpen(true);
      await logout();
      navigate('/');
      setOpen(false);
    }catch(error){
      setOpen(true);
      console.log(error.message);
      setOpen(false);
    }
  }

  return (
    <WrapperSingleRoute>
      <SimpleBackdrop open={open}/>
      <img src={user.photoURL} alt="perfil"/>
      <Typography textAlign="center" variant='h4'>Esta es la vista del Usuario Supervisor</Typography>
      <Typography textAlign="center" variant='h4'>Hola {user.displayName}</Typography>
      <Typography textAlign="center" variant='h4'>Hola {user.email}</Typography>
      <Button onClick={handleLogout} variant="contained">Cerrar sesión</Button>

      <Grid container  p={1}>
        <Grid item xs >
          <VerticalTabs/>
        </Grid>
        
      </Grid>
    </WrapperSingleRoute>
  )
}
