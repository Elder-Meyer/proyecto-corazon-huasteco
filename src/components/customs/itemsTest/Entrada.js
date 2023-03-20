import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const Entrada = () => {

    const options = ['Opción 1', 'Opción 2', 'Opción 3', 'Esta opción es mas laaaarga'];

  return (
    <div className='entrada'>
        <Autocomplete size='small' style={{margin: "10px"}}
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="Input" />}
            />
    </div>
  )
}
