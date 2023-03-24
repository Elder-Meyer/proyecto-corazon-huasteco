import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { ItemListCard } from '../../../components/customs/ItemListCard'
import { WrapperSingleRoute } from '../../../components/customs/WrapperSingleRoute'
import { Bread } from '../../../components/customs/Bread'


// Imagenes

// 
import zacahuil from "../../../assets/img/gastronomia/zacahuil.jpg"
import atole from "../../../assets/img/gastronomia/atole.jpg"
import enchiladas from "../../../assets/img/gastronomia/enchiladas.jpg"
import tamales from "../../../assets/img/gastronomia/tamales.jpg"
import bocol from "../../../assets/img/gastronomia/gastronomia.jpg"
import mole from "../../../assets/img/gastronomia/mole.jpg"
import xohol from "../../../assets/img/gastronomia/xohol.jpg"
import capeado from "../../../assets/img/gastronomia/capeado.jpg"
import barbacoa from "../../../assets/img/gastronomia/barbacoa.jpg"
import carnitas from "../../../assets/img/gastronomia/carnitas.jpg"




export const Gastronomia = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina gastronomia');
    
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
          <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "TEMATICAS", ruta: "/tematicas"},{miga: "GASTRONOMIA", ruta: "/tematicas/gastronomia"}]}/>
        </Grid>
      </Grid>

      {/* L I S T A D O   D E   T E M A T I C A S */}

      <Grid container spacing={1}> {/* G R I D  G R A L. */}

        <Grid item xs={12} sm={6} md={4}> {/* VESTIMENTA */}
          <ItemListCard
            titulo='Zacahuil'
            descripcion=' El zacahuil es un tamal que puede pesar hasta 50 kilos, tradicional en Huejutla de Reyes Hidalgo, este se acompaña con carne de puerco y en ocasiones de pollo o guajolote entero.'
            img={zacahuil}
            ancla=""
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Atole Agrio'
            descripcion='Es un platillo tradicional en Huejutla de Reyes Hidalgo. Esta se elabora con maíz sazón blanco o amarillo, que se muele en crudo y se disuelve en agua con sal.'
            img={atole}
            ancla=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Tamales'
            descripcion='Del náhuatl tamalli. Preparación de origen prehispánico elaborada con masa de maíz batida; se rellena con salsa, algún tipo de carne, o sola; generalmente se envuelve en hojas de maíz o plátano, y se cuece al vapor.'
            img={tamales}
            ancla=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Capiado'
            descripcion='El capeado es una técnica culinaria que consiste en sumergir un alimento en huevos batidos para acto seguido freírlo.'
            img={capeado}
            ancla=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Bocoles'
            descripcion='Los bocoles son una delicia gastronómica de la Región de la Huasteca. Son una especie de tortilla pequeña y gruesa elaborada con masa de maíz y manteca.'
            img={bocol}
            ancla=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Mole verde y rojo'
            descripcion='Su término proviene del náhuatl molli o mulli, y se refiere a varios tipos de salsas preparadas a partir de chiles y especias.'
            img={mole}
            ancla=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Enchiladas'
            descripcion='Las tradicionales enchiladas de canasta, que, por su estilo y sazón, son exclusivas de la región Huasteca y Huejutla, las cuales venden a diario en un sector del mercado municipal que es conocido como “de las enchiladeras”, el cual es muy concurrido, en especial en épocas festivas como Xantolo, incluso por turistas nacionales y extranjeros.'
            img={enchiladas}
            ancla=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Barbacoa de res'
            descripcion='La barbacoa es un método de cocción prehispánico que consistía en formar un hoyo en la tierra, calentarlo con brasas de leña y colocar piedras para cocinar a altas temperaturas. Sobre estas piedras se ponían las carnes que habían de cocerse, envueltas con hojas de plátano o maguey dependiendo de la región. '
            img={barbacoa}
            ancla=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo=' Carnitas de puerco'
            descripcion='Las carnitas de puerco son trozos de carne de cerdo cocidos a fuego lento en enormes cazos de cobre. Por lo general, la mayoría de las partes del cerdo se pueden utilizar; algunas se dejan tiernas mientras que otras se cocinan hasta quedar crujientes y doradas por fuera pero jugosas por dentro.'
            img={carnitas}
            ancla=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Xojol'
            descripcion='El xojol es un tamal horneado que puede llegar a medir más de 50 centímetros.	Xojol quiere decir “ojo” en lengua tenek. Se trata de un delicioso tamal típico de la huasteca de Hidalgo, siendo ampliamente producido en la región de Huejutla de Reyes.'
            img={xohol}
            ancla=""
          />
        </Grid>
        
      </Grid>
      <Outlet/> {/* R O U T E R  O U T L E T */}{/**SALIDA DE LA SUBRUTA */}
    </WrapperSingleRoute>
  )
}

