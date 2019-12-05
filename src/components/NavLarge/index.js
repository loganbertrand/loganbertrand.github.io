import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    color: 'white',
  },
  toolbar:{
    marginLeft: 'auto',
  }
}));

const NavLarge = () =>{
  const classes = useStyles()
  return(
    <div className={classes.toolbar}>
      <Button className={classes.button}>
      <Link to='/'>
        Home
      </Link>
      </Button>
      <Button className={classes.button}>
      <Link to='/skills'>
        Skills
      </Link>
      </Button>
      <Button className={classes.button}>
      <Link to='/projects'>
        Projects
      </Link>
      </Button>
      <Button className={classes.button}>
      <Link to='/contact'>
        Contact
      </Link>
      </Button>
    </div>
  )
}

export default NavLarge;
