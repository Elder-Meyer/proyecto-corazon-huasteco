import React from 'react'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import AbcIcon from '@mui/icons-material/Abc';

export const Boton = () => {
  return (
    <div className='boton'>
        <Button style={{margin: "10px"}} color="secondary" variant="text">Text</Button>
        <Button style={{margin: "10px"}} variant="contained">Contained</Button>
        <Button style={{margin: "10px"}} variant="outlined">Outlined</Button>
        <Button style={{margin: "10px"}} variant='contained' size='small' href="https://www.google.com/">Google</Button>
        <Button style={{margin: "10px"}} variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>

        <Button>
          <AbcIcon/>
        </Button>
        
    </div>
  )
}
