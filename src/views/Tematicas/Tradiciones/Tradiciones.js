import React from 'react'
import { Grid} from '@mui/material'
import { Outlet } from 'react-router-dom'
import { ItemListCard } from '../../../components/customs/ItemListCard'
import { WrapperSingleRoute } from '../../../components/customs/WrapperSingleRoute'
import { Bread } from '../../../components/customs/Bread'


// Imagenes
import carnaval from "../../../assets/img/tradiciones/carnaval.jpg"
import patrias from "../../../assets/img/tradiciones/patrias.jpg"
import santa from "../../../assets/img/tradiciones/semana_santa.jpg"
import feria from "../../../assets/img/tradiciones/feria.jpg"
import panteon from "../../../assets/img/tradiciones/panteon.jpg"
import tordo from "../../../assets/img/tradiciones/tordo.jpg"
import guadalupana from "../../../assets/img/tradiciones/guadalupana2.jpg"





export const Tradiciones = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina tradiciones');
    
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
          <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "TEMATICAS", ruta: "/tematicas"},{miga: "TRADICIONES", ruta: "/tematicas/tradiciones"}]}/>
        </Grid>
      </Grid>

      {/* L I S T A D O   D E   T E M A T I C A S */}

      <Grid container spacing={1}> {/* G R I D  G R A L. */}

        <Grid item xs={12} sm={6} md={4}> {/* VESTIMENTA */}
          <ItemListCard
            titulo='Carnaval'
            descripcion='Se efectúa a fines de febrero, alguna excepción a principios de marzo, cuatro días antes del miércoles de ceniza, martes antes del miércoles de ceniza se lleva acabo el desfile de disfrazados, carros alegóricos, participa el pueblo en general, escuelas, comunidades aledañas, presentando danzas, comparsas, música de viento y la tradición pintada. '
            img={carnaval}
            ancla=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Fiesta del Tordo'
            descripcion='El dia 20 y 21 de mayo se recuerda la batalla donde los huejutlenses derrotaron a un ejército francés invasor en 1866.El 20 de septiembre se inician los festejos con la carrera del fuego, símbolo de la libertad y el 21 es el izamiento de bandera donde realizan guardias y ofrendas florales al monumento del héroe “Capitán Antonio Reyes Cabrera” (a) “El tordo”.'
            img={tordo}
            ancla=""
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Semana Santa'
            descripcion='Son días dedicados por la Fe católica a recordar la pasión de Cristo. Se conmemoran los días que antecedieron a la crucifixión de Jesucristo. Este se inicia con el domingo de ramos y la bendición de palmas. Es la vía crusis y la procesión del silencio, jueves y viernes santo, sábado de gloria con la bendición de agua. '
            img={santa}
            ancla=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Xantolo'
            descripcion='La fiesta de los muertos que realizan los indígenas náhuatl del municipio, tiene semejanzas con las que realizan los mestizos “gente de razón” solo que ellos (los indígenas) la inician desde junio y julio, cuando preparan la siembra del maíz y otros productos que utilizarán, así también la engorda de animales; el bordado de servilletas y manteles, artesanías; en octubre se cosechan y se recopilan todos los productos elaborados para la fiesta. '
            img={panteon}
            ancla=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Guadalupanas'
            descripcion='Dichas fiestas se inician a partir del 18 de noviembre (varia la fecha), es entonces cuando comienzan las velaciones y procesiones en colonias y barrios, así también comunidades del municipio, culminando el 11 de diciembre velación en general en el santuario y catedral, a las 24 horas las mañanitas para amanecer el dia 12 de diciembre Santo de la Virgen de Guadalupe.'
            img={guadalupana}
            ancla=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Feria Nochebuena'
            descripcion='El premio al comportamiento en la invasión española en Tampico, el gobierno del Estado de México, concede 4 días de feria a Huejutla en víspera de la Pascua de Navidad, en Tlalpam a los 16 días de octubre 1829. Desde entonces, hoy en la actualidad es tradicional la feria de Nochebuena, iniciándose a partir del 20 de diciembre y hasta el 6 de enero del año siguiente.'
            img={feria}
            ancla=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}> {/* DANZA */}
          <ItemListCard
            titulo='Fiestas Patrias'
            descripcion='Considerado a septiembre como el mes de la patria, se realizan una serie de actividades como el izamiento de bandera por autoridades municipales y honores a nuestra enseñanza por militares y civiles.'
            img={patrias}
            ancla=""
          />
        </Grid>

      </Grid>
      <Outlet/> {/* R O U T E R  O U T L E T */}{/**SALIDA DE LA SUBRUTA */}
    </WrapperSingleRoute>
  )
}

