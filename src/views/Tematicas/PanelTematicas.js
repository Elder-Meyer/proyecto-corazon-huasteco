import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { ItemListCard } from '../../components/customs/ItemListCard'
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute'
import { Bread } from '../../components/customs/Bread'

export const PanelTematicas = () => {
  return (
    <WrapperSingleRoute> 
      <Grid 
        container 
        rowSpacing={1} 
        columnSpacing={{xs: 1, sm: 3, md: 5}}
      >{/*BreadCrumbs*/ }
        <Grid item xs> 
          <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "TEMATICAS", ruta: "/tematicas"}]}/>
        </Grid>

        <Grid item xs={12} sx={{mb:4}}> 
          <Typography variant='h4' component='p' gutterBottom align='center' color="primary.main" m={2}>
            Explora las diferentes Tematicas 
          </Typography>
        </Grid>
      </Grid>

      {/* L I S T A D O   D E   T E M A T I C A S */}

      <Grid container spacing={1}> {/* G R I D  G R A L. */}
        <Grid item xs={12} sm={6} md={4}> {/* VESTIMENTA */}
          <ItemListCard
            titulo='Vestimenta'
            descripcion='La vestimenta huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños. La vestimenta huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños. La vestimenta huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños.'
            img="https://i.pinimg.com/originals/3b/99/4c/3b994c6f8586df00b42db79803eb414b.jpg"
            ancla="vestimenta"
            
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Danza'
            descripcion='La danza huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños. La danza huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños. La danza huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños.'
            img="https://static.lajornadahidalgo.com/wp-content/uploads/2022/08/BALLET-ALVARO-SERRANO.jpeg"
            ancla="danza"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* GASTRONOMÍA */}
          <ItemListCard
            titulo='Gastronomía'
            descripcion='La gastronomía huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños. La gastronomía huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños. La gastronomía huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños.'
            img="https://elregionalcoatepec.com/wp-content/uploads/2019/07/zacahuil_veracruz-copia.jpeg"
            ancla="gastronomia"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} > {/* MUSICA */}
          <ItemListCard
            titulo='Música'
            descripcion='La música huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños. La música huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños. La música huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños.'
            img='https://i.ytimg.com/vi/qIa5nlxR_aM/maxresdefault.jpg'
            ancla="musica"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} > {/* TRADICIONES */}
          <ItemListCard
            titulo='Tradiciones'
            descripcion='La tradición huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños. La tradición huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños. La tradición huasteca es una de las más representativas de México, por su colorido y por su variedad de diseños.'
            img='https://etnias.mx/wp-content/uploads/2018/04/CEREMONIAS-DE-LOS-HUASTECOSV.jpg'
            ancla="tradiciones"
          />
        </Grid>
      </Grid>
      <Outlet/> {/* R O U T E R  O U T L E T */}{/**SALIDA DE LA SUBRUTA */}
    </WrapperSingleRoute>
  )
}
