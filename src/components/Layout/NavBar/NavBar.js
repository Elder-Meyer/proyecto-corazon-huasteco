import React, { useState } from 'react';
// COMPONENTES
import { AppBar, Avatar,Box, Button,  Divider,  Drawer,  IconButton,  List,  ListItem,  ListItemButton,  ListItemText,  Menu,  MenuItem,  Slide, Toolbar, Tooltip,  Typography, useScrollTrigger} from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import imgUser from "../../../assets/img/imgUser.jpg";
import {navLinks} from "./opNavLinks"
import { useAuth } from '../../../context/AuthContext';

const drawerWidth = 240;
// const settings = ['Perfil', 'Cuenta', 'Panel', 'Cerrar Sesión'];
const CustomizedBtn = styled(Button)`
  color: #D9CAAD;
  border: 0.1rem solid #D9CAAD;
  text-transform: none;
`;

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const NavBar = (props) => {
  const {user} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  // eslint-disable-next-line
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  
  // eslint-disable-next-line
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Corazón Huasteco
      </Typography>
      <Divider />
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'left', '&:hover':{color: "primary.main"} }} component={Link} to={`/${item.path}`}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          {/* Primer tool */}
          {/* desktop*/}
          <Toolbar sx={{display: { xs: 'none', md: 'flex' }}}>
            <Typography
              variant="h5"
              component={Link}
              to="/inicio"
              fontWeight={700}
              sx={{ flexGrow: 1, textDecoration: "none", color: 'inherit', '&:hover': { color: 'background.default' } }}
            >
              CORAZÓN HUASTECO
            </Typography>
          </Toolbar>

          {/* Salida del drawer --- mobile */}
          <Box component="nav" >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          {/* Segundo tool */}
          <Toolbar>{/*disableGutters*/}
          {/* Icono menu --- mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <Tooltip title="Más opciones de navegación">
                  <MenuIcon />
                </Tooltip>
              </IconButton>
            </Box>

            {/* logo --- mobile */}
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/inicio"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': { color: 'background.default' },
              }}
            >
              Corazón Huasteco
            </Typography>

            {/* pages --- desktop */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none' ,md: 'flex' } }}>
              {
                navLinks.map(item => (
                  <Button
                    key={item.title}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block', '&:hover': { color: "background.default" }, textTransform: 'capitalize' }}
                    component={Link}
                    to={`/${item.path}`}
                  >
                    {item.title}
                  </Button>
                ))
              }
            </Box>

            {/* Icono user --- desktop / mobile*/}
            <Box sx={{ flexGrow: 0 }}>
              {
                user ? 
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="User" src={user.photoURL ? user.photoURL: imgUser} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {/* elemento 1 */}
                      <MenuItem 
                        onClick={handleCloseUserMenu} 
                        component={Link}
                        to="/user/consultor"
                        sx={{textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main'}}}>
                        <Typography textAlign="center">
                          Perfil
                        </Typography>
                      </MenuItem>
                    
                  </Menu>
                </>
                :
                <>
                <Box>
                  <CustomizedBtn 
                    component={Link} 
                    to="/acceso" 
                    endIcon={<LoginRoundedIcon/>}
                    sx={{display: { xs: 'none', md: 'flex' }, textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main', bgcolor: 'background.default'}}}
                  > 
                    Entrar
                  </CustomizedBtn>
                  <IconButton
                    component={Link}
                    to="/acceso"
                    sx={{display: { xs: 'flex', md: 'none' }, textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main', bgcolor: 'background.default'}}}
                  >
                    <LoginRoundedIcon/>
                  </IconButton>
                </Box>
                  
                </>
              }
              

              
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* separadores de nav y cotenido */}
      <Toolbar sx={{display: { xs: 'none', md: 'flex' }}} />
      <Toolbar />
    </>
  )
}
