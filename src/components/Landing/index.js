import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { animateScroll as scroll } from 'react-scroll'
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import './landing.css'
import Navbar from '../Navbar'



const useStyles = makeStyles(theme => ({
    wording:{
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
            },
        [theme.breakpoints.up('md')]: {
            fontSize:'7rem'
            },
    },
    icon:{
        fontSize:'50px',
        color: 'white'
    }
  }));


const Landing = () => {

    const classes = useStyles()

    const scrollToBottom =()=> {
      scroll.scrollMore(700);
    }

    return (
        <Grid>
            <section className="landing-section">
                <div className="jumbotron jumbotron-fluid">
                    <Navbar position='absolute' background='transparent' boxShadow='none'/>
                    <div className="container">
                            <Fade top>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Your Friendly Neighborhood
                                </Typography>
                                <Typography className={classes.wording} component="h2" gutterBottom>
                                    Web Developer
                                </Typography>
                                <Button style={{ backgroundColor: 'transparent' }} onClick={scrollToBottom}><ArrowDownwardIcon className={classes.icon}/></Button>
                            </Fade>
                            
                           
                    </div>
                </div>
            </section>
        </Grid>
    )
}

export default Landing;
