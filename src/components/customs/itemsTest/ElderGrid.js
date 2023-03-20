import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { ElderCard } from './ElderCard'
import { ElderProduct } from './ElderProduct'


import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const ElderGrid = () => {
  return (
    <>
        <Box sx={{border: "4px solid red"}} component="form">
          Hola buenos dias 
        </Box>
        <Typography>
          A continuacion va otro grid
        </Typography>

        <Box sx={{ flexGrow: 1, border: "5px solid blue" }}>
          <Grid container spacing={0} sx={{border: "5px solid green"}}>
            <Grid item xs={8} sx={{border: "5px solid orange"}}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={4} sx={{border: "5px solid orange"}}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4} sx={{border: "5px solid orange"}}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={8} sx={{border: "5px solid orange"}}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={5}>
          <Grid 
            item
            xs={12}
            sm={6}
            md={4}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in consectetur turpis. Donec tristique ullamcorper sem, eu dignissim nisi lobortis non. Aenean sodales nibh quis leo faucibus feugiat id id turpis. Vivamus commodo consectetur pulvinar. Nullam condimentum pellentesque neque, quis tempus enim tincidunt vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam at urna sed elit consectetur pulvinar. Curabitur vel eros in ex dictum accumsan.</p>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in consectetur turpis. Donec tristique ullamcorper sem, eu dignissim nisi lobortis non. Aenean sodales nibh quis leo faucibus feugiat id id turpis. Vivamus commodo consectetur pulvinar. Nullam condimentum pellentesque neque, quis tempus enim tincidunt vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam at urna sed elit consectetur pulvinar. Curabitur vel eros in ex dictum accumsan.</p>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in consectetur turpis. Donec tristique ullamcorper sem, eu dignissim nisi lobortis non. Aenean sodales nibh quis leo faucibus feugiat id id turpis. Vivamus commodo consectetur pulvinar. Nullam condimentum pellentesque neque, quis tempus enim tincidunt vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam at urna sed elit consectetur pulvinar. Curabitur vel eros in ex dictum accumsan.</p>
          </Grid>
        </Grid>

        <ElderProduct/>

        <ElderCard/>
    </>
  )
}
