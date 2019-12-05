import React from 'react';
import Grid from '@material-ui/core/Grid';

import ReactJs from '../../assets/icons/react.png'
import JS from '../../assets/icons/javascript.png'
import JQuery from '../../assets/icons/jquery.png'
import Node from '../../assets/icons/nodejs.png'
import HandlebarsJs from '../../assets/icons/handlebars.png'

import './js.css'

function JsSkills() {
  return (
    <div>
      <Grid container className='js-container'>
        <Grid item xs={6} s={4} md={2}>
          <img src={JS} alt='Javascript icon' className='js-img'></img>
          <p>JavaScript</p>
        </Grid>
        <Grid item xs={6} s={4} md={2}>
          <img src={ReactJs} alt='React icon' className='js-img'></img>
          <p>React</p>
        </Grid>
        <Grid item xs={6} s={4} md={2}>
          <img src={JQuery} alt='JQuery icon' className='js-img'></img>
          <p>JQuery</p>
        </Grid>
        <Grid item xs={6} s={4} md={2}>
          <img src={Node} alt='Node icon' className='js-img'></img>
          <p>Node</p>
        </Grid>
        <Grid item xs={6} s={4} md={2}>
          <img src={HandlebarsJs} alt='Handlebars icon' className='js-img'></img>
          <p>Handlebars</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default JsSkills;
