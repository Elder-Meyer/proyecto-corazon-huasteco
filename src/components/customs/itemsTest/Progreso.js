import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Progreso = () => {
  return (
    <div>
        <Box style={{margin: "10px"}} sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    </div>
  )
}
