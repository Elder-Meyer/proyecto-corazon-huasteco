import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { ItemListCard } from '../../components/customs/ItemListCard'
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute'
import { Bread } from '../../components/customs/Bread'


// Imagenes
import tipica from "../../assets/img/vestimenta/boda3.jpg"
import tradicion from "../../assets/img/tradiciones/xantolo.jpg"
import gastronmia from "../../assets/img/gastronomia/gastronomia.jpg"
import danza from "../../assets/img/danza/danza.jpg"
import trio from "../../assets/img/musica/trio.jpg"

export const PanelTematicas = () => {
  return (
    <WrapperSingleRoute> 
      <Grid 
        container 
        rowSpacing={1} 
        columnSpacing={{xs: 1, sm: 3, md: 5}}
      >{/*BreadCrumbs*/ }
        <Grid item xs> 
          <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "TEMATICAS", ruta: "/tematicas"},]}/>
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
            descripcion='La vestimenta en Huejutla de Reyes Hidalgo en su representación tiene a su barrio de Chililico lugar del chililitet (piedra de obsidiana) tierra de alfareros descendientes de aquellos trabajadores del barro que prepararon cerámica desde la época prehispánica que por su diseño y acabado es única en el mundo.'
            img={tipica}
            ancla="vestimenta"
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Danza'
            descripcion='La danza tradicional en Huejutla de Reyes Hidalgo es denominada la danza de las inditas; tradición que viene de generación en generación y sigue viva en las comunidades de la Huasteca Hidalguense. La danza se lleva a cabo al son del trio de huapangueros que interpretan sones y alabanzas religiosas.'
            img={danza}
            ancla="danza"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* GASTRONOMÍA */}
          <ItemListCard
            titulo='Gastronomía'
            descripcion=' La gastronomía en Huejutla de Reyes Hidalgo es sin duda, un atractivo muy importante, ofreciendo exquisitas enchiladas de chile seco, tomate verde o rojo o ajonjolí, el zacahuil, cecina, tamales, bocoles, el xohol, pollo huasteco o ranchero, barbacoa de res, carnitas de puerco, mole verde y rojo, capiado y tampiqueñas, entre otros.'
            img={gastronmia}
            ancla="gastronomia"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} > {/* MUSICA */}
          <ItemListCard
            titulo='Música'
            descripcion='La música tradicional en Huejutla de reyes Hidalgo es el sistema musical de los nahuas la cual se estructura a partir de la oposición entre un eje que establece, por un lado, un ámbito religioso, y por el otro, un ámbito secular. Ambos se encuentran en el campo de lo sagrado, qué solo se define por su oposición a lo profrano.'
            img={trio}
            ancla="musica"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} > {/* TRADICIONES */}
          <ItemListCard
            titulo='Tradiciones'
            descripcion='Las tradiciones en Huejutla de Reyes Hidalgo se forjaron a partir de las costumbres, noticias, composiciones literarias y doctrinas, que pasarón de generación en generación. Las tradiciones más importantes en esta región son el carnaval, la fiesta del tordo, semana santa, Xantolo, fiesta guadalupana, feria de nochebuena y las fiestas patrias.'
            img={tradicion}
            ancla="tradiciones"
          />
        </Grid>
      </Grid>
      <Outlet/> {/* R O U T E R  O U T L E T */}{/**SALIDA DE LA SUBRUTA */}
    </WrapperSingleRoute>
  )
}
