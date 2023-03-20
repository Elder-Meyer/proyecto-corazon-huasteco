
import React from 'react'
import { Typography, Grid, Paper, CardMedia, Card, IconButton} from '@mui/material'

//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../App/firebase';
// import { perf } from '../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'




import { Facebook, Instagram, Twitter, Web, YouTube } from '@mui/icons-material';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread } from '../../components/customs/Bread';




export const Vestimenta = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina vestimenta');
    
  //   const t = trace(perf, "test_trace");
  //   t.putAttribute("experiment", "A");
  // }, []);
  


  return (
    <WrapperSingleRoute>      
      {/* BREADCRUMBS */}
      <Grid 
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 3, md: 5 }}  
      >
        <Grid item xs={12}>
          <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "TEMATICAS", ruta: "/tematicas"},{miga: "VESTIMENTA", ruta: "/tematicas/vestimenta"}]}/>
        </Grid>
      </Grid>
      

      {/* CONTENEDOR DE LA VISTA */}
      <Grid 
        container
        spacing={1}
      >
        {/* COLUMNA IZQUIERDA */}
        <Grid item xs={12} sm={7} md={8}>
          {/* ELEMENTO 1 IMAGEN */}
          <Paper sx={{m:1, p:3}} elevation={3}> 
            <Card>
              <CardMedia
                component="img"
                alt='principal'
                height="500"
                image='https://i.pinimg.com/originals/3b/99/4c/3b994c6f8586df00b42db79803eb414b.jpg'
              />
            </Card>
          </Paper>
          {/* ELEMENTO 2 TEXTO */}
          <Paper sx={{m:1, p:3, bgcolor: "background.default"}}  elevation={1}> 
            <Typography variant='body1' component="p" mb={2}>
              Las bodas indígenas son ceremonias cargadas de rituales y simbolismos, de deseos de armonía y felicidad que generan momentos sumamente espirituales y muy especiales. 
            </Typography>
            <Typography variant='body1' component="p" mb={2}>
              Las bodas indígenas son ceremonias cargadas de rituales y simbolismos, de deseos de armonía y felicidad que generan momentos sumamente espirituales y muy especiales. 
            </Typography>
            <Typography variant='body1' component="p" mb={2}>
              Las bodas indígenas son ceremonias cargadas de rituales y simbolismos, de deseos de armonía y felicidad que generan momentos sumamente espirituales y muy especiales. 
            </Typography>
          </Paper>
          {/* ELEMENTO 3 BANNER */}
          <Paper sx={{ m:1, p:2}} elevation={3}>
            <Card>
              <CardMedia
                component="img"
                alt='banner'
                height="140"
                image='https://huejutla.gob.mx/contenidos/huejutla/img/banner_2022_6_6_1654523235.7192.jpg'
              />
            </Card>
          </Paper>

          {/* ELEMENTO 4 ARTICULOS */}
          <Paper sx={{m:1, p:3}} elevation={3}> 
            <Typography variant='body1' component="p" mb={2}>
              Articulos relacionados
            </Typography>
          </Paper>

          {/* ELEMETNO 5 COMENTARIOS */}
          <Paper sx={{m:1, p:3}} elevation={3}> 
            <Typography variant='body1' component="p" mb={2}>
              Comentario
            </Typography>
          </Paper>
        </Grid>

        {/* COLUMNA DERECHA */}
        <Grid item xs={12} sm={5} md={4}>
          <Paper sx={{ m:1, p:2}} elevation={6}>
            <Card>
              <CardMedia
                component="img"
                alt='banner'
                height="140"
                image='https://huejutla.gob.mx/contenidos/huejutla/img/banner_2022_6_6_1654523235.7192.jpg'
              />
            </Card>
          </Paper>
          <Paper sx={{m:1, p:2}} elevation={6}>
            <IconButton color='primary'>
              <Facebook fontSize='large'/>
            </IconButton>
            <IconButton color='primary'>
              <Twitter fontSize='large'/>
            </IconButton>
            <IconButton color='primary'>
              <Instagram fontSize='large'/>
            </IconButton>
            <IconButton color='primary'>
              <YouTube fontSize='large'/>
            </IconButton>
            <IconButton color='primary'>
              <Web fontSize='large'/>
            </IconButton>
            
          </Paper>
          <Paper sx={{ m:1, p:2}} elevation={6}>
            <Typography>
              Articulos de interes
            </Typography>
          </Paper>
        </Grid>
        
      </Grid>

      
    </WrapperSingleRoute>
    
  )
}

