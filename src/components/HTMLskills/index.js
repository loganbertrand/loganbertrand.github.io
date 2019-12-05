import React from 'react';
import Grid from '@material-ui/core/Grid';
import HTML5 from '../../assets/icons/html5.png'
import JSX from '../../assets/icons/react.png'

import './html.css'

function HtmlSkills() {
    return (
      <div>
        <Grid container className='html-container'>
            <Grid item xs={6} s={4} md={2}>
                <img src={HTML5} alt='HTML icon' className='html-img'></img>
                <p>HTML5</p>
            </Grid>
            <Grid item xs={6} s={4} md={2}>
            <img src={JSX} alt='JSX icon' className='html-img'></img>
                <p>JSX</p>
            </Grid>
        </Grid>
      </div>
    );
  }

  export default HtmlSkills;
