import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { ItemListCard } from '../../../components/customs/ItemListCard'
import { WrapperSingleRoute } from '../../../components/customs/WrapperSingleRoute'
import { Bread } from '../../../components/customs/Bread'


// Imagenes
import icono from "../../../assets/img/musica/icono.jpg"


export const Musica = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina musica');
    
  //   const t = trace(perf, "test_trace");
  //   t.putAttribute("experiment", "A");
  // }, []); 

  return (
    <WrapperSingleRoute> 
    <Grid 
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 3, md: 5 }}  
    >
      <Grid item xs={12}>
        <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "TEMATICAS", ruta: "/tematicas"},{miga: "MUSICA", ruta: "/tematicas/musica"}]}/>
      </Grid>
    </Grid>

    {/* L I S T A D O   D E   T E M A T I C A S */}

    <Grid container spacing={1}> {/* G R I D  G R A L. */}

      <Grid item xs={12} sm={6} md={4}> {/* VESTIMENTA */}
        <ItemListCard
          titulo='Canario y Xochipitzahua'
          descripcion='La Canario y Xochipitzahua tienen la función de marcar las transiciones de un aspecto o un tiempo del ritual a otro, son como la representación sonora de los arcos de las flores que van marcando las entradas o salidas del espacio o un tiempo del ritual a otro, son como la representación sonora de los arcos de flores.'
           img={icono}
          ancla="regional"
        />
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
        <ItemListCard
          titulo='Bendito sea Dios'
          descripcion='Es una alabanza que se enmarca en el rito católico. En la huasteca hidalguense, una de las características del canto, cuando se interpretan con música de viento se incluye. La banda de viento puede interpretar esta alabanza al interior de la iglesia durante el rosario de la madrugada, donde en ciertos momentos se reza parte del rosario y se hacen peticiones por parte de los miembros de la comunidad.'
          img={icono}
          ancla="boda"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
        <ItemListCard
          titulo='Jesús está pasando por aquí'
          descripcion='Jesús está pasando por aquí es una alabanza que interpreta la generalidad de los grupos de inditas de la región. Ésta la cantan durante las procesiones, en los atrios de las iglesias, al interior de los templos católicos; pero principalmente, cuando hacen el recorrido por los alrededores de la comunidad con la imagen del santo. '
          img={icono}
          ancla="boda"
        />
      </Grid>

    </Grid>
    <Outlet/> {/* R O U T E R  O U T L E T */}{/**SALIDA DE LA SUBRUTA */}
  </WrapperSingleRoute>
  )
}

