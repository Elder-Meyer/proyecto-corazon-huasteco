import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const ElderCard = () => {
  return (
    <Card
        sx={{
            transition: "0.2s",
            "&:hover": {
                transform: "scale(1.05)",
            }
        }}
    >
        <CardActionArea>
            <CardMedia 
            component="img"
            image='https://via.placeholder.com/1000x200'
            height="200px"
            alt='una imgagen'
            />
            
            <CardContent>
                <Typography variant='h5'>Card title</Typography>
                <Typography variant='body2' component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in consectetur turpis. Donec tristique ullamcorper sem, eu dignissim nisi lobortis non. Aenean sodales nibh quis leo faucibus feugiat id id turpis. Vivamus commodo consectetur pulvinar. Nullam condimentum pellentesque neque, quis tempus enim tincidunt vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam at urna sed elit consectetur pulvinar. Curabitur vel eros in ex dictum accumsan.
                </Typography>
            </CardContent>
        </CardActionArea>
        
        <CardActions>
            <Button variant="contained">ADD</Button>
            <Button color="error">Remove</Button>
        </CardActions>

    </Card>
  )
}
