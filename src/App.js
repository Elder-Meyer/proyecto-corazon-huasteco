import React from "react";
import { Router } from "./routes/Router";
import {Box, ThemeProvider} from '@mui/material';
import {themeMui} from './styles/ThemeMui';

function App() {
  return (
    <Box>
      <ThemeProvider theme={themeMui}>
       <Router/>
      </ThemeProvider>
    </Box>
  );
}

export default App;
