import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { ItemListCard } from '../../../components/customs/ItemListCard'
import { WrapperSingleRoute } from '../../../components/customs/WrapperSingleRoute'
import { Bread } from '../../../components/customs/Bread'


// Imagenes
import autotona from "../../../assets/img/danza/autotonas.jpg"
import tres_colores from "../../../assets/img/danza/tres_colores.jpg"
import palo_volador from "../../../assets/img/danza/palo_volador.jpg"
import danza_pececillos from "../../../assets/img/danza/danza_pececillos.jpg"




export const Danza = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina danza');
    
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
        <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "TEMATICAS", ruta: "/tematicas"},{miga: "DANZA", ruta: "/tematicas/danza"}]}/>
      </Grid>
    </Grid>

    {/* L I S T A D O   D E   T E M A T I C A S */}

    <Grid container spacing={1}> {/* G R I D  G R A L. */}

      <Grid item xs={12} sm={6} md={4}> {/* VESTIMENTA */}
        <ItemListCard
          titulo='Xochihualiztli o Tres Colores'
          descripcion='Es una danza de hombres que se acompaña de con música de trio huasteco o tlatzonami, en ocasiones se interpreta sólo con violín y huapanguera o violín o jarana. Los danzantes vestidos de manta, llevan una corona de estructura de carrizo forrada con papel metálico de tres colores: verde, blanco, y rojo al igual que los listones que cuelgan de la parte de atrás de este aditamento. Al frente, atrás y a los lados se colocan unos pequeños espejos redondos que simbolizan el sol.'
          img={tres_colores}
          ancla=""
        />
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
        <ItemListCard
          titulo='Cuapatlantinij, El Gavilán, El volador o Palo Volador.'
          descripcion='El traje regional estilizado de boda indígena es un vestuario muy tradicional utilizado para rituales y ceremonias en los matrimonios indígenas. Este acontecimiento hoy en día carece de su valor cultural debido a que estas celebraciones se han dejado de participar y se van olvidando con el tiempo.'
          img={palo_volador}
          ancla=""
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
        <ItemListCard
          titulo='Cuaxompiates, Cabezas picudas o Varitas.'
          descripcion='El traje regional estilizado de boda indígena es un vestuario muy tradicional utilizado para rituales y ceremonias en los matrimonios indígenas. Este acontecimiento hoy en día carece de su valor cultural debido a que estas celebraciones se han dejado de participar y se van olvidando con el tiempo.'
          img={autotona}
          ancla=""
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
        <ItemListCard
          titulo='Achmichtinij, Danza de los primeros pececillos o de los pescados. '
          descripcion='El traje regional estilizado de boda indígena es un vestuario muy tradicional utilizado para rituales y ceremonias en los matrimonios indígenas. Este acontecimiento hoy en día carece de su valor cultural debido a que estas celebraciones se han dejado de participar y se van olvidando con el tiempo.'
          img={danza_pececillos}
          ancla=""
        />
      </Grid>

    </Grid>
    <Outlet/> {/* R O U T E R  O U T L E T */}{/**SALIDA DE LA SUBRUTA */}
  </WrapperSingleRoute>
  )
}

