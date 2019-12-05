import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  menu: {
    color: 'white',
    
  },
  drawer:{
    display: 'flex',
    marginLeft: 'auto'
  }
});

export default function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to='/'>
          <ListItem button >
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to='/skills'>
          <ListItem button >
            <ListItemIcon><CheckCircleIcon /></ListItemIcon>
            <ListItemText>Skills</ListItemText>
          </ListItem>
        </Link>
        <Link to='/projects'>
          <ListItem button >
            <ListItemIcon><BusinessCenterIcon /></ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </ListItem>
        </Link>
        <Link to='/contact'>
          <ListItem button >
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText>Contact</ListItemText>
          </ListItem>
        </Link>

      </List>
    </div>
  );



  return (
    <div className={classes.drawer}>
      <Button onClick={toggleDrawer('right', true)}><MenuIcon className={classes.menu} /></Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}
