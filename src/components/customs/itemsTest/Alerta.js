import React from 'react'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const Alerta = () => {
  return (
    <div style={{margin: "10px"}}>
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
        <Alert
            action={
            <Button color="inherit" size="small">
                UNDO
            </Button>
            }
        >
            This is a success alert — check it out!
        </Alert>
        </Stack>
    </div>
  )
}
