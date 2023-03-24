import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AdminInicio } from './AdminInicio';
import { AdminTematicas } from './AdminTematicas';
import { AdminProductos } from './AdminProductos';
import { AdminUsuarios } from './AdminUsuarios';
import { AdminDonaciones } from './AdminDonaciones';
import { AdminPersonalizar } from './AdminPersonalizar';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "auto" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Inicio" {...a11yProps(0)} />
        <Tab label="Tematicas" {...a11yProps(1)} />
        <Tab label="Productos" {...a11yProps(2)} />
        <Tab label="Usuarios" {...a11yProps(3)} />
        <Tab label="Donaciones" {...a11yProps(4)} />
        <Tab label="Personalizar" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AdminInicio/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdminTematicas/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AdminProductos/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AdminUsuarios/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AdminDonaciones/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AdminPersonalizar/>
      </TabPanel>
    </Box>
  );
}