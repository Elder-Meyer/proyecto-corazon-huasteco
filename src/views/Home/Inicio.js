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
           <Typography gutterBottom variant="h6" component="p" >
            Fundación.
            </Typography>
            <Typography variant='subtitle1' component="p" >
            Los tenec o huaxtecos fundaron a huexotlan en el año 3000 a.c. con el nombre de Tantocoy, “Tan” = lugar “tocoy” = sauces, lugar de sauces. A la llegada de los toltecas en el año 619 a.c., cambio su nombre por el huexotlan, siendo sus dos etimologías Náuatl, significado lo mismo “Huexo” = sauces y “Tlan” = lugar, lugar de sauces. También nos dicen los papeles de la nueva España, coleccionados y cuidadosamente anotados por el señor Don Francisco del Paso y Troncoso, que en 1522 llegaron por el mar de Pánuco, una expedición al mando de Francisco de Garay, desde Jamaica y su presencia insurreccionó a los indios, los cuales fueron sometidos por Hernán Cortez en 1522, pasando por Huexotlan y que en diciembre de 1522 con su aguerrido ejercito conquisto Huexotlan, castellanizando el nombre para nombrarse desde entonces Huejutla.
            </Typography>
           </Paper>

           <Paper sx={{p:{xs:2, sm:3, md:5}, m:{xs:1, sm:3, md: 5}, bgcolor: "background.default"}} elevation={1} >
           <Typography gutterBottom variant="h6" component="p" >
            Flora.
            </Typography>
            <Typography variant='subtitle1' component="p" >
            En Huejutla abundan los árboles silvestres de donde se saca la leña para proporcionar lumbre y calor a los hogares o para los hornos donde se cose el pan, el zacahuil, xojol, las reposterías. Se encuentran arboles frutales como el aguacate, el chico zapote, guayabos, naranjos, limas, mangos, mandarinas, ciruelos, zapote prieto, anonas, capulines, humos, chalahuites, cocos, plátanos, pitahayas, caña de azúcar, calabaza, papaya, camotes, cacahuates, tamarindo, zarza, tepache, maizales y pastizales. Madera fina como: cedro, orejón, palo de rosa, bálsamo, chicozapote, chijol, pioche, jalamate, palo escrito. Arboles resinosos como: el copal, predo, chaca, plantas medicinales: zacate de limón, la ruda, la chaya, el estafiate, albacar, gordolobo, cornizuelo, abundantes plantas de ornato, infinidad de plantas, gran variedad.
            </Typography>
           </Paper>

           <Paper sx={{p:{xs:2, sm:3, md:5}, m:{xs:1, sm:3, md: 5}, bgcolor: "background.default"}} elevation={1} >
           <Typography gutterBottom variant="h6" component="p" >
            Fauna.
            </Typography>
            <Typography variant='subtitle1' component="p" >
            En el municipio existe gran extinción de animales. Predominan zorras, tlacuaches, coyotes, zorrillos, tuzas, onzas, zacamixtle, venados, conejos, gato montés, cuachacales, tigrillos, tejones, mapaches, caballos, burros, mulas, reses, borregos, ratones, ratas, ect.
            Aves, tales como gavilán, auras, zopilotes, lechuzas, tecolotes, aguilillas, chachalacas, torcazas, palomas, tordos, patos, cordonices, tórtolas, perdices, papanes, loros, pericos, cotorras, búhos, cardenales, cuacheches, calandrias, primaveras, media lunas, guiliquisis, pájaro azul, cuamomoxtles, quetzales, chuparrosas, perdigueros, pichones, gallos, gallinas, etc. En su variedad existen guajolotes, gansos, gallinitas, garzas, pato silvestre, quebranta huesos, colmeneros, pixcuhuiles, poxacuas.
            Reptiles como las víboras, coralillos, mahuaquites, apachicohuatls, mazacuates, culebra de agua, lagartijas, salamandras, iguanas, tarántulas y alacranes.
            </Typography>
           </Paper>
        </Grid>

        <Grid item md={6} xs={12}>
          <Paper sx={{p:{xs:2, sm:3, md:5}, m:{xs:1, sm:3, md: 5}, bgcolor: "background.default"}} elevation={1}>
            <Typography gutterBottom variant="h6" component="p" >
            Historia.
            </Typography>
            <Typography variant='subtitle1' component="p" >
            En diciembre de 1522 Hernán Cortés, estuvo en Huexotlan y conquistó la Huaxteca, castellanizándose su nombre a Huejutla.
            </Typography>
            <Typography variant='subtitle1' component="p" >
            El convenio agustino o catedral, con características de estilo romántico, gótico y plateresco, el campanario con forma de espadaña, 3 arcadas, bóvedas de cañón, la torre tiene almedas de estilo mudéjar, que le hacen parecer una fortaleza de la época del renacimiento italiano, construido entre 1940 a 1945, bajo la orden de Fray Juan de Estacio, provincial de los monjes agustinos, es el símbolo más importante de los huejutlenses. 
            </Typography>
            <Typography variant='subtitle1' component="p" >
            Creación del distrito: el 04 de octubre de 1824, al elegirse el estado de México, Huejutla, se convierte en Distrito. En 1869 al elegirse el Estado de Hidalgo, pasa a formar parte de esta entidad.
            </Typography>
            <Typography variant='subtitle1' component="p" >
            Batalla de Tampico. Fernando VII, Rey de España, quiso conquistar México, envió una flota de 4000 soldados al mando del general Isidro Barradas, pero el 11 de septiembre de 1829, el batallón cívico de Huejutla participó en la batalla, venciendo a los Españoles.  
            </Typography>
            <Typography variant='subtitle1' component="p" >
            Intervención norteamericana. Al mando de las guardias nacionales de Huejutla, General Don. Francisco de Garay, encabeza a los milicianos huejutlenses y derrotan al invasor norteamericano que avanzaba hacia el centro del país previendo de víveres en bestias de carga, desembarcadas en el puerto de Tampico, en el lugar llamado rio Calabozo, en un reñido encuentro en que el horror de las armas quedo bien puesto emprendiendo el enemigo una vergonzosa y precipitada huida el dia 12 de julio de 1847.  
            </Typography>
            <Typography variant='subtitle1' component="p" >
            De aquella batalla de Puebla llegan a posicionarse a Huejutla los franceses en noviembre de 1865, pero el 21 de mayo de 1866, son derrotados y expulsados por grupos de huejutlenses al mando del Capitán Antonio Reyes Cabrera (a) El tordo.  
            </Typography>
            <Typography variant='subtitle1' component="p" >
            En 1943, el congreso del Estado decreta que nuestra ciudad se llamará, Huejutla de Reyes Hidalgo.
            </Typography>
            <Typography variant='subtitle1' component="p" >
            En la revolución Mexicana, destaca, la participación de los generales huejutlenses: Francisco de P. Mariel, Daniel Cerecedo Estrada, Vicente C. Salazar B, Armando, Antonio y Jesús Azuara Sarmiento.  
            </Typography>
          </Paper>
          <Paper sx={{p:{xs:2, sm:3, md:5}, m:{xs:1, sm:3, md: 5}, bgcolor: "background.default"}} elevation={1} >
            <Typography gutterBottom variant="h6" component="p" >
              Clima.
            </Typography>
            <Typography variant='subtitle1' component="p" >
               Huejutla tiene un clima caluroso húmedo, algo del trópico, debido a la poca altura s.n.m. registrándose temperaturas hasta 35° a la sombra, aumentando en los meses, de abril, mayo, junio, julio y agosto; el invierno es extremoso.
            </Typography>

           </Paper>
           <Paper sx={{p:{xs:2, sm:3, md:5}, m:{xs:1, sm:3, md: 5}, bgcolor: "background.default"}} elevation={1} >
            <Typography gutterBottom variant="h6" component="p" >
                Colindancias.
              </Typography>
              <Typography variant='subtitle1' component="p" >
                Huejutla colinda al norte con el municipio de Orizatlán, el estado de Veracruz; al este con Veracruz, Huautla y Atlapexco; al sur con Atlapexco, Huazalingo y Tlanchinol; y al oeste con Tlanchinol, Jaltocan y Orizatlán.
            </Typography>
           </Paper>

        </Grid>
      </Grid>

      
  
    </WrapperSingleRoute>
  )
}