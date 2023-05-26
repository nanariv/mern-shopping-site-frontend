import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Home from './home2';
import About from './about2';
import Login from './login';
import Signup from './signup';
import Profile from './profile';
import Admin from './admin';
import Crud from './crud';
import { useNavigate } from "react-router-dom";


const userid = localStorage.getItem('userid')?true:false

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="full width tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          {
            userid && (
              <Tab label="Profile" {...a11yProps(2)} />
            )
          }
           {
            userid && (
              <Tab label="Tasks" {...a11yProps(3)} />
            )
          }
          {
            userid && (
            <Tab label= "Logout"
              onClick={()=>{
              localStorage.clear();
              window.location.href='/login'
          }}/>
            )
          }
          
          
  
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home>
        </Home>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About></About>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Profile />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Crud>
        </Crud>
      </TabPanel>
    </div>
  );
}

