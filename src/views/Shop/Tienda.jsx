import React, {useState, useEffect} from 'react'

import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Grid, Toolbar} from '@mui/material'

import { app } from '../../config/firebase/firebase'

import SearchIcon from '@mui/icons-material/Search';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { ItemListCard } from '../../components/customs/ItemListCard';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread } from '../../components/customs/Bread';


export const Tienda = () => {

  // PARA LA BUSQUEDA NORMAL
  const [proyectos, setProyectos] = useState([]);
  const [tablaProyectos, setTablaProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value.toString().toUpperCase());
    console.log(e.target.value);
  }

  const filtrar = (terminoBusqueda)=>{
    var  resultadoBusqueda =  tablaProyectos.filter((elemento)=>{
      if(elemento.data().nombre.includes(terminoBusqueda)){
        return elemento;
      }
    });
    setProyectos(resultadoBusqueda);
    setDocs(resultadoBusqueda);
  }

  //PARA EL STORAGE DE FIREBASE
  const [archivoUrl, setArchivoUrl] = useState("");
  const [docs, setDocs] = useState([]);

  const archivoHandler = async(e) =>{
    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    const something = await archivoPath.put(archivo);
    console.log("archivo cargado:", archivo.name);
    const enlaceUrl = await archivoPath.getDownloadURL();

    setArchivoUrl(enlaceUrl);
  }

  const submitHandler = async(e) =>{
    e.preventDefault();
    const nombreArchivo = e.target.nombre.value;
    const descripcion = e.target.descripcion.value;
    const autor = e.target.autor.value;

    if(!nombreArchivo){
      alert("Oops!", "la imágen debe tener un nombre", "error");
      return;
    }
    const coleccionRef = app.firestore().collection("producto");
    await coleccionRef.doc(`${new Date().getTime()}`).set({
        nombre: nombreArchivo,
        url: archivoUrl ,
        descripcion,
        autor
    })
    console.log(`archivo ${nombreArchivo} cargado con url: ${archivoUrl}`)
    alert("Imágen subida", "Tu imagen ha sido subida", "success");
    e.target.reset();
  }

  const obtenerInfo = async() => {
    const docList = await app.firestore().collection("producto").get();
    setDocs(docList.docs.map((doc)=> doc));
    setProyectos(docList.docs.map((doc)=> doc));
    setTablaProyectos(docList.docs.map((doc)=> doc));
  }

  useEffect(() => {
    obtenerInfo()
  }, [])

  return (
    <WrapperSingleRoute> {/**CONTENEDOR GLOBAL */}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 3, md: 5 }}  
      >{/* B R E A D C R U M B S */}
        <Grid item xs={12}>
          <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "TIENDA", ruta: "/tienda"}]}/>
        </Grid>

        {/* B U S C A D O R 1 */}
        <Grid item xs={12}> 
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ 'aria-label': 'search' }}
                value={busqueda}
                onChange={handleChange}
                />
            </Search>
          </Toolbar>
        </Grid>
        
        {/* B U S C A D O R 2 */}
        <Grid item xs={12} sx={{mr:4, ml:4}}> 
          <FormControl sx={{width: "100%"}}>
            <InputLabel id="demo-simple-select-label">Pais</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={country}
              label="Age"
              // onChange={obtenerPais}
              >
              <MenuItem value={"RECIENTES"}>Recientes</MenuItem>
              <MenuItem value={"MAS VISTOS"}>Mas vistos</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* <div>
        <form onSubmit={submitHandler}>
          <input type="file" onChange={archivoHandler} /><br/>
          <input type="text" name='nombre' placeholder='Nombre'/><br/>
          <input type="text" name='descripcion' placeholder='Descripcion'/><br/>
          <input type="text" name='autor' placeholder='Autor'/><br/>
          <button>Enviar</button>
        </form>
      </div> */}

      <Box sx={{m:3, flexGrow: 1}}> {/*O R A N G E*/}
        <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2, md:3}}>
          {
            proyectos ? (proyectos.map(proyecto =>{
              return(
              <Grid item xs={12} sm={6} md={4} wrap="wrap" key={proyecto.id}>
                <ItemListCard
                  key={proyecto.id}
                  id={proyecto.id}
                  titulo={proyecto.data().nombre}
                  descripcion={`${proyecto.data().descripcion.slice(0, 100)}...`}
                  ancla={`${proyecto.id}`}
                  img={proyecto.data().url} />
              </Grid>
              )
            }))
            :
            (<Typography variant='h2' component="p">
              Cargando datos...
            </Typography>)
          }
          
        </Grid>      
      </Box>
    </WrapperSingleRoute>
  )
}




// DISEÑOS DEL BUSCADOR
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
})); //FIN DE DISEÑO DE BUSCADOR