import React from 'react';
import Grid from '@material-ui/core/Grid';

import MySQL from '../../assets/icons/mysql.jpg'
import Mongo from '../../assets/icons/mongodb.png'
import Firebase from '../../assets/icons/firebase.png'
import GitHub from '../../assets/icons/github.png'
import Heroku from '../../assets/icons/heroku.png'

import './back-end.css'

function BackEndSkills() {
  return (
    <div>
      <Grid container className='back-end-container'>
        <Grid item xs={6} s={4} md={2}>
          <img src={MySQL} alt='MySQL icon' className='back-end-img'></img>
          <p>MySQL</p>
        </Grid>
        <Grid item xs={6} s={4} md={2}>
          <img src={Mongo} alt='Mongo DB icon' className='back-end-img'></img>
          <p>Mongo DB</p>
        </Grid>
        <Grid item xs={6} s={4} md={2}>
          <img src={Firebase} alt='Firebase icon' className='back-end-img'></img>
          <p>Firebase</p>
        </Grid>
        <Grid item xs={6} s={4} md={2}>
          <img src={GitHub} alt='GitHub icon' className='back-end-img'></img>
          <p>GitHub</p>
        </Grid>
        <Grid item xs={6} s={4} md={2}>
          <img src={Heroku} alt='Heroku icon' className='back-end-img'></img>
          <p>Heroku</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default BackEndSkills;
