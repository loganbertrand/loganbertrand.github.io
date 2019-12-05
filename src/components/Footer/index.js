import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
   footer: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    color: 'white',
    paddingBottom: '80px',
    paddingTop: '40px',
    }
  }));


const Footer = () =>{
    const classes= useStyles()
    return(
        
        <footer className={classes.footer}>

            <p>© 2019 Logan Bertrand</p>
            <div >
                <Link to='/'><u>Home</u> </Link>
                <Link to='/skills'><u>Skills</u> </Link>
                <Link to='/projects'><u>Projects</u> </Link>
                <Link to='/contact'><u>Contact</u></Link>
            </div>
        </footer>

    )
}

export default Footer;