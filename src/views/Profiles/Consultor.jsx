import { Button, Typography } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleBackdrop from '../../components/customs/SimpleBackDrop';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute'
import {useAuth} from "../../context/AuthContext"

export const Consultor = () => {
  const {logout, user} = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  console.log(user.uid);
  
  
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
      <Typography textAlign="center" variant='h4'>Esta es la vista del Usuario Común</Typography>
      <Typography textAlign="center" variant='h4'>Hola {user.displayName}</Typography>
      <Typography textAlign="center" variant='h4'>Hola {user.email}</Typography>
      <Button variant='contained'>Hola {user.name}</Button>

      <Button onClick={handleLogout} variant="contained">Cerrar sesión</Button>
    </WrapperSingleRoute>
  )
}
