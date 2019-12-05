import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DevicesIcon from '@material-ui/icons/Devices';
import GroupIcon from '@material-ui/icons/Group';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
  grid:{
    textAlign: 'center',
    justifyContent: 'space-evenly',
    paddingTop:'8rem',
    paddingBottom:'5rem'
  },
  icon:{
    fontSize: '50px'
  }
});

const Description = () =>{

  const classes = useStyles();

    return(
        <Fade bottom>
            <Grid container className={classes.grid}>
                <Grid item xs={12} sm={2}>
                <DevicesIcon className={classes.icon}/>
                <Typography variant='h5'>Responsive</Typography>
                <p>Whether on desktop or  mobile, I make sure my websites look the best on any screen.</p>
                </Grid>
                <Grid item xs={12} sm={2}>
                <OfflineBoltIcon className={classes.icon}/>
                <Typography variant='h5'>Intuitive</Typography>
                <p>I make sure each website is easy to use, and quickly understood by all types of users.</p>
                </Grid>
                <Grid item xs={12} sm={2}>
                <GroupIcon className={classes.icon}/>
                <Typography variant='h5'>Cooperative</Typography>
                <p>Whether 1 on 1 with a client or working with a team, I work well in any environment. </p>
                </Grid>
            </Grid>

        </Fade>
    )
}

export default Description;
