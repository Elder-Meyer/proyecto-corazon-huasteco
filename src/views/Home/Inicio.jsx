import React from 'react'
import Box from '@mui/material/Box';
import {WraperCarousel} from './Inicio.elements'
import { ElementCarousel } from './ElementCarrousel';
import { Link } from 'react-router-dom';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import MapIcon from '@mui/icons-material/Map';
import Typography from '@mui/material/Typography'
import { Grid, Paper } from '@mui/material';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';




//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../../App/firebase';
// import { perf } from '../../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'

export const Inicio = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina inicio');
    
  //   const t = trace(perf, "test_trace");
  //   t.putAttribute("experiment", "A");
  // }, []);

  return (
    <WrapperSingleRoute>
      <Box sx={{ textAlign: "center", padding: "15px 0"}}>
        <Box sx={{bgcolor: 'secondary.main', borderRadius: "50px", display: "inline-flex"}}>
          <Box sx={{bgcolor: "background.default", padding: "7px 14px", borderRadius: "50px", borderColor: "secondary.main", borderStyle: "solid"}}>
            <Typography color="primary">
              Carrusel <ViewCarouselIcon/>
            </Typography>
          </Box>
          <Box sx={{color: "red", padding: "7px 14px", borderRadius: "50px"}}>  
            <Typography component={Link} to="/mapa" sx={{textDecoration: "none", color: "background.default", '&:hover':{color: "background.paper"}}}>
              Mapa <MapIcon/>
            </Typography>
          </Box>
        </Box>
      </Box>

      <WraperCarousel>
        <ElementCarousel/>
      </WraperCarousel>

      <Grid container >
        <Grid item md={6} xs={12}>
          <Paper sx={{p:{xs:2, sm:3, md:5}, m:{xs:1, sm:3, md: 5}, bgcolor: "background.default"}} elevation={1} >
            <Typography variant='subtitle1' component="p" >
              El municipio de Huejutla de Reyes Hidalgo, deriva su nombre de las raíces nahuatlhuexotl (sauces) y tlan lugar que significa lugar donde abundan los sauces.
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper sx={{p:{xs:2, sm:3, md:5}, m:{xs:1, sm:3, md: 5}, bgcolor: "background.default"}} elevation={1}>
            <Typography variant='body1' component="p" >
              Hablar de Huejutla, es hablar de costumbres, tradiciones, artesanías, gastronomía, música y danza, pero sobre todo en un carácter muy especial es hablar de su vestimenta típica, ya que todo es bello en sus diferentes bordados y significados y que todo lo hace interesante y cautivador.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      
  
    </WrapperSingleRoute>
  )
}
