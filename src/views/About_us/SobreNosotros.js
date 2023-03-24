import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import imgAus from "../../assets/img/imgSobreNosotros.jpg"


//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../App/firebase';
// import { perf } from '../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'

// colores personalizados
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Grid } from '@mui/material';
import { ItemListCard } from '../../components/customs/ItemListCard';
import { Bread } from '../../components/customs/Bread';


export const SobreNosotros = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina sobrenosotros');
    
  //   const t = trace(perf, "test_trace");
  //   t.putAttribute("experiment", "A");
  // }, []);

  return (
    <WrapperSingleRoute>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "SOBRE NOSOTROS", ruta: "/sobre-nosotros"}]}/>

      {/* Titulo */}
      <Grid container spacing={1}>
        <Grid item xs>
          <Typography variant="h4" color="initial" sx={{textAlign: "center"}}>Sobre Nosotros</Typography>
        </Grid>
      </Grid>

      {/* Contenido */}
      <Grid container spacing={1}>
        {/* Imagen */}
        <Grid item xs={12} md={6}>
          {/* Imagen */}
          <ItemListCard 
            showContent={false} 
            img={imgAus}
          />
        </Grid>
        
        {/* Texto */}
        <Grid item xs={12} md={6}>
          <Box sx={{m:5}}>
            <Typography variant="subtitle1">
            Somos una empresa encargada de la difusión de la cultura de Huejutla de Reyes Hidalgo que es denominada como el corazón de la huasteca Hidalguense. 
            </Typography>
            <Typography variant="subtitle1">
            Esta empresa esta respaldada con información proporcionada por instituciones certificados en la transmisión de la cultura como la casa de la cultura y instituciones particulares dedicadas a la historia.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </WrapperSingleRoute>
  )
}
