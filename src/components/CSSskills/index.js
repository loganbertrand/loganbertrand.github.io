import React from 'react';
import Grid from '@material-ui/core/Grid';
import CSS from '../../assets/icons/css3.png'
import Materialize from '../../assets/icons/materialize.png'
import MaterialUI from '../../assets/icons/material-ui.png'
import Bootstrap from '../../assets/icons/bootstrap.png'
import ReactBootstrap from '../../assets/icons/react-bootstrap.png'

import './cssSkills.css'

function CssSkills() {
    return (
      <div>
        <Grid container className='css-container'>
           <Grid item xs={6} s={4} md={2}>
                <img src={CSS} alt='CSS icon' className='css-img'></img>
                <p>CSS3</p>
            </Grid>
            <Grid item xs={6} s={4} md={2}>
                <img src={Bootstrap} alt='Bootstrap icon' className='css-img'></img>
                <p>Bootstrap</p>
            </Grid>
            <Grid item xs={6} s={4} md={2}>
                <img src={ReactBootstrap} alt='React Bootstrap icon' className='css-img'></img>
                <p>React Bootstrap</p>
            </Grid>
            <Grid item xs={6} s={4} md={2}>
                <img src={Materialize} alt='Materialize icon' className='css-img'></img>
                <p>Materialize</p>
            </Grid>
            <Grid item xs={6} s={4} md={2}>
                <img src={MaterialUI} alt='Material UI icon' className='css-img'></img>
                <p>Material UI</p>
            </Grid>
        </Grid>
      </div>
    );
  }

  export default CssSkills;
