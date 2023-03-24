import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts({message}) {
  return (
    <Stack  spacing={2}>
      <Alert severity="error">{message}</Alert>
    </Stack>
  );
}