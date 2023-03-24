import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { ItemListCard } from '../../../components/customs/ItemListCard'
import { WrapperSingleRoute } from '../../../components/customs/WrapperSingleRoute'
import { Bread } from '../../../components/customs/Bread'


// Imagenes
import tipica from "../../../assets/img/vestimenta/tipica2.jpg"
import bodas from "../../../assets/img/vestimenta/boda.jpg"





export const Vestimenta = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina vestimenta');
    
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
          <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "TEMATICAS", ruta: "/tematicas"},{miga: "VESTIMENTA", ruta: "/tematicas/vestimenta"}]}/>
        </Grid>
      </Grid>

      {/* L I S T A D O   D E   T E M A T I C A S */}

      <Grid container spacing={1}> {/* G R I D  G R A L. */}

        <Grid item xs={12} sm={6} md={4}> {/* VESTIMENTA */}
          <ItemListCard
            titulo='Traje Regional'
            descripcion='La mujer del barrio de chililico es la única en toda la región que usa falda amplia y larga hasta el tobillo, no lleva olanes solo alforzas y encaje en la parte inferior. Este tipo de falda no la usa suelta, si no que la enredan alrededor de la cintura formando una falda de medio paso, viste blusa bordada en hilo pasado o hilván y por lo general va descalza'
            img={tipica}
            ancla="regional"
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Traje de Boda'
            descripcion='El traje regional estilizado de boda indígena es un vestuario muy tradicional utilizado para rituales y ceremonias en los matrimonios indígenas. Este acontecimiento hoy en día carece de su valor cultural debido a que estas celebraciones se han dejado de participar y se van olvidando con el tiempo.'
            img={bodas}
            ancla="boda"
          />
        </Grid>
      </Grid>
      <Outlet/> {/* R O U T E R  O U T L E T */}{/**SALIDA DE LA SUBRUTA */}
    </WrapperSingleRoute>
  
  )
}

