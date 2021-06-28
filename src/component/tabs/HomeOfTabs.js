
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {BasicInfoTab} from '../tabs/BasicInfoTab'
import { PersonalTab } from "../tabs/PersonalDeTab";
import {EditEmployee} from '../employee/EditEmployee'
import { Link} from 'react-router-dom'

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div>
      {value === index && (
          <Typography>{children}</Typography>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
  },
}));

export const FullWidthTabs=()=> {
  const classes = useStyles();
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'powderblue',color:'black' }}>
        <Tabs TabIndicatorProps={{style: {background:'black'}}}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          
        >
          <Tab label="Basic info"   />
          <Tab label="Personal details"  />
          <Tab label="Documents"  />
          <Tab label="Payslips"  />
          <Tab label="Leaves"  />
        </Tabs>
      </AppBar>

        <TabPanel value={value} index={0} >
      <BasicInfoTab></BasicInfoTab>
        </TabPanel>
        <TabPanel value={value} index={1} >
  <PersonalTab>
  </PersonalTab>
        </TabPanel>
        <TabPanel value={value} index={2} >
    <h1>"Documents" </h1>
        </TabPanel>
        <TabPanel value={value} index={3} >
    <h1>"Payslips" </h1>
        </TabPanel>
        <TabPanel value={value} index={4} >
    <h1>"Leaves"</h1>
        </TabPanel>
    </div>
  );
}
