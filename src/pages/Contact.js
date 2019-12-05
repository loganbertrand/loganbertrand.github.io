import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(theme=>({
  
  question:{
    [theme.breakpoints.down('sm')]: {
      marginTop: 70,
      fontSize:'4rem'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 300,
      fontSize:'6rem'
    },
    
  },
  grid:{
    justifyContent: 'center',
  }
}));



const ContactPage = () =>{

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const classes = useStyles();

    return(
        <div>
          <Navbar
          background='#002941'
          />
        <Grid container spacing='1' className={classes.grid}>
          <Grid container item xs={12} md={5} className={classes.grid}>
            <Fade left>
            <Typography className={classes.question}> Questions? </Typography>
            </Fade>
          </Grid>
          <Grid container item xs={12} md={5} className={classes.grid}>
            <Fade right>
            <Contact/>
            </Fade>
          </Grid>
        </Grid>

        </div>
    )
}

export default ContactPage;
