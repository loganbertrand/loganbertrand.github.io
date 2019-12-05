import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import profilePic from '../../assets/profile-photo.jpg'

const useStyles = makeStyles((theme) => ({
  profile: {
    maxWidth: 300,
    maxHeight: 400,
  }, 
  title:{
    textAlign: 'center',
    paddingBottom: '20px'
  },
  about:{
    paddingBottom: '15rem',
    paddingTop:'7rem'
  },
  imageGrid:{
    textAlign:'center'
  },
  text:{
    [theme.breakpoints.only('xs')]: {
      textAlign:'center',
      padding:'5px'
  }
},
  button:{
    [theme.breakpoints.only('xs')]: {
      textAlign:'center'
  }
  }
}));


const About = () => {

  const classes= useStyles()

    return (
      <div className={classes.about}>
      <Fade bottom >
        
        <Grid container>
          
            <Grid className={classes.imageGrid} item xs={12} sm={5}>
            <img src={profilePic} alt='Logan Bertrand' className={classes.profile}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.title}>
                <Typography variant='h3'>Who Am I?</Typography>
              </div>
              <div className={classes.text}>I am a Web Developer who studied at UCSD coding bootcamp. I enjoy creating interactive user experiences that anyone can understand, along with being highly creative in regards to problem solving and innovating a website. I am a quick learner excited to use the skills I have learned in the tech or video game industry. I have a strong commitment to mastering javascript and Front-End related programming. I work well in both collaborating with others or independently on projects. </div>
              <br></br>
              <div className={classes.text}>
                Before pursuing web development I received my Bachelor's Degree in Technological Entrepreneurship and Management. I leverage my previous background in business to create websites that fit with current trends. Click the buttons below to see more about my web development capabilities.
              </div>
              <br></br>
              <div className={classes.button}>
              <Button>
                <Link to='/skills'>Skills</Link>
              </Button>
              <Button>
                <Link to='/projects'>Projects</Link>
              </Button>
              </div>
              </Grid>
            
        </Grid>
        </Fade>
        </div>
    )
}


export default About;
