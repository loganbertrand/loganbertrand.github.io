import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import HtmlSkills from '../HTMLskills'
import CssSkills from '../CSSskills'
import JsSkills from '../JsSkills'
import BackEndSkills from '../BackEndSkills'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 80,
    paddingBottom: '5rem'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(3, 2),
    marginBottom: '5rem',
  },
  app: {
    marginTop: '8rem',
  },
  toolbar:{
    background: '#002941',
  }
}));

const SkillsTable = () =>{
  const classes = useStyles();

  return(
    
    <Container className={classes.root}>
     
     <Fade bottom>
    <AppBar position='static'className={classes.app}>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6'>
          HTML
        </Typography>
      </Toolbar>
    </AppBar>
    <Paper className={classes.paper}>
      <HtmlSkills/>
    </Paper>
    

    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6'>
          CSS
        </Typography>
      </Toolbar>
    </AppBar>
    <Paper className={classes.paper}>
      <CssSkills/>
    </Paper>

    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6'>
          JavaScript
        </Typography>
      </Toolbar>
    </AppBar>
    <Paper className={classes.paper}>
      <JsSkills/>
    </Paper>

    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6'>
          Back-End / Other
        </Typography>
      </Toolbar>
    </AppBar>
    <Paper className={classes.paper}>
      <BackEndSkills/>
    </Paper>
    </Fade>
    </Container>
    
  )
}

export default SkillsTable;
