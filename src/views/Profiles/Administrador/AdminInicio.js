import { Box } from '@mui/material'
import React from 'react'
import { AreaChart } from './AreaChart'
import { DoughnutChart } from './DoughnutChart'
import { Grafico } from './Grafico'
import { PieChart } from './PieChart'

export const AdminInicio = () => {
  return (
    <Box>
      <Box sx={{width: "100%", display: "flex", justifyContent: "center", alignContent: "center"}}>
        <Grafico />
      </Box>


      <Box sx={{width: "60vw", display: "flex", justifyContent: "center", alignContent: "center"}}>
        <AreaChart/>
      </Box>

      <Box sx={{width: "20vw", display: "flex", justifyContent: "center", alignContent: "center"}}>
        <PieChart/>
      </Box>

      <Box sx={{width: "20vw", display: "flex", justifyContent: "center", alignContent: "center"}}>
        <DoughnutChart/>
      </Box>
    </Box>
  )
}
