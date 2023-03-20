import React from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const Esqueleto = () => {
  return (
    <div style={{margin: "10px"}}>
        <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        </Box>
    </div>
  )
}
