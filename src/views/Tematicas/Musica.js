import React from 'react'
//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../App/firebase';
// import { perf } from '../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'

import { Box} from '@mui/material'
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread } from '../../components/customs/Bread';

export const Musica = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina musica');
    
  //   const t = trace(perf, "test_trace");
  //   t.putAttribute("experiment", "A");
  // }, []); 

  return (
    <WrapperSingleRoute>
      <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "TEMATICAS", ruta: "/tematicas"},{miga: "MÚSICA", ruta: "/tematicas/musica"}]}/>
      <Box sx={{margin: "15px"}}>
        <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
          Contenido de música
        </Box>
      </Box>
    </WrapperSingleRoute>
  )
}

