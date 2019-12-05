import React from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavDrawer from '../NavDrawer'
import NavLarge from '../NavLarge'
import './navbar.css'


function Navbar(props) {

  return (
      <div>
        <CssBaseline/>
        <AppBar position={props.position} style={{ background:props.background, boxShadow: props.boxShadow}}>
          <Toolbar className="appBar">
            <Link to='/'>
              <Typography variant="h6">Logan Bertrand</Typography>
            </Link>
            <div className='smallNav'><NavDrawer/></div>
            <div className='bigNav'><NavLarge/></div>
          </Toolbar>
        </AppBar>
        </div>
    
  );
}

export default Navbar;
