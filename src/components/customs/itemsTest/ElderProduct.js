import styled from '@emotion/styled'
import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

export const ElderProduct = () => {

    const Img = styled("img")({
        width: "200px",
        height: "200px",
        objectFit: "cover",
        objectPosition: "center"
    })

  return (
    <Paper
        sx = {{
            display: "flex",
            alignItems: "center",
            gap: 2,
            overflow: "hidden",
            mt: 5,
        }}
    >   
        <Img 
            src="https://www.purina-latam.com/sites/default/files/purina-brand-13-datos-curiosos-sobre-los-gatos.jpg" 
            alt="una imagen" 
        />
        <Box sx={{flexGrow: 1, display: "grid", gap: 4}}>
            <Typography variant='h4'>Product name</Typography>
            <Typography variant='body1'>Product description</Typography>
            <Button variant='contained'>Add cart</Button>
        </Box>
        <Box 
            sx={{mr: 2}}
            component='p'
        >
            $19.99
        </Box>
    </Paper>
  )
}
